//const div = document.getElementsByClassName('oculto')[0]; //getElementsByClassName obtiene una colección
const div = document.querySelector('.oculto');
const ver = document.getElementById('vermas');
ver.addEventListener('click', () => {
    ver.style.display = 'none';
    div.style.display = 'flex';
    div.classList.add('show-inline-block');

    div.innerHTML = `
        <a href="https://reloj-25-5.vercel.app/" target="_blank" class="project project-title" style="flex: 1; margin: 0 50px 0 10px;">
            <img class="project-image" src="FireShot Capture 020 - Reloj 25 + 5 - reloj-25-5.vercel.app.png" alt="reloj 25+5" style="width: 370px; height:330px">
            <p class="project-title" style="font-size: 14px;">
                <span class="code">&lt;</span>
                Reloj 25 + 5
                <span class="code">&#47;&gt;</span>
            </p>
        </a>

        <a href="https://maquina-frases-aleatorias-bh5d6ojzs-hectorhelenio.vercel.app/" target="_blank" class="project project-title" style="flex: 1; margin: 0 50px 0 10px;;">
            <img class="project-image" src="FireShot Capture 021 - Maquina de Frases Aleatoria_ - maquina-frases-aleatorias-bh5d6ojzs-hectorhelenio.vercel.app.png" alt="Máquina de frases aleatorias" style="width:370px; height:330px">
            <p class="project-title" style="font-size: 14px;">
                <span class="code">&lt;</span>
                Máquina de frases aleatorias
                <span class="code">&#47;&gt;</span>
            </p>
        </a>

        <a href="https://notifications-page-cyan.vercel.app/" target="_blank" class="project project-title" style="flex: 1; margin: 0 50px 0 10px;;">
            <img class="project-image" src="FireShot Capture 019 - Frontend Mentor - Notifications page - notifications-page-cyan.vercel.app.png" alt="Página de notificaciones" style="width:370px; height:330px">
            <p class="project-title" style="font-size: 14px;">
                <span class="code">&lt;</span>
                Página de Notificaciones
                <span class="code">&#47;&gt;</span>
            </p>
        </a>
    `;
});
