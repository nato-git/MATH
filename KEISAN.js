function keisan(){
    function x1([a],[b],[c]){
        retern (-1*b+Math.sqrt(b**2-4*a*c))/(2*a);
    }
    function x2([a],[b],[c]){
        retern (-1*b-Math.sqrt(b**2-4*a*c))/(2*a);
    }
    const a = parseFloat(document.getElementById("A").value);
    const b = parseFloat(document.getElementById("B").value);
    const c = parseFloat(document.getElementById("C").value);
    const D = b**2 - 4 * a * c;
    const X = x1([a],[b],[c])
    const Y = x2([a],[b],[c])
    if (X>0) var y1 = "-";
    else var y1 = "+";
    if (Y>0) var y2 = "-";
    else var y2 = "+";
    if (D>0){
        document.getElementById("x1","x2").innerText = "x="+X+","+Y;
        document.getElementById("x1","x2","y1","y2").innerText = "(x"+y1+X+")(x"+y2+Y+")";
    }
    if (D=0){
        document.getElementById("x1").innerText = "x="+X
        document.getElementById("x1","y1").innerText = "(x"+y1+X+")^2";
    }
    if (D<0){
        document.getElementById().innerText = "実数解はありません";
    }
}
