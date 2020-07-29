const numberBtns = document.querySelectorAll('.numbers button')
const operatorBtns = document.querySelectorAll('.operators button')
const equalBtn = document.querySelector('button.equal')
const clearBtn = document.querySelector('button.clear')

const input = document.querySelector('.results input')

numberBtns.forEach(number => {
    number.addEventListener('click', () => addNumber(number))
})

operatorBtns.forEach(operator => {
    operator.addEventListener('click', () => addOperator(operator))
})

equalBtn.addEventListener('click', showAnswer)
clearBtn.addEventListener('click', clearAnswer)

function addNumber(number) {
    let numberElement = Number(number.innerHTML)
    input.value += numberElement
}

function addOperator(operator) {
    let operatorElement = operator.innerHTML
    input.value += operatorElement
}

function showAnswer() {
    if (input.value === '') {
        alert('Digite um valor!')
    } else {
        let result = input.value
        input.value = eval(result)
    }
}

function clearAnswer() {
    input.value = ''
}
