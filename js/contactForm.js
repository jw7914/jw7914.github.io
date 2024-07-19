const contactname = document.getElementById('contact-name');
const contactemail = document.getElementById('contact-email');
const contactnumber = document.getElementById('contact-number');
const contactmessage = document.getElementById('contact-message');
const contactsubject = document.getElementById('contact-subject');
const contactform = document.getElementById('contact');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const subjectError = document.getElementById('subjectError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhoneNum = phone => {
    const re = /^\+?\d{10}$/;
    return re.test(String(phone).toLowerCase());
}

contactform.addEventListener('submit', (e) => {
    let errorMessages = {name: '', phone: '', email: '', subject: '', message: ''};

    // Check if name is provided
    if (contactname.value.trim() === '') {
        errorMessages.name = 'Name is required';
    } else {
        errorMessages.name = '';
    }

    // Check if email is provided and valid
    if (contactemail.value.trim() === '') {
        errorMessages.email = 'Email is required';
    } else if (!isValidEmail(contactemail.value)) {
        errorMessages.email = 'Email is not valid';
    } else {
        errorMessages.email = '';
    }

    // Check if subject is provided
    if (contactsubject.value.trim() === '') {
        errorMessages.subject = 'Subject is required';
    } else {
        errorMessages.subject = '';
    }

    // Check if message is provided
    if (contactmessage.value.trim() === '') {
        errorMessages.message = 'Message is required';
    }
    else {
        errorMessages.message = '';
    }

    // Check if phone number is valid (if provided)
    if (contactnumber.value.trim() !== '' && !isValidPhoneNum(contactnumber.value)) {
        errorMessages.phone = 'Phone number is not valid (US Phone Numbers only)';
    }
    else {
        errorMessages.phone = '';
    }

    if (Object.values(errorMessages).some(msg => msg !== '')) {
        e.preventDefault();
        nameError.innerText = errorMessages.name;
        emailError.innerText = errorMessages.email;
        phoneError.innerText = errorMessages.phone;
        subjectError.innerText = errorMessages.subject;
        messageError.innerText = errorMessages.message;
    }

    const hCaptcha = contactform.querySelector('textarea[name=h-captcha-response]').value;
    if (!hCaptcha) {
        e.preventDefault();
        const span = document.getElementsByClassName("close")[0];
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }

    }
});

