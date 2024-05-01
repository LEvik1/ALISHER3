let doc = document


let logo = doc.querySelector('.i_fof_img')
let logo2 = doc.querySelector('.i_fof_img2')
let one = doc.querySelector('.p_fof_a1')
let two = doc.querySelector('.p_fof_a2')
let sec1 = doc.querySelector('.perviy')
let sec2 = doc.querySelector('.container')
let sec3 = doc.querySelector('.container2')



logo.addEventListener('click',function(){
    sec1.classList.remove('invis')
    sec2.classList.add('invis')
    sec3 .classList.add('invis')
})
logo2.addEventListener('click',function(){
    sec1.classList.remove('invis')
    sec2.classList.add('invis')
    sec3 .classList.add('invis')
})
one.addEventListener('click',function(){
    sec1.classList.add('invis')
    sec2.classList.remove('invis')
    sec3 .classList.add('invis')
})
two.addEventListener('click',function(){
    sec1.classList.add('invis')
    sec2.classList.add('invis')
    sec3 .classList.remove('invis')
})
