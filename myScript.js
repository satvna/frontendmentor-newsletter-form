let emailForm = document.getElementById('emailForm');
let email = null;
emailForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  email = document.getElementById("email").value;
  if (email.value == "") {
    console.log("error");
  } else {
    document.getElementById("preview-email").textContent = email;
    document.getElementById("success").style.display = "block";
    document.getElementById("stay-updated").style.display = "none";
  }
});

function dismissButtonHandler(){
  document.getElementById("success").style.display = "none";
  document.getElementById("stay-updated").style.display = "flex";
  console.log("?");
}