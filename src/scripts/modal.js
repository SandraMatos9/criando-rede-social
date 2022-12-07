


function showLoginModal(){
  const body=document.querySelector('body');
 
  const  modalBotaoAbrirPost=document.querySelector("[data-modal]")
  console.log(modalBotaoAbrirPost)
  modalBotaoAbrirPost.addEventListener('click',(event) =>{
      event.preventDefault()
      const modal=createModal()
      body.appendChild(modal)
      closeModal()
  })

}
function closeModal(){
  const divModalContainer=document.querySelector('.classdivModalContainer')
  

    divModalContainer.remove()

}




function modalCreatePosts(x){
    console.log(x)
    const modalQuerySelectorDoElementoQueVouColocar= document.querySelector('#modalSectionPost')
    
            const user = users.find(user => user.id===x.user)
            const divModalContainer= document.createElement('div')
            divModalContainer.classList='classdivModalContainer'
           
        
            const modalLi= document.createElement('li')
            modalLi.classList.add('liModalPost')
  
            const modalImagemNomeJob = document.createElement('div')
            modalImagemNomeJob.classList.add('modalDivFotoSeparadaNomeEProfissao')
  
            const modalImgId= document.createElement('img')
            modalImgId.src=user.img
            modalImgId.classList.add('modalImgPhotos')
  
            const modalNomeJob=document.createElement('div')
            modalNomeJob.classList.add('modalNomeProfissao')
  
            const modalh2 = document.createElement('h2')
            modalh2.innerHTML= user.user
  
            const modalPJob= document.createElement('p')
            modalPJob.innerHTML= user.stack
           
  
            const modalPTituloOldPost= document.createElement('p')
            modalPTituloOldPost.classList.add('modalTituloOldPost')
            modalPTituloOldPost.innerText=x.title
  
            const modalPDescricaoOldPost= document.createElement('p')
            modalPDescricaoOldPost.classList.add('modalPDescricaoOldPost')
            modalPDescricaoOldPost.innerText=x.text
  
            const closeBtn = document.createElement('button')
            closeBtn.classList='closeBtn'
            closeBtn.innerText='X'
            closeBtn.addEventListener('click',() => divModalContainer.remove())

            const containerImagemNomeProfissao= document.createElement('div')
            
            
            modalNomeJob.append(modalh2,modalPJob)
            modalImagemNomeJob.append(modalImgId,modalNomeJob)
           
         
        


  
          
  
            modalLi.append(closeBtn,modalImagemNomeJob,modalPTituloOldPost,modalPDescricaoOldPost)
            divModalContainer.append(modalLi)
            modalQuerySelectorDoElementoQueVouColocar.appendChild(divModalContainer)
            return modalQuerySelectorDoElementoQueVouColocar
         


  
}



