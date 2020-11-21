let insert=document.querySelector(".income-case")
let expense=document.querySelector(".expense-case")
let validation=document.querySelector(".validation")
let sign

function createCase(inserted)
{
    let element= document.createElement("div")
    let label=document.createElement("span")
    let price=document.createElement("span")
    let pourcent=document.createElement("span")

    element.style.borderTop="1px solid black"
    element.style.borderBottom="1px solid black"
    element.style.marginTop="30px"
    element.style.height="35px"
    element.style.width="35vw"
    element.style.marginLeft="30px"

    label.classList.add("label")
    price.classList.add("price")
    pourcent.classList.add("pourcent")

    element.appendChild(label)
    element.appendChild(price)
    element.appendChild(pourcent)
    inserted.appendChild(element)
}

    validation.addEventListener("click",function(){
        sign=document.getElementById("sign").value
        alert(sign)
    })

