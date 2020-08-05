(function () {
  alert(
    "Olá, caso você esteja vendo essa mensagem, seja bem vindo! Aqui é um pouco sobre como eu programo, não é o meu projeto finalizado, mas é o meu portifolio em construção! Caso deseje ver um projeto mais completo acesse - https://github.com/deniavsa/Projeto-Classificados-ThoughtWorks, - https://github.com/deniavsa/Test-requests, - https://github.com/deniavsa/CalculadoraJS"
  );
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor() {
    let cor = document.getElementById("cabecalho");
    let elements = document.querySelectorAll("#cabecalho ul li a");
    console.log(test);
    setInterval(() => {
      cor.style.background = `${getRandomColor()}`;
      elements.forEach((element) => {
        element.style.background = `${getRandomColor()}`;
      });
      test.style.background = `${getRandomColor()}`;
    }, 20000);
  }
  changeColor();
})();
