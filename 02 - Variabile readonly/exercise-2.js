function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

 

  console.log(personName);
}

canPlay();

// Ho inserito const per restituire l'errore TyperError.