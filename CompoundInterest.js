let PrincipleField = document.querySelector('#principal');
let RateField = document.querySelector('#rate');
let TimeField = document.querySelector('#time');
let CompoundField = document.querySelector('#compound');

function gg() {
    PrincipleField.setAttribute("disabled", true)
    RateField.setAttribute("disabled", true)
    TimeField.setAttribute("disabled", true)
    CompoundField.setAttribute("disabled", true)
    window.setTimeout(() => location.reload(), 3000)
}
function FindMissing() {
    let p = Number(PrincipleField.value);
    let r = Number(RateField.value);
    let t = Number(TimeField.value);
    let c = Number(CompoundField.value);
    if ((p != "") && (r != "") && (t != "")) {
        c = p + r + t;
        CompoundField.value = c;
        gg()
    }
    else if ((p != "") && (r != "") && (c != "")) {
        t = c - (p + r);
        TimeField.value = t;
        gg()
    }
    else if ((p != "") && (t != "") && (c != "")) {
        r = c - (p + t);
        RateField.value = r;
        gg()
    }
    else if ((r != "") && (t != "") && (c != "")) {
        p = c - (r + t)
        PrincipleField.value = p
        gg()
    }
}
//     console.log(p);
//     x = x.toFixed(3);
//     document.getElementById('ans').innerHTML =
//         "The Final Amount after Compounded Interest is " + x + " Rupees";
//     PrincipleField.value = "";
//     RateField.value = "";
//     TimeField.value = "";
// }
//Checking Git Commit via VS
//3rd Commit 