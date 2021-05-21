// Task1- Write a function named convertFahrToCelsius that takes a single parameter and converts it to celsius.

function convertFahrToCelsius(fahrValue) {
    let fahrType = fahrValueType(fahrValue);
    let validType = checkValidType(fahrType, fahrValue);
    
   if (validType) {
       let fahrenheit = Number(fahrValue);
       return Number(((fahrenheit - 32) * 5/9).toFixed(4));                                                                                                             //the Number here is to convert the value to a number as .toFixed() changes it to a string
       
   }
   return errorMessage (fahrValue, fahrType);

}

// this function determines and returns the type of value the user inputs

function fahrValueType(fahrValue) {
    let generatedType = Object.prototype.toString.call(fahrValue);
    let exactType =generatedType.substring(8, generatedType.length - 1).toLowerCase();                                                                                      // the need for this arises to extract just the name of the data type instead of "object Objeect which is how it is returned at first"
    return exactType;
}

// this function determines if the value is a number/string (that can be converted to number) and returns true/false (depending)

function checkValidType(fahrType, fahrValue) {
    if (
        fahrType === "number" ||
        (fahrType === "string" && fahrValue.trim().length > 0 && !isNaN(Number(fahrValue)))                                                                                 //the .trim() takes care of empty strings with white spaces that ordinarily wold return 0 as number thus affecting the code.
       ) 
        {return true;
        }
        return false;
       }

// this function gives the error message in case the input value does not meet any condition

function errorMessage(fahrValue, fahrType) {
    let fahrString = JSON.stringify(fahrValue);
    if (fahrValue !== null){
        return  `${fahrString} is not a valid number but a/an ${fahrType}.`
    }
           
}


// Input value here to run the program.

console.log(convertFahrToCelsius(2))
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("we"))
console.log(convertFahrToCelsius("34"))
console.log(convertFahrToCelsius(true))
console.log(convertFahrToCelsius(" "))
console.log(convertFahrToCelsius({temp: 0}))
console.log(convertFahrToCelsius([1, 2,3])) 


// Task 2- Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

function checkYuGiOh(inputValue) {
    let inputValueType = getValueType(inputValue)
    let isValidType = verifyType (inputValueType, inputValue)
    if (isValidType) {
        let inputNumber = Number(inputValue);
        let YuGiOh = [];
        for (let i = 1; i <=inputNumber; i++){
            let stringHolder = "";
            if (i % 2 === 0) stringHolder += "yu";
            if (i % 3 === 0) {
                if (stringHolder.length === 0) {
                    stringHolder += "gi";
                } else {
                stringHolder += "-gi";
                }
            }
            if (i % 5 === 0) {
                if (stringHolder.length === 0) {
                        stringHolder += "oh";
                    } else {
                    stringHolder += "-oh";
                    }
                }
                if (stringHolder.length === 0){
                    YuGiOh.push(i);
                    } else {
                    YuGiOh.push(stringHolder);
                    }
                }
                return YuGiOh;
    }

    return errorMessage1 (inputValue, null);

}

//input value here to run the program.

console.log(checkYuGiOh(4));
console.log(checkYuGiOh("30"));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh(" "))
console.log(checkYuGiOh(true))
console.log(checkYuGiOh(10))

//this function determines the type of input the user keys in
    
function getValueType(inputValue) {
    let basicType = Object.prototype.toString.call(inputValue);
    let nameOfType =basicType.substring(8, basicType.length - 1).toLowerCase();                                                                                                                                 // the Object.prototype.tpString.call() returns eg: (object Array or object String) as the case may be, hence the need to perform further operations on the result.                                                                               // the need for this arises to extract just the name of the data type instead of "object Objeect which is how it is returned at first"
    return nameOfType;
}

//this function verifies if the etype of input is either a number || a string that can be converted to a number, it retyrns true/false.

function verifyType(inputValueType, inputValue) {
    if (
        inputValueType === "number" ||
        (inputValueType === "string" && inputValue.trim().length > 0 && !isNaN(Number(inputValue)))
    ) 
        {return true;
        } return false;
        
    }

  function errorMessage1(inputValue) {
        let inputValueString = JSON.stringify(inputValue);
        if (inputValue !== null){
            return  `invalid parameter: ${inputValueString}.`
        }
    }

    
