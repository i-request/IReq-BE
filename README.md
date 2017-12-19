# IReqest-BackEnd

IRequest is a final project for the Northcoders full-time bootcamp, it is a order a pay app designed to be used for offices to provide a food and drink delivery service for any local cafe/resturaunt. This is the Server for the irequest project. It manages the cafe's products as well at the orders to that cafe, made by customers.

## Getting Started

this app is hosted here https://irequest-be.herokuapp.com

or

The project can be run locally via Node.js and npm (minmum version v8.3.0) installation instructions can be found here

https://nodejs.org/en/download/package-manager/
https://www.npmjs.com/get-npm

## Installing

using the terminal:

clone the repo to your local machine
```
git clone https://github.com/i-request/IReq-BE
```

run npm install

run npm start

```
npm install
npm start
```
server should now be listening on a port on your local machine

## Routes:

```
GET '/' returns 'hey whats up' 

GET '/payment' returns { message: 'Hello Stripe checkout server!', timestamp:{current time}}

POST '/payment' handles a stripe payemnt returns { message: {result string}, bool:{true/false depending on successful payment}}

GET '/products' returns an array of all the products 

GET '/tickets' returns an array of all the tickets 

GET '/tickets/viewed' returns an array of all the tickets that have been viewed

GET '/tickets/done' returns an array of all the tickets that have NOW been completed

GET '/tickets/cancled' returns an array of all the tickets that have been cancled

GET '/tickets/archieved' returns an array of all the tickets that have been viewed


POST '/tickets' add a given ticket object to the database in the format of:
               
               {     delivery: BOOLEAN,
                    order_content: [ ARRAY OF OBJECTS  ],
                    message: STRING,
                             }


POST '/products' adds a given product object to the database in the format of:
                
                {
                    type: STRING,   
                    name: STRING,
                    extras:ARRAY,
                    price : NUMBER,
                    temperature:STRING
                    inStock:BOOLEAN,
                    allergens:ARRAY, 
                }

 PUT '/products/:_id?{key}={true/false}' able to alter the stock of a product by _id by adding the query params key of whatever you choose followed by the desired boolean

 
 PUT '/tickets/:_id?{key}={true/false}' able to alter the ticket by _id adding the query params key of either 'isComplete', 'isViewed','isCanceled' followed by the desired boolean               
```

## Built With

express.js https://github.com/expressjs

stripe.js for node https://github.com/stripe/stripe-node

mongoose with hmongod version: 3.4.9 (MMAPv1) https://github.com/Automattic/mongoose

socket.io https://github.com/socketio/socket.io

## Authors

Daniel King https://github.com/orgs/i-request/people/d-king27

Jonathan Ward https://github.com/orgs/i-request/people/jonnyw17

Keith Pryce https://github.com/orgs/i-request/people/pokerdice

Diego Partipilo https://github.com/orgs/i-request/people/Dpartipilo


## Acknowledgments

Northcoders Organisation and all affiliated tutors
