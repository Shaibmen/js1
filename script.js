function calculate() {
    var num1 = parseFloat(prompt("Введите первое число:"));
    var operator = prompt("Введите оператор (+, -, *, /, ^, sqrt, %, PI, sin, cos, tan, log, save):");

    var result;
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            var num2 = parseFloat(prompt("Введите второе число:"));
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        alert("Ошибка: деление на ноль!");
                        return;
                    }
                    break;
                case '^':
                    result = Math.pow(num1, num2);
                    break;
                case '%':
                    result = num1 * (num2 / 100);
                    break;
            }
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
        case 'PI':
            result = Math.PI;
            break;
        case 'sin':
            result = Math.sin(num1);
            break;
        case 'cos':
            result = Math.cos(num1);
            break;
        case 'tan':
            result = Math.tan(num1);
            break;
        case 'log':
            result = Math.log(num1);
            break;
        case 'save':
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("lastResult", result);
                alert("Результат сохранен в локальном хранилище");
            }
            return;
        default:
            alert("Ошибка: неверный оператор!");
            return;
    }
    alert(result);
}