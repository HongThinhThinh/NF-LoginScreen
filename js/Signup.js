let button = document.getElementById('btn-signup');
let emailElement = document.getElementById('txt-email');
let usernameElement = document.getElementById('txt-username');
let passwordElement = document.getElementById('txt-password');
let repasswordElement = document.getElementById('txt-repasssword');



const checkEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailElement.style.borderColor = "green";
        return true;
    }
    else {
        emailElement.style.borderColor = "red";
        return false;
    }

}
const checkUsername = (username) => {

    if (username.length > 7 && !username.includes(" ")) {
        usernameElement.style.borderColor = "green";
        return true;
    }
    else {
        usernameElement.style.borderColor = "red";
        return false;
    }
}
const checkpassword = (password) => {
    if (password.length > 7) {
        passwordElement.style.borderColor = "green";
        return true;
    }
    else {
        passwordElement.style.borderColor = "red";
        return false;
    }

}

const checkrepassword = (repassword) => {
    if (passwordElement.value == repassword) {
        repasswordElement.style.borderColor = "green";
        return true;
    }
    else {
        repasswordElement.style.borderColor = "red";
        return false;
    }

}
emailElement.addEventListener("input", event => {
    checkEmail(event.target.value)
})
usernameElement.addEventListener("input", event => {
    checkUsername(event.target.value)
})
passwordElement.addEventListener("input", event => {
    checkpassword(event.target.value)
})
repasswordElement.addEventListener("input", event => {
    checkrepassword(event.target.value)
})

const signup = () => {
    if (checkEmail(emailElement.value) &&
        checkUsername(usernameElement.value) &&
        checkpassword(passwordElement.value) &&
        checkrepassword(repasswordElement.value)
    ) {
        let newAcount = {
            username: usernameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
        };
        axios({
            url: "http://localhost:8080/account",
            method: "POST",
            data: newAcount,
        })
            .then((response) => {
                console.log(response);
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

//callback
button.addEventListener('click', signup);