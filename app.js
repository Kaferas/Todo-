let insert=document.querySelector(".income-case")
let expense=document.querySelector(".expense-case")
let validation=document.querySelector(".validation")
let description=document.querySelector(".description_text")
let amount=document.querySelector(".amount_enter")
let expensed=document.querySelector(".expense").lastElementChild
let incomed=document.querySelector(".income").lastElementChild
let Total=document.querySelector(".top-details h3")
let month=document.querySelector(".total_budget_month")

let sign
let totalExpense=0
let totalIncome=0

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const d = new Date()


function pourcent(inmoney ,total)
{
    return (inmoney*100)/total
} 

function createCase(inserted,motif,amount)
{
    let element= document.createElement("div")
    let label=document.createElement("span")
    let price=document.createElement("span")
    let pourcent=document.createElement("span")

    element.style.borderTop=".6px solid grey"
    element.style.borderBottom=".6px solid grey"
    element.style.marginTop="20px"
    element.style.display="flex"
    element.style.justifyContent="space-evenly"
    element.style.height="30px"
    element.style.width="40vw"
    element.style.marginLeft="30px"

    label.classList.add("label")
    price.classList.add("price")
    pourcent.classList.add("pourcent")

    label.innerText=motif
    price.innerText=amount

    element.appendChild(label)
    element.appendChild(price)
    element.appendChild(pourcent)
    inserted.appendChild(element)
}

month.innerText +=" "+monthNames[d.getMonth()]

validation.addEventListener("click",function(){
        sign=document.getElementById("sign").value
        switch(sign)
        {
            case '+':
                if(description.value !== "" && amount.value !== ""){
                    createCase(insert,description.value,amount.value+" Fr")
                    totalIncome+= parseInt(amount.value,10)
                    incomed.innerText=" + "+totalIncome
                    Total.innerText=totalIncome-totalExpense
                    description.value =""
                    amount.value=""
                }
            break;

            case '-':
                if(description.value !== "" && amount.value !== ""){
                    createCase(expense,description.value,amount.value+" Fr")
                    let elemento=expense.lastElementChild.lastElementChild
                    elemento.style.fontStyle="italic"
                    elemento.style.fontSize="15px"
                    elemento.style.background="rgba(255, 150, 131,.5)"
                    elemento.style.color="black"
                    elemento.style.borderRadius="3px"
                    totalExpense+= parseInt(amount.value,10)
                    elemento.innerText=Math.round(pourcent(parseInt(amount.value,10),totalIncome))+ "%"
                    expensed.innerText=" - "+totalExpense
                    Total.innerText=totalIncome-totalExpense
                    description.value =""
                    amount.value=""
                }
            break;
        }
})
