---
layout: archive
title: "HCN survival"
permalink: /HCN_surv/
author_profile: true
---

HCN Survival in impacts 
======

TEST CALCULATION

# Calculator Page

Enter four numbers below to get the result:

<form id="calc-form">
    <input type="number" id="num1" placeholder="Number 1">
    <input type="number" id="num2" placeholder="Number 2">
    <input type="number" id="num3" placeholder="Number 3">
    <input type="number" id="num4" placeholder="Number 4">
    <button type="button" onclick="calculate()">Calculate</button>
</form>

<p>Result: <span id="result">...</span></p>

<script>
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    // Example calculation (replace with your Python logic converted to JS)
    let result = num1 + num2 - num3 * num4;

    document.getElementById("result").innerText = result;
}
</script>
