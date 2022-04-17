const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector('.middle_layer');

let getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = `Plz write the name before search`;
    city_name.style.color = "crimson";
    dataHide.classList.add('data_hide');
  } else {
    try {
      let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f45ac7182392fd893173ead2fdaaea38`;

      let res = await fetch(api);
      let data = await res.json();
      let arrData = [data];

      let mycity = arrData[0].name; // indore
      let myCountry = arrData[0].sys.country; // IN
      let myTemp = arrData[0].main.temp;
      let myTemp_status = arrData[0].weather[0].main;

      temp_real_val.innerText = myTemp;
      temp_status.innerText = myTemp_status;
      city_name.innerText = `${mycity} , ${myCountry}`;

      // codition to check for clouds or sunny

      if (myTemp_status == "Clear") {
        
        temp_status.innerHTML = `<i class="fa-solid fa-sun" style='color:#eccc68'></i>`
      }else if(myTemp_status == "Rain"){
        temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style='color:#a4b0be'></i>`
      }else if(myTemp_status == 'Clouds'){
        temp_status.innerHTML = `<i class="fa-solid fa-cloud" style='color:#f1f2f6'></i>`
      }else{
        temp_status.innerText = myTemp_status;
      }

      
    dataHide.classList.remove('data_hide');

      // console.log(arrData[0].sys.country);
    } catch {
      city_name.innerHTML = `Plz Enter city name correctly`;
    dataHide.classList.add('data_hide');
    }
  }
};
submitBtn.addEventListener("click", getInfo);
