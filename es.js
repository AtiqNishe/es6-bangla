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
