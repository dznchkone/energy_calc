window.addEventListener('DOMContentLoaded',()=>{
  let workedDays, 
      remainingDays,
      recipeMid,
      recipeDesire,
      ossStockMid,
      ossStockDesire,
      ossNotStockMid,
      ossNotStockDesire,
      aksMid,
      aksDesire,
      dopMid,
      dopDesire;

  const inputs = document.querySelectorAll('input');



})

// Формулы:
// ЧЕКИ(ШТ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (recipeDesire*(workedDays+remainingDays)-(recipeMid*workedDays))/remainingDays
// ОСС АКЦИЯ(ШТ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (ossStockDesire*(workedDays+remainingDays)-(ossStockMid*workedDays))/remainingDays
// ОСС НЕ АКЦИЯ(ШТ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (ossNotStockDesire*(workedDays+remainingDays)-(ossNotStockMid*workedDays))/remainingDays
// АКС(РУБ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (aksDesire*(workedDays+remainingDays)-(aksMid*workedDays))/remainingDays
// ДОП(РУБ.) НУЖНО ДЕЛАТЬ В ДЕНЬ: (dopDesire*(workedDays+remainingDays)-(dopMid*workedDays))/remainingDays