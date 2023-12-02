import { Props } from './component';

type EventCallback = (...args: Props[]) => void;

class EventBus {
    private readonly listeners: Record<string, EventCallback[]>

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: EventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: EventCallback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: Array<Props | Event>) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener) {
            listener(...args as Array<Props>);
        });
    }
}

export default EventBus;
