class formBuilder {
    constructor() {
        this.formFields = [];
    }

    addTextField(name, label, placeholder = '') {
        this.formFields.push({
            type: 'text',
            name,
            label,
            placeholder
        });
        return this;
    }

    addNumberField(name, label, placeholder = '') {
        this.formFields.push({
            type: 'number',
            name,
            label,
            placeholder
        });
        return this;
    }

    addCheckboxField(name, label) {
        this.formFields.push({
            type: 'checkbox',
            name,
            label
        });
        return this;
    }

    addRadioField(name, label, options) {
        this.formFields.push({
            type: 'radio',
            name,
            label,
            options
        });
        return this;
    }

    addSelectField(name, label, options) {
        this.formFields.push({
            type: 'select',
            name,
            label,
            options
        });
        return this;
    }

    build() {
        return this.formFields
    }
}

export default formBuilder;