document.querySelector("#svg2").onclick = getDetails

const URL = "https://countries.plaul.dk/api/countries/"
let firstColour
let 

function getDetails(evt) {
    const target = evt.target
    const id = target.id

    //evnede ikke at farvelægge landene

    fetch(URL+id)
    .then(res => res.json())
    .then(data => {
        document.querySelector("#name").innerText = data.name.common
        document.querySelector("#un-member").innerText = data.unMember

        //Alternativ måde at finde currencies på:
        /*
        let currency = Object.keys(data.currencies)[0]
        document.querySelector("#currencies").innerText = `${currency}, name: ${data.currencies[currency].name}, symnbol: ${data.currencies[currency].symbol}`
        */
        
        let currencies = [];
        for (prop in data.currencies) {
          currencyAsString = `${prop}, name: ${data.currencies[prop].name}, symbol: ${data.currencies[prop].symbol}`
          currencies.push(currencyAsString)
        }
        
        document.querySelector("#currencies").innerText = currencies
        document.querySelector("#capital").innerText = data.capital
        document.querySelector("#borders").innerText = data.borders.join(", ")
        document.querySelector("#flag").src = data.flag

    })
}