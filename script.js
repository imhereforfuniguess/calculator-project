let numAccumulator = "" 
let actionSetter = ""
let secondActionFlag = 0
let pressEqualsFlag = 0
let result = 0
let actionSetterPrevious = ""
let dotCatcher
let dotCatcherPrevious


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
const backspaceButton = document.querySelectorAll('.backspace')
const numpad = document.querySelectorAll('.numpad')


equalsButton.addEventListener("click", ()=>{
    // Only write = and result if = is pressed
    numberDisplay.textContent = numberDisplay.textContent + equalsButton.textContent
    pressEquals()
    numberDisplay.textContent = result
    pressEqualsFlag = 1
});


function pressEquals(){
    console.log(`Before pressEquals end result is:${result}, numAccumulator:${numAccumulator}`)
    console.log(actionSetter)
    //console.log(`Before pressEquals result is:${result}, numAccumulator:${numAccumulator}`)
    result = operate (actionSetter, result, parseFloat(numAccumulator))
    result = Math.floor(result * 10) / 10
    numAccumulator = ''
    console.log(`After pressEquals end result is:${result}, numAccumulator:${numAccumulator}`)

}

actionButton.forEach(item => 
    item.addEventListener("click", () => {
        dotCatcher = 0

        // switch based on action button pressed 
        actionSetterPrevious = actionSetter
        // console.log (`Before switch actionSetterPrevious:${actionSetterPrevious} actionSetter:${actionSetter}`)
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
        // console.log (`After switch actionSetterPrevious:${actionSetterPrevious} actionSetter:${actionSetter}`)
        console.log(`After actionButton end result is:${result}, numAccumulator:${numAccumulator}`)

        // If after 1 action equals is pressed 
        if (pressEqualsFlag == 1){

        }
        // Second time leave result as is 
        else if(secondActionFlag == 1){
            temp = actionSetter
            actionSetter = actionSetterPrevious
            pressEquals()
            actionSetter = temp
        } else {
            // First time just put accumulator into result
            result = parseFloat(numAccumulator); 
        }

        numberDisplay.textContent = item.textContent
        numAccumulator = ""
        secondActionFlag = 1
        //console.log(`After actionButton end result is:${result}, numAccumulator:${numAccumulator} actionSetter:${actionSetter}`)
        console.log (`After active actionSetterPrevious:${actionSetterPrevious} actionSetter:${actionSetter}`)
    })
)


numpad.forEach(item => 
    item.addEventListener('click', reactToNumpad))

function reactToNumpad(){
    // If . is used more than once do nothing
    if (dotCatcher == 1 && this.textContent == '.'){
    }
    
    // Else if . is used update dotCatcher
    else {
        this.textContent == '.' ? dotCatcher = 1 : 0
        numAccumulator = numAccumulator + this.textContent
        // console.log(numAccumulator)
        numberDisplay.textContent = numberDisplay.textContent + this.textContent
        console.log(`After numpad: result is:${result}, numAccumulator:${numAccumulator}`)
    }
}


clearButton.addEventListener('click', event => {
    numberDisplay.textContent = ""
    numAccumulator = ""
    secondActionFlag = 0
})


numpad.forEach(item => 
    window.addEventListener("keydown", (e) =>{
        if (item.textContent == e.key){
            console.log(e.key)
        }
    })
)