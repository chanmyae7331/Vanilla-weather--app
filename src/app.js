function displayTemperature(response) {
let temperature = document.querySelector("#temperature");
temperature.innerhtml = response.data.main.temp;
}



let apiKey = "037821f5e82fed94604bbc6d80f916c2";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=London&appid={apiKey}`;

axios.get(apiUrl).then(displayTemperature);