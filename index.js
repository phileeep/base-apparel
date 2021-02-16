const emailText = document.getElementsByClassName("email-textarea")
const submitButton = document.getElementsByClassName("submitButton")
const form = document.getElementsByClassName("form-entry")
const isValidEmail = emailText[0].checkValidity();
const validationIconSpan= document.getElementById("validationIconSpan")
const validationText = document.getElementById("validationText")

// console.log(validationIcon)


// if (isValidEmail) {
//     e.preventDefault();
//     console.log('it is done')
//     emailText[0].value = 'Thanks for submitting!'
// } else { 
//     console.log('not a good email')
// }


emailText[0].addEventListener('keyup', function (e){
    const isValidEmail = emailText[0].checkValidity();

    if (isValidEmail){
        console.log('it is valid')
        submitButton.disabled = false;
        validationText.innerText = ''
    } else {
        submitButton.disabled = true;
        console.log('not valid')
        validationText.innerText = 'Please provide a valid email'
    }

})


document.addEventListener('submit', (e) => {
    e.preventDefault();
    emailText[0].value = 'Thanks for submitting!'
    validationIcon.innerText = ''
})