window.addEventListener('DOMContentLoaded',()=>{
  let workedDays, 
      remainingDays,
      checkMid,
      checkDesire,
      ossStockMid,
      ossStockDesire,
      ossNotStockMid,
      ossNotStockDesire,
      aksMid,
      aksDesire,
      dopMid,
      dopDesire;

  const inputs = document.querySelectorAll('input'),
        resultcheck = document.querySelector('#check'),
        resultOssStock = document.querySelector('#oss-stock'),
        resultOssNotStock = document.querySelector('#oss-not-stock'),
        resultAks = document.querySelector('#aks'),
        resultDop = document.querySelector('#dop');

  function verifyResult(result){
    if(isNaN(result) || result < 0) return 0;
    return result;
  }

  function calcCheck(){
    const result = (checkDesire*(workedDays+remainingDays)-(checkMid*workedDays))/remainingDays;
    resultcheck.textContent = verifyResult(result);
  }

  function calcOssStock (){
    const result = (ossStockDesire*(workedDays+remainingDays)-(ossStockMid*workedDays))/remainingDays;
    resultOssStock.textContent = verifyResult(result);
  }

  function calcOssNotStock (){
    const result = (ossNotStockDesire*(workedDays+remainingDays)-(ossNotStockMid*workedDays))/remainingDays;
    resultOssNotStock.textContent = verifyResult(result);
  }

  function calcAks () {
      const result = (aksDesire*(workedDays+remainingDays)-(aksMid*workedDays))/remainingDays;
      resultAks.textContent = verifyResult(result);
  }

  function calcDop () {
    const result = (dopDesire*(workedDays+remainingDays)-(dopMid*workedDays))/remainingDays;
    resultDop.textContent = verifyResult(result);
  }

  function calcTotal(){
    if(!remainingDays) {
      resultcheck.textContent = "0";
      resultOssStock.textContent = "0";
      resultOssNotStock.textContent = "0";
      resultAks.textContent = "0";
      resultDop.textContent = "0";
      return;
    }

    calcCheck();
    calcOssStock();
    calcOssNotStock();
    calcAks();
    calcDop();        
  }

  inputs.forEach(elem => {elem.addEventListener('input',(e)=>{
      switch (elem.getAttribute('id')) {
        case 'worked-days':
          workedDays = +e.target.value
          calcTotal();
          break;
        case 'remaining-days':
          remainingDays = +e.target.value
          calcTotal();
          break;
        case 'check-mid':
          checkMid = +e.target.value
          calcCheck();
          break;
        case 'check-desire':
          checkDesire = +e.target.value
          calcCheck();
          break;
        case 'oss-stock-mid':
          ossStockMid = +e.target.value
          calcOssStock();
          break;
        case 'oss-stock-desire':
          ossStockDesire = +e.target.value
          calcOssStock();
          break;
        case 'oss-not-stock-mid':
          ossNotStockMid = +e.target.value
          calcOssNotStock();
          break;
        case 'oss-not-stock-desire':
          ossNotStockDesire = +e.target.value
          calcOssNotStock();
          break;
        case 'aks-mid':
          aksMid = +e.target.value
          calcAks();
          break;
        case 'aks-desire':
          aksDesire = +e.target.value
          calcAks();
          break;
        case 'dop-mid':
          dopMid = +e.target.value
          calcDop();
          break;
        case 'dop-desire':
          dopDesire = +e.target.value
          calcDop();
          break;
      }
          
    });
  });



})

// Формулы:
// ЧЕКИ(ШТ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (checkDesire*(workedDays+remainingDays)-(checkMid*workedDays))/remainingDays
// ОСС АКЦИЯ(ШТ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (ossStockDesire*(workedDays+remainingDays)-(ossStockMid*workedDays))/remainingDays
// ОСС НЕ АКЦИЯ(ШТ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (ossNotStockDesire*(workedDays+remainingDays)-(ossNotStockMid*workedDays))/remainingDays
// АКС(РУБ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (aksDesire*(workedDays+remainingDays)-(aksMid*workedDays))/remainingDays
// ДОП(РУБ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (dopDesire*(workedDays+remainingDays)-(dopMid*workedDays))/remainingDays