
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
    

    div.innerHTML = ` <h1 class="text-xl font-semibold">Hello<span class="rounded text-2xl px-2 font-bold text-[#3498db]">${name}!</span></h1>
    <h1 class="mt-3 font-semibold">Your Age : <span class="text-3xl font-bold text-[#3498db]">${years}</span> years <span class="text-3xl font-bold text-[#3498db]">${months}</span> months <span class="text-3xl font-bold text-[#3498db]">${days}</span> days</h1>`
    DisplayContent.appendChild(div)
    nameField.value = ''
    }
    


})

