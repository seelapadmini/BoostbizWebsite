$(document).ready(function(){
    $(".mh1").mouseover(function(){
      $(".icon1").css({"margin-top":"25px","box-shadow": "5px 5px rgb(252, 206, 3)"});
    });
    $(".mh1").mouseout(function(){
      $(".icon1").css({"margin-top":"0px","box-shadow": "none"});
    })


    $(".mh2").mouseover(function(){
        $(".icon2").css({"margin-top":"25px","box-shadow": "5px 5px rgb(252, 206, 3)"});
      });
      $(".mh2").mouseout(function(){
        $(".icon2").css({"margin-top":"0px","box-shadow": "none"});
      });


      $(".mh3").mouseover(function(){
        $(".icon3").css({"margin-top":"25px","box-shadow": "5px 5px rgb(252, 206, 3)"});
      });
      $(".mh3").mouseout(function(){
        $(".icon3").css({"margin-top":"0px","box-shadow": "none"});
      });


      $(".mh4").mouseover(function(){
        $(".icon4").css({"margin-top":"25px","box-shadow": "5px 5px rgb(252, 206, 3)"});
      });
      $(".mh4").mouseout(function(){
        $(".icon4").css({"margin-top":"0px","box-shadow": "none"});
      });
  });


 //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  