const sair = document.querySelector('.sair');
const teste = document.querySelector('.teste');
const btn = document.querySelector('.btn');

sair.addEventListener('click', function(){
  teste.classList.toggle("invisivel")
})

btn.addEventListener('click', function(){
  teste.classList.toggle("invisivel")
})