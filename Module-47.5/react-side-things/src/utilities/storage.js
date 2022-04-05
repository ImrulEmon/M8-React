function add(num1,num2) {
    return num1+num2;
}


const jinish =[
    {id:1, name:'bb',price: 500},
    {id:1, name:'bb1',price: 600},
    {id:1, name:'bb2',price: 700},
    {id:1, name:'bb3',price: 800}
]

const reducer = (previous, current) => previous+current.price;
const jinishTital = jinish.reduce(reducer,0);

export {add}