// counter Loader Work start

const start = document.getElementById("cou_start");
const stop = document.getElementById("cou_stop");
const reset = document.getElementById("cou_reset");
const couInput = document.getElementById("cou_input");
const charge = document.getElementById("charge");
const brcolor = document.querySelector(".battery-sec");
const count = document.getElementById("count");

let count_value;
let countclear;
let widcolor;

start.addEventListener('click', () =>{
    count_value = couInput.value;

    countclear = setInterval(function(){
        count.innerHTML = `${count_value}%` ;

        let width = byCharge(couInput.value, count_value);
        
       charge.style.width =`${width}%`

    //   Charge Color work start

       if(width <= 15 ){
        charge.style.backgroundColor = 'red';
        brcolor.id = 'brred';
        }else if (width <= 30){
            charge.style.backgroundColor = 'orange';
            brcolor.id = 'brorange';
        }else if(width <= 50){
            charge.style.backgroundColor = '#b4f775';
            brcolor.id = 'brb4f775';
        }else if(width <= 70){
            charge.style.backgroundColor = '#85df31';
            brcolor.id = 'br85df31';
        }else{
            charge.style.backgroundColor = 'green';
        }
    // charge color work end

            if(count_value == 0){
                clearInterval(countclear);
            }

        count_value--;
    }, 1000);

});

stop.addEventListener("click", () =>{
    clearInterval(countclear);
});

reset.addEventListener("click", () =>{
    count_value = "100%";
    count.innerHTML = count_value;
    clearInterval(countclear);
    charge.style.width = '100%';
    charge.style.backgroundColor = 'green';
    brcolor.id = '';
});


// counter Loader Work end;
// battery charge % Work start;

/**
 * charge color width Calculator
 * @param {couInput.value} start_value 
 * @param {count_value} charge_value 
 * @returns charge section width ;
 */

function byCharge(start_value, charge_value){
    
    return (charge_value * 100) / start_value; 
}

// battery charge % Work end;



