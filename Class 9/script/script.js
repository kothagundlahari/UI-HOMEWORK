

(function() {
    'use strict';

    var flights = document.querySelector('#flights');

    flights.addEventListener('click', function(e) {
        if (e.target) {
            if (e.target.matches('a#flight4')) {
                console.log(e.target.innerText, 'was clicked - so book your ticket');
            } else {
                console.log(e.target.innerText, 'was clicked (with event delegation)');
            }
        }
    }, false);

   
})();

   

