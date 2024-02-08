let footer = document.getElementById("footer")
const from_name = document.getElementById("from_name")
const from_email = document.getElementById("from_email")
const message = document.getElementById("message")

const currentYear = new Date().getFullYear()
footer.innerHTML = `Copyright &copy; ${currentYear}. Made with ❤ by Faizan`

const handleSendEmail = () => {
    var templateParams = {
        from_name: from_name.value,
        from_email: from_email.value,
        message: `${message.value}\nSender's email: ${from_email.value}`
    };

    emailjs.send('service_relookj', 'template_1vndkif', templateParams)
        .then(function () {
            alert("Message sent!")
            from_name.value = ""
            from_email.value = ""
            message.value = ""
        }, function (error) {
            console.log('FAILED...', error);
        });
}