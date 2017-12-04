/** Class representing a Game Item */
class GameItem {

    private _name: string;
    private _id: number;

    /**
    * Create a Game Item.
    * @param {string} name - The name value.
    * @param {number} id - The id value.
    */
    constructor(name: string, id: number) {
        this._name = name;
        this._id = id;
    }

    /**
    * Get the id value.
    * @return {number} The id value.
    */
    get id(): number {
        return this._id;
    }

    /**
    * Get the name value.
    * @return {string} The name value.
    */
    get name(): string {
        return this._name;
    }

    /**
    * Set the id value.
    */
    set id(id: number) {
        this._id = id;
    }
}