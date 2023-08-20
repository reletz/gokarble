function goToBuy (){
    window.location.assign("buyForm.html");
}

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

function keAbout(){
    setTimeout(()=> {
        window.location.replace('aboutUs.html')
    }, 3000)
}