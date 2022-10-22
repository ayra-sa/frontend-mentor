
const billingDuration = document.querySelector(".pricing-plans__toggle")
const toggle = document.querySelector(".toggler")

let slider = document.querySelector(".slider")
let fill = document.querySelector(".fill")

const noOfPages = document.querySelector(".noofpages")
const totalCost = document.querySelector(".total__amount")

setBar()

toggle.addEventListener("click",function(){
    billingDuration.classList.toggle("yearly"); 
    billingDuration.classList.contains("yearly") ? billingDuration.style.backgroundColor = "Green" : billingDuration.style.backgroundColor = "hsl(223, 50%, 87%)"
        
})


function setBar(){
    fill.style.width = slider.value + "%";
    let planType = !billingDuration.classList.contains("yearly");
    planPrices(planType);
    
}


function planPrices(a){
    switch (slider.value) {
        case "0":
            
            noOfPages.textContent = "10K"
            a==true ? totalCost.textContent = "$8.00" : totalCost.textContent = "$6.00"
            break;

        case "25":
            
            noOfPages.textContent = "50K"
            a==true ? totalCost.textContent = "$12.00":totalCost.textContent = "$9.00"
            break;

        case "50":
            
            noOfPages.textContent = "100k"
            a==true? totalCost.textContent = "$16.00":totalCost.textContent = "$12.00"
            break;

        case "75":

            noOfPages.textContent = "500K"
            a==true ? totalCost.textContent = "$24.00": totalCost.textContent = "$18.00"
            break;

        case "100":
            
            noOfPages.textContent = "1M"
            a==true? totalCost.textContent = "$36.00":totalCost.textContent = "$27.00"
            break;
        
        default:
            break;
    }
}