document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    document.getElementById("calc-button").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get values from input fields
        let d = parseFloat(document.getElementById("diameter").value);
        let v = parseFloat(document.getElementById("velocity").value);
        let a = parseFloat(document.getElementById("angle").value);
        let init_perc = parseFloat(document.getElementById("initialHCN").value);

        console.log("Inputs:", { d, v, a, init_perc });

        // Validate inputs
        if (isNaN(d) || isNaN(v) || isNaN(a) || isNaN(init_perc)) {
            document.getElementById("result").innerText = "Please enter valid numbers.";
            document.getElementById("massResult").innerText = "";
            return;
        }

        // Calculate survival
        let survivalRate = calculateSurvival(d, v, a);
        document.getElementById("result").innerText = `Survival Rate: ${survivalRate.toFixed(2)}%`;

        // Calculate mass of HCN
        let massHCN = calculateMassHCN(init_perc, survivalRate, d);
        document.getElementById("massResult").innerText = `Mass of HCN: ${massHCN.toExponential(2)} kg`;
    });
});

function calculateSurvival(d, v, a) {
    let theta_rad = a * (Math.PI / 180);
    let meanT = 25.67 * Math.pow(v, 2.07);
    let scaled_meanT = meanT * Math.pow(Math.sin(theta_rad), 1.6);
    let equiv_vimp = Math.pow(scaled_meanT / 25.67, 1 / 2.07);

    // Equilibrium chemistry parameters
    let A = 99.64, q = 7.99, v0 = 7.63, vmin = 4.5, vmax = 15;
    let B = 0.97, C = 0.085, E = 5.61;

    // Compute survival from impact velocity
    let surv = equiv_vimp < vmin ? 100 : equiv_vimp > vmax ? 0 : A / (1 + Math.exp(q * (Math.sqrt(equiv_vimp) - Math.sqrt(v0))));
    surv = Math.max(0, Math.min(100, surv));

    // Scale survival by impactor diameter
    let vel_param = -Math.pow(C * v, E);
    let surv_scaled = surv * Math.pow(B * d, vel_param);

    return Math.max(0, Math.min(100, surv_scaled));
}

function calculateMassHCN(init_perc, surv_perc, d) {
    const base_HCNconc = 5e19; // cm-3
    let scaling = init_perc / 0.15;
    let init_HCNconc = base_HCNconc * scaling;

    let fin_HCNconc = init_HCNconc * (surv_perc / 100);

    let volume = ((4 / 3) * Math.PI * Math.pow(d / 2, 3)) * 1e6;

    let N_HCN = fin_HCNconc * volume;
    let moles_HCN = N_HCN / 6.022e23;
    let mass_HCN = (moles_HCN * 27.0253) / 1000; // kg

    return Math.max(0, mass_HCN); // Ensure non-negative mass
}
