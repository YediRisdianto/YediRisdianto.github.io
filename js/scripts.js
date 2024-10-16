
    (function () {
        emailjs.init("MGKTrkT5Yf2hcqF6T"); // Ganti YOUR_USER_ID dengan user ID dari EmailJS
    })();

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Validasi input form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !message) {
            document.getElementById('submitErrorMessage').classList.remove('d-none');
            return;
        }

        // Kirim email melalui EmailJS
        emailjs.send("service_ax2a4la", "template_n1l8all", {
            name: name,
            email: email,
            phone: phone,
            message: message,
        })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('submitSuccessMessage').classList.remove('d-none');
            document.getElementById('submitErrorMessage').classList.add('d-none');
            document.getElementById('contactForm').reset();
        }, function (error) {
            console.log('FAILED...', error);
            document.getElementById('submitSuccessMessage').classList.add('d-none');
            document.getElementById('submitErrorMessage').classList.remove('d-none');
        });
    });

