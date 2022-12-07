//Posts dos usuários
const posts = [
  {
    id_post: 1, //id único de cada post
    user: 2, //id do usuário que fez o post, você pode acessa-lo no array users
    //título do post
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    //texto do post
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
  },
  {
    id_post: 2,
    user: 4,
    title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
  },
  {
    id_post: 3,
    user: 5,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
  },
];


const querySelectorDoElementoQueVouColocar= document.querySelector(".usuarioPerfilOldPost")
function gerarPosts(posts){
  for(let i=0; i<posts.length;i++){
    for(let j=0; j<users.length;j++){
      if(posts[i].user===users[j].id){
        console.log(users[j])

        const divLi= document.createElement('li')

        const divImagemNomeJob = document.createElement('div')
        divImagemNomeJob.classList.add('usuarioPerfil')

        const divImgId= document.createElement('img')
        divImgId.src=users[j].img
        divImgId.classList.add('imgPhotos')

        const divNomeJob=document.createElement('div')
        divNomeJob.classList.add('nomeProfissao')

        const divh2 = document.createElement('h2')
        divh2.innerHTML= users[j].user

        const pJob= document.createElement('p')
        pJob.innerHTML= users[j].stack

        const pTituloOldPost= document.createElement('p')
        pTituloOldPost.classList.add('tituloOldPost')
        pTituloOldPost.innerText=posts[i].title

        const pDescricaoOldPost= document.createElement('p')
       
        pDescricaoOldPost.innerText=posts[i].text

        const divDoBotaoIcone= document.createElement('div')
        divDoBotaoIcone.classList.add('botaoEIcone')

        const botaoAbrirPost= document.createElement('button')
        botaoAbrirPost.setAttribute("data-modal",posts[i].id_post)
        botaoAbrirPost.classList.add('botaoOldPost')
        botaoAbrirPost.innerText='Abrir Post'
        botaoAbrirPost.addEventListener('click',()=>{
          const clickedPost=divLi
          modalCreatePosts(posts[i])
         
          
        })


        
        const spanIcone= document.createElement('span')
        spanIcone.classList.add('material-symbols-outlined')
        spanIcone.innerText='favorite'

        
        divNomeJob.append(divh2,pJob)
        divImagemNomeJob.append(divImgId,divNomeJob)

        const divContemBotaoIcone= document.createElement('div')
        divContemBotaoIcone.append(botaoAbrirPost,spanIcone)
        divContemBotaoIcone.classList='divContemBotaoIcone'
        

        

        divLi.append(divImagemNomeJob,pTituloOldPost,pDescricaoOldPost,divDoBotaoIcone,
          divContemBotaoIcone)

        
      
        querySelectorDoElementoQueVouColocar.appendChild( divLi)

      }
    }


  }


 return querySelectorDoElementoQueVouColocar
}
gerarPosts(posts)



