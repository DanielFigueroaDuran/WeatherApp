// ---------------------------Creating Api Countries ----------------------------
const form = document.querySelector("form");
const nameCity = document.querySelector("#city");
const containerClima = document.querySelector(".containerClima");

//console.log(`containerClima`)


//console.log(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
   // window.location.href = `../pages/climate.html`;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=b5cb84d1a1147bd88225f55a51448ffa&units=metric`;
      //console.log(dataApi);  
      //console.log(nameCity.value);
  
        getData(url);
    
  
    });

    
      
      const getData = async (url) => { 
        try {
          
          const response = await fetch(url);
          const data = await response.json();
          

      //console.log(data); 
      


      // <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            containerClima.innerHTML = `<p class="celcius"> ${Math.round(data.main.temp)} ºC</p>
      
                                  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                                  <p>Ciudad: ${data.name }</p>
                                
                                  <p class="windS">La velocidad del viento ${Math.round(data.wind.speed)} Km/h</p>
                                  `

    } catch (error) {
      console.log('Error');
    }
    
    };