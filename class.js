//类
class Person{
    constructor(name,age){ //构造函数，默认返回this对象，如果强制返回其他对象也是被允许的
        this.name = name;
        this.age  = age;
    }
    show(){
        console.log(this.name,this.age);
    }
}
var s = new Person('test',30);
s.show();
//对象
function f( x, y ) {
    return { x, y };
}
var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};

var lastName = "last name";

var person = {
    "first name": "Nicholas",
    [lastName]: "Zakas"
};

console.log(person["first name"]);      // "Nicholas"
console.log(person[lastName]);          // "Zakas"
//继承
class Parent {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName() {
        return ${this.firstName} ${this.lastName}
    }
}

class Child extends Parent {
    constructor(firstName, lastName, age) {
        super(firstName, lastName)
        this.age = age
    }

    fullName() {
        return ${super.fullName()} (${this.age})
    }
}
