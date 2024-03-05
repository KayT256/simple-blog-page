// // // document.addEventListener('DOMContentLoaded', event => {
// // //     const observer = new IntersectionObserver(entries => {
// // //         entries.forEach(entry => {
// // //             const id = entry.target.getAttribute('id');
// // //             const menuLink = document.querySelector(`a[href="#${id}"]`)

// // //             if (entry.isIntersecting) {
// // //                 menuLink.classList.add('focus')
// // //             } else {
// // //                 menuLink.classList.remove('focus')
// // //             }
// // //         })
// // //     }, {threshold: 0.5})

// // //     document.querySelectorAll('section').forEach(section => {
// // //         observer.observe(section)
// // //     })
// // // })
  
// // document.addEventListener('DOMContentLoaded', event => {
// //     var prevMenuLink = document.querySelector('a[href="#college"]');
// //     var prevSection = document.getElementById('middle-school');

// //     const observer = new IntersectionObserver(entries => {
// //         entries.forEach(entry => {
// //             const id = entry.target.getAttribute('id');
// //             var menuLink = document.querySelector(`a[href="#${id}"]`)
            
// //             console.log(Math.abs(prevSection.getBoundingClientRect().top))
// //             console.log(Math.abs(entry.target.getBoundingClientRect().top))
// //             if (entry.isIntersecting && Math.abs(entry.target.getBoundingClientRect().top) <= Math.abs(prevSection.getBoundingClientRect().top)) {
// //                 menuLink.classList.add('focus')
// //                 prevMenuLink.classList.remove('focus')
// //                 console.log(prevMenuLink)
// //                 console.log(prevSection.getBoundingClientRect().top)
// //                 prevMenuLink = menuLink;
// //                 prevSection = document.getElementById(`${id}`)
// //             } else {
// //                 menuLink.classList.remove('focus')
// //             }
// //         })
// //         console.log('___________________________')

// //         // const classes = []
// //         // document.querySelectorAll('.menu-link').forEach(menuLink => {
// //         //     classes.push(menuLink.getAttribute('class'))
// //         // });
// //         // console.log(classes)

// //         // var count = 0;
// //         // document.querySelectorAll('.menu-link').forEach(menuLink => {
// //         //     console.log("a: " + menuLink.getAttribute('class'))
// //         //     if (menuLink.getAttribute('class').includes('focus')) {
// //         //         count++
// //         //         console.log(menuLink.getAttribute('class'))
// //         //     }
// //         //     if (count > 1) {
// //         //         menuLink.classList.remove('focus')
// //         //         console.log(menuLink.getAttribute('class'))
// //         //     }
// //         //     console.log(count)
// //         // });
// //         // console.log('___________________________')
// //     }, {
// //         threshold: 0.5,
// //     })

// //     document.querySelectorAll('section').forEach(section => {
// //         observer.observe(section)
// //     })
// // })

// // // document.addEventListener('DOMContentLoaded', event => {
// // //     var section = document.getElementById('middle-school');
// // //     var menuLink = document.querySelector('a[href="#middle-school"]');
// // //     var prevSection = document.getElementById('middle-school');
// // //     var prevMenuLink = document.querySelector('a[href="#middle-school"]');

// // //     if (Math.abs(section.getBoundingClientRect().top) <= Math.abs(prevSection.getBoundingClientRect().top)) {
// // //         prevMenuLink.classList.remove('focus')
// // //         menuLink.classList.add('focus')
// // //     }
// // // })

// document.addEventListener('DOMContentLoaded', event => {
//     var prevSection = document.getElementById('middle-school');
//     var prevMenuLink = document.querySelector('a[href="#middle-school"]');
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             const section = entry.target;
//             const menuLink = document.querySelector(`a[href="#${section.getAttribute('id')}"]`);
//             if (entry.isIntersecting && Math.abs(section.getBoundingClientRect().top) <= Math.abs(prevSection.getBoundingClientRect().top)) {
//                 prevMenuLink.classList.remove('focus')
//                 menuLink.classList.add('focus')
//                 prevSection = section
//                 prevMenuLink = menuLink
//             }
//         })
//     }, {threshold: 0.5})

//     document.querySelectorAll('section').forEach(section => {
//         observer.observe(section)
//     })
// })


// Instead of using Intersection Observer API, just check which section is most near the top of the viewport
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