//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age) {
  
       age = Number(age)
   
    if (isNaN(age)) {
        console.log ("Error! Enter Number!")
        return
    } else {
        
        let age_2 = 18
        let age_3 = 60
    
        if (age < age_2) {
            console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_2)
    
        } else if (age >= age_2 && age <= age_3) {
           console.log("Welcome !")
    
        } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
    
        } else {
            console.log("Technical work") 
        }
    } 
    }
    let age = prompt("How old are you?", "Enter here");
    checkAge(age)
    
