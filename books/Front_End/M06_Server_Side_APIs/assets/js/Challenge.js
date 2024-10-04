const apiKey = '0507c0b544c52b560108324ab384c863'; // OpenWeather API Key ထည့်ပါ

        function fetchWeather() {
            const city = document.getElementById('cityInput').value || 'Yangon';
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=my`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // data ထဲက အချက်အလက်ကို ကြည့်ရှုနိုင်ပါတယ်

                    const weatherInfoDiv = document.getElementById('weatherInfo');
                    weatherInfoDiv.innerHTML = ''; // ရှိပြီးသားအချက်အလက်များကိုရှင်းလင်း

                    // ၃ရက်အတွက် မိုးလေဝသကို ဖော်ပြရန်
                    for (let i = 0; i < 3; i++) {
                        const weatherData = data.list[i * 8]; // 8 ချိန်ကာလ = ၁ရက်
                        const date = new Date(weatherData.dt_txt).toLocaleDateString('my-MM', {
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                        });

                        const weatherHTML = `
                            <div class="weather">
                                <h2>${data.city.name}, ${data.city.country} (${date})</h2>
                                <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather Icon" />
                                <p>အပူချိန်: ${weatherData.main.temp}°C</p>
                                <p>အခြေအနေ: ${weatherData.weather[0].description}</p>
                                <p>လေတိုက်နှုန်း: ${weatherData.wind.speed} m/s</p>
                                <p>စိုထိုင်းဆ: ${weatherData.main.humidity}%</p>
                            </div>
                        `;
                        weatherInfoDiv.innerHTML += weatherHTML;
                    }

                    weatherInfoDiv.style.display = 'block';
                })
                .catch(error => {
                    alert('အမှားဖြစ်နေပါသည်၊ မြို့နာမည်ကို ပြန်စစ်ပါ');
                    console.error('Error fetching weather data:', error);
                });
        }