---
layout: archive
title: "A Comet's Tale"
permalink: /HCN_surv/
author_profile: true
---

# HCN Survival & Mass Delivered Calculator

Enter impactor details below:

<form id="calc-form">
    <label>Impactor Diameter (km):</label>
    <input type="number" id="diameter" placeholder="Enter diameter">
    <label>Impact Velocity (km/s):</label>
    <input type="number" id="velocity" placeholder="Enter velocity">
    <label>Impact Angle (degrees):</label>
    <input type="number" id="angle" placeholder="Enter angle">
    <label>Initial HCN Concentration (% relative to water):</label>
    <input type="number" id="initialHCN" placeholder="Enter percentage">
    <button type="button" id="calc-button">Calculate</button>
</form>

<p>Survival Result: <span id="result">...</span></p>
<p>Mass of HCN: <span id="massResult">...</span></p>

<script src="https://catrionamcdonald.github.io/_pages/surv_calc.js"></script>
