let PrincipleField = document.querySelector('#principal');
let RateField = document.querySelector('#rate');
let TimeField = document.querySelector('#time');
let NumberField = document.querySelector('#numb');

function Calculation() {
    let p = Number(PrincipleField.value);
    let r = Number(RateField.value);
    let t = Number(TimeField.value);
    let n = Number(NumberField.value);
    let x = p * ((1 + (r / n)) ** (n * t))
    x = x.toFixed(3);
    document.getElementById('ans').innerHTML =
        "The Final Amount after C.I is " + x + " Rupees";
    PrincipleField.value = "";
    RateField.value = "";
    TimeField.value = "";
    NumberField.value = "";
}
//Checking Git Commit via VS
//3rd Commit