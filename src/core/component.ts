import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import EventBus from './event-bus'
import { isDeepEqual } from '../utils/mydash';

export type Children = Record<string, Component>;
export type List = Record<string, Children[]>;

export type DOMEvents = Record<string, (event?: Event) => void>;
export interface Props {
    events?: DOMEvents;
    children?: Children,
    attributes?: Record<string, string | number | boolean>
    classNames?: Array<string | Record<string, boolean>>,
    settings?: {
        withInternalID: boolean;
    };
    [key: string]: unknown,
}

export default class Component {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_CWU: 'flow:component-will-unmount',
        FLOW_RENDER: 'flow:render'
    };

    protected _props: Props;
    protected _children: Children;
    protected _lists: List;
    private readonly _id: string;
    protected _element: HTMLElement | HTMLTemplateElement | null = null;
    private readonly _meta;
    private _eventBus: EventBus;
    private _setUpdate: boolean;

    constructor(tagName: keyof HTMLElementTagNameMap | null = 'div', propsAndChildren: Props = {}) {
        const { children, props, lists } = this._getChildrenAndProps(propsAndChildren);

        this._eventBus = new EventBus();
        this._id = makeUUID();
        this._setUpdate = false;
        this._children = this._makePropsProxy(children, this) as Children;
        this._props = this._makePropsProxy({ ...props, _id: this._id }, this);
        this._lists = this._makePropsProxy(lists, this) as List;
        this._meta = {
            tagName,
            props
        };
        this._registerEvents();
        this._eventBus.emit(Component.EVENTS.INIT);
    }

    _registerEvents() {
        this._eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
        this._eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this._eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this._eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this._createResources();
        this._eventBus.emit(Component.EVENTS.FLOW_CDM);
    }

    private _createResources() {
        const { tagName } = this._meta;

        // TODO: сейчас если tagName === null, то при повторном изменении пропсов контент не отрисовывается
        if (tagName === null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            this._element = this._createDocumentElement('template').content;
        } else {
            this._element = this._createDocumentElement(tagName);
        }
    }

    private _createDocumentElement(tagName: string): HTMLElement | HTMLTemplateElement {
        if (tagName === 'template') {
            const element = document.createElement(tagName);

            if (this._props.settings?.withInternalID) {
                element.setAttribute('data-id', this._id);
            }

            return element;
        } else {
            const element = document.createElement(tagName);

            if (this._props.settings?.withInternalID) {
                element.setAttribute('data-id', this._id);
            }

            return element;
        }
    }

    private _componentDidMount() {
        this.componentDidMount();

        Object.values(this._children).forEach(child => {
            child.dispatchComponentDidMount();
        });
    }

    protected componentDidMount() {
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }

    public dispatchComponentDidMount() {
        this._eventBus.emit(Component.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: Props, newProps: Props) {
        console.log(newProps);
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }

    protected componentDidUpdate(oldProps: Props, newProps: Props) {
        return !isDeepEqual(oldProps, newProps);
    }

    setProps = (nextProps: Props) => {
        if (!Object.keys(nextProps).length) {
            return;
        }

        this._setUpdate = false;

        const prevValue = { ...this._props };

        const { children, props, lists } = this._getChildrenAndProps(nextProps);

        if (Object.values(children).length) {
            Object.assign(this._children, children);
        }

        if (Object.values(lists).length) {
            Object.assign(this._lists, lists);
        }

        if (Object.values(props).length) {
            Object.assign(this._props, props);
        }

        if (this._setUpdate) {
            this._eventBus.emit(Component.EVENTS.FLOW_CDU, prevValue, this._props);
            this._setUpdate = true;
        }
    };

    get element() {
        return this._element;
    }

    private _render() {
        const block = this.render();
        this.removeEvents();

        if (this._element) {
            this._element.innerHTML = '';
            this._element.appendChild(block as unknown as Node);
        }

        this.addEvents();
        this._addAttribute();
        this._addClasses();
    }

    protected render(): string | DocumentFragment {
        return '';
    }

    public addEvents() {
        const { events = {} } = this._props;

        Object.keys(events).forEach(eventName => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    public removeEvents() {
        const { events = {} } = this._props;

        Object.keys(events).forEach((eventName) => {
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }

    private _addAttribute() {
        const { attributes } = this._props;

        if (attributes) {
            Object.entries(attributes).forEach(([ key, value ])=>{
                this._element?.setAttribute(key, String(value))
            })
        }
    }

    private _addClasses() {
        const { classNames } = this._props;

        classNames?.forEach((className) => {
            if (typeof className === 'string') {
                this._element?.classList.add(className);
            } else {
                for (const key in className) {
                    if (className[key]) {
                        this._element?.classList.add(key);
                    }
                }
            }
        });
    }

    public getContent() {
        return this._element;
    }

    private _makePropsProxy(propsOrChildren: Props | Children | List, component: Component) {
        return new Proxy(propsOrChildren, {
            get(target, prop): Props | Children | List {
                const value = target[prop as keyof Props | keyof Children | keyof List]
                return typeof value === 'function' ? value.bind(this).bind() : value;
            },
            set(target, prop, value) {
                if (target[prop as string] !== value) {
                    target[prop as string] = value;
                    component._setUpdate = true;
                }

                return true;
            }
        });
    }

    private _getChildrenAndProps(propsAndChildren: Props) {
        const children: Children = {};
        const props: Props = {};
        const lists: List = {}

        Object.entries(propsAndChildren).forEach(([ key, value ]) => {
            if (value instanceof Component) {
                children[key] = value;
            } else if (Array.isArray(propsAndChildren[key]) && key !== 'classNames') {
                lists[key] = value as Children[];
            } else {
                props[key] = value;
            }
        });

        return { children, props, lists };
    }


    compile(template: string, props?: Props) {
        if(!props) {
            props = this._props
        }

        const propsAndStubs = { ...props };

        Object.entries(this._children).forEach(([ key, child ]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });

        Object.entries(this._lists).forEach(([ key, _ ]) => {
            propsAndStubs[key] = `<div data-id="_list_${key}"></div>`
        });

        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this._children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

            if (stub) {
                stub.replaceWith(child.getContent() as string | Node);
            }
        });

        Object.entries(this._lists).forEach(([ key, child ]) => {
            const stub = fragment.content.querySelector(`[data-id="_list_${key}"]`);

            if (!stub) return;

            const listContent = this._createDocumentElement('template') as HTMLTemplateElement;

            child.forEach((item) => {
                if (item instanceof Component) {
                    listContent.content.append(item.getContent() as Node);
                } else {
                    listContent.content.append(`${item}`);
                }
            });

            stub.replaceWith(listContent.content);
        });

        return fragment.content;
    }

    public show() {
        this.getContent()!.style.display = 'block';
    }

    public hide() {
        this.getContent()!.style.display = 'none';
    }
}
