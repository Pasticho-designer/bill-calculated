const amount = document.querySelector("#account");
const guests = document.querySelector("#people");
const quality = document.querySelector("#selector");
const tipAmount = document.querySelector("monton");


calculate = () => {
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = "";
    guests.value = "";
    quality.value = "";
    if(tip === "NaN"){
      tipAmount.textContent = "Tip $0 each";
      showTipAmount();
    }
    else{
      tipAmount.textContent = "Tip $" + tip + " each";
      showTipAmount();
    }
  }
  
  showTipAmount = () => {
  
    var x = document.querySelector("#monton");
   
    x.className = "show";
   
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }