//ID dos usuários sugeridos para seguir
// const  = [3, 7, 6];

const sugestUsers = [3,7,6]

  
const querySelectorDoElementoQueVouColocar2= document.querySelector(".ulSugestoes")
function gerarPostsSugestoes(users){
for(let i=0; i<users.length;i++){
  for(let j=0; j<sugestUsers.length;j++){
    if(users[i].id===sugestUsers[j]){

      
      const divLi= document.createElement('li')

      const divImagemNomeTrabalho = document.createElement('div')

      const divImgId2= document.createElement('img')
      const divNomeTrabalho=document.createElement('div')
      const divTituloNome = document.createElement('h2')
      const divQualProfissao= document.createElement('p')
      const divDoBotaoSeguir= document.createElement('div')
      
      divLi.classList.add("liSugestaoSeguidor")
      divImagemNomeTrabalho.classList.add("imagemNomeProfissao")
      divImgId2.classList.add("imgPhotos")
      divNomeTrabalho.classList.add("nomeProfissao")
      divDoBotaoSeguir.classList.add("botaoSeguir")
      divDoBotaoSeguir.innerText='Seguindo'
      divImgId2.src=users[i].img
      divTituloNome.innerText=users[i].user
      divQualProfissao.innerText=users[i].stack

      divNomeTrabalho.append(divTituloNome,divQualProfissao)
      
      divImagemNomeTrabalho.append(divImgId2,divNomeTrabalho,divDoBotaoSeguir)
      divLi.appendChild(divImagemNomeTrabalho)
      querySelectorDoElementoQueVouColocar2.appendChild(divLi)
     
    }
  }


}


 return querySelectorDoElementoQueVouColocar
}
gerarPostsSugestoes(users)

    