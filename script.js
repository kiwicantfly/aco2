class Window extends HTMLElement {
    close(){
        this.style.display = 'none';
    };
    connectedCallback() {
        const image = this.getAttribute("image");
        const numero = this.getAttribute("numero") || 0;
        this.innerHTML = `
            <div class="top" style="text-align: right;">
                <div>Enigme ${numero}</div>
                <div style="flex: 1; display: flex; flex-direction: row-reverse; align-items: center">
                    <button style="display: flex; justify-content: center; align-items: center" class="close-button">x</button>
                </div>
            </div>
            <div class="content">
                <div class="content-image">
                    <img src="${image}"/>
                </div>
                <div class="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="bottom">
                <div class="bottom-box bottom-left">© 2025 ACO2.com</div>
                <div class="bottom-box bottom-right">ACO2 Web Services by Jafar T.</div>
            </div>
        `;
        const close = this.querySelector(".close-button");
        close.addEventListener("click", () => {
            this.close();
          });
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