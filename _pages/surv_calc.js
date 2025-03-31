document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calc-button").addEventListener("click", function () {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let num3 = parseFloat(document.getElementById("num3").value);
        let num4 = parseFloat(document.getElementById("num4").value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
            document.getElementById("result").innerText = "Please enter valid numbers";
            return;
        }

        let result = num1 + num2 + num3 + num4;
        document.getElementById("result").innerText = result;
    });
});
