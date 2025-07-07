/**
 * @template T
 */
export class DialogParameters {
    /** @type string */
    title;

    /** @type string */
    heading;

    /** @type Section<T>[] */
    sections;

    /** @type Option[] */
    options;
}

/**
 * @template T
 */
export class Response {
    /**
     * @type Choice<T>
     * The item that was chosen.
     */
    choice;

    /**
     * @type Object 
     * An object containing the values of the options passed in dialog parameters.
     */
    options;

    /**
     * 
     * @param {Choice<T>} choice 
     * @param {Object} options 
     * @returns 
     */
    constructor(choice, options) {
        return {
            choice,
            options
        };
    }
}

/**
 * @template T
 */
export class Section {
    /** @type string */
    heading;

    /** @type Choice<T>[] */
    choices;

    /**
     * @param {string} heading
     * @param {Choice<T>[]} choices
     */
    constructor(heading, choices = []) {
        return { heading, choices };
    }
}

/**
 * @template T
 */
export class Choice {
    /** @type string */
    id;

    /** @type string */
    name;

    /** @type string[] */
    info;

    /** @type string */
    img;

    /** @type T */
    item;

    /**
     * @param {string} id 
     * @param {string} name
     * @param {string} img 
     * @param {T} item 
     * @param {string[]} info
     */
    constructor(id, name, img, item, info = []) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.item = item;
        this.info = info;
    }
}

export class Option {
    /** @type string **/
    id;

    /** @type string */
    label;

    /** @type boolean */
    value;

    /**
     * @param {string} id 
     * @param {string} label
     * @param {boolean} value 
     */
    constructor(id, label, value) {
        this.id = id;
        this.label = label;
        this.value = value;
    }
}
