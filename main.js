var images =[
    "images\\paz_250x110103131473.jpg",
    "images\\paz_250x110059890678.jpg",
    "images\\banner_atar.jpg",
    "images\\250X110668568400.jpg",
    "images\\ez.jpg"
];

$(function() {
    
    var curImg = 0;
    setInterval(function () {
        if(curImg== images.length){
            curImg = 0;
        }
      $(".slidingImage").attr("src",  images[curImg++]);
    }, 5000);
});


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