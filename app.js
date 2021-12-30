const form=document.getElementById('form');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const email=document.getElementById('email');
const password=document.getElementById("password");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
   checkInputs();
})

function checkInputs(){
    const fnameValue=fname.value.trim();
    const lnameValue=lname.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();

    if(fnameValue===''){
        setErrorFor(fname, 'First Name cannot be empty');
    }else{
        setSuccessFor(fname);
    }
    if(lnameValue===''){
        setErrorFor(lname, 'Last Name cannot be empty');
    }else{
        setSuccessFor(lname);
    }
    if(emailValue===''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Looks like this is not an email')
    }else{
        setSuccessFor(email);
    }
    if(passwordValue===''){
        setErrorFor(password, 'Password cannot be empty');
    }else{
        setSuccessFor(password);
    }

}

function setErrorFor(input, message){
    const formInputArea=input.parentElement;
    const errorText=formInputArea.querySelector('.error-text');
    const errorIcon=formInputArea.querySelector('.error-icon');
    const formInput=formInputArea.querySelector('.form-input');
    errorText.classList.remove('noShow');
    errorText.innerText=message;
    formInputArea.style.paddingBottom='20px';
    errorIcon.classList.remove('noShow');
    formInput.classList.add('error-border');
}

function setSuccessFor(input){
    const formInputArea=input.parentElement;
    const errorText=formInputArea.querySelector('.error-text');
    const errorIcon=formInputArea.querySelector('.error-icon');
    const formInput=formInputArea.querySelector('.form-input');
    errorText.classList.add('noShow');
    errorText.innerText='';
    formInputArea.style.paddingBottom='0px';
    errorIcon.classList.add('noShow');
    formInput.classList.add('success-border');
}

function isEmail(emailValue){
 return   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)
}