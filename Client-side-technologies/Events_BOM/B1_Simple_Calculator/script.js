var answer = document.getElementById("Answer");

function EnterNumber(val) {
    answer.value += val;
}

function EnterOperator(val) {
    answer.value += val;
}

function EnterClear() {
    answer.value = "";
}

function EnterEqual() {
    var text = answer.value;
    
    var parts = text.split(/(\+|-|\*|\/)/); 

    var firstPass = [];
    
    for (var i = 0; i < parts.length; i++) {
        var current = parts[i];

        if (current === "*" || current === "/") {
            var prevNum = parseFloat(firstPass.pop());
            var nextNum = parseFloat(parts[i + 1]);
            
            var result;
            if (current === "*") result = prevNum * nextNum;
            else result = prevNum / nextNum;

            firstPass.push(result);

            i++; 
        } else {
            firstPass.push(current);
        }
    }

    var finalResult = parseFloat(firstPass[0]); 

    for (var i = 1; i < firstPass.length; i += 2) {
        var operator = firstPass[i];
        var number = parseFloat(firstPass[i+1]);

        if (operator === "+") {
            finalResult += number;
        } else if (operator === "-") {
            finalResult -= number;
        }
    }

    answer.value = finalResult;
}