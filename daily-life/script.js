const changeImage = (section, image, index, type) => {
    document.querySelector(image).setAttribute('src', `./img/${section}/${section}${index}.${type}`)
}

const changeImageEvent = (section, items, type) => {
    let currentIndex = 0

    document.querySelector(`#${section} .next`).addEventListener('click', (e) => {
        currentIndex = (currentIndex + 1) % items
        changeImage(section, `#${section}-image`, currentIndex, type)
    })

    document.querySelector(`#${section} .back`).addEventListener('click', (e) => {
        currentIndex = (currentIndex - 1 +  items) % items
        changeImage(section, `#${section}-image`, currentIndex, type)
    })
}

changeImageEvent('swimming', 5, 'JPG')
changeImageEvent('coding', 3, 'png')
changeImageEvent('food', 4, 'png')

const sizingEvent = article => {
    document.querySelector(`#${article} .maximize-button`).addEventListener('click', () => {
        document.querySelector(`#${article} .content-wrapper`).classList.toggle('maximize')
        document.querySelector(`#${article} .maximize-button`).classList.toggle('up')
    })
}

sizingEvent('hobbies')
sizingEvent('food')