const enigmePersonne0 = {
    "Jason":"Non c'est pas moi le blond, c'est l'autre",
    "Amélie":"À cause du rouge et du livre, j'ai confondu avec le BDA...",
    "Simon":"Tu peux m'appeler Bob",
    "Sarah":"Je suis pas en cosplay, je m'habille juste comme ça",
    "Anna":"Oui j'ai encore changé de couleur de cheveux...",
    "Hugo":"Boire n'est pas qu'une passion, c'est une profession.",
    "Nathan B":"J'ai toujours été friendly surtout avec mes potes… Tard dans la nuit colorée, la situation peut vite déraper",
    "Gustave":"Parler ? C'est plus qu'un soft skill, c'est une philosophie de vivre."
}

const enigmePersonne = [
    "Non c'est pas moi le blond, c'est l'autre",
    "À cause du rouge et du livre, j'ai confondu avec le BDA...",
    "Tu peux m'appeler Bob",
    "Je suis pas en cosplay, je m'habille juste comme ça",
    "Oui j'ai encore changé de couleur de cheveux...",
    "Boire n'est pas qu'une passion, c'est une profession.",
    "J'ai toujours été friendly surtout avec mes potes… Tard dans la nuit colorée, la situation peut vite déraper",
    "Parler ? C'est plus qu'un soft skill, c'est une philosophie de vivre."
]

class Window extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute("image");
        const numero = this.getAttribute("numero") || 0;
        const enigmePersonneContent = this.getAttribute("enigme-personne-content");
        this.innerHTML = `
            <div class="top" style="text-align: right;">
                <div>Enigme ${numero}</div>
                <div style="flex: 1; display: flex; flex-direction: row-reverse; align-items: center">
                    <button style="display: flex; justify-content: center; align-items: center" class="close-button"><span style="font-family: monospace">×</span></button>
                </div>
            </div>
            <div class="content">
                <div class="content-image">
                    <img src="${image}"/>
                </div>
                <div class="content-text">${enigmePersonneContent}</div>
            </div>
            <div class="content" style="padding-top: 0; border-top: none; border-left: solid black 1px;">
                <div class="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="bottom">
                <div class="bottom-box bottom-left">© 2025 ACO2.com</div>
                <div class="bottom-box bottom-right">ACO2 Web Services by Jafar T.</div>
            </div>
        `;
        const closeButton = this.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            this.close();
          });
    };
    close(){
        this.style.display = 'none';
    };          close(){
        this.style.display = 'none';
    };

};
customElements.define("c-window", Window);

class Banner extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute("image");
        this.innerHTML = `
            <img src="${image}"/>
        `
    }
}
customElements.define("c-banner", Banner);

class Icon extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title");
        const image = this.getAttribute("image");
        this.innerHTML = `
            
            <img class="icon-image" style="object-fit: contain; width: 60%;" src="${image}"/>
            <div class="icon-title">${title}</div>
        `
    }
}
customElements.define("c-icon", Icon);


class Popup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        `
    }
}
customElements.define("c-popup", Popup);

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 


const suffleEnigmes = shuffle(enigmePersonne);

/*Remplissage aléatoire */
const main = document.getElementById("main");
for (let i=0; i<4; i++) {
    main.innerHTML += `
        <c-banner image="images/banners/banner${i+1}.png"></c-Banner>
        <c-window id="window${2*i+1}" numero="${2*i+1}" enigme-personne-content="${suffleEnigmes[2*i]}"></c-window>
        <c-window id="window${2*(i+1)}" numero="${2*(i+1)}" class="reverse" enigme-personne-content="${suffleEnigmes[2*i+1]}"></c-window>
    `
}
