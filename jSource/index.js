 class Test {
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    print()
    {
        console.log(`my name is ${this.name} and my id is ${this.id}`)
    }
 }
     const obj = new Test('adamsy', 6819)
     Test.prototype.init = function(name,id)
     {
           this.name = name
           this.id = id 
     }
     obj.init('pascal',1234)
     obj.print()