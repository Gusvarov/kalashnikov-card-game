const out1 = document.querySelector('.out');
const out2 = document.querySelector('.out2');
const button = document.getElementById('button');
const random = Math.floor(Math.random() * Math.floor(54));
const reset = document.querySelector('#reset');

const deck = {
    1: '2 black', 2: '2 buba', 3: '2 pika', 4: '2 cherva',
    5: '3 black', 6: '3 buba', 7: '3 pik', 8: '3 cherva',
    9: '4 black', 10: '4 buba', 11: '4 pika', 12: '4 cherva',
    13: '5 black', 14: '5 buba', 15: '5 pik', 16: '5 cherva',
    // 1: '2 black', 2: '2 buba', 3: '2 pika', 4: '2 cherva',
    // 5: '3 black', 6: '3 buba', 7: '3 pik', 8: '3 cherva',
    // 1: '2 black', 2: '2 buba', 3: '2 pika', 4: '2 cherva',
    // 5: '3 black', 6: '3 buba', 7: '3 pik', 8: '3 cherva',
    }




for ( let key in deck ) {
    console.log(key)

}

function getRandom() {
	return Math.random();
}

button.addEventListener('click', function casinoThird() {
	if ( getRandom() <= 0.33 ) {
        out.innerText = '1-12';

  } else if ( getRandom() >= 0.33 && getRandom() <= 0.67 ) {
        out.innerText = '12-24';

  } else {
  	    out.innerText = '24-36';

  }
})



