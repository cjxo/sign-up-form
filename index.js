const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const button = document.querySelector('button')

// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity
button.addEventListener('click', (event) => {
    if (password.value !== confirmPassword.value) {
        event.preventDefault()
        password.setCustomValidity("...")
        confirmPassword.setCustomValidity('...')
    } else {
        password.setCustomValidity('')
        confirmPassword.setCustomValidity('')
    }

    password.reportValidity()
    confirmPassword.reportValidity()
})