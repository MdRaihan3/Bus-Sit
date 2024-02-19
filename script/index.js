
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
        const couponText = document.getElementById('coupon-text').value;

                if (totalSelectedSeatCount < 5) {     
                    
            if((couponText=='NEW15') && (totalSelectedSeatCount == 4)){
                const applyButton = document.getElementById('apply-button');
                applyButton.classList.remove('btn-disabled');
                setElementTextById('selected-seat-numbers', totalSelectedSeatCount);
                event.target.classList.add('bg-[#1DD100]','text-white');
                
                setElementTextById('total-seat-left', totalSeatLeft);
                createSelectedSeatDiv(event);
                setElementTextById('total-price', totalPrice);                
                grandTotalPrice = totalPrice - totalPrice*15/100;
                setElementTextById('grand-total-price',grandTotalPrice)
            }   
            else if((totalSelectedSeatCount == 4) && (couponText =='Couple 20')){
                const applyButton = document.getElementById('apply-button');
                applyButton.classList.remove('btn-disabled');
                setElementTextById('selected-seat-numbers', totalSelectedSeatCount);
                event.target.classList.add('bg-[#1DD100]','text-white');
                setElementTextById('total-seat-left', totalSeatLeft);
                createSelectedSeatDiv(event);
                setElementTextById('total-price', totalPrice); 
                grandTotalPrice = totalPrice - totalPrice*20/100;
                setElementTextById('grand-total-price',grandTotalPrice)
            } 
            else{
                setElementTextById('selected-seat-numbers', totalSelectedSeatCount);
                event.target.classList.add('bg-[#1DD100]','text-white');
                setElementTextById('total-seat-left', totalSeatLeft);
                createSelectedSeatDiv(event);
                setElementTextById('total-price', totalPrice);           
                setElementTextById('grand-total-price',grandTotalPrice) 
            }                                         
        }
        else {
            return;
        }
    }
    )
}

function couponApply(){
const couponDiv = document.getElementById('coupon-apply-div');
couponDiv.classList.add('hidden')
}














