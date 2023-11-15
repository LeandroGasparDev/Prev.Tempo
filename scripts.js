const KEY = "c21ff6c29d344f46a39e186fdc6a095b";

function preencheDados(DADOS){
    console.log(DADOS);
    document.querySelector(".cidade").innerHTML = 'Tempo em : '+DADOS.name;
    document.querySelector(".temp").innerHTML = Math.floor(DADOS.main.temp)+' ºC';
    document.querySelector(".texto_previsao").innerHTML = DADOS.weather[0].description;
    document.querySelector(".umidade").innerHTML = 'Umidade: '+DADOS.main.humidity+' %';
    // document.querySelector('.img_previsao').src = `https://openweathermap.org/img/wn/${DADOS.weather[0].icon}.png`;
    const imgPrevisao = document.querySelector('.img_previsao');
    imgPrevisao.src = `https://openweathermap.org/img/wn/${DADOS.weather[0].icon}.png`;  
}

async function buscarCidade (CIDADE){
    const DADOS = await (await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${CIDADE}&appid=${KEY}&lang=pt_br&units=metric`)).json();

    // console.log(DADOS);
    preencheDados(DADOS);
} 
   
function buscarDados() {
    const CIDADE = document.querySelector(".input-cidade").value;

    // Obtém o elemento de mensagem de erro
    var cidadeError = document.getElementById('cidadeError');
    // Verifica se o campo de entrada está vazio
    if (CIDADE.trim() === '') {
        // Adicione aqui o código para lidar com o campo vazio
        cidadeError.textContent = 'Por favor, digite o nome da cidade.';
        return;
    }
    cidadeError.textContent = '';    

    buscarCidade(CIDADE);
}

