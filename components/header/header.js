const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" href="/components/header/header.css">
<header>
    <h1>KayT's Blog</h1>
    <nav id="navbar">
        <ul>
            <li><a href="school/index.html">School</a></li>
            <li><a href="daily-life/index.html">Daily life</a></li>
            <li><a href="career/index.html">Career</a></li>
            <li><a href="question-and-answer/index.html">Q&A</a></li>
        </ul>
    </nav>
</header>
`

class Header extends HTMLElement {
    constructor() {
        super();
        this.navbar = null;
        this.sticky = null;
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

        // Access navbar within the shadow DOM
        this.navbar = shadowRoot.getElementById('navbar');
        this.sticky = this.navbar.offsetTop;

        // Add the scroll event listener
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 135) {
                this.navbar.classList.add('sticky')
            } else {
                this.navbar.classList.remove('sticky');
            }
        });
    }
}

customElements.define('header-component', Header)