
const allSeats = document.getElementsByClassName('select-seat');
let totalSelectedSeatCount = 0;
let totalSeatLeft = getElementNumValueById('total-seat-left');
let totalPrice = 0;
let grandTotalPrice = 0;

for (const seat of allSeats) {
    seat.addEventListener("click", function (event) {
        totalSelectedSeatCount = totalSelectedSeatCount + 1;
        totalSeatLeft = totalSeatLeft - 1;
        totalPrice = 550 + totalPrice;
        grandTotalPrice = totalPrice;
        if (totalSelectedSeatCount <= 4) {                  
                    setElementTextById('selected-seat-numbers', totalSelectedSeatCount);
                    event.target.classList.add('bg-[#1DD100]');
                    setElementTextById('total-seat-left', totalSeatLeft);
                    createSelectedSeatDiv(event);
                    setElementTextById('total-price', totalPrice);           
                    setElementTextById('grand-total-price',grandTotalPrice)
        }
        else {
            return;
        }
    }
    )
}
















