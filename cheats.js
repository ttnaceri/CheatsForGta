function copyCheat(btn){
    const code = btn.parentElement.querySelector(".cheat-code").innerText;
    navigator.clipboard.writeText(code);
}

function exit() {
    window.location.href = "index.html";
}
document.querySelectorAll(".cheat-code").forEach(code => {
    let size = 22;

    code.style.fontSize = size + "px";

    while (
        (code.scrollWidth > code.parentElement.clientWidth - 30) &&
        size > 8
    ) {
        size--;
        code.style.fontSize = size + "px";
    }
});