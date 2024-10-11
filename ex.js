// criar referencias aos elementos que queremos manipular
const frm = document.querySelector("form");
const resp =  document.querySelector("h3");
const media = document.querySelector("h2")


frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nome = frm.inNome.value;
    resp.innerText = `ola ${nome} seja bem vindo`

const n1= Number(frm.nota1.value);
const n2= Number(frm.nota2.value);
const n3= Number(frm.nota3.value);
const n4= Number(frm.nota4.value);
resp.innerText = `Ola ${nome}, seja bem-vindo`
let median= Number ((n1+n2+n3+n4)/ 4);
media.innerText = `media: ${median.toFixed(2)}`

if(median >=7.0) {
    resp.innerText = "Aprovado";
    resp.style.color="blue"}

 else if (median>= 4 && median<=6.9){
    resp.innerText = "Recuperação";
    resp.style.color="green"

}  else {resp.innerText = "reprovado";
resp.style.color="red"}

})