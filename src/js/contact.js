console.log("JS carregado");

let db;

const request = indexedDB.open("FormDB",3);

request.onupgradeneeded = function (event) {
  db = event.target.result;

  if (!db.objectStoreNames.contains("campos")) {
    db.createObjectStore("campos", { keyPath: "id", autoIncrement: true });
    console.log("Store 'campos' criada");
  }
};

request.onerror = function (event) {
  console.log("ERRO AO ABRIR INDEXEDDB");
  console.log(event.target.error);
};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log("IndexedDB pronto");

  const form = document.getElementById("send-contact");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // 1. Coleta todos os dados em UM objeto
      const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value
      };

      // 2. Abre a transação
      const transaction = db.transaction("campos", "readwrite");
      const store = transaction.objectStore("campos");

      // 3. Salva o objeto INTEIRO (o autoIncrement cuida do ID)
      store.add(dados);

      transaction.oncomplete = function () {
        console.log("FORMULÁRIO COMPLETO SALVO!");
        e.target.reset(); // Limpa a tela para o próximo envio
        alert("Enviado com sucesso!");
      };
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado");
});
