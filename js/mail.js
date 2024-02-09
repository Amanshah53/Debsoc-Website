function sendMail(event){

    
    event.preventDefault()
    
    var params ={
        from_name: document.getElementById('name').value,
        email_id : document.getElementById('email').value,
        message : document.getElementById('message').value
    }

    emailjs.send("service_hhp81td","template_gy1idlu",params).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error.message);
        },
    );
}