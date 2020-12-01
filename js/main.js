// THIS IS THE MOBILE MENU
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// THIS FOR THE SLIDER
  $(document).on('ready', function() {
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true
    });
  });


// THIS FOR THE FORM REDIRECT
window.addEventListener("DOMContentLoaded", function() {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("contactform");
   // var button = document.getElementById("my-form-button");
   var status = document.getElementById("my-form-status");

   // Success and Error functions for after the form is submitted

   function success() {
     form.reset();
     // button.style = "display: none ";
     status.innerHTML = "Thanks!";
   }

   function error() {
     status.innerHTML = "Oops! There was a problem.";
   }

   // handle the form submission event

   form.addEventListener("submit", function(ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }
