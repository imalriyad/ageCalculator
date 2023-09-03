
document.getElementById('calculateButton').addEventListener('click',function(){
    const DisplayContent = document.getElementById('DisplayContent')
    DisplayContent.innerText = ''
    const div = document.createElement('div')
    const nameField = document.getElementById('name')
    const name = nameField.value
    const dateOfBirthInput = document.getElementById('dateOfBirth')
    const dateOfBirth = dateOfBirthInput.value

    const birthday = new Date(dateOfBirth);
    const today = new Date()
    const timeDifference = today - birthday;
    if (name == '') {
        alert('Enter your name first!')
     }

    else if(dateOfBirth ==''){
         alert('Please provide us your Date Of Birth!')
     }

    else{
    // Convert milliseconds to days, months, and years
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const millisecondsInMonth = 30.44 * millisecondsInDay; // Average number of milliseconds in a month (considering 30.44 days per month)
    const millisecondsInYear = 365.25 * millisecondsInDay; // Average number of milliseconds in a year (considering leap years)
    
    const years = Math.floor(timeDifference / millisecondsInYear);
    const months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth);
    const days = Math.floor(((timeDifference % millisecondsInYear) % millisecondsInMonth) / millisecondsInDay);
    
    // div.innerHTML = `Hello ! <br>
    // Your age is:  years,  months, days`
    div.innerHTML = `  <h1 class="text-xl">Hello <span class="bg-success rounded px-2 text-white ">${name}!</span></h1>
    <h1 class="mt-3">Your Age : <span class="text-3xl">${years}</span> years <span class="text-3xl">${months}</span> months <span class="text-3xl">${days}</span> days</h1>`
    DisplayContent.appendChild(div)
    nameField.value = ''
    }
    


})

