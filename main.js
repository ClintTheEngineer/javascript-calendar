const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let monthIndex = currentDate.getMonth()
const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const leapDay = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28;
const daysArray = [31,leapDay,31,30,31,30,31,31,30,31,30,31];
const date = currentDate.getDate();

let month = monthsArray[monthIndex];
const monthIndexInArray = monthsArray.indexOf(month);
const monthLength = daysArray[monthIndexInArray];

const article = document.querySelector('article');
article.textContent = `${monthsArray[monthIndex]}  ${currentYear}`;

const btnMinus = document.getElementById('btn-minus');
const btnAdd = document.getElementById('btn-add');
const btnDoubleMinus = document.getElementById('btn-double-minus');
const btnDoubleAdd = document.getElementById('btn-double-add');

btnMinus.textContent = '<';
btnAdd.textContent = '>';
btnDoubleMinus.textContent = '<<';
btnDoubleAdd.textContent = '>>';

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let chosenDate = new Date(`${monthsArray[monthIndex]} 1, ${currentYear}`);
let leadingDay = days[chosenDate.getDay()];

const numSquares = 42;
const squares = {};
for (let i = 1; i <= numSquares; i++) {
    squares[`sq-${i}`] = document.getElementById(`sq-${i}`);
  }
  
  
const calendarView = () => {
    let j = 1; 
    for (let i = 1; i <= monthLength; i++) {   
      if (leadingDay === days[i-1]) {
        for (let k = i; k <= numSquares; k++) {
          squares[`sq-${k}`].textContent = j;
          j++;
          if(j > monthLength) break;
        }
      }
    }
  };
calendarView(); 
  

    const td = document.getElementById('sq-1');
    const td2 = document.getElementById('sq-2');
    const td3 = document.getElementById('sq-3');
    const td4 = document.getElementById('sq-4');
    const td5 = document.getElementById('sq-5');
    const td6 = document.getElementById('sq-6');
    const td7 = document.getElementById('sq-7');


btnMinus.addEventListener('click', ()=>{
  const leapDay = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28;
const daysArray = [31,leapDay,31,30,31,30,31,31,30,31,30,31];
  
  const tds = [td, td2, td3, td4, td5, td6, td7];

  for (let i = 0; i < tds.length; i++) {
      tds[i].textContent = '';
  }
  
  monthIndex--;
  if(monthIndex < 0){
      monthIndex = 11;
      currentYear--;
  }
  article.textContent = `${monthsArray[monthIndex]}  ${currentYear}`;    
  
  const month = monthsArray[monthIndex];
  const monthIndexInArray = monthsArray.indexOf(month);
  const monthLength = daysArray[monthIndexInArray];
  let chosenDate = new Date(`${monthsArray[monthIndex]} 1, ${currentYear}`);
  let leadingDay = days[chosenDate.getDay()];

  let j = 1; 
  for (let i = 1; i <= monthLength; i++) {   
    if (leadingDay === days[i-1]) {
      let z = i;
      for (let k = i; k <= monthLength+z; k++) {
        squares[`sq-${k}`].textContent = j;
        j++;
        if(j >= monthLength){
          for (let l = monthLength + z; l <= numSquares; l++) {
            squares[`sq-${l}`].textContent = '';
          }            
        };         
      }
    }
  }
});


btnAdd.addEventListener('click', ()=>{
  const leapDay = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28;
const daysArray = [31,leapDay,31,30,31,30,31,31,30,31,30,31];
  
    const tds = [td, td2, td3, td4, td5, td6, td7];

    for (let i = 0; i < tds.length; i++) {
      tds[i].textContent = '';
    }

    monthIndex++;   
   if(monthIndex > 11){
    monthIndex = 0;
    currentYear++;
   }
   article.textContent = `${monthsArray[monthIndex]}  ${currentYear}`;

   const month = monthsArray[monthIndex];
   const monthIndexInArray = monthsArray.indexOf(month);
   const monthLength = daysArray[monthIndexInArray];
   let chosenDate = new Date(`${monthsArray[monthIndex]} 1, ${currentYear}`);
let leadingDay = days[chosenDate.getDay()];

let j = 1; 
    for (let i = 1; i <= monthLength; i++) {   
      if (leadingDay === days[i-1]) {
        let z = i;
        for (let k = i; k <= monthLength+z; k++) {
          squares[`sq-${k}`].textContent = j;
          j++;
          if(j >= monthLength){
            for (let l = monthLength+z; l <= numSquares; l++) {
              squares[`sq-${l}`].textContent = '';
            }            
          };         
        }
      }
    }
  })
  


  btnDoubleMinus.addEventListener('click', ()=>{
    const leapDay = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28;
const daysArray = [31,leapDay,31,30,31,30,31,31,30,31,30,31];

    const tds = [td, td2, td3, td4, td5, td6, td7];
    for (let i = 0; i < tds.length; i++) {
      tds[i].textContent = '';
    }

    currentYear--;
    article.textContent = `${monthsArray[monthIndex]}  ${currentYear}`
    
let chosenDate = new Date(`${monthsArray[monthIndex]} 1, ${currentYear}`);
let leadingDay = days[chosenDate.getDay()];

let j = 1;
    for (let i = 1; i <= monthLength; i++) {        
      if (leadingDay === days[i-1]) {
        for (let k = i; k <= numSquares; k++) {
          squares[`sq-${k}`].textContent = j;
          j++;
          if(k > monthLength)
          break;
        }
        break;
      }
    }

})

btnDoubleAdd.addEventListener('click', ()=>{
  const leapDay = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28;
const daysArray = [31,leapDay,31,30,31,30,31,31,30,31,30,31];

  const tds = [td, td2, td3, td4, td5, td6, td7];
  for (let i = 0; i < tds.length; i++) {
    tds[i].textContent = '';
  }

  currentYear++;
  article.textContent = `${monthsArray[monthIndex]}  ${currentYear}`
  
let chosenDate = new Date(`${monthsArray[monthIndex]} 1, ${currentYear}`);
let leadingDay = days[chosenDate.getDay()];

let j = 1;
  for (let i = 1; i <= monthLength; i++) {        
    if (leadingDay === days[i-1]) {
      for (let k = i; k <= numSquares; k++) {
        squares[`sq-${k}`].textContent = j;
        j++;
        if(k > monthLength)
        break;
      }
      break;
    }
  }
})