{
    const Welcome = () => {
        console.log("Welcome in my currency conventer")
    }
    Welcome();
}
{
    const dataDownload = (firstSelect) => {

        switch (firstSelect.value) {
            case "PLN":
                pln = 1;
                euro = 0.21;
                gbp = 0.19;
                break;
            case "EURO":
                euro = 1;
                pln = 4.68;
                gbp = 0.88;
                break;
            case "GBP":
                pln = 5.30;
                euro = 1.13;
                gbp = 1;
                break;
            default:
                console.log("Wystapil blad");
                break;
        }
    }

    const calculateResult = (secondSelect) => {

        const inputElement = document.querySelector(".js-input");

        const plnValue = inputElement.value * pln;
        const euroValue = inputElement.value * euro;
        const gbpValue = inputElement.value * gbp;

        switch (secondSelect.value) {
            case "PLN":
                result = plnValue;
                break;

            case "EURO":
                result = euroValue;
                break;
            case "GBP":
                result = gbpValue;
                break;
        }
    }
    const updateResultText=(result, secondSelect)=>{
        const finalResult = document.querySelector(".js-result");
        finalResult.innerText = (` wartość: ${result.toFixed(2)} ${secondSelect.value}`);
    }
    const onFormInput=() => {

        const firstSelect = document.querySelector(".js-firstSelect");
        const secondSelect = document.querySelector(".js-secondSelect");
        
        dataDownload(firstSelect);
        calculateResult(secondSelect);
        updateResultText(result, secondSelect);

    }
    const init=()=>{
        const formElement = document.querySelector(".js-form");
    formElement.addEventListener("input", onFormInput)
    }
    init();
}



/*
Before factoring:

let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let firstSelect = document.querySelector(".js-firstSelect");
let secondSelect = document.querySelector(".js-secondSelect");
let finalResult = document.querySelector(".js-result");

formElement.addEventListener("input", () => {

    switch (firstSelect.value) {
        case "PLN":
            pln = 1;
            euro = 0.21;
            gbp = 0.19;
            break;
            case "EURO":
                euro = 1;
                pln = 4.68;
                gbp = 0.88;
                break;
            case "GBP":
                pln = 5.30;
                euro = 1.13;
                gbp = 1;
                break;
        default:
            console.log("Wystapil blad");
            break;
    }
    let plnValue = inputElement.value * pln;
    let euroValue = inputElement.value * euro;
    let gbpValue = inputElement.value * gbp;

    switch (secondSelect.value) {
        case "PLN":
          result = plnValue;
          break;
    
        case "EURO":
          result = euroValue;
          break;
          case "GBP":
          result = gbpValue;
          break;
      }
    
     
    
      finalResult.innerText =(`Przeliczona wartosc: ${result.toFixed(2)} ${secondSelect.value}`);

})*/