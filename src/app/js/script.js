// Form Validation
const form = document.querySelector('form');
const email = document.querySelector('#email');
const submit_btn = document.querySelector('#submit');

// Events
window.addEventListener('load', () => {
    email.value = "";
})

form.addEventListener('submit', e => {

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!emailRegex.test(email.value)) {
        e.preventDefault();
        show_alert();
        console.log('Invalid email');
        return false;
    }

    console.log('Form is valid');
    return true;
})

email.addEventListener('focus', e => {
    e.preventDefault();

    if(form.clientWidth < 544){
        email.classList.replace('mb-1', 'mb-3');
        email.classList.replace('border-Light_Red', 'border-Pale_Blue');
    }else{
        email.classList.replace('mb-1', 'mb-3');
        email.classList.replace('border-Light_Red', 'border-Pale_Blue');
        form.classList.replace('mb-1', 'mb-20');
    }

    placeholder_change();
    document.querySelector('.alert').remove();
    submit_btn.disabled = false;
    submit_btn.classList.replace('cursor-not-allowed', 'cursor-pointer');
})

// Helper functions
const show_alert = () => {
    const div = document.createElement('div');
    div.append("Please provide a valid email address");
    
    if(form.clientWidth < 544){
        div.className = "alert italic text-Light_Red mb-5 text-xs font-medium text-center";
        email.classList.replace('mb-3', 'mb-1');
        email.classList.replace('border-Pale_Blue', 'border-Light_Red');
        email.after(div);
    }else{
        div.className = "alert w-full px-6 italic text-Light_Red mb-20 text-xs font-semibold text-start";
        email.classList.replace('mb-3', 'mb-1');
        email.classList.replace('border-Pale_Blue', 'border-Light_Red');
        form.classList.replace('mb-20','mb-1');
        form.after(div);
    }
    
    submit_btn.disabled = true;
    submit_btn.classList.replace('cursor-pointer', 'cursor-not-allowed');
}

const placeholder_change = () => {
    email.placeholder = "example@email/com . . ."
    email.classList.replace('placeholder:text-Pale_Blue', 'placeholder:text-Very_Dark_Blue');
    email.classList.add('placeholder:font-normal');
    email.classList.add('placeholder:italic');
}