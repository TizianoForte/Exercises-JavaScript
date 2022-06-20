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






fetchJobById = (id) => {
  setTimeout(() => {
    const job = jobs.find(item => item.id === id);
    if (job) {
      return Promise.resolve(JSON.stringify(job));
    }
    return Promise.reject(`Job with id: ${id} doesn't exist`);
  },500);
}



fetchPersonById = (id) => {
  setTimeout(() => {
    const person = persons.find(item => item.id === id);
    if (person) {
      return Promise.resolve(JSON.stringify(person));
    }
    return Promise.reject(`Person with id: ${id} doesn't exist`);
  }
  , 1000);
}



async function allPromises(id) {
  const person = await fetchPersonById(id);
  const job = await fetchJobById(id);
  return `${person} ${job}`;
}


allPromises(1).then(result => {
  console.log(result);
}
).catch(err => {
  console.log(err);
}
);


//Bisogna rivederlo, mi da undefined.


