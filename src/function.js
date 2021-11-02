let sayHello=()=>{
    console.log("sasasasas")
}

sayHello()

let sayHello2=function name(params) {
    
}

let sayHello4=(function name(params) {
    
})()

let product1={name:"alma",quantity:5,unitPrice:6}

let products=[
    {name:"alma",quantity:5,unitPrice:6},
    {name:"Armud",quantity:5,unitPrice:6},
    {name:"Qarpiz",quantity:5,unitPrice:6}
]
function add(...numbers) {
    let total=0;
   for (let i = 0; i < numbers.length; i++) {
    total+=numbers[i];
   }
    console.log(total);
}

//add(4,5,6)



function findPrime(...numbers) {
    let situation=true;
    for (let i = 0; i < numbers.length; i++) {
        situation=true;
        for (let j =2 ; j < numbers[i]; j++){
            if (numbers[i]%j==0) {
                situation=false;
                
            }
        }
        console.log(situation);
        
    }
}
//findPrime(1,4,6,7)

function divisorsOfNumber(number) {
    let divisors=[];
    for (let i = 1; i <number; i++) {
        if (number%i===0) {
            divisors.push(i);
        }
            
    }
   return divisors;
}

function friendNumber(number1,number2) {
    let resultNumber1=divisorsOfNumber(number1);
    let resultNumber2=divisorsOfNumber(number2);
    let totalNumber1=0;;
    let totalNumber2=0;

    for (let i = 0; i < resultNumber1.length; i++) {
      totalNumber1+=resultNumber1[i];
        
    }

    for (let i = 0; i < resultNumber2.length; i++) {
        totalNumber2+=resultNumber2[i];
          
    }

    if (number1===totalNumber2||number2===totalNumber1) {
        console.log("Dost rəqəmlərdir");
        return;
    }
    
    console.log("Dost rəqəmlər deyil");

}

//friendNumber(220,284)

function primeNumbersInParams(number) {
    let primeNumbers=[];
    for (let i = 2; i < number; i++) {
        for (let j = 2; j < i; j++) {
            if (i%j===0) {
                primeNumbers.push(i);
                break;
            }
        }
       
        
    }
    console.log(primeNumbers);
}

//primeNumbersInParams(1000)

function perfectNumbersInParams(number) {
    let perfectNumbers=[];
    let divisorNumbers=[];
   let totalNumber=0;
  
   for (let i = 1; i <= number; i++) {
         totalNumber=0;
         divisorNumbers=[];
        divisorNumbers=divisorsOfNumber(i);
        for (let j = 0; j < divisorNumbers.length; j++) {
            totalNumber+=divisorNumbers[j];
            
        }
        if (totalNumber===i) {
            perfectNumbers.push(i);
        }
           
   }
   return perfectNumbers;
}

console.log(perfectNumbersInParams(100));