const contentnav = document.querySelector(".content-nav");
const btnMenu = document.querySelector("nav button");
const elementos = document.querySelector("#elementos");

let estado = false;

let windowsHeight = window.innerHeight;
console.log(windowsHeight)

let max = parseInt(windowsHeight * 1.5);
console.log(max)
let min = 30;

btnMenu.addEventListener("click", () => {
  if(estado) {
    let contador = max;
    elementos.classList.add("d-none");
    let decremento = contador / 30;
    const interval = setInterval(() => {
      contentnav.style.clipPath = `circle(${contador}px at 40px 40px)`;
      contador -= decremento;
      console.log(contador);
      if (contador < min) {
        contentnav.style.clipPath = "circle(30px at 40px 40px)";
        clearInterval(interval)
      }
    }, 10)
  } else {
    let contador = 30;
    elementos.classList.remove("d-none");
    let incremento = (max - 30) / 30
    const interval = setInterval(() => {
      console.log(contador);
      contentnav.style.clipPath = `circle(${contador}px at 40px 40px)`;
      contador += incremento;
      if (contador >= max) {
        contentnav.style.clipPath = `circle(${max}px at 40px 40px)`;
        clearInterval(interval);
      }
    }, 10)
  }
  estado = !estado;
})