const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "44b81114cf9fdb8f0d8bed2f3e7e6f30";
const coordenadas = {
    lat: "25.686613",
    lng: "-100.316116"
}

class climaService {
    public async getInfo() {
        let response = await fetch(`${API_URL}?lat=${coordenadas.lat}&lon=${coordenadas.lng}&units=metric&lang=es&appid=${API_KEY}`);
        let data = await response.json();
        return data;
    }
}

export default new climaService();