function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');
  const mensagem = document.getElementById('mensagem-login');

  errorMsg.textContent = "";
  mensagem.style.display = "none";

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => { 
      mensagem.textContent = "Login bem-sucedido!";
      mensagem.style.display = "block";
    
    setTimeout(() => {
      window.location.href = "assets/PAGES/page1.html";
    }, 1500);
  })
    .catch((error) => {
      errorMsg.textContent = "Erro: " + error.message;
    });
}
