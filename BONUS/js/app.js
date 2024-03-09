
//Si recupera l'elemento form dal DOM mediante il suo id e si memorizza nell'oggetto formElement
const formElement = document.getElementById('form-datiInput');
console.log(formElement);

//Si recupera l'elemento button dal DOM mediante il suo id e si memorizza nell'oggetto buttonElement
const buttonElement = document.getElementById('submit');  //object | null 
console.log(buttonElement);

//Si recupera l'elemento input di testo (per l'inserimento dei km) dal DOM mediante il suo id e si memorizza nell'oggetto kmInputElement
const kmInputElement = document.getElementById('km'); // object | null 
console.log(kmInputElement);

//Si recupera l'elemento select (per la scelta della fascia d'età) dal DOM mediante il suo id e si memorizza nell'oggetto selectAgeElement 
const selectAgeElement = document.getElementById('select-age');  // object | null 

//Si recupera l'elemento div che conterrà il risultato dei calcoli mediante il suo id e si memorizza nell'oggetto resultElement
const resultElement = document.getElementById('result');   // object | null 

// Quando l'utente clicca sul bottone 'Calcola' (evento), viene eseguita la funzione anonima che calcola e visualizza il prezzo del biglietto 
formElement.addEventListener('submit', function (event) { 
    event.preventDefault();  // questo metodo impedisce il comportamento di default dell'elemento, evita che cliccando sul bottone si ricarichi la pagina
	console.log('click sul button');  

	const km = parseFloat(kmInputElement.value) // number - conversione di tipo da string a number del valore di input della casella di testo km
	console.log('numero di km percorsi: ', km);

	const ageRange = parseFloat(selectAgeElement.value); // number - conversione di tipo da string a number del valore dell'opzione scelta nel select
    console.log('Fascia d\'età: ', ageRange);

   const pricePerkm = 0.21;  // number - prezzo del biglietto per km in euro
   console.log('priceperkm: ', pricePerkm);

    const basePrice = km * pricePerkm;  // number - prezzo base del biglietto
	console.log('prezzoBase: ', basePrice);

	let discount = 0; // number - inizializzazione della variabile sconto

	if (ageRange === 1) {   
		discount = 0.2;   // percentuale di sconto da applicare se età < 18
	} else if (ageRange === 2) {
		discount = 0.4;   // percentuale di sconto da applicare se età > 65
	}

	// Si calcola il prezzo finale sottraendo lo sconto al prezzo di base
	const price = basePrice - basePrice * discount; // number
    // il prezzo viene arrotondato a due cifre decimali per eseguire la stampa
	console.log('prezzoCifreDec: ', price.toFixed(2), 'prezzo: ', price);  
	
    /* 
       Nella seconda colonna, all'interno dalla card, viene visualizzata una tabella di 5 colonne e due righe
       Nell'intestazione della tabella sono elencati i nomi delle variabili visualizzate,
       nella seconda riga della tabella compaiono i rispettivi valori delle variabili,
       visualizzabili grazie all'uso del template literals (backtick) e all'operatore $ che permette di ottenere il valore della variabile, (interpolazione).
       Il prezzo e lo sconto sono arrotondati a due cifre decimali
   */
   resultElement.innerHTML = `
  <table class="table">
    <thead>   
      <tr>
        <th>Km</th>
        <th>Prezzo base</th>
        <th>Sconto in %</th>
        <th>Sconto in &euro; </th>
        <th>Prezzo totale</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${km} </td>
        <td>${basePrice} &euro; </td>
        <td>${discount} </td>
        <td>${(basePrice * discount).toFixed(2)} &euro; </td>
         <td>${price.toFixed(2)} &euro; </td>
      </tr>
    </tbody>
  </table>
  `
})