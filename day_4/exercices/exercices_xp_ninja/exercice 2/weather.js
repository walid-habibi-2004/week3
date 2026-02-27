const axios = require("axios");
const chalk = require("chalk");

const API_KEY = "5002a4808efbcf2110e4c0a034d4f95f";

async function getWeather(city) {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: "metric"
                }
            }
        );

        const data = response.data;

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        console.log(chalk.blue.bold("\n Weather Dashboard"));
        console.log(chalk.green(`City: ${data.name}`));
        console.log(chalk.yellow(`Temperature: ${temperature}°C`));
        console.log(chalk.magenta(`Description: ${description}`));
        console.log(chalk.cyan(`Humidity: ${humidity}%`));
        console.log(chalk.red(`Wind Speed: ${windSpeed} m/s\n`));

    } catch (error) {
        console.log(chalk.red("Error fetching weather data."));
        console.log(chalk.red("Make sure the city name is correct."));
    }
}

module.exports = { getWeather };
