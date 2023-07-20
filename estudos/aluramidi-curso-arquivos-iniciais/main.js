
// function tocaSomPom(){
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// function tocaSomClap(){
//     document.querySelector('#som_tecla_clap').play();
// }

// function tocaSom(som){
//     document.querySelector('#som_tecla_'+som).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// listaDeTeclas.forEach(tecla => {
//     let som = tecla.innerText.toLowerCase();
//     let teclaSom = '.tecla_' + som;
//     console.log(teclaSom);
//     // document.querySelector(teclaSom).click = tocaSom(som);

//     document.querySelector(teclaSom).addEventListener('click', () => {
//         // document.querySelector('#som_tecla_'+som).play();
//         tocaSom(som);
//     });
// });

//classlist = retorna uma lista de classes de um elemento html índce:valor(nome da classe)


//versão utilizando TEMPLATE STRING

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    let classeSom = tecla.classList[1];
    let playSom = `#som_${classeSom}`;
    classeSom = '.' + classeSom;

    // console.log('playSom = ' + playSom);
    // console.log('classeSom = ' + classeSom);

    document.querySelector(classeSom).addEventListener('click', ()=> {
        tocaSom(playSom);
    });    
});

function tocaSom(som){
    document.querySelector(som).play();
}