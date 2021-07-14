const firstName = 'Atiqur ';
const lastName = 'Rahman';
const fullName = `My Name Is ${firstName} ${lastName} What is your name?`;
//console.log(fullName);

// Es-6 Templete
const kobita = `
Amar sonar bangla
Ami tomai valo basi
cirodin tomar akash
tomar batas
`
//console.log(kobita)

// new-----------------------

//Es-6 Arrow Function 

function sum(num1, num2=10) {
    return num1 + num2;
}
const result =sum(20, 40);
//console.log(result);


const doubleIt = function(num1, num2=50){
    return num1 + num2;
}

const result2 = doubleIt(20);
console.log(result2);

//Arrow function

const doubleIt2 = num=>num*2;
const result3 = doubleIt2(10);
console.log(result3);

const add = (x,y)=>x*y;
const total = add(10,100);
console.log(total);


// with out paramiter function

const give6 =()=>10;
const result6 = give6();
console.log(result6);


const bigFun =(x,y,z)=>{
    const add = (x+y+z);
    const minas = (x-y-z);
    const total4 = add * minas;
    return total4;
    
    
}


const big =bigFun(5,8,7);
console.log(big);


// Es6 spreed oparetor ]

const num1 = [1,2,3,4,5,6,7,8,9];
const num2 = [10,11,12,13,14,15,16,17,18,19];
const num3 = [20,21,22,23,24,25,26,27,28,29];
const num4 = [30,31,32,33,34,35,36,37,38,39];
const num5 = [40,41,42,43,44,45,46,47,48,49,50];
const num6 = [...num1, ...num2, ...num3, ...num4, ...num5];
console.log(num6);

// max number 

const maxNumber = Math.max(...num4, ...num5);
console.log(maxNumber);


// Es6 Class and Constructors


class Electician{
    constructor(eId, eName, eHome, eYear, eAge ){
        this.id = eId;
        this.name = eName;
        this.home = eHome;
        this.year = eYear;
        this.age = eAge;

        this.factory = "Tarasima Apparels Limited";
        this.address = "Manikgonj, Saturia, Nowadingi, Dhankura";
        
        
    }

}

const elctician1 = new Electician(1234, "Badsha mia", "Kumilla", 15, '50');
const elctician2 = new Electician(2345, "Sujjon mia", "SherajGonj", 7, '35');
const elctician3 = new Electician(3241, "Rony Khan", "Pabna", 10, '36');
const elctician4 = new Electician(5465, "Shofiq", "Gagipur", 12, '40');
const elctician5 = new Electician(4356, "Azzad khan", "Noakhali", 7, '32');
console.log(elctician1);
console.log(elctician2);
console.log(elctician3);
console.log(elctician4);
console.log(elctician5);

// Es-6 inheritance, extends class, super, class methods


class Parent{
    constructor(){
        this.fatherName = 'John Smith';
        this.matherName = 'Jasmin khan';
    }
}



class Child extends Parent{
    
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + ' ' + this.fatherName + ' ' + this.motherName;
    }
}

const baby1 = new Child('Mastakin');
console.log(baby1.getFullName());

//Es-6 object destruct


const electician = {name: 'Badsha', job:'Tarasima', info:{address:'comila',  village:'Mohatan'}, age:50, podobi:'Sr Electician', phone:01749670623}

const {name,job, age, salary, phone} = electician;
console.log(name,job, age, salary, phone);

const {village}=electician.info;
console.log(village);


// Array destruct


const electician1 = ['Badsha', 'Roni', 'Rasal', 'Sujon', 'Shofiq', 'Ebarot','Khalak'];
const [first, second, ...restEle] = electician1;
console.log(first,second);
console.log(restEle);
