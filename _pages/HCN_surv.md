---
layout: archive
title: "HCN survival"
permalink: /HCN_surv/
author_profile: true
---

# TEST CALCULATION v 9


<form id="calc-form">
    <label>Impactor Diameter (km):</label>
    <input type="number" id="diameter" placeholder="Enter diameter">
    <label>Impact Velocity (km/s):</label>
    <input type="number" id="velocity" placeholder="Enter velocity">
    <label>Impact Angle (degrees):</label>
    <input type="number" id="angle" placeholder="Enter angle">
    <label>Chemistry Model:</label>
    <select id="chemistry">
        <option value="equil">Equilibrium</option>
        <option value="kinetic">Kinetic</option>
    </select>
    <button type="button" id="calc-button">Calculate Survival</button>
</form>

<p>Result: <span id="result">...</span></p>

<script src="https://catrionamcdonald.github.io/_pages/surv_calc.js"></script>
