// empty cart drop down

function emptyFunc() {
    document.getElementById("empty-drop").classList.toggle("show");
}

// adding items 
let itemsNo = document.querySelector(".items-no");

let plusCounter = document.querySelector(".plus");

plusCounter.addEventListener('click', function () {
    itemsNo.innerHTML = Number(itemsNo.innerHTML) + 1;
})


// removing items 
let minusCounter = document.querySelector(".minus");

minusCounter.addEventListener('click', function () {
    if (itemsNo.innerHTML > 0) {
        itemsNo.innerHTML = Number(itemsNo.innerHTML) - 1;
    }
})