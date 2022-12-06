//Usuários
const users = [
    {
      id: 1,
      user: "Samuel Leão",
      stack: "Front end Engineer",
      img: "./src/assets/img/user1.svg",
    },
    {
      id: 2,
      user: "Samuel Persuhn",
      stack: "Front end Engineer",
      img: "./src/assets/img/user2.svg",
    },
    {
      id: 3,
      user: "Carlos Lima",
      stack: "UX e UI Designer",
      img: "./src/assets/img/user3.svg",
    },
    {
      id: 4,
      user: "Carla Maria",
      stack: "Back end Engineer",
      img: "./src/assets/img/user4.svg",
    },
    {
      id: 5,
      user: "Júlia Martins",
      stack: "Devop's",
      img: "./src/assets/img/user5.svg",
    },
    {
      id: 6,
      user: "Filipe Gutierry",
      stack: 'Full Stack Developer',
      img: "./src/assets/img/user7.svg",
    },
    {
      id: 7,
      user: "Larissa Camargo",
      stack: 'UI Developer',
      img: "./src/assets/img/user6.svg",
    },
  ];
  

// const querySelectorDoElementoQueVouColocar= document.querySelector(main)
// const divUsuarioPerfil= document.createElement("div")
// divUsuarioPerfil.classList.add("usuarioPerfil")
// const divImagemPhotos=document.createElement('img')
// divImagemPhotos.src=users[0].img
// const divNameProfissao=document.createElement('div')
// const h2Nome=document.createElement('h2')
// h2Nome.innerText=users[0].user
// const pProfissao=document.createElement('p')
// pProfissao.innerText=users[0].stack


// const sectionNewPost= document.createElement('section')
// sectionNewPost.classList.add('sectionNewPost')
// const divDigitarTituloPost= document.createElement("div")
// divDigitarTituloPost.classList.add("digitarTituloPost")
// const divInputTitulo= document.createElement('input')
// divInputTitulo.placeholder= "Digitar título do post"
// const divdigitarDescricaoPost= document.createElement('div')
// divdigitarDescricaoPost.classList.add('digitarDescricaoPost')
// const divInputDescricao= document.createElement('input')
// divInputDescricao.placeholder="Digitar descrição do post"

// const sectionSugestoesSeguidores= document.createElement('section')
// sectionSugestoesSeguidores.classList.add('sectionNewPost')
// const ulSugestoes= document.createElement('ul')
// ulSugestoes.classList.add("ulSugestoes")
// const liSugestoesSeguidores = document.createElement('li')
// liSugestoesSeguidores.classList.add('liSugestoesSeguidor')
// const divImagemNomeProfissao= document.createElement('div')
// divImagemNomeProfissao.classList.add('imagemNomeProfissao')
// const divImagem =document.createElement('img')
// divImagem.classList.add("imgPhotos")
// divImagem.src=users[2].img
// const divNomeProfissao= document.createElement('div')
// divNomeProfissao.classList.add('nomeProfissao')
// const divh2Nome= document.createElement('h2')
// divh2Nome.classList.add('nomeProfissao')
// divh2Nome=sugestUsers[i]
// const pStack= document.createElement('p')
// pStack=sugestUsers[i].stack
// const botaoSeguir= document.createElement('button')
// botaoSeguir.classList.add('botaoSeguir')
// botaoSeguir.innerText='Seguindo'


// const sectionOldPost= document.createElement('section')
// sectionOldPost.classList.add('sectionOldPost')
// const spanPostTitulo= document.createElement('span')
// spanPostTitulo.innerText='Posts'
// spanPostTitulo.classList.add('PostsTitulos')
// const ulUsuarioOldPost= document.createElement('ul')
// ulUsuarioOldPost.classList.add('usuarioPerfilOldPost')
// const divLi= document.createElement('li')
// const divImagemNomeJob = document.createElement('div')
// const divImgId= document.createElement('img')
// divImgId.src=users[i].img
// divImgId.classList.add('imgPhotos')
// const divNomeJob=document.createElement('div')
// divNomeJob.classList.add('nomeProfissao')
// const divh2 = document.createElement('h2')
// divh2.innerHTML= users[0].user
// const pJob= document.createElement('p')
// pJob.innerHTML=users[0].user
// const pTituloOldPost= document.createElement('p')
// pTituloOldPost.classList.add('tituloOldPost')
// pTituloOldPost.innerText=posts[i].title
// const pDescricaoOldPost= document.createElement('p')
// pDescricaoOldPost.innerText=posts[i].text
// const divDoBotaoIcone= document.createElement('div')
// divDoBotaoIcone.classList.add('botaoEIcone')
// const botaoAbrirPost= document.createElement('button')
// botaoAbrirPost.classList.add('botaoOldPost')
// botaoAbrirPost.innerText='Abrir Post'
// const SpanIcone= document.createElement('span')
// SpanIcone.classList.add('icone')

function renderPosts(posts){
    const postsUl= document.querySelector('.usuarioPerfilOldPost')
    const sugestoesUl=document.querySelector('.ulSugestoes"')
    for(let i=0;i<posts.length;i++){
        if(posts[i].type===''){

        }

    }


}
// const querySelectorDoElementoQueVouColocar= document.querySelector(".usuarioPerfilOldPost")
// function postsRenderizados(posts){
//     const divLi= document.createElement('li')
//     const divImagemNomeJob = document.createElement('div')
//     const divImgId= document.createElement('img')
//     divImgId.src=posts[i].img
//     divImgId.classList.add('imgPhotos')
//     const divNomeJob=document.createElement('div')
//     divNomeJob.classList.add('nomeProfissao')
//     const divh2 = document.createElement('h2')
//     divh2.innerHTML= posts[i].user
//     const pJob= document.createElement('p')
//     pJob.innerHTML= posts[i].user
//     const pTituloOldPost= document.createElement('p')
//     pTituloOldPost.classList.add('tituloOldPost')
//     pTituloOldPost.innerText=posts[i].title
//     const pDescricaoOldPost= document.createElement('p')
//     pDescricaoOldPost.innerText=posts[i].text
//     const divDoBotaoIcone= document.createElement('div')
//     divDoBotaoIcone.classList.add('botaoEIcone')
//     const botaoAbrirPost= document.createElement('button')
//     botaoAbrirPost.classList.add('botaoOldPost')
//     botaoAbrirPost.innerText='Abrir Post'
//     const SpanIcone= document.createElement('span')
//     SpanIcone.classList.add('icone')
//     divLi.append(divImagemNomeJob,divImgId,divNomeJob,divh2,pJob,pTituloOldPost,pDescricaoOldPost,divDoBotaoIcone,botaoAbrirPost,SpanIcone)

//     querySelectorDoElementoQueVouColocar.appendChild(divLi)
//     return querySelectorDoElementoQueVouColocar

// }
// renderPosts(posts)