// Alert after submit
document.getElementById('survey-form').addEventListener('submit', event => {
    alert('Note: This is just the demo. Your message and information will not be stored or sent.')
    event.target.reset()
})