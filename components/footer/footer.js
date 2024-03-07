const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link rel="stylesheet" href="path">
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
        
        const stylesheet = shadowRoot.querySelector('link[href="path"]')
        const title = document.title

        if (title == 'Blog Page') {
            stylesheet.setAttribute('href', 'components/footer/footer.css')
        } else {
            stylesheet.href = '../components/footer/footer.css'
        }
    }
}

customElements.define('footer-component', Footer)