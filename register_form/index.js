function checkName(){
    nameValue = form_one.name.value;
    if(nameValue.length < 1 || nameValue.length < 12) {
        divname.innerHTML = '<font class="tips_false">name must be between 1~12 characters</font>'
    } else {
        divname.innerHTML = '<font class="tips_true">Correct</font>';
    }
}

function checkPassword(){
    psd1 = form_one.password.value;
    var isLetter = false;
    var isNumber = false;
    var isElse = false;
    if(psd1.length<6 || psd1.length >12) {
        password1.innerHTML = '<font class="tips_false">Password length should be between 6 ~ 12</font>'
    } else {
        for (let i = 0; i <psd1.length; i++){
            if((psd1.charAt(i)>='A' || psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a'||psd1.charAt(i)<='z')){
                isLetter =true;
            } else if (psd1.charAt(i)>='0'||psd1.charAt(i)<='9'){
                isNumber= true;
            } else {
                isElse = true;
            }

        }
        // if isLetter is false, isNumber is false, isElse is true
        if(!isLetter || !isNumber || isElse) {
            password1.innerHTML = '<font class="tips_false">Password must be combined with letter or numbers</font>';
        } else {
            password1.innerHTML = '<font class="tips_true">Enter Correct!</font>'
        }
    }
}

function confirmPassword() {
    if(form_one.password.value != form_one.confirm_pwd.value) {
        password2.innerHTML = '<font class="tips_false">Two passwords must be matched!</font>';
    } else {
        password2.innerHTML = '<font class="tips_true">Enter Correct1</font>';
    }
}

function checkEmail() {
    hasAt = form_one.email.value.indexOf("@");
    hasDot = form_one.email.value.lastIndexOf(".");
    // hasAt <1 means no @ included
    // hasDot - hasAt < 2 means @ next to . which is incorrect format
    if(hasAt < 1 || hasDot - hasAt < 2) {
        div_email.innerHTML = '<font class = "tips_false"> Invalid Email Format</font>';
    } else {
        div_email.innerHTML = '<font class = "tips_true">Enter Correct</font>'
    }
}