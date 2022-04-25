
  let wallet = document.querySelector("#wallet")
  let walletAmount = localStorage.getItem("amount")

  wallet.innerText = walletAmount

let amountadd = 0;
  function addAmount() {
    let inputamount = document.querySelector("#amount").value

    amountadd = amountadd + Number(inputamount)
  
    localStorage.setItem("amount",amountadd )
    
  }

  

  // Store the wallet amount to your local storage with key "amount"

// function addAmount() {
  //   let inputamount = document.querySelector("#amount").value

  //   walletAmount.push(inputamount)

  //   let price = 0;
  //   for (var i = 0; i < walletAmount.length; i++) {
  //     price = price + Number(walletAmount[i])
  //   }
  //   

  //   localStorage.setItem("amount", JSON.stringify(walletAmount))

  // }
  //     price = 0
//   for (var i=0; i<walletAmount.length;i++) {
// price = price + walletAmount[i]
//   }
//   console.log(price)
  // console.log(amountadd)
    // walletAmount.push(amountadd)
    // window.location.reload()