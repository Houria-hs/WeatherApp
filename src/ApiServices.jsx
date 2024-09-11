
const ApiKey = "8b4f45728eacb9b18b46ccececf889eb"
const GetIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const GetWeatherData = async (city, units = "metric") => {
    const URL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${units}`;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);  

        if (!data.main || !data.weather) {
            throw new Error("Invalid data structure");
        }

        const {
            weather,
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            wind: { speed },
            sys: { country },
            name
        } = data;

        const { description, icon } = weather[0];
        return {
            description,
            iconURL: GetIconUrl(icon),
            feels_like,
            temp,
            temp_max,
            temp_min,
            pressure,
            humidity,
            speed,
            country,
            name
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null; 
    }
}
export default GetWeatherData;



