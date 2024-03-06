 document.querySelector('button').addEventListener('click', loc);
 document.addEventListener('keydown', loc_2)
 function loc_2 (e) {
    if(e.keyCode == 13) {
        document.location.href = "https://www.binance.com/ru"
    }
 }
function loc () {
   document.location.href = "https://www.binance.com/ru"
}
