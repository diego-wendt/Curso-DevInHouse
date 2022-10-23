const express = require('express');
const {v4: uuidv4} = require('uuid');


const app = express();
app.use(express.json());

let pizzas = [];
let solicitations = [];

app.get('/pizzas', (request, response)=>{

    const nameQuery = request.query.name || "";
    const pizzasFiltered = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

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

})


// ROTAS PARA SOLICITAÇÕES

app.get('/solicitations', (request,response) => {

    console.log('Listou todos os pedidos');
    response.json(solicitations);
})


app.get('/solicitations/:id', (request, response) => {
const {id} = request.params;

const solicitation = solicitations.find(solicitation => solicitation.id===id);

console.log("id",id)
response.json(solicitation)
})


app.post('/solicitations', (request, response) => {

    const {name_client, document_client, address_client, contact_client, payment_method, pizzas, observations} = request.body;
    
    const solicitation = {
        id: uuidv4(),
        name_client,
        document_client,
        address_client,
        contact_client,
        payment_method,
        pizzas,
        observations,
        order: "EM PRODUÇÃO",
    };

    solicitations.push(solicitation);


    response.status(201).json(solicitation);
})


app.listen(3333, ()=>{
    console.log('Servidor Online');
})