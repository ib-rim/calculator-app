
var theme = 1;

var wipe = false;
var expression = "";
var screenExpression = "";

function toggleTheme() {
    if(theme==1){
    document.getElementById("slider").style.margin = "52px 0 0 265px";
    document.getElementById("html").className = "theme2";
    theme = 2;
    }
    else if(theme==2){
    document.getElementById("slider").style.margin = "52px 0 0 290px";
    document.getElementById("html").className = "theme3";
    theme = 3;
    }
    else {
    document.getElementById("slider").style.margin = "52px 0 0 240px";
    document.getElementById("html").className = "theme1";
    theme = 1;
    }
}

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