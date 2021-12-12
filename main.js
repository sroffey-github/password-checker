let timeout;

let password = document.getElementById('passwd')
let strength = document.getElementById('strength')

let strong = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let medium = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){

    if(strong.test(PasswordParameter)) {
        strength.style.backgroundColor = "green"
        strength.textContent = 'Strong'
    } else if(medium.test(PasswordParameter)){
        strength.style.backgroundColor = 'orange'
        strength.textContent = 'Medium'
    } else{
        strength.style.backgroundColor = 'red'
        strength.textContent = 'Weak'
    }
}

password.addEventListener("input", () => {

    strength.style.display= 'block'
    clearTimeout(timeout);

    timeout = setTimeout(() => StrengthChecker(password.value), 100);

    if(password.value.length !== 0){
        strength.style.display != 'block'
    } else{
        strength.style.display = 'none'
    }
});