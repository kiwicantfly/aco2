const enigmePersonne = [
    ["Non c'est pas moi le blond, c'est l'autre.", "fred.png", "Je suis la seule chose où aujourd'hui arrive avant hier, que suis-je ?"],
    ["À cause du rouge et du livre, j'ai confondu avec le BDA...", "bda.png", "Les parents de Pierre ont trois enfants, Paul et Bill : quel est le nom du troisième enfant ?"],
    ["Tu peux m'appeler Bob.", "bob.jpg", "Un smartphone et sa coque coûtent 110 euros en tout. Le smartphone coûte 100 euros de plus que la coque. Combien coûte le smartphone ?"],
    ["Je suis pas en cosplay, je m'habille juste comme ça.", "cosplay.png", "Où peut-on trouver des villes, des rues, des magasins mais pas de gens ?"],
    ["Oui j'ai encore changé de couleur de cheveux...", "rainbow.png", "Qu’est-ce qu’on doit casser pour pouvoir l’utiliser ?"],
    ["Boire n'est pas qu'une passion, c'est une profession.", "boire.png", "Je suis Tintin mais je ne suis pas Tintin. Qui suis-je ?"],
    ["J'ai toujours été friendly surtout avec mes potes… Tard dans la nuit colorée, la situation peut vite déraper.", "nuit.jpg", "Je disparais dès que l'on prononce mon nom."],
    ["Parler ? C'est plus qu'un soft skill, c'est une philosophie de vivre.", "philo.png", "Quand je suis debout, il est couché, quand je suis couché, il est debout."],
    ["J'ai un instinct de survie négatif.", "hamster.jpeg", "Que demande un magicien en boulangerie ?"]
]

class Window extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute("image");
        const title = this.getAttribute("title") || "Enigme";
        const enigmePersonneContent = this.getAttribute("enigme-personne-content") || "Boris";
        const enigmeMot = this.getAttribute("enigme-mot") || "Boris";
        this.innerHTML = `
            <div class="top" style="text-align: right;">
                <div>${title}</div>
                <div style="flex: 1; display: flex; flex-direction: row-reverse; align-items: center">
                    <button style="display: flex; justify-content: center; align-items: center" class="close-button"><span style="font-family: monospace">×</span></button>
                </div>
            </div>
            <div class="content-img content">
                <div class="content-image">
                    <img src="${image}"/>
                </div>
                <div class="content-text">${enigmePersonneContent}</div>
            </div>
            <div class="content" style="padding-top: 0; border-top: none; border-left: solid black 1px;">
                <div class="content-text">${enigmeMot}</div>
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
            <button style="display: flex; justify-content: center; align-items: center" class="close-button"><span style="font-family: monospace">×</span></button>
            `;
        const closeButton = this.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            this.close();
          });
    };
    close(){
        this.style.display = 'none';
    };
}
customElements.define("c-popup", Popup);

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  /* Comment jouer */
const intro = document.getElementById("how-to-play");

intro.setAttribute("enigme-mot",`Détermine ensuite le mot clé avec la deuxième devinette.
</br></br>
Pour obtenir <strong>10 BD</strong>, il faut dire le bon mot à la bonne personne.`);
intro.setAttribute("enigme-personne-content", `Trouve le prénom d'une personne du mini mandat grâce à la première devinette.`);

/*Remplissage aléatoire */
const main = document.getElementById("main");
const suffleEnigmes = shuffle(enigmePersonne);
for (let i=0; i<4; i++) {
    main.innerHTML += `
        <c-banner image="images/banners/banner${i+1}.png"></c-banner>
        <c-window id="window${2*i+1}" title="Enigme ${2*i+1}" enigme-personne-content="${suffleEnigmes[2*i][0]}" image="images/people/${suffleEnigmes[2*i][1]}" enigme-mot="${suffleEnigmes[2*i][2]}"></c-window>
        <c-window id="window${2*(i+1)}" title="Enigme ${2*(i+1)}" class="reverse" enigme-personne-content="${suffleEnigmes[2*i+1][0]}" image="images/people/${suffleEnigmes[2*i+1][1]}" enigme-mot="${suffleEnigmes[2*i+1][2]}"></c-window>
    `
}
main.innerHTML += `<c-banner image="images/banners/banner5.png"></c-Banner>`;
main.innerHTML += `<c-window id="window9" title="Enigme 9" enigme-personne-content="${suffleEnigmes[8][0]}" image="images/people/${suffleEnigmes[8][1]}" enigme-mot="${suffleEnigmes[8][2]}"></c-window>`
main.innerHTML += `<p>Merci Paolo pour ton idée de génie.</p>`;


/* Apparition des popup toutes les 20s */
const popupImagesInitial = ['pill.png', 'virus.png', 'winner.png', 'ritz.png', 'github.png'];
const popupImages = shuffle(popupImagesInitial);
const popup = document.getElementById("popup");

for (let i=0; i<popupImages.length; i++) {
    setTimeout(()=>{
        popup.style.animationName = 'Disparition';
        setTimeout(
            ()=>{
                popup.style.display = 'flex';
                popup.style.backgroundImage = `url(images/popup/${popupImages[i]}`
                popup.style.animationName = 'Apparition';
            },
            500
        )
    }, 10000*i+5000);
};