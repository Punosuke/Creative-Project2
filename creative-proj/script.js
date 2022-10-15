document.getElementById("dogSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
  const url = "https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
   
            let results = "";
      results += "<img src= '" + json[0] + "' />";
      
      document.getElementById("dogResults").innerHTML = results;
    });
});
