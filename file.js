const resultButton = document.getElementById("button");
const resultText = document.getElementById("result");

function daysTillBirthday() {
    const currentTimestamp = Date.now();
    const newDate = document.querySelector('input[type="date"]');
    let futureDate = newDate.value;
    const timeDiff1 = Date.parse(futureDate) - currentTimestamp;
    const daysTill = Math.floor(timeDiff1/ (1000 * 60 * 60 * 24));
    
    if(futureDate == '') {
        resultText.innerHTML = 'Пожалуйста, введите дату рождения.';
        resultText.classList.add('red');
    }else if(daysTill == 11 || daysTill == 12 || daysTill == 13 || daysTill == 14) {
        resultText.innerHTML = 'До вашего Дня рождения осталось ' + daysTill + ' дней.';
        resultText.classList.remove('red');
    } else if(daysTill % 10 == 1) {
        resultText.innerHTML = 'До вашего Дня рождения остался ' + daysTill + ' день.';
        resultText.classList.remove('red');
    } else if(daysTill % 10 == 2 || daysTill % 10 == 3 || daysTill % 10 == 4) {
        resultText.innerHTML = 'До вашего Дня рождения осталось ' + daysTill + ' дня.';
        resultText.classList.remove('red');
    } else {resultText.innerHTML = 'До вашего Дня рождения осталось ' + daysTill + ' дней.'; resultText.classList.remove('red');
    }
}
