function goToBuy (){
    window.location.assign("buyForm.html");
}

function togglePopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";   
}

function togglePopup1() {
    var popup1 = document.getElementById("1myPopup");
    popup1.classList.toggle("show");
    popup1.style.display = (popup1.style.display === "block") ? "none" : "block";   
}

function togglePopup2() {
    var popup2 = document.getElementById("2myPopup");
    popup2.classList.toggle("show");
    popup2.style.display = (popup2.style.display === "block") ? "none" : "block";   
}

var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", togglePopup);

var closeBtn1 = document.querySelector(".close-btn1");
closeBtn1.addEventListener("click", togglePopup1);

var closeBtn2 = document.querySelector(".close-btn2");
closeBtn2.addEventListener("click", togglePopup2);

function beliGame (){
    var game = document.getElementById('game').value;
    var num_of_copies = document.getElementById('num_of_copies').value;
    var totalPayment = game*num_of_copies+",-";
    document.getElementById('total').innerHTML=totalPayment;
    setTimeout(()=> {
        alert('Success!')
        window.location.assign('refer.html')
    }, 1000)
}

function keHome(){
    setTimeout(()=> {
        window.location.replace('index.html')
    }, 3000)
}