// ===============================
// CHUVA DE CORAÇÕES
// ===============================

const hearts = document.getElementById("hearts");

function criarCoracao() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 35) + "px";

    heart.style.animationDuration = (4 + Math.random() * 6) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(criarCoracao, 250);


// ===============================
// CONTADOR DO TEMPO JUNTOS
// ===============================

// ALTERE PARA A DATA EM QUE VOCÊS COMEÇARAM A NAMORAR
const dataInicio = new Date("2025-01-01T00:00:00");

function atualizarTempo() {

    const agora = new Date();

    let diferenca = agora - dataInicio;

    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    let horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    let minutos = Math.floor((diferenca / (1000 * 60)) % 60);

    let segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo").innerHTML =
        `${dias} dias<br>${horas} horas<br>${minutos} minutos<br>${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);

atualizarTempo();


// ===============================
// ABRIR CARTA COM ROLAGEM SUAVE
// ===============================

document.getElementById("start").addEventListener("click", () => {

    document.getElementById("love").scrollIntoView({

        behavior: "smooth"

    });

});


// ===============================
// BOTÃO "CLIQUE AQUI"
// ===============================

document.getElementById("fire").addEventListener("click", () => {

    alert("❤️ Iza ❤️\n\nEu te amo mais do que as palavras conseguem explicar.\n\nVocê é o amor da minha vida!\n\nPara sempre nós dois. ❤️");

});


// ===============================
// MENSAGENS ROMÂNTICAS
// ===============================

const mensagens = [

"❤️ Você é meu mundo.",

"🌹 Cada dia ao seu lado é especial.",

"💕 Meu coração escolheu você.",

"💖 Você é meu maior presente.",

"✨ Eu escolheria você mil vezes.",

"🥰 Você é meu amor eterno.",

"❤️ Você faz minha vida completa."

];

setInterval(() => {

    document.title = mensagens[Math.floor(Math.random() * mensagens.length)];

}, 3000);


// ===============================
// EFEITO AO PASSAR NAS FOTOS
// ===============================

const imagens = document.querySelectorAll(".galeria img");

imagens.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(2deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});


// ===============================
// REPRODUZIR ÁUDIO APÓS INTERAÇÃO
// ===============================

const musica = document.getElementById("musica");

document.body.addEventListener("click", () => {
    if (musica.paused) {
        musica.play().catch(() => {});
    }
}, { once: true });