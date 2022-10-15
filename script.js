//atreladas a cada função marcar
//op => servem para ativar o button
var op1, op2, op3;
//tentativa de obter nomes e preços quebra o script
//frango, refri e doce => nome da comida selecionada
var frango, refri, doce;
//preco => preco da comida selecionada
var preco1, preco2, preco3;
//modifica o button apos todas as comidas serem selecionadas
function finalizar() {
  if (op1 + op2 + op3 == 3) {
    const botao = document.querySelector("button");
    botao.className = "pedir";
    botao.innerHTML = "Fechar pedido";

    let precototal = preco1 + preco2 + preco3;
    precototal = precototal.toFixed(2).replace(".", ",");
    //cria a mensagem para ser enviada ao whatsapp
    mensagem = encodeURIComponent(
      `Olá, gostaria de fazer o pedido:
- Prato: ` +
        frango +
        `
- Bebida: ` +
        refri +
        `
- Sobremesa: ` +
        doce +
        `
Total: R$ ` +
        precototal
    );
    //adiciona o endereço ao link do button
    var a = document.querySelector("a");
    a.href = "https://wa.me/5532991758808?text=" + mensagem;
  }
}
//adiciona a borda na classe prato
function marcarprato(id) {
  let naoescolhido = document.querySelectorAll(".prato");
  naoescolhido.forEach((prato) => {
    prato.classList.remove("comidaescolhida");
  });

  let addborda = document.querySelector(id);
  addborda.classList.toggle("comidaescolhida");

  frango = "Frango Yin Yang";
  preco1 = 14.9;

  op1 = 1;

  finalizar();
}
//adiciona a borda na classe bebida
function marcarbebida(id) {
  let naoescolhido = document.querySelectorAll(".bebida");
  naoescolhido.forEach((bebida) => {
    bebida.classList.remove("comidaescolhida");
  });

  let addborda = document.querySelector(id);
  addborda.classList.toggle("comidaescolhida");

  refri = "Coquinha Gelada";
  preco2 = 4.9;

  op2 = 1;

  finalizar();
}
//adiciona a borda a classe sobremesa
function marcarmesa(id) {
  let naoescolhido = document.querySelectorAll(".sobremesa");
  naoescolhido.forEach((sobremesa) => {
    sobremesa.classList.remove("comidaescolhida");
  });

  let addborda = document.querySelector(id);
  addborda.classList.toggle("comidaescolhida");

  doce = "Pudim";
  preco3 = 7.9;

  op3 = 1;

  finalizar();
}
