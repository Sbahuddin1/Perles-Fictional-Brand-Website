// Navigation bar scrollin

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 

// contact form filling

function show_alert() {
  alert("Form Submitted Successfully. Thanks for choosing preles.");
}

function show_alert2() {
  alert("Email recieved Successfully, Thank you!");
}

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// smooth scrolling

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

window.scrollBy({ 
  top: 100, 
  left: 0, 
  behavior: 'smooth' 
});

// boutique search

function search_boutique() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('boutique');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="flex";                 
      }
  }
}




