function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minuto}.`
    if (hora >= 0 && hora <12){
        img.src = 'manha.jpg'
        document.body.style.background = '#ebd662'
    } else if (hora >=12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#bd9937'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#474769'
    }
}

