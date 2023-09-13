function get_number_digits(number){
    if (number == 0) return 1

    let number_of_digits = 0
    while(number > 0) {
        number = Math.floor(number/10)
        number_of_digits ++
    }
    return number_of_digits
}


function make_number_containers(number_of_digits) {
    let counter_c = document.getElementById('cc')

    // creating a number container for each digit of the number
    for (let index = number_of_digits; index > 0; index--) {
        
        // creating outer container and adding the required class and id
        let outer_c = document.createElement('div')
        outer_c.classList.add('outer-container')

        // creating number container and adding the required class
        let num_c = document.createElement("div")
        num_c.classList.add('number-container')
        num_c.id = 'nums' + index

        // adding number div inside number container. one for each from 0-9
        for (let i = 0; i < 10; i++) {
            let num = document.createElement('div')
            num.classList.add('number')
            num.innerText = i
            num_c.appendChild(num)
        }

        outer_c.appendChild(num_c)
        counter_c.appendChild(outer_c)
    }
    
}

function counter_setter(number,salt) {
    for (let index = 1; index <= number_of_digits; index++) {
        // getting the correct number container
        let id = 'nums' + index
        let div = document.getElementById(id)

        // Geting the last digit of number
        const digit = (number % 10); 
        let value = Math.floor(SLIDE_CONST * digit)
        value = Math.round(value + (salt * digit)) // adding salt to the value

        // updating the translate value of the div after 200ms
        setTimeout(() => { div.style.transform = `translateY(-${value}px)` }, 200)
        number = Math.floor(number / 10); // Remove the last digit
    }
}

const SLIDE_CONST = 70
let number_counter = 1238
let salt = 0
let number_of_digits = get_number_digits(number_counter)
let btn_c = document.getElementById('bc')


make_number_containers(number_of_digits)
counter_setter(number_counter, salt)

btn_c.addEventListener('click',(event)=>{
    if (event.target.tagName == 'INPUT'){
        if(event.target.id == "f") number_counter ++
        if(event.target.id == "b") number_counter --
        console.log(number_counter);
        counter_setter(number_counter, salt)
    }
})
