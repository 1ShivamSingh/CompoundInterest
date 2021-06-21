let PrincipleField = document.querySelector('#principal');
let RateField = document.querySelector('#rate');
let TimeField = document.querySelector('#time');

function Calculation() {
    let p = Number(PrincipleField.value);
    let r = Number(RateField.value);
    let t = Number(TimeField.value);
    let x = p * ((1 + (r) ** ( t))
    x = x.toFixed(3);
    document.getElementById('ans').innerHTML =
        "The Final Amount after Compounded Interest is " + x + " Rupees";
    PrincipleField.value = "";
    RateField.value = "";
    TimeField.value = "";
}
//Checking Git Commit via VS
//3rd Commit