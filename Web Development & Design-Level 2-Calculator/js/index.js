let buttons;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let isSecondNumber = false;
let isResultShown = false;
function buttonsCalc() {
    for (let i = 0; i < 19; i++) {
        let buttons = document.getElementsByClassName(`item-${i}`);


        for (let j = 0; j < buttons.length; j++) {

            if ((i >= 0 && i <= 9) || i == 14) {
                buttons[j].addEventListener('click', function () {
                    let display = document.getElementsByClassName('display')[0];
                    if (isResultShown) {
                        display.innerText = '';
                        isResultShown = false;
                    }
                    let value = buttons[j].innerText;

                    if (value == ".") {
                        let currentText = display.innerText;
                        let parts = currentText.split(/[+\-×÷%]/);
                        let currentNumber = parts[parts.length - 1];

                        if (currentNumber.includes(".")) {
                            display.innerText = "Error";
                            isResultShown = true;
                            return;
                        }
                    }
                    display.innerText = display.innerText.trimEnd();
                    display.innerText += buttons[j].innerText;
                    if (!isSecondNumber) {
                        firstNumber = parseFloat(display.innerText);
                    } else {
                        let currentText = display.innerText;
                        let parts = currentText.split(/[\+\-×÷%]/);
                        secondNumber = parseFloat(parts[parts.length - 1]);
                    }

                });
            }
            else if (i == 12 || i == 13 || i == 16 || i == 17 || i == 18) {
                buttons[j].addEventListener('click', function () {
                    if (operator !== "" && isSecondNumber) {
                        let display = document.getElementsByClassName('display')[0];
                        let currentText = display.innerText;
                        let parts = currentText.split(/[\+\-×÷%]/);
                        if (parts.length > 1 && parts[parts.length - 1] !== "") {
                            secondNumber = parseFloat(parts[parts.length - 1]);

                            let tempResult = 0;
                            if (operator == "+") tempResult = firstNumber + secondNumber;
                            else if (operator == "-") tempResult = firstNumber - secondNumber;
                            else if (operator == "×") tempResult = firstNumber * secondNumber;
                            else if (operator == "÷") tempResult = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
                            else if (operator == "%") tempResult = firstNumber % secondNumber;

                            firstNumber = tempResult;
                            display.innerText = firstNumber + buttons[j].innerText;
                        }
                    } else {
                        document.getElementsByClassName('display')[0].innerText += buttons[j].innerText;
                    }

                    operator = buttons[j].innerText;
                    isSecondNumber = true;
                });
            }
            else if (i == 15) {
                buttons[j].addEventListener('click', function () {
                    let result;
                    switch (operator) {
                        case '+':
                            result = firstNumber + secondNumber;
                            break;
                        case '-':
                            result = firstNumber - secondNumber;
                            break;
                        case '×':
                            result = firstNumber * secondNumber;
                            break;
                        case '÷':
                            result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
                            break;
                        case '%':
                            result = firstNumber % secondNumber;
                            break;
                    }
                    document.getElementsByClassName('display')[0].innerText = result;
                    firstNumber = result;
                    secondNumber = 0;
                    operator = '';
                    isSecondNumber = false;
                    isResultShown = true;
                });
            }
            else if (i == 10) {
                buttons[j].addEventListener('click', function () {
                    firstNumber = 0;
                    secondNumber = 0;
                    operator = '';
                    isSecondNumber = false;
                    isResultShown = false;
                    document.getElementsByClassName('display')[0].innerText = '';
                });
            }
            else if (i == 11) {
                buttons[j].addEventListener('click', function () {
                    let display = document.getElementsByClassName('display')[0];
                    let currentText = display.innerText;
                    if (currentText.length > 0) {
                        display.innerText = currentText.slice(0, -1);
                        if (!isSecondNumber) {
                            firstNumber = 0;
                        } else {
                            secondNumber = 0;
                        }
                    }
                });

            }

        }


    }
}

buttonsCalc();

