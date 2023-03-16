# Ngrx
## A simple project that we made from the basic NgRX videos of our teacher Taner Saydam.
## By doing research on NgRX with this project, I researched the basics of NgRX and wanted to share it here.
# NGRX Basics
## NGRX Store is inspired by Redux which provides State management for the angular applications and it is RXJS powered which boosts the performance and consistency of angular apps.
## Actions are dispatched from the components and services. These are just unique events with type and payload and can be dispatched to the store
## Reducers are the pure functions that take the latest action and current state and return the new state.
## Selectors are the pure functions that enable us to select a slice of the state.
## The State can be accessed through Store observables in components and service
## For example, If your component needs new data from the API, the component dispatches an action, the reducers invoke the effects and services to the get the new data, reducer returns the new state with that data from API.
# Project Overwiew
## There are products at home component and there is a Add Product button for adding products.In this project, card layout is used for listing the products.
## At top of the site there is a navbar including Home and Basket link.
## At the card there is a Add Basket button. If you click this button Basket number is increasing at the navbar section.We can see the products that added to the Basket.
## We use json-server on this project to use http requests.
## We created reducer.ts file to make it type safe. In Appmodule, we will now call our Reduces from here.
## Ex. => // StoreModule.forRoot({"baskets": BasketsReducer})
## StoreModule.forRoot(Reducers.baskets)
## To make the Store structure in navbar.component.ts more type-safe, I created the stroe.ts interface file under state and I will now use this structure in navbar.component.ts. Likewise, our Store structure in home.component.ts is also type-safe. we made
## I write npm i json-server to the terminal to set up a server within the application. We create our server folder and create a db.json file in it. Then, we start our server at localhost:3000 by typing json-server --watch db.json in the new terminal.
## This is a learning project so there are missings.
<img
  src="src\assets\3.jpeg"
  alt="kanban-notebook"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

 <img
  src="src\assets\1.webp"
  alt="kanban-notebook"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
