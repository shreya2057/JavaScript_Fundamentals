let myLaptop = {
    ram: 16,
    cpu: "i7",
    brand: "Hp",
    getBrand: function (){
        console.log(this.brand);
    },
    compare: function(other){
        if(this.cpu > other.cpu){
            this.getBrand()
        }else{
            other.getBrand()
        }
    }
}

let other = {
    ram: 8,
    cpu: "i9",
    brand: "Dell",
    getBrand: function (){
        console.log(this.brand);
    }
}

myLaptop.compare(other)