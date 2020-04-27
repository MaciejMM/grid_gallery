let divContainer = document.querySelectorAll('.container div');

window.addEventListener('load', (e) => {
    const preload = document.querySelector('.loader-wrapper');
    preload.classList.add('preload-finish')
})

let firstImgs = divContainer[0].querySelectorAll('img');
let hidedElements = divContainer[0].querySelectorAll('.hide-img')


let counter = 0;
function countToThree(){

  firstImgs.forEach((e)=>{
    e.classList.add('hide-img')

  })    


          firstImgs[counter].classList.remove('hide-img')
          firstImgs[counter].addEventListener('transitionend',()=>{
            firstImgs[counter].classList.add('show-img')

          })


        counter++
        if(counter===firstImgs.length){
            counter = 0
        }
}

setInterval(countToThree,10000)