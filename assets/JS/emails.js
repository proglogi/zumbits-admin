import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjjy2B9jb2XZW4nIfMj1xDLogZc8oBd9M",
  authDomain: "estoque-naturale.firebaseapp.com",
  databaseURL: "https://estoque-naturale-default-rtdb.firebaseio.com",
  projectId: "estoque-naturale",
  storageBucket: "estoque-naturale.firebasestorage.app",
  messagingSenderId: "204707025194",
  appId: "1:204707025194:web:158dd6235e0996b6e54e53",
  measurementId: "G-ZJMVMSTSBJ"
};

const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    const avisosRef = database.ref('avisos');
    
    const tabelaBody = document.querySelector('#tabela-emails tbody');

    avisosRef.on('value', (snapshot) => {
      tabelaBody.innerHTML = '';

      if (snapshot.exists()) {
        const dados = snapshot.val();
        Object.keys(dados).forEach((id) => {
          const aviso = dados[id];
          const linha = document.createElement('tr');

          const celulaEmail = document.createElement('td');
          celulaEmail.textContent = aviso.email || 'N/A';
          linha.appendChild(celulaEmail);

          const celulaData = document.createElement('td');
          celulaData.textContent = aviso.data || 'N/A';
          linha.appendChild(celulaData);

          tabelaBody.appendChild(linha);
        });
      } else {
        const linha = document.createElement('tr');
        const celula = document.createElement('td');
        celula.setAttribute('colspan', '2');
        celula.textContent = 'Nenhum e-mail cadastrado.';
        linha.appendChild(celula);
        tabelaBody.appendChild(linha);
      }
    });