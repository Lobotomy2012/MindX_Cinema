const email = document.getElementById('email')
const password = document.getElementById('password')
const signin_form = document.getElementById('sign-in')

signin_form.addEventListener('submit', function(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users.some(user => user.email !== email.value)) {
        alert('Email not registered.')
        return false
    }
    console.log(users)
    alert('Login successful!')
    window.location.href = 'index.html'
    return true
})