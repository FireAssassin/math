function check() {
    let x = parseFloat(document.querySelector("input.math").value);
    if (c * d != x) {
        c += Math.floor(Math.random()*2);
        d += Math.floor(Math.random()*7);
        document.querySelector("span").innerText = `${c} x ${d}`
    }
    else window.location.assign("https://www.matzoo.pl/")
}