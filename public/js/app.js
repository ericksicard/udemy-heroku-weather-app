console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form');
const searchElem = document.querySelector('input');
let msgOne = document.querySelector('#msg-one');
let msgTwo = document.querySelector('#msg-two');

weatherForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    msgOne.textContent = 'Loading...';
    msgTwo.innerHTML = ``;

    fetch(`/weather?address=${searchElem.value}`).then( res => {
            res.json().then( data => {
                    if ( data.err ) {
                        msgOne.textContent = data.err;
                    }
                    else {
                        msgOne.textContent = data.location;
                        msgTwo.innerHTML = `Summary: ${data.forecast.summary} <br>
                        Temperature: ${data.forecast.temperature} <br>
                        Rain Probability: ${data.forecast.precipProbability}%
                        `;
                    }
                }) 
        });
})