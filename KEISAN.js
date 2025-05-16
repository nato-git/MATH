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
    const result1 = document.getElementByld("result1");
    const result2 = document.getElementByld("result2");
    const D = b**2 - 4 * a * c;
    const X = x1([a],[b],[c])
    const Y = x2([a],[b],[c])
    if (X>0) var y1 = "-";
    else var y1 = "+";
    if (Y>0) var y2 = "-";
    else var y2 = "+";
    if (D>0){
        result1.textContent = "x="+X+","+Y;
        result2.textContent = "(x"+y1+X+")(x"+y2+Y+")";
    }
    if (D=0){
        result1.textContent = "x="+X
        result2.textContent = "(x"+y1+X+")^2";
    }
    if (D<0){
        result1.textContent = "実数解はありません";
    }
}
