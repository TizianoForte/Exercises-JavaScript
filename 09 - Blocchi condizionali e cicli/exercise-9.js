function getKeys(obj) {
  let allKeys=[];
  for(let keypersons in obj){
    if (Object.keys({})){
      allKeys.push(keypersons);
    }
    }
  return allKeys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);

// output: ['firstName', 'lastName', 'age', 'city', 'job']

