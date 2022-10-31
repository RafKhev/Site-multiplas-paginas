function mostrar(item, ind) {
    const pag = document.getElementById(item);
    const paginas = document.getElementsByClassName('pagina');
    const itemMenu = document.getElementsByClassName('itemMenu');
    const footer = document.querySelector("footer");

    for (i = 0; i < paginas.length; i++) {
        paginas[i].style.display = 'none';

        if (itemMenu[i].classList.contains('active')) {
            itemMenu[i].classList.remove('active');
        }

    }

    itemMenu[ind].classList.add('active');
    pag.classList.add('fadein');
    pag.style.display = "block";

    switch (ind) {
        case 0:
            document.title = "Início";   
            break;
        case 1:
            document.title = "Quem somos";
            break;
        case 2:
            document.title = "Produtos";
            break;
        case 3:
            document.title = "Contato";
            break;
        default:
            break;
    }
}

function sendMail() {

    console.log('enviar');
    var nome = document.formus.nome.value;
    var mail = document.formus.mail.value;
    var assunto = document.formus.assunto.value;
    var msg = document.formus.msg.value;
    var msgObrigatorio = document.getElementsByClassName('obrig');
    var campos = [nome, mail, assunto, msg];
    
    var preenchidos = 0;
    
    for (i = 0; i < campos.length; i++) {
        if (campos[i].length == 0) {
            msgObrigatorio[i].style.display = 'block';
        } else {
            preenchidos++;
            msgObrigatorio[i].style.display = 'none';
        }
    }

    if(preenchidos == 4){
        alert("Sua mensagem foi enviada com sucesso!");
    }
}