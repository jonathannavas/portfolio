function send() {
    emailjs.send("service_5i64p1m","template_6c5xux9",{
        from_name: document.querySelector('#name').value,
        to_name: "jonathan navas",
        message: document.querySelector('#message').value,
        to_email: "jonathan.navas9@hotmail.com",
        user_email: document.querySelector('#email').value,
    }).then(response=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message send',
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
            window.location = window.location.href;
        })
    },(err)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Send mail failed',
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
            window.location = window.location.href;
        })
    });
}

const form = document.querySelector('#formEmail');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if(name.length>2 && email.length>5 && message.length>1){
        send();
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Send mail failed',
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
            window.location = window.location.href;
        })
    }
    
}
