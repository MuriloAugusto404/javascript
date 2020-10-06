function carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
Var data = new Date()
var hora = data.getHours()
msg.innerHTML = 'Agora são ${hora} horas.'
}
