function checking() {

const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm')

if (password.value === confirmPassword.value){
    confirmPassword.setCustomValidity('')
}
else{
    confirmPassword.setCustomValidity('Senhas diferentes!')
}

}
