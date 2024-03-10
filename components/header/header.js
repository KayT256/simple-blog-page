const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" href="path">
<header>
    <a id="home-link" href="root/"><h1>KayT's Blog</h1></a>
    <nav id="navbar">
        <ul>
            <li><a id="school-link" href="root/school/">School</a></li>
            <li><a id="daily-life-link" href="root/daily-life/">Daily life</a></li>
            <li><a id="career-link" href="root/career/">Career</a></li>
            <li><a id="question-and-answer-link" href="root/question-and-answer/">Q&A</a></li>
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

        const stylesheet = shadowRoot.querySelector('link[href="path"]')
        const title = document.title

        const homeLink = shadowRoot.getElementById('home-link')
        const schoolLink = shadowRoot.getElementById('school-link')
        const dailyLifeLink = shadowRoot.getElementById('daily-life-link')
        const careerLink = shadowRoot.getElementById('career-link')
        const qaLink = shadowRoot.getElementById('question-and-answer-link')

        function resetLink() {
            homeLink.setAttribute('href', 'root/')
            schoolLink.setAttribute('href', 'root/school/')
            dailyLifeLink.setAttribute('href', 'root/daily-life/')
            careerLink.setAttribute('href', 'root/career/')
            qaLink.setAttribute('href', 'root/question-and-answer/')
        }

        resetLink()

        if (title == 'Blog Page') {
            stylesheet.setAttribute('href', 'components/header/header.css')
            shadowRoot.querySelectorAll('a').forEach(a => {

            // 1. `a.href`:
            //    - **Type**: Property of the `<a>` element object.
            //    - **Returns**: The absolute URL. If the `href` attribute contains a relative URL, `a.href` will return the full URL including the protocol, domain, and path. 
            // This is the resolved URL based on the current location.
            //    - **Usage**: Generally used when need the fully resolved URL or when manipulating the element's destination.

            // 2. `a.getAttribute('href')`:
            //    - **Type**: Method that can be used on any HTML element to retrieve the value of a specified attribute.
            //    - **Returns**: The exact value of the attribute as it appears in the HTML. If the `href` attribute contains a relative URL, 
            // `a.getAttribute('href')` will return that relative URL without resolving it to a full URL.
            //    - **Usage**: Useful when need the exact value of the `href` attribute for processing or when the distinction between absolute and relative URLs is important for your application logic.

                a.setAttribute('href', a.getAttribute('href').replace('root/', ''))
            })
        } else {
            stylesheet.href = '../components/header/header.css'
            shadowRoot.querySelectorAll('a').forEach(a => {
                a.setAttribute('href', a.getAttribute('href').replace('root/', '../'))
            })
        }

        
        if (path.includes('/school')) {
            schoolLink.setAttribute('class', 'hover')
        } else if (path.includes('/daily-life')) {
            dailyLifeLink.setAttribute('class', 'hover')
        } else if (path.includes('/career')) {
            careerLink.setAttribute('class', 'hover')
        } else if (path.includes('/question-and-answer')) {
            qaLink.setAttribute('class', 'hover')
        }

        
    }
}

customElements.define('header-component', Header)