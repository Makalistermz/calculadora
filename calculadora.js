let num1 = document.getElementById("n1");

let num2 = document.getElementById("n2");

let num3 = document.getElementById("n3");

let num4 = document.getElementById("n4");

let num5 = document.getElementById("n5");

let num6 = document.getElementById("n6");

let num7 = document.getElementById("n7");

let num8 = document.getElementById("n8");

let num9 = document.getElementById("n9");

let n00 = document.getElementById("n00");

let n0 = document.getElementById("n0");

let ponto = document.getElementById("ponto");

let btmais = document.getElementById("mais");

let btmenos = document.getElementById("menos");

let btvezes = document.getElementById("vezes");

let btdivisao = document.getElementById("divisao");

let btporcento = document.getElementById("btporcento");

let btigaul = document.getElementById("igual");

let btC = document.getElementById("btC");

let btapagar = document.getElementById("btapagar")

num1.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "1";
});

num2.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "2";
});

num3.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "3";
});

num4.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "4";
});

num5.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "5";
});

num6.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "6";
});

num7.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "7";
});

num8.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "8";
});

num9.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "9";
});

n00.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "00";
});

n0.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += '0';
});

ponto.addEventListener("click", function() {
    let display = document.getElementById("resultados")

    display.value += ".";
});

btmais.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "+";
});

btmenos.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "-";
});

btvezes.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "*";
});

btdivisao.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "/";
});

btporcento.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value += "%";
});

btC.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value = "";
});

btapagar.addEventListener("click", function() {
    let display = document.getElementById("resultados");

    display.value = display.value.slice(0, -1);  
});

btigaul.addEventListener("click", function() {
    let display = document.getElementById("resultados");
    let expr = display.value;

    // Substitui "10%50" por "10/100*50"
    expr = expr.replace(/(\d+)%(\d+)/g, "($1/100*$2)");

    display.value = eval(expr);
});