class PrivateFeatures{
    #name;
    constructor(name){
        this.#name = name;
    }

    get getName(){
        return this.#name;
    }
}

let private = new PrivateFeatures("Shreya");
console.log(private.getName);