const buttonCoverter = document.querySelector("button")
let inputBrl = document.getElementById("brl")
let inputUsd = document.getElementById("usd")



inputUsd.addEventListener("keyup", () =>{
    
})

inputBrl.addEventListener("keyup", ()=>{
    
})


inputUsd.value = "1000,00";
coverter("urd-to-brl")

function formatCurrency (value){

}

function fixValue(value){
    let fixedValue = value.replace(",",".")
    let floatValue = parseFloat(fixValue);

    if (!floatValue){
        floatValue = 0
    }

    return floatValue
}

function coverter (type) {
    if (type === "urd-to-brl"){

    }

    if (type === "brl-to-urd"){

    }

}

