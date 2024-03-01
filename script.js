let api_key='c83c7ea4a9b2d9141f3607921e672740'
let difKelvin=273.15
let urlBase='https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener(
    'click',() => {
        const ciudad=document.getElementById('ciudadEntrada').value
        if(ciudad){
            fetchDatosClima(ciudad);
        }
    }
)
function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}
function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima=document.getElementById('datosClima')
    divDatosClima.innerHTML='';

    const ciudadNombre=data.name
    const temperatura=data.main.temp
    const descripcion=data.weather[0].description
    const humedad=data.main.humidity
    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`Ciudad: ${ciudadNombre} País: ${data.sys.country}`;
    const temperaturaInfo=document.createElement('p')
    temperaturaInfo.textContent=`La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`
    const humedadInfo=document.createElement('p')
    humedadInfo.textContent=`La Humedad es: ${humedad}%`

    const descripcionINFO=document.createElement('p')
    descripcionINFO.textContent=`La descripcion es: ${descripcion}`

    const image=document.createElement('img')
    const urlImage=data.weather[0].icon
    image.src=`https://openweathermap.org/img/wn/${urlImage}@2x.png`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionINFO)
    divDatosClima.appendChild(image)
    //Styles

}

//let ciudad='London'

    
