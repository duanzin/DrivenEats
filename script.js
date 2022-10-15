//atreladas a cada função marcar
var op1, op2, op3;
//modifica o butto apos todas as comidas serem selecionadas
function finalizar() {
  if (op1 + op2 + op3 == 3) {
    const botao = document.querySelector("button");
    botao.className = "pedir";
    botao.innerHTML = "Fechar pedido";

    //cria a mensagem para ser enviada ao whatsapp
    mensagem = encodeURIComponent(
      `Olá, gostaria de fazer o pedido:
- Prato: Frango Yin Yang
- Bebida: Coquinha Gelada
- Sobremesa: Pudim
Total: R$ 27.70`
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

  op3 = 1;
  finalizar();
}
//https://wa.me/5532991758808?text=Tenho%20interesse%20em%20comprar%20seu%20carro
