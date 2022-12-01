let numAccumulator = "" 
let actionSetter = ""
let secondActionFlag = 0
let result = 0
let actionSetterPrevious = ""


//operate (actionSetter,num1,num2);

function add(x,y){
    console.log(x+y);
    return x + y;
}

function sub(x,y){
    console.log(x-y);
    return x - y;
}

function mul(x,y){
    console.log(x*y);
    return x * y
}

function div(x,y){
    console.log(x/y);
    return x / y
}

function operate(caller, x, y){
    return globalThis[caller](x,y)
}


const numberDisplay = document.querySelector('.display')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')
const actionButton = document.querySelectorAll('.action')
const numpad = document.querySelectorAll('.numpad')


equalsButton.addEventListener("click", ()=>{

    // Only write = and result if = is pressed
    numberDisplay.textContent = numberDisplay.textContent + equalsButton.textContent
    pressEquals()
    numberDisplay.textContent = numberDisplay.textContent + result

    secondActionFlag = 0

});

function pressEquals(){
    console.log(actionSetter)
    //console.log(`Before pressEquals result is:${result}, numAccumulator:${numAccumulator}`)
    result = operate (actionSetter, result, parseInt(numAccumulator))
    numAccumulator = ''
    //console.log(`After pressEquals end result is:${result}, numAccumulator:${numAccumulator}`)
}

actionButton.forEach(item => 
    item.addEventListener("click", () => {
       
        // switch based on action button pressed 
        actionSetterPrevious = actionSetter
        console.log (`Before switch actionSetterPrevious:${actionSetterPrevious} actionSetter:${actionSetter}`)
        switch (item.textContent){
            case '+':
                actionSetter = "add"
                break
            case '-':
                actionSetter = "sub"
                break
            case '*':
                actionSetter = "mul"
                break
                
            case '/':
                actionSetter = "div"
                break
        }
        console.log (`After switch actionSetterPrevious:${actionSetterPrevious} actionSetter:${actionSetter}`)


        // Second time leave result as is 
        if (secondActionFlag == 1){
            temp = actionSetter
            actionSetter = actionSetterPrevious
            pressEquals()
            actionSetter = temp
        } else {
            // First time just put accumulator into result
            result = parseInt(numAccumulator); 
        }

        numberDisplay.textContent = numberDisplay.textContent + item.textContent
        numAccumulator = ""
        secondActionFlag = 1
        //console.log(`After actionButton end result is:${result}, numAccumulator:${numAccumulator} actionSetter:${actionSetter}`)
        console.log (`After active actionSetterPrevious:${actionSetterPrevious} actionSetter:${actionSetter}`)
    })
)


numpad.forEach(item => 
    item.addEventListener('click', event => {
        numAccumulator = numAccumulator + item.textContent
        // console.log(numAccumulator)
        numberDisplay.textContent = numberDisplay.textContent + item.textContent
        //console.log(`After numpad: result is:${result}, numAccumulator:${numAccumulator}`)
    })
)

clearButton.addEventListener('click', event => {
    numberDisplay.textContent = ""
    numAccumulator = ""
    secondActionFlag = 0
})


// Function button pressed -> 
// 1) Accumulator put in memory as int and set to 0
// 2) 