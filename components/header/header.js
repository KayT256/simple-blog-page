const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" href="/components/header/header.css">
<header>
    <a href="/index.html"><h1>KayT's Blog</h1></a>
    <nav id="navbar">
        <ul>
            <li><a id="school-link" href="/school/index.html">School</a></li>
            <li><a id="daily-life-link" href="/daily-life/index.html">Daily life</a></li>
            <li><a id="career-link" href="/career/index.html">Career</a></li>
            <li><a id="question-and-answer-link" href="/question-and-answer/index.html">Q&A</a></li>
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

        const path = window.location.pathname;
        
        if (path.includes('/school')) {
            shadowRoot.getElementById('school-link').setAttribute('class', 'hover')
        } else if (path.includes('/daily-life')) {
            shadowRoot.getElementById('daily-life-link').setAttribute('class', 'hover')
        } else if (path.includes('/career')) {
            shadowRoot.getElementById('career-link').setAttribute('class', 'hover')
        } else if (path.includes('/question-and-answer')) {
            shadowRoot.getElementById('question-and-answer-link').setAttribute('class', 'hover')
        }

        
    }
}

customElements.define('header-component', Header)