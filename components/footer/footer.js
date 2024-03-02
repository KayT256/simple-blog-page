const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link rel="stylesheet" href="/components/footer/footer.css">
<footer>
    <p>Made by <span id="author">Trieu Khang Trat</span> (KayT)</p>
    <p>My code is on <a href="https://github.com/KayT256" target="_blank">Github</a></p>
</footer>
`

class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-component', Footer)