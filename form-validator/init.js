document.getElementById('submit').addEventListener('click', formvalidate);

function formvalidate(event) {
    const fname = document.getElementById('name').value;
    const femail = document.getElementById('email').value;
    const fphone = document.getElementById('phone').value;
    const fzip = document.getElementById('zip').value;

    validatename();
    validateemail();
    validatephone();
    validatezip();

    if(fname === '' || femail === '' || fphone === '' || fzip === '') {
        document.querySelector('#msg').innerHTML = `<div class="alert alert-danger" role="alert">
            Fill up the form properly
        </div>`
        //hide alert
        setTimeout(
            function hideAlert() {           
                document.querySelector('.alert').remove();
            }, 3000
        )
    }else {
        document.querySelector('#msg').innerHTML = `<div class="alert alert-success" role="alert">
            Form Submitted
        </div>`;

        
        // hide alert
        setTimeout(
            function hideAlert() {           
                document.querySelector('.alert').remove();
            }, 3000
        ); 
        document.getElementById('name').value === ' ';
        document.getElementById('email').value === '';
        ocument.getElementById('phone').value === '';
        document.getElementById('zip').value === '';
    }

    document.getElementById('name').addEventListener('blur', validatename);
    document.getElementById('email').addEventListener('blur', validateemail);
    document.getElementById('phone').addEventListener('blur', validatephone);
    document.getElementById('zip').addEventListener('blur', validatezip);
    
    function validatename() {
        const name = document.getElementById('name');
        const re = /^[A-Za-z]{3,25}$/i;
    
        if(!re.test(name.value)){
            name.classList.add('is-invalid');
        }else {
            name.classList.remove('is-invalid');
        }
    }
    function validateemail() {
        const email = document.getElementById('email');
        const re = /^([a-z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
    
        if(!re.test(email.value)){
            email.classList.add('is-invalid');
        }else {
            email.classList.remove('is-invalid');
        }
    }
    function validatephone() {
        const phone = document.getElementById('phone');
        const re = /^(\+)?([0-9]){11,15}$/;
    
        if(!re.test(phone.value)){
            phone.classList.add('is-invalid');
        }else {
            phone.classList.remove('is-invalid');
        }
    }
    function validatezip() {
        const zip = document.getElementById('zip');
        const re = /^([A-Za-z]+)?[-. ]?([0-9]){4,15}$/;
    
        if(!re.test(zip.value)){
            zip.classList.add('is-invalid');
        }else {
            zip.classList.remove('is-invalid');
        }
    }
    event.preventDefault();
}

