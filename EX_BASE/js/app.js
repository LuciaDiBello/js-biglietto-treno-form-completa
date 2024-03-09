
//Si recupera l'elemento button dal DOM mediante il suo id e si memorizza nell'oggetto buttonElement
const buttonElement = document.getElementById('submit') //object | null 
console.log(buttonElement)

//Si recupera l'elemento input di testo km dal DOM mediante il suo id e si memorizza nell'oggetto kmInputElement
const kmInputElement = document.getElementById('km') // object | null 
console.log(kmInputElement)

//Si recupera l'elemento input di testo age dal DOM mediante il suo id e si memorizza nell'oggetto ageInputElement
const ageInputElement = document.getElementById('age')  // object | null 

//Si recupera l'elemento div che conterrà il risultato mediante il suo id e si memorizza nell'oggetto resultElement
const resultElement = document.getElementById('result')   // object | null 

/* Quando l'utente clicca sul bottone 'Calcola' (evento), viene eseguita la funzione anonima che calcola e visualizza il prezzo del biglietto */
buttonElement.addEventListener('click', function () {   
	console.log('click sul button');

	const km = parseFloat(kmInputElement.value) // number - conversione di tipo da string a number del valore di input della casella di testo km
	console.log('numero di km percorsi: ', km);

	const age = parseFloat(ageInputElement.value) // number - conversione di tipo da string a number del valore di input della casella di testo age
    console.log('eta: ', age);

   const pricePerkm = 0.21;  // number - prezzo del biglietto per km in euro
   console.log('priceperkm: ', pricePerkm);

    const basePrice = km * pricePerkm;  // number - prezzo base del biglietto
	console.log('prezzoBase: ', basePrice);

	let discount = 0; // number - inizializzazione della variabile sconto

	if (age < 18) {   
		discount = 0.2;   // percentuale di sconto da applicare se età < 18
	} else if (age > 65) {
		discount = 0.4;   // percentuale di sconto da applicare se età > 65
	}

	// Si calcola il prezzo finale sottraendo lo sconto al prezzo di base
	const price = basePrice - basePrice * discount; // number 
    // il prezzo viene arrotondato a due cifre decimali per eseguire la stampa
	console.log('prezzoCifreDec: ', price.toFixed(2), 'prezzo: ', price);  
	
    // Il prezzo finale viene assegnato al contenuto dell'elemento div result
    resultElement.innerHTML = 'Prezzo del biglietto: ' +  price.toFixed(2) + '&euro;'	
})