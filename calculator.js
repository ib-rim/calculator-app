
//theme functionality

setCurrentTheme()

function setCurrentTheme() {
    if (localStorage.getItem('theme') === '1' || localStorage.getItem('theme') === null){
        setTheme1();
    } 
    else if (localStorage.getItem('theme') === '2'){
        setTheme2();
    } 
    if (localStorage.getItem('theme') === '3'){
        setTheme3();
    } 
}

function setTheme1() {
    document.getElementById("slider").style.margin = "52px 0 0 240px";
    document.getElementById("html").className = "theme1";
    localStorage.setItem('theme', '1');
}

function setTheme2() {
    document.getElementById("slider").style.margin = "52px 0 0 265px";
    document.getElementById("html").className = "theme2";
    localStorage.setItem('theme', '2');
}

function setTheme3() {
    document.getElementById("slider").style.margin = "52px 0 0 290px";
    document.getElementById("html").className = "theme3";
    localStorage.setItem('theme', '3');
}

function toggleTheme() {
    if(localStorage.getItem('theme')==='1'){
        setTheme2();
    }
    else if(localStorage.getItem('theme')==='2'){
        setTheme3();
    }
    else if(localStorage.getItem('theme')==='3'){
        setTheme1();
    }
}

//calculator functonality

var wipe = false;
var expression = "";
var screenExpression = "";

function concat(val) {
    if(wipe==true){
        reset();
    }
    if(val=="x"){
        expression += "*";
    }
    else {
        expression += val;
    }
    screenExpression += val;
    setScreenExpression();
}

function del() {
    expression = expression.slice(0, -1);
    screenExpression = screenExpression.slice(0, -1);
    setScreenExpression();
}

function reset() {
    expression = "";
    screenExpression = "";
    setScreenExpression();
    wipe = false;
}

function equals() {
    screenExpression = math.eval(expression).toString();
    expression = math.eval(expression).toString();
    setScreenExpression();
    wipe = true;
}

function setScreenExpression() {
    document.getElementById("screen").innerHTML = screenExpression;
}