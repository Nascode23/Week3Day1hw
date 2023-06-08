

/* Write a function called addList that accepts any quantity of numbers as arguments,
 adds them together and returns the resulting sum.
 Assume all parameters will be numbers. <=========
 If called with no arguments, return 0 (zero).*/

function addlist(){
    //console.log(arguements);
var sum=0;
for (let i=0; i< arguments.length;i++) {sum += arguments[i];
}
return sum;
}
console.log("sum of all numbers in the list= ")
console.log(addlist(10,20,30));
console.log(addlist(3,4,5));
console.log(addlist(2,-1,-1));
console.log(addlist());
    
/*Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments
 and returns the largest of them. If they are the same, return that number. 
 Use the if-else construct or a ternary expression - the Math.max method is not allowed*/

 function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  console.log("max of two numbers=");
  console.log(maxOfTwoNumbers(3, 9));
  
  /*3.Define a function, as a function expression,
   maxOfThree that takes three numbers as arguments and returns the largest of them.
  Again, the Math.max method is not allowed.*/

  function maxOfThree(a,b,c){
    if (a>b && a>c){
        return a;
    }
    else(b>a && b>c);{
        return b;
    }
        (c>a && c>b);{
    return c;
    }
  }
  console.log("Max Of Three numbers =");
  console.log(maxOfThree(178,22,5));
  
  /*4. Define a function, as a function declaration,
   isCharAVowel that takes a character as an argument and
    returns true if it is a vowel, false otherwise.*/

var alpha=('a');

    function isCharAVowel(alpha){
        if (alpha== "a" || "e"  || "i" || "o" || "u");{
        return true;
        }
        return false;
        }
        if (isCharAVowel(alpha)) {
            console.log("The character  "+ alpha + " entred is a vowel");}
         else { 
        console.log("The character  " + alpha+  "entered is not a vowel");}
         
   /*Define a function, as a function expression, 
   sumArray that takes an array of numbers and returns the sum of those numbers.
    For example, sumArray([2, 4, 5]);would return 11 */

    /*Define a function, as a function declaration, multiplyArray 
    that takes an array of numbers and returns the product those numbers.
     For example, multiplyArray([2, 4, 5]);would return 40.*/

     
     function multiplyArray() {
        //console.log(arguments);
      var product=1;
    for (let i=0; i< arguments.length;i++) {product *= arguments[i];
    }
        return product;
    };
   console.log("Product of all numbers = "+(multiplyArray(4,5,6,7)));
   

   /* Wednesday 7 ---Day 3  lab- array,objects and loops*/
   /*let  closet ={
    shirts:"blue",
    shorts:"black",
    dresses:"purple",
   };
   closet.shoes= 20;
   closet=closet;
   console.log(closet);*/
   

  /* let cat={
    name: "Brownie",
    age:5,
   }
   console.log(cat);
cat.favoriteThings="rolling";
cat.speakFrench= true;
cat.solveARubikCube=false;
console.log(cat);*/

/*Object practice: car dealership inventory
blue 1986 Chevy Caprice, 2015 red Camry, 2017 f150, yellow 2016 Hummer*/

/* ...................................Courtney example to access objects in an array.........................
const cars = [
    {
        // 0
        brand: 'Chevy',
        model: 'caprise',
        year: 1986,
        color: 'blue'
    },
    {
        // 1
        brand: 'Toyota',
        model: 'camry',
        year: 2015,
        color: 'red'
    },
    {
        // 2
        brand: 'Ford',
        model: 'F150',
        year: 2017
    },
]
cars[0].color = 'purple'
console.log(cars[0]);
console.log(cars[2].year);
// array name, location, .odj-item*/

/* .................practice your own.................................
const cars[
car1Chevy,1986,blue]
car2[Caprice,2015,red]
car3[Camry,2017,silver]
cars4[Hummer,2016,yellow]

addcar function(car1,car)
    

    


function displayinventory(make,modelYear,bodycolor)
;
console.log(displayinventory);*/

class Vehicle {
	constructor(vin,make,model) {
		this.vin = vin;
		this.make = make;
        this.model= model;
	// return is not needed
	// because the new object is returned by default
	}
}

const bike = new Vehicle('A1234','Camry', 'Toyota');
console.log(Vehicle);
