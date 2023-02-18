output = document.getElementById("hasil").innerHTML;

function input(angka){
    output = document.getElementById("hasil").innerHTML;
    output = output + angka;
    document.getElementById("hasil").innerHTML = output;
}

function backspace(click){
    click = output = document.getElementById("hasil").length -1;
    output = document.getElementById("hasil").innerHTML;
}

function operator(tambah, kurang, bagi, kali){
    let bilangan = output;
    
}