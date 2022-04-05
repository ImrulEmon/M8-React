const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = (cart) =>  localStorage.setItem('shopping_cart', JSON.stringify(cart));

// Use localStorage as your db for now
const addToDb = id =>{
    const exists = getDb();
    let shopping_cart = {};
    if(!exists){
        
        shopping_cart[id]=1;
        localStorage.setItem('shopping_cart', 1);
    }
    else{
        // const newCount = Number(exists)+1;
        // localStorage.setItem(id,newCount);

        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id]=newCount;
        }
        else{
            shopping_cart[id]=1;
        }
    }
   updateDb(shopping_cart);
}

const removeFromDb = id =>{
    const exists = getDb();
    if(!exists){

    }
    else{
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
    
}

export { addToDb,removeFromDb as deleteFromDb }