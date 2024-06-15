
const r = window.document.querySelector(".resp");
const botaoinc = window.document.querySelector(".inc");
const botaodec = window.document.querySelector(".dec");
const botaoreset= window.document.querySelector(".reset");
let n = parseInt(r.textContent);


if (n < 0) {
    r.classList.add("kkk");
} else {
    r.classList.add("kkk-green");
}

botaodec.addEventListener("click", () => {
    n = parseInt(r.textContent);
    n = n - 1;
    r.textContent = `${n}`;
    if (n < 0) {
        r.classList.remove("kkk-green");
        r.classList.add("kkk");
    } else {
        r.classList.remove("kkk");
        r.classList.add("kkk-green");
    }
    if(n==0){
        r.classList.remove("kkk", "kkk-green");
    }
});

botaoreset.addEventListener("click", () => {
    n = 0;
    r.textContent = `${n}`;
    r.classList.remove("kkk", "kkk-green");
});

botaoinc.addEventListener("click", () => {
    n = parseInt(r.textContent);
    n += 1;
    r.textContent = `${n}`;
    if (n < 0) {
        r.classList.remove("kkk-green");
        r.classList.add("kkk");
    } else {
        r.classList.remove("kkk");
        r.classList.add("kkk-green");
    }
    if(n==0){
        r.classList.remove("kkk", "kkk-green");
    }
});
 