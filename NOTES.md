# Intro to Express
    # Initialize a new node project:
        npm init -y
    # Install Express:
        npm install express

# Vocabulary
    # Route
        *An event listener for http requests
    # Endpoint
        * "/item", "/user", etc
    # Port
        *localhost:3000-9000

# Nodemon
    # Install Nodemon
        npm install -g nodemon

# Intro to REST API architecture
    #REST - Representational State Transfer
    #Resource - Single item (object) ina a database
        /users/fa8s096f7d
    #Collection - A collection of similar items in a database
        /users
    #Base (root) URL - https://amazon.com
    #API Endpoint - https://amazon.com/movies/fa8s096f7d
    #Parameters - /movies/:movieId
    #Query (query string) - /movies?genre=action&year=1999
    #Client - Frontend
    #Server - Intermediary
    #Request Method - CRUD - GET POST PUT DELETE

# Middleware - a function that fires on the inbetween
    #Request Body (req.body)

# UUID - creates unique IDs
    npm install uuid

# Express Router - Enables to modularize our routes in express

# Modular file organization

# URL Parameters
    #Parts of a URL
        * Base - https://amazon.com
        *Endpoint - https://amazon.com/images
        *Parameter - https://amazon.com/images/asdf7809
        *Query
    #Parameters (req.params) - GET One

# URL Queries
    #Query String - (typically to filter results)
        *Begins with the "?".
        *Built of key=value pairs.
        *Multiple queries separated by the "&".

# Middleware
    #What is it?
        *app.use()
            1. (optional) - Mount Path (endpoint)
            2. Callback function - receives the request, response objects, also the 'next' function
    #The 'NEXT' function
        *Moves on to the next middleware in line on our servers

# Console Errors in Express
    #Use a Logger
        npm install morgan

# Connecting the Front-end to the Back-end
    #Folder Structure
    #Proxy

# Status Codes
    #200 - Successful Request (GET)
    #201 - Successful Insert / Successful Update (POST/PUT)
    #401 - Unauthorized Access Attempt
    #404 - Not Found
    #500 - Server Error

# Relational vs. Non-Relational Databases
    #Relational
        *SQL, Postgres, etc.
        *Strict data requirements (no blank spaces)
        *Behaves like a grid
        *Private key = id
            userId = '1234'
        *Foreign key = id of owner
            userId = '1234'
            toDoId = '5678', foreignKey = '1234' <- userId ^
    #Non-Relational
        *MongoDB, etc
        *No strict enforcement
        *Requires Mongoose to enforce rigidity
        *Collections = [ ]
        *Documents = { }
        *Behaves like an object
        *Uses models instead of grids
            user {
                name: string
                age: number
                _id: userId
            }

            todo {
                title: string,
                _id: todoId,
                user: userId
            }
    
# Installing MongoDB
    https://coursework.vschool.io/installing-mongodb-and-postgresql/

# Introduction to Mongoose
    #npm install mongoose
    #Purpose
        *Creates Models
        *Query Data
    #Connect 
    # Mongoose Schemas
        *Blueprints for our data
    #Mongoose Models
        *Models have a Name, and a Blueprint (Schema)
        *Models are used to perform the CRUD operations on data created with the Model (GET, POST, PUT, DELETE)   