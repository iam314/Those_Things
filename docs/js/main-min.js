function openNav(){document.getElementById("mySidenav").style.width="100%",document.getElementById("main").style.marginLeft="100px"}function closeNav(){document.getElementById("mySidenav").style.width="0",document.getElementById("main").style.marginLeft="0"}function ajax(e,t,n,a,o){var s=new XMLHttpRequest;s.open(e,t),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?a(s.response,s.responseType):o(s.status,s.response,s.responseType))},s.send(n)}$(document).on("ready",(function(){$(".lazy").slick({lazyLoad:"ondemand",infinite:!0})})),window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("contactform"),t=document.getElementById("my-form-status");function n(){e.reset(),t.innerHTML="Thanks!"}function a(){t.innerHTML="Oops! There was a problem."}e.addEventListener("submit",(function(t){t.preventDefault();var o=new FormData(e);ajax(e.method,e.action,o,n,a)}))}));