

let data;
let dataShow;
let divToShow = document.getElementById("data-weather");
let sreach = document.getElementById("sreach")
// let valueSerch = "suez";
// 

// function to convert date to day 
function getdayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' })
}
function getMonthName(date = new Date(), locale = 'en-US') {
    return date.toLocaleString(locale, { month: 'long' });
}



// function  search  
sreach.addEventListener('input', function () {
    valueSerch1 = sreach.value
    openConnection(valueSerch1)
})

openConnection()

function openConnection(valueSerch = "cairo") {
    let myHttp = new XMLHttpRequest;
    myHttp.open('get', `https://api.weatherapi.com/v1/forecast.json?key=44e326f4a7b24696bfc181825231008&q=${valueSerch ? valueSerch : "suez"}&days=3`)
    myHttp.send()
    console.log(valueSerch)

    myHttp.addEventListener("readystatechange", function () {

        if (myHttp.readyState == 4) {

            console.log("lol")
            data = JSON.parse(myHttp.response)
            console.log(data["location"]["name"])
            dispalyData()


        }
    })
}


// function to dispaly data in html 

function dispalyData() {
    divToShow.innerHTML = `
    <!-- card  -->
    <div class="card border-0 px-0  rounded-start-4 rounded-end-0 shadow-lg ">
        <div class="card-header d-flex justify-content-between border-0 py-0 p-0">
            <div class="filter w-100 p-3 d-flex justify-content-between">
                <div>${getdayName(new Date(data["current"]["last_updated"]))}</div>
                <div>${new Date().getDate()} ${getMonthName(new Date(data["current"]["last_updated"]))}</div>
            </div>
        </div>
        <div class="card-body text-start">
            <h5 class="card-title h2">${data["location"]["name"]}</h5>
            <div class="d-flex align-items-center">
                <h2 class="card-text ">${data["current"]["temp_c"]}&deg;C.</h2>
                <img src=${data["current"]["condition"]["icon"]} alt="">
            </div>
            <p>${data["current"]["condition"]["text"]} </p>
            <div class=" d-flex gap-3 pb-4">
                <div><i class="fa-solid fa-umbrella"></i> ${data["current"]["wind_kph"]}% </div>
                <div><i class="fa-solid fa-wind"></i> ${data["current"]["gust_kph"]}km/h</div>
                <div><i class="fa-solid fa-location-crosshairs"></i></i> East</div>
            </div>
        </div>


    </div>
    <!-- card  -->

    <!-- card  -->
    <div class="card border-0 px-0 rounded-end-0 shadow-lg ">
        <div class="card-header d-flex justify-content-between border-0 py-0 p-0">
            <div class="filter w-100 p-3 d-flex justify-content-center">
                <div>${getdayName(new Date(data["forecast"]["forecastday"][1]["date"]))}</div>
            </div>
        </div>
        <div
            class="card-body card-body-other  d-flex justify-content-center align-items-center flex-column">
            <div class="imgWeather ">
                <img src="${data["forecast"]["forecastday"][1]["day"]["condition"]["icon"] ? data["forecast"]["forecastday"][1]["day"]["condition"]["icon"] : "img/sun.png"}  " class="img-fluid" alt="">
            </div>
            <h2 class="card-text ">${data["forecast"]["forecastday"][1]["day"]["maxtemp_c"]}&deg;C.</h2>
            <span class="pb-2">${data["forecast"]["forecastday"][1]["day"]["mintemp_c"]}&deg;C.</span>
            <p>${data["forecast"]["forecastday"][1]["day"]["condition"]["text"]}</p>

        </div>


    </div>
    <!-- card  -->

    <!-- card  -->
    <div class="card border-0 px-0 rounded-start-0 rounded-end-4  shadow-lg ">
        <div class="card-header d-flex justify-content-between border-0 py-0 p-0">
            <div class="filter w-100 p-3 d-flex justify-content-center">
                <div>${getdayName(new Date(data["forecast"]["forecastday"][2]["date"]))}</div>
                <!-- <div>9August</div> -->
            </div>
        </div>
        <div
            class="card-body card-body-other  d-flex justify-content-center align-items-center flex-column">
            <div class="imgWeather ">
                <img src="${data["forecast"]["forecastday"][2]["day"]["condition"]["icon"] ? data["forecast"]["forecastday"][2]["day"]["condition"]["icon"] : "img/sun.png"}  " class="img-fluid" alt="">
            </div>
            <h2 class="card-text ">${data["forecast"]["forecastday"][2]["day"]["maxtemp_c"]}&deg;C.</h2>
            <span class="pb-2">${data["forecast"]["forecastday"][2]["day"]["mintemp_c"]}&deg;C.</span>
            <p>${data["forecast"]["forecastday"][2]["day"]["condition"]["text"]}</p>

        </div>


    </div>
    <!-- card  -->
    
    `


}



// let mydiv = document.getElementById("mydiv");
// let myHttp = new XMLHttpRequest;
// // console.log(myHttp)

// myHttp.open('get', "https://jsonplaceholder.typicode.com/posts")
// myHttp.send();

// let contant


// console.log(myHttp.response)
// console.log(myHttp.readyState)
// myHttp.addEventListener("readystatechange", function () {
//     console.log(myHttp.readyState)
//     if (myHttp.readyState == 4) {
//         console.log("yes")
//         contant = JSON.parse(myHttp.response)
//         dispalyData()
//     }

// })


// function dispalyData() {
//     for (let x = 0; x < contant.length; x++) {
//         mydiv.innerHTML += `
//         <div>
//         <div class="card text-center p-3">
//             <div class="titel h2">
//                 ${contant[x].title}
//             </div>
//             <div class="paragraph ">
//               ${contant[x].body}
//             </div>
//         </div>
//      </div>
//         `
//     }


// }


// let theallData;
// let myhttp = new XMLHttpRequest;

// myhttp.open("GET", "https://jsonplaceholder.typicode.com/posts")
// myhttp.send()

// myhttp.addEventListener("readystatechange", function () {

//     if (myhttp.readyState == 4) {
//         console.log("response good")
//         theallData = JSON.parse(myhttp.response)
//         console.log(theallData)
//     }

// })