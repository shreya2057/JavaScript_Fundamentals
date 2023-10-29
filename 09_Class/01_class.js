class Test{
    value1 = "Test"
    method(){
        console.log(this.value1)
    }
}

var test1 = new Test()
test1.method()