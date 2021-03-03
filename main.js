function submitForm(){
    document.getElementsByClassName("contactUsForm")[0].className = "contactUsForm submitted";

    

    if(document.getElementById('email').validity.typeMismatch) {
        document.querySelector('#email + span.error').style.display = "block";
        document.querySelector('#email + span.error').textContent = 'קלט לא מתאים';
    }
    else if(document.getElementById('email').validity.valueMissing){
        document.querySelector('#email + span.error').style.display = "block";
        document.querySelector('#email + span.error').textContent = 'שדה חובה';
    }
    else{
        document.querySelector('#email + span.error').style.display = "none";
    }
}