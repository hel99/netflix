//otvaranje novog porozora za reegistraciju
function openWin() {
    myWindow = window.open("contactUs.html", "myWindow", "width=1500,height=1000");
}



//about stranica klikom na naslov pojavi se tekst
var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }



//galerija klikom na sliku otvara se stranica koja vodi na yt
  function openBreaking() {
    bbWindow = window.open("https://www.youtube.com/watch?v=HhesaQXLuRY", "bbWindow", "width=1500,height=1000");
    setTimeout(function () {
      myWindow.close();
    }, 130000);
  }
  


//validacija formi 
  $.validator.addMethod("regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        }, "Please insert valid card id!"
    );
    $('#form').validate({
        rules: {
            ime: {
                required: true,
                minlength: 3
            },
            adresa: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                regex: "[0-9]"		
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            ime: {
                required: "Please enter your nickname!",
                minlength: "Nickname must have min 3 characters!"
            },
            adresa: {
                required: "Please enter your e-mail!",
                email: "E-mail must be valid!"
            },
            tel: {
                required: "Please enter your card id!",
            },
            password: {
                required: "Please enter your password!",
                minlength: "Password must have min 3 characters!"
            }
        }
    });