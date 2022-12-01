let num1 = 5;
let num2 = 8;
let numAccumulator = "" 
let actionSetter


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


equalsButton.addEventListener("click", () => {
    num2 = parseInt(numAccumulator);
    numAccumulator = ""
    numberDisplay.textContent = numberDisplay.textContent + equalsButton.textContent
    let result = operate(actionSetter,num1,num2);

    numberDisplay.textContent = numberDisplay.textContent + result
    }
)


actionButton.forEach(item => 
    item.addEventListener("click", () => {
        num1 = parseInt(numAccumulator);
        numAccumulator = ""
        console.log(num1)
        numberDisplay.textContent = numberDisplay.textContent + item.textContent
        
        // set action to 
        switch (item.textContent){
            case '+':
                actionSetter = "sum"
                break;
            case '-':
                actionSetter = "sub"
                break;
            case '*':
                actionSetter = "mul"
                break;
                
            case '/':
                actionSetter = "div"
                break;
        }
    })
)


numpad.forEach(item => 
    item.addEventListener('click', event => {
        numAccumulator = numAccumulator + item.textContent
        console.log(numAccumulator)
        numberDisplay.textContent = numberDisplay.textContent + item.textContent
    })
)

clearButton.addEventListener('click', event => {
    numberDisplay.textContent = ""
    numAccumulator = ""
})


// Function button pressed -> 
// 1) Accumulator put in memory as int and set to 0
// 2) 