const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    });
  };

  function fetchJobById(id) {
    return new Promise((resolve, reject) => {
      const job = jobs.find(item => item.id === id);
      if (job) {
        return resolve(JSON.stringify(job));
      }
      return reject(`Job with id: ${id} doesn't exist`);
    });
  }






  fetchPersonById(1)
  .then (person => {
    console.log(person);
    return fetchJobById(1);
})
  .then (job => {
    console.log(job);
  })
  .catch(error => console.log(error));


  // Output : dovrebbe essere giusto, anche se bisogna indicare neccessariamente l'id in entrambe le funzioni. In automatico sarebbe perfetto penso....




  

