import Component, { Props } from '../../core/component';
import { template } from './template';
import { ButtonComponent } from '../button';
import { LinkComponent } from '../link';
import InputFieldComponent from '../input-field';
import removeFromDOM from '../../core/utilities/removeFromDOM';
import { UserService } from '../../services/user-service';

export type PhotoPickerComponentProps = {
    title?: string
    button?: ButtonComponent;
    link?: LinkComponent;
    label?: string;
} & Props;

const button = new ButtonComponent('div', {
    text: 'Подтвердить выбор',
    classNames: [ 'photo-picker-component_button' ],
    onClick: async (event: Event | undefined) => {
        event?.preventDefault();
		const formData = new FormData();

        const imageInput = document.getElementById('photo-picker_input') as HTMLInputElement;

		if (imageInput.files && imageInput.files?.length) {
			const file = imageInput.files[0];
			formData.append('avatar', file);

			try {
				await UserService.changeAvatar(formData);
				removeFromDOM('modal');
			} catch (error) {
				console.log(error)
			}
		}

        // location.reload(); // TODO: доработать/переработать всю логику выгрузки фотографии
    }
})

const inputField = new InputFieldComponent('input', {
    attributes: {
        type: 'file',
        id: 'photo-picker_input',
        accept: '.png,.jpg,.jpeg'
    },
    classNames: [ 'visually-hidden' ],
    onChange: (event: Event | undefined) => {
        const reader = new FileReader();
        const target= event?.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        reader.readAsDataURL(file);

        reader.onload = function () {
            const imagePlaceholder = document.querySelector('.photo-picker-component_placeholder') as HTMLImageElement;
            const label = document.querySelector('.photo-picker-component_label') as HTMLLabelElement;

            if (typeof reader.result === 'string') {
                imagePlaceholder.src = reader.result;

                label.classList.add('visually-hidden');
                imagePlaceholder.classList.remove('visually-hidden');
            }
        }
    }
});

class PhotoPickerComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: PhotoPickerComponentProps) {
        tagName = 'div';

        super(tagName, {
            ...props,
            title: 'Загрузить фото',
            button,
            inputField,
            label: 'Выбрать фото',
            classNames: [ 'photo-picker-component' ]
        })
    }

    render() {
        return this.compile(template)
    }
}

export default PhotoPickerComponent;
