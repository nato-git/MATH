function keisan() {
    function x1(a, b, c) {
        return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    }
    function x2(a, b, c) {
        return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    }

    const a = parseFloat(document.getElementById("A").value);
    const b = parseFloat(document.getElementById("B").value);
    const c = parseFloat(document.getElementById("C").value);
    const result1 = document.getElementById("result1");
    const result2 = document.getElementById("result2");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result1.innerText = "すべての値を入力してください。";
        result2.innerText = "";
        return;
    }

    if (a === 0) {
        result1.innerText = "a ≠ 0 のときのみ解を求められます。";
        result2.innerText = "";
        return;
    }

    const D = b ** 2 - 4 * a * c;

    if (D > 0) {
        const X = x1(a, b, c);
        const Y = x2(a, b, c);
        const x1str = X.toFixed(2);
        const x2str = Y.toFixed(2);
        const y1 = X >= 0 ? "-" : "+";
        const y2 = Y >= 0 ? "-" : "+";

        result1.innerText = `x = ${x1str}, ${x2str}`;
        result2.innerText = `(x ${y1} ${Math.abs(x1str)})(x ${y2} ${Math.abs(x2str)})`;

    } else if (D === 0) {
        const X = x1(a, b, c);
        const x1str = X.toFixed(2);
        const y1 = X >= 0 ? "-" : "+";

        result1.innerText = `x = ${x1str}`;
        result2.innerText = `(x ${y1} ${Math.abs(x1str)})²`;

    } else {
        result1.innerText = "実数解はありません。";
        result2.innerText = "";
    }
}
