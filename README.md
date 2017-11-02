# IReq-BE
Back-end

to use this server:

-clone the repo to your local machine

-run npm install

-run npm start 

-make requests to localhost:9007/{route (see below)}


list of routes:

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


                ******************UPDATE******************* 
     the product route now works the same as the tickets one as in it can update any property on the product

 PUT '/products/:_id?{key}={true/false}' able to alter the stock of a product by _id by adding the query params key of whatever you choose followed by the desired boolean

 
 PUT '/tickets/:_id?{key}={true/false}' able to alter the ticket by _id adding the query params key of either 'isComplete', 'isViewed','isCanceled' followed by the desired boolean               


example- get all of the tickets:

GET request on postman to localhost:9007/tickets