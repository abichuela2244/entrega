var cuentaTotal = 100
function depositar() {
    toDeposit = parseInt(document.getElementById("inputdepositar").value);
    cuentaTotal = cuentaTotal + toDeposit
    alert('se depositó correctamente, te quedan $' + cuentaTotal)
}
function retirarAhora() {
    var retirar = parseInt(document.getElementById("input1").value);

    if (retirar <= cuentaTotal) {
        cuentaTotal = cuentaTotal - retirar
        alert("retiro correcto, te quedan $" + cuentaTotal);
        console.log(cuentaTotal);
    } else {
        alert("no tienes tanto dinero");
        console.log(cuenta)
    }
}


function encender() {
    var x = document.getElementById("fondo2").style.display = "block";
    document.getElementById("fondo2").style.display ="none";
    Btn.style.display ="block"
}
function insertartarjerta() {
    var x = document.getElementById("fondo3");
    if (x.style.display === "fondo2") {
        x.style.display = "block";
    } else {
        x.style.display = "fondo2";
    }
}
function retirar() {
    var retirar = document.getElementById("fondo4");
    if (retirar.style.display === "fondo3") {
        retirar.style.display = "block";
    } else {
        retirar.style.display = "fondo3";
    }
}
function retirarYa() {
    var x = document.getElementById("fondo5");
    if (x.style.display === "fondo4") {
        x.style.display = "block";
    } else {
        x.style.display = "fondo4";
    }
}

// function encender(){
//     document.getElementById(myDIV).style.display = "none";
// }
//    function insertartarjerta() {
//     var a = document.getElementById("myDIV");
//     if (a.style.display === "fondo1") {
//       a.style.display = "fondo2";
//     } else {
//       a.style.display = "fondo1";
//     }
//   }
//   function retirar() {
//     var x = document.getElementById("fondo3");
//     if (x.style.display === "fondo2") {
//       x.style.display = "fondo3";
//     } else {
//       x.style.display = "fondo2";
//     }
//   }

//   function insertartarjeta() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "fondo2") {
//       x.style.display = "fondo3";
//     } else {
//       x.style.display = "fondo2";
//     }
//   }
