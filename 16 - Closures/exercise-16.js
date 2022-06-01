function createStore() {
  let Store = [];
  return function addStore(product) {
     Store.push(product.name);
      console.log(Store);
      return Store;
    }
  };

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);


// Output: dovrebbe dare il risultato richiesto con i prodotti in stock.