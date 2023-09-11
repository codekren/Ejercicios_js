const $caja = document.getElementById('caja')
const $boton=document.getElementById('boton')
let contador=1

$boton.addEventListener('click',fnEvento1)

function fnEvento1(event){
    if(contador%2===0){
    document.getElementById('caja').style.backgroundColor='red'

}else{
    document.getElementById('caja').style.backgroundColor='aqua'
}
contador+=1
}
const $contenedor=document.querySelectorAll('.contenedor')
const $inputTexto=document.getElementById('input-texto')
const $caja2=document.getElementById('caja2')

$inputTexto.addEventListener('input',()=>{
    console.log('input')
}
)
