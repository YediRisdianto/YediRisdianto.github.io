document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("yGgaPU42v0L8hEBEr");

    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const successMsg = document.getElementById("successMessage");
    const errorMsg = document.getElementById("errorMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !phone || !message) {
            errorMsg.classList.add("show");
            return;
        }

        submitBtn.disabled = true;
        btnText.textContent = "Sending...";

        successMsg.classList.remove("show");
        errorMsg.classList.remove("show");

        emailjs.send(
            "service_ax2a4la",
            "template_haa20zr",
            {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
        ).then(() => {

            successMsg.classList.add("show");
            form.reset();

            submitBtn.disabled = false;
            btnText.textContent = "Send Message";

            setTimeout(() => {
                successMsg.classList.remove("show");
            }, 4000);

        }).catch((err) => {
            console.error(err);

            errorMsg.classList.add("show");

            submitBtn.disabled = false;
            btnText.textContent = "Send Message";
        });
    });
});