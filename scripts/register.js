const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const signup_form = document.getElementById('sign_up')

signup_form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (username.value === '' || email.value === '' || password.value === '') {
        alert('Please fill in all fields.')
        return false
    }
    return true
})