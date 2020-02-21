class MyClass{
    // Private Members
    private _Data: number = 0;
    
    set Data(v: number){
        this._Data = v;
    }

    get Data() : number{
        return this._Data * 100;
    }    

    constructor(private x: number, private y: number){}
    add() : number{
        return this.x + this.y;
    }
}

class MyDerivedClass extends MyClass{
    constructor(private a : number, private b : number){
        super(a, b);
    }
    static add() : number{return 0;}

    mult() : number{
        return this.a * this.b;
    }
}

// let o2 = new MyClass(300, 400);
// console.log(o2.add());
// o2.Data = 100;
// console.log(o2.Data);

let o1 = new MyDerivedClass(10, 20);
console.log(o1.add());
console.log(o1.mult());