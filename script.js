function encurtarUrl() {
  //validar se o link existe
  let url = document.getElementById("input-url").value;
  if(!url) {
      alert("É preciso inserir uma URL para encurtar");
      return;
  }

  //encurtar o link

  //headers
  let headers = {
      "Content-Type": "application/json",
      "apiKey": "93ba6c1e12ce4f3bb20bce4a16aa9732"
  }

  //dados
  let linkRequest = {
      destination: url,
      domain: { fullName: "rebrand.ly" }
  }

  fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(linkRequest)
  })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          let inputUrl = document.getElementById("input-url");
          inputUrl.value = json.shortUrl;
      });
}


function copiar(){
    let inputUrl = docuemnt.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL Copiada: ${inputUrl.value}`);

    if(inputUrl.value = "") {
        alert("Não há nada para copiar");
    }


    












  
} 