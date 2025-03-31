document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!"); // Debugging

    document.getElementById("calc-button").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get values from the input fields
        let d = parseFloat(document.getElementById("diameter").value);
        let v = parseFloat(document.getElementById("velocity").value);
        let a = parseFloat(document.getElementById("angle").value);
        let chem = document.getElementById("chemistry").value; // 'equil' or 'kinetic'

        console.log("Inputs:", { d, v, a, chem }); // Debugging

        // Validate inputs
        if (isNaN(d) || isNaN(v) || isNaN(a) || (chem !== "equil" && chem !== "kinetic")) {
            document.getElementById("result").innerText = "Please enter valid numbers and select chemistry.";
            return;
        }

        // Calculate survival
        let survivalRate = calculateSurvival(d, v, a, chem);
        document.getElementById("result").innerText = `Survival Rate: ${survivalRate.toFixed(2)}%`;
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

    let surv;
    if (equiv_vimp < vmin) {
        surv = 100;
    } else if (equiv_vimp > vmax) {
        surv = 0;
    } else {
        let denom = 1 + Math.exp(q * (Math.sqrt(equiv_vimp) - Math.sqrt(v0)));
        surv = A / denom;
    }

    surv = Math.max(0, Math.min(100, surv));

    let vel_param = -Math.pow(C * v, E);
    let surv_scaled = surv * Math.pow(B * d, vel_param);

    return Math.max(0, Math.min(100, surv_scaled));
}
