
(function () {
    emailjs.init("MGKTrkT5Yf2hcqF6T"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !phone || !message) {
        errorMsg.classList.add('show');
        successMsg.classList.remove('show');
        return;
    }
    
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    
    successMsg.classList.remove('show');
    errorMsg.classList.remove('show');

    emailjs.send("service_ax2a4la", "template_n1l8all", { 
        name: name,
        email: email,
        phone: phone,
        message: message,
    })
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        
        successMsg.classList.add('show');
        errorMsg.classList.remove('show');
        
        document.getElementById('contactForm').reset();
        
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
    }, function (error) {
        console.log('FAILED...', error);
        
        errorMsg.classList.add('show');
        successMsg.classList.remove('show');
        
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        
        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 5000);
    });
});
