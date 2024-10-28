let data = [
    { title: "carpinteiro em contagem", description: "O carpinteiro trabalha com madeira, construindo e reparando estruturas como casas, móveis e outros objetos. Ele utiliza diversas ferramentas e técnicas para transformar a madeira em peças funcionais e estéticas.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Acm e acrílico em contagem", description: " São especialistas em transformar materiais como ACM (Alumínio Composto) e acrílico em produtos diversos, como placas, letreiros, fachadas e peças para decoração. Utilizam técnicas de corte, colagem e acabamento para criar peças personalizadas e duráveis.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Armador em contagem", description: " O armador é o profissional responsável por preparar e montar as estruturas de aço que darão suporte às construções de concreto armado.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Automação residencial em contagem", description: "A automação residencial é a tecnologia que permite controlar e programar diversos equipamentos e sistemas de uma casa de forma automatizada.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Box e blindex em contagem", description: "Profissionais especializados em box e blindex trabalham na criação, instalação e manutenção de estruturas de vidro temperado, principalmente utilizadas em banheiros e divisórias de ambientes.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Chaveiro em contagem", description: "O chaveiro é o profissional responsável por criar, copiar e reparar chaves, além de instalar e consertar fechaduras. .</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Calhas e rufos em contagem", description: "Profissionais que trabalham com calhas e rufos são responsáveis por instalar, reparar e fazer a manutenção de sistemas de escoamento de água das chuvas em edificações.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Construtor em contagem", description: "O construtor é o profissional responsável por planejar, organizar e supervisionar a construção de edificações.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Detetizador em Contagem", description: "O dedetizador é o profissional responsável por controlar e eliminar pragas em ambientes residenciais, comerciais e industriais.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Decorador em Contagem", description: "O decorador é o profissional responsável por transformar espaços, tornando-os mais bonitos e funcionais. .</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Demolidor em Contagem", description: "O demolidor é o profissional responsável por derrubar e remover estruturas, como prédios, casas e outras construções .</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },
    { title: "Designer de interiores em contagem", description: "O designer de interiores cria e planeja espaços internos, como casas, escritórios e lojas, buscando a harmonia entre estética e funcionalidade.</br></br> <strong>Nome:</strong> antonio silva </br> Tel:(xx) x xxxx-xxxx </br> Site: www.profii.com.br", city: "Contagem", link: "https://profii.com.br/" },// Link para o carpinteiro
    { title: "instalador elétrico", description: "Descrição do instalador elétrico...", city: "Rio de Janeiro", link: "https://www.google.com" }, // Link para o instalador elétrico
    // ... outros objetos com cidade e link

]   ;
const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");
const citySelect = document.querySelector("#citySelect");

const displayData = (data, city) => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        if (e.city === city || city === "todas") {
            cardContainer.innerHTML += `
                <div class="card">
                    <h3><a href="${e.link}" target="_blank">${e.title}</a></h3>
                    <p>${e.description}</p>
                </div>
            `;
        }
    });
};

searchInput.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const selectedCity = citySelect.value;
    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm) && (item.city === selectedCity || selectedCity === "todas"));
    displayData(filteredData, selectedCity);
});

citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    const filteredData = data.filter(item => item.city === selectedCity || selectedCity === "todas");
    displayData(filteredData, selectedCity);
});

window.addEventListener("load", () => {
    // Preencher o select com as opções de cidade
    const cities = [...new Set(data.map(item => item.city))];
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);   

    });
    // Exibir todos os dados inicialmente
    displayData(data, "todas");
});
