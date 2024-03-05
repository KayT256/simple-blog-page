// document.addEventListener('DOMContentLoaded', event => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             const id = entry.target.getAttribute('id');
//             const menuLink = document.querySelector(`a[href="#${id}"]`)

//             if (entry.isIntersecting) {
//                 menuLink.classList.add('focus')
//             } else {
//                 menuLink.classList.remove('focus')
//             }
//         })
//     }, {threshold: 0.5})

//     document.querySelectorAll('section').forEach(section => {
//         observer.observe(section)
//     })
// })

// Instead of using Intersection Observer API (which will lead to the error that when more than one section in the viewport satisfies the conditions, both of the menu links will be highlighted), just check which section is most near the top of the viewport.
window.addEventListener('scroll', () => {
    const sections = Array.from(document.querySelectorAll('section'))
    const sectionsOffset = sections.map(section => section.getBoundingClientRect().top)
    let minOffsetValue = sectionsOffset[0]
    let minOffsetSection = sections[0];
    let minOffsetSectionId = sections[0].getAttribute('id')

    for (let i = 0; i < sections.length; i++) {
        console.log(sectionsOffset[i])
        if (Math.abs(sectionsOffset[i]) < Math.abs(minOffsetValue)) {
            minOffsetValue = sectionsOffset[i]
            minOffsetSection = sections[i]
            minOffsetSectionId = sections[i].getAttribute('id')
        }
    }
    
    document.querySelector(`a[href="#${minOffsetSectionId}"]`).classList.add('focus')
    for (let section of sections) {
        if (section != minOffsetSection) {
            document.querySelector(`a[href="#${section.getAttribute('id')}"]`).classList.remove('focus')
        }
    }
})