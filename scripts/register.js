const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const signup_form = document.getElementById('sign-up')

signup_form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (username.value === '' || email.value === '' || password.value === '') {
        alert('Please fill in all fields.')
        return false
    }
    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.')
        return false
    }
    if (!email.value.includes('@')) {
        alert('Please enter a valid email address.')
        return false
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email.value)) {
        alert('Email already registered.')
        return false
    }
    users.push([
        username.value,
        email.value,
        password.value
    ])
    localStorage.setItem("users", JSON.stringify(users))
    console.log(users)
    alert('Registration successful!')
    window.location.href = 'login.html'
    return true
})