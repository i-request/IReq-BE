# IReq-BE
Back-end

list of routes:

GET '/' returns 'hey whats up'
GET '/products' returns an array of all the products
GET '/tickets' returns an array of all the tickets
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
                    inStock:BOOLEAN,
                    allergens:ARRAY, 
                }
 PUT '/products/:_id?inStock={true/false}' able to alter the stock of a product by _id by adding the query params key of 'inStock' followed by the desired boolean
 
 PUT '/tickets/:_id?{key}={true/false}' able to alter the ticket by _id adding the query params key of either 'isComplete', 'isViewed','isCanceled' followed by the desired boolean               
