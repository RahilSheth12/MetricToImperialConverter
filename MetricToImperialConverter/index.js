const inputNum = document.getElementById('input-num')

window.addEventListener('load', () => {
  inputNum.focus()
})

inputNum.addEventListener('keypress', (e) => {
    let inputVal = inputNum.value

    if (e.key == 'Enter') {
        document.getElementById("mtf").textContent = inputVal;
        document.getElementById("mtfv").textContent = (inputVal * 3.28084).toFixed(3);
        document.getElementById("ltg").textContent = inputVal;
        document.getElementById("ltgv").textContent = (inputVal * 0.264172).toFixed(3);
        document.getElementById("ktp").textContent = inputVal;
        document.getElementById("ktpv").textContent = (inputVal * 2.20462).toFixed(3);
    }
    
    
})