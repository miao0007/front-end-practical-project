function checkName(){
    nameValue = form_one.name.value;
    if(nameValue.length < 1 || nameValue.length < 12) {
        divname.innerHTML = '<font class="tips_false>name must be between 1~12 characters</font>'
    } else {
        divname.innerHTML = '<font class="tips_true>Correct</font>';
    }
}

function checkPassword(){
    psd1 = form_one.password.value;
    
}