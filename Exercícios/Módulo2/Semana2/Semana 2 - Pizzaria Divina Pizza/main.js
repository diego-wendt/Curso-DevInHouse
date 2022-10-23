const express = require('express');
const {v4: uuidv4} = require('uuid');


const app = express();
app.use(express.json());

let pizzas = [];

app.get('/pizzas', (request, response)=>{

    const nameQuery = request.query.name || "";

    const pizzasFiltered = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

    console.log('listou todas as pizzas');
    response.json(pizzasFiltered);
})

app.post('/pizzas', (request,response)=>{
    
    const pizza = {
        id: uuidv4(),
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        ingredients: request.body.description,
        url: request.body.url 
    }
    
        const pizzaExists = pizzas.find(pizza => pizza.name === request.body.name);
    
        if(pizzaExists){
            console.log('Pizza ja existe');
            return response.status(401).json({error: 'Pizza já encontra-se cadastrada'});
        }
    
    // // OU PODERIA SER ESCRITO COMO:
    // const {name, description, price, ingredients, url} = request.body
    // const pizza = {id: uuidv4(), name, description, price, ingredients, url}



    pizzas.push(pizza);
    response.status(201).json(pizza);
    console.log('Cadastrou uma pizza');
})


app.listen(3333, ()=>{
    console.log('Servidor Online');
})