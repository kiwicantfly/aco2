class Window extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute("image");
        this.innerHTML = `
            <div class="top">? Enigme 1</div>
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