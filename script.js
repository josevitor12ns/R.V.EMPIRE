const perguntas = [

{

pergunta:"Você quer ganhar dinheiro pela internet?",

opcoes:["Sim","Muito","Com certeza"]

},

{

pergunta:"Você prefere trabalhar com:",

opcoes:["Celular","Computador","Os dois"]

},

{

pergunta:"Quanto você quer ganhar por mês?",

opcoes:["R$500","R$2000","R$5000+"]

}

]

let atual = 0

function iniciar(){

document.getElementById("inicio").style.display="none"

document.getElementById("quiz").style.display="block"

mostrar()

}

function mostrar(){

let p = perguntas[atual]

document.getElementById("pergunta").innerText = p.pergunta

let html=""

p.opcoes.forEach(op=>{

html += `<div class="opcao" onclick="proxima()">${op}</div>`

})

document.getElementById("opcoes").innerHTML = html

let progresso = ((atual) / perguntas.length) * 100

document.getElementById("barra").style.width = progresso + "%"

}

function proxima(){

atual++

if(atual < perguntas.length){

mostrar()

}else{

document.getElementById("barra").style.width="100%"

document.getElementById("quiz").style.display="none"

document.getElementById("final").style.display="block"

}

}