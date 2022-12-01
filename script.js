let num1 = 0
let num2 = 0
let numAccumulator = "" 
let actionSetter = "mul"
let secondActionFlag = 0
let result = 0


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


equalsButton.addEventListener("click", pressEquals);

function pressEquals(){
    numberDisplay.textContent = numberDisplay.textContent + equalsButton.textContent
    console.log(actionSetter)
    result = operate (actionSetter, num1, parseInt(numAccumulator))

    numberDisplay.textContent = numberDisplay.textContent + result
    secondActionFlag = 0
    numAccumulator = ""
}

actionButton.forEach(item => 
    item.addEventListener("click", () => {
        
        numberDisplay.textContent = numberDisplay.textContent + item.textContent
        num1 = parseInt(numAccumulator);        
        // switch based on action button pressed 
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


        numAccumulator = ""
        secondActionFlag = 1
    })
)


numpad.forEach(item => 
    item.addEventListener('click', event => {
        numAccumulator = numAccumulator + item.textContent
        // console.log(numAccumulator)
        numberDisplay.textContent = numberDisplay.textContent + item.textContent
        console.log(`result is:${result}, num1:${num1} numAccumulator:${numAccumulator}`)
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