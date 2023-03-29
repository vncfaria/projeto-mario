console.log('mostrar o document', document);
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {  
  alternarModal(); 
  video.setAttribute("src", linkDoVideo);

});

botaoFecharModal.addEventListener("click", () => {
  modal.classList.remove("aberto");
    video.setAttribute("src", "");


});
