function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
    let result = parseInt(num1, 10) + parseInt(num2, 10)
    return result
}