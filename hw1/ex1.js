const ex1 = () =>{
    function sumNumbers(arr) {
        let numbers = arr.map(num => parseFloat(num.trim()));
        let sum = numbers.reduce((acc, num) => acc + num, 0);
        if (numbers.length !== 3 || numbers.some(isNaN)) {
            showError(`Моля, въведете точно три числа!`, "alert-danger");
            return;
        }
        showResult(`Сумата на числата е: ${sum}`, "alert-success");
    }
    function showResult(message,alertType) {
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = message;
        resultDiv.className = `alert ${alertType} mt-3 text-center`;
        resultDiv.style.display = "block";
    }
    function showError(message, alertType) {
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = message;
        resultDiv.className = `alert ${alertType} mt-3 text-center`;
        resultDiv.style.display = "block";
    }
    document.getElementById("calculateButton").addEventListener("click", () => {
        let input = document.getElementById("numberInput").value.trim();
        let numberArray = input.split(",");
        sumNumbers(numberArray);
    });
}
ex1()

