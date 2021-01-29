

  function fareChange(fare, isIncrease){
  const fareInput = document.getElementById(fare + '-count');
  const fareCount = parseInt(fareInput.value);
  let fareNewCount = fareCount;
  if(isIncrease == true){
    fareNewCount = fareCount + 1;
  }
  if(isIncrease == false && fareCount > 0){
    fareNewCount = fareCount - 1;
  }
  fareInput.value = fareNewCount;
  // const economyTotal = economyNewCount * 59;
  let fareTotal = 0;
  if(fare == 'first'){
    fareTotal = fareNewCount * 150;
  }
  if(fare == 'economy'){
    fareTotal = fareNewCount * 100;
  }
  document.getElementById(fare + '-total').innerText = fareTotal;
  calculateTotal();
  }


  function calculateTotal(){
    // const firstInput = document.getElementById('first-count');
    // const firstCount = parseInt(firstInput.value);

    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = Math.round(totalPrice * .1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
  }

  function getInputValue(fare){
    const fareInput = document.getElementById(fare + '-count');
    const fareCount = parseInt(fareInput.value);
    return fareCount;
  }