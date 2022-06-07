const order = {};

if (order.customer?.address?.city) {
  console.log('City is required');
}


console.log(order.customer?.address?.city); // Output: undefined (ho aggiornato all'ultima versione e mi ritorna undefined);