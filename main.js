"use strict"

// Mini-Project : Calculator

let input = ''
// 2. You must create 3 functions in the js file
// 2.1 number(num)
function number(num) {
    input += num
    console.log(input)
}

// 2.2 operator(operator)
function operator(operator) {
    if(!input.length && operator != "-")
        return
    let lastChar = input.charAt(input.length - 1)
    if(['+', '-', '*', '/'].includes(lastChar)) {
        if(input == '-') {
            if(operator == '-' || operator == '+')
                input = operator == '+' ? '' : operator
        } else 
            input = input.substring(0, input.length-1) + operator
    } else 
        input += operator
    console.log(input)
}

// 2.3 equal()
function equal() {
    console.log(input, '=', eval(input))
}

// 4. Bonus : create the RESET and CLEAR buttons.
function reset() {
    input = ''
    console.log(input)
}

function clearLastChar() {
    if(!input.length) return
    if(input.length == 1) input = ''
    else input = input.substring(0, input.length-1)
    console.log(input)
}