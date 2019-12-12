function pageone() {
  var a = document.getElementById("username").value;
  localStorage.setItem("myname", a);
  location.href = "pagetwo.html";
}

////////////////////This is for pagetwo.html//////////////////////////
function duh() {
  var b = localStorage.getItem("myname");
  window.alert(b);
}
