

const form = document.getElementById('show');
const username = document.getElementById('username');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const number = document.getElementById('number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateInputs()){
        // const formData = new FormData(form);

        //     fetch("check_email.php", {
        //         method: "POST",
        //         body: formData,
        //     })
        //         .then((response) => response.text())
        //         .then((data) => {
        //             emailStatus.textContent = data;
        //         })
        //         .catch((error) => {
        //             console.error("Error:", error);
        //         });

        // $(document).ready(function (){
        //     var email  = $('.check_email').val();
        //     $('.check_email').keyup(function(e){
        //         $.ajax({
        //             type: "POST",
        //             url: "config.php",
        //             data: {
        //                 "check_submit_btn": 1,
        //                 "email_id": email,
        //             },
        //             success: function(response){
        //                 alert(email);
        //             }
        //         })
        //     });
        // });

        form.submit();
    }


});

function setError (element,message){
    const inputGroup =element.parentElement;
    const errorDisplay=inputGroup.querySelector('.error');

    errorDisplay.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup =element.parentElement;
    const errorDisplay=inputGroup.querySelector('.error');

    errorDisplay.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    

}

const isValidEmail = (mail) => {
    return String(mail).toLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/);
}

const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const mailValue=mail.value.trim();
    const passwordValue=password.value.trim();
    const cpasswordValue=cpassword.value.trim();
    const numberValue=number.value.trim();
    

    
        if(usernameValue ===''){
            setError(username, 'username is required');
            return false;
            
    
        }else{
            setSuccess(username);
            

        }
    
        if(mailValue ===''){
            setError(mail,'mail id is required');
            return false;
            
        }
        else if(!isValidEmail(mailValue)){
            setError(mail,'provide a valid e-mail');
            return false;
            
    
        }else{
            setSuccess(mail);
            
        }
    
        if(passwordValue === ''){
            setError(password,'password is required');
            return false;
            
    
        }else if(passwordValue.length<8){
            setError(password,'password must be atleast 8 characters');
            return false;
            
            
        }else{
            setSuccess(password);
            
        }
    
        
    
        if(cpasswordValue === ''){
            setError(cpassword,'please confirm your password');
            return false;
            
    
        }else if(cpasswordValue!==passwordValue){
            setError(password,'password does not match');
            return false;
            
            
        }else{
            setSuccess(cpassword);
            
        }
    
        if(numberValue===''){
            setError(number,'number is required');
            return false;
            
        }else if(!/^[0-9]+$/.test(numberValue)) {
            showError(number, 'Contact number must contain numbers only');
            return false;
        }
        else if(numberValue.length !==10){
            setError(number,'please enter 10 numbers');
            return false;
    
        }else{
            setSuccess(number);
            return true;
            
        }
        
        
        
    
    


    
}

//}





