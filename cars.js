const URL = "http://localhost:8080/api/cars"

document.querySelector("#btn-get-all").onclick = getAllCars
document.querySelector("#btn-find-car").onclick = fetchCar
document.querySelector("#btn-add-car").onclick = addNewCar

function fetchCar() {
    const id = document.querySelector("#input-id").value

    if(!id) {
        document.querySelector("#c-error").innerText = "No id was entered"
        clearElementText("c-brand")
        clearElementText("c-model")
        clearElementText("c-price")
        return
    }

    document.querySelector("#c-error").innerText = ""
    fetch(URL+"/"+id)
    .then(res => {
        if(!res.ok){
            return Promise.reject("Car not found")
            
        }
        return res.json()
    })
    .then(car => {
        document.querySelector("#c-brand").innerText = "Brand: " + car.brand
        document.querySelector("#c-model").innerText = "Model: " + car.model
        document.querySelector("#c-price").innerText = "Price/day: " + car.pricePrDay
    })
    .catch((error) => {
        console.log("Error", error)
        document.querySelector("#c-error").innerText = error
        clearElementText("c-brand")
        clearElementText("c-model")
        clearElementText("c-price")
    })
}

function getAllCars() {
    fetch(URL)
    .then(res => res.json())
    .then(cars => makeTable(cars))
    .catch()
}

function makeTable(cars) {
    const tableRows = cars.map(car => `
    <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.pricePrDay}</td>
    </tr>
    `)
    const tableRowsAsString = tableRows.join("")

    //Needs encode
    document.querySelector("#table-body-cars").innerHTML = tableRowsAsString
}

function clearElementText(id) {
    document.querySelector(`#${id}`).innerText = ""
}

function addNewCar() {
    const brand = document.querySelector("#input-brand").value
    const model = document.querySelector("#input-model").value
    const pricePrDay = document.querySelector("#input-price").value
    const bestDiscount = document.querySelector("#input-discount").value

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        brand: brand,
        model: model,
        pricePrDay: pricePrDay,
        bestDiscount: bestDiscount
    })
}).then(res=> {
    return res.json()
})
.then(() => {
    document.querySelector("#input-brand").value = ""
    document.querySelector("#input-model").value = ""
    document.querySelector("#input-price").value = ""
    document.querySelector("#input-discount").value = ""

    document.querySelector("#n-details").innerText = "Car added:"
    document.querySelector("#n-brand").innerText = "Brand: " + brand
    document.querySelector("#n-model").innerText = "Model: " + model
    document.querySelector("#n-price").innerText = "Price/day: " + pricePrDay
    document.querySelector("#n-discount").innerText = "Best discount: " + bestDiscount


    getAllCars()
})
.catch(error => console.log('ERROR'))
}

