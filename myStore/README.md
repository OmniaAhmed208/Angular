# myStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- ======================= Description =========================== -->

## Header

-Contains a 2 link to go to the cart page or Product List
-the pages linked by router-link

## Product List (Home Page)

-Products fetched from json file.

-When selecting products, it is not allowed to add an item with a value of 0 to the cart.

-If you choose the product by the number you want and you choose again, it will modify the old number of the product by function called (onSelected) brings value which called by `ngModelChange` and function is called (buy) adds the product by number.

## Product Description (Product)

This page describes the product and its price and can be purchased from it and if you chose this product before it will make an adjustment to its old value

## Cart Page

-This page displays the products that you have selected and added from the local storage, and the number of products can be adjusted again, the price can be adjusted from the Updata price button, and the item can also be deleted from the delete button. 

-To confirm what you want, you must fill out the form first and then click on Submit. and that is through ngForm for form tag and ngModel for inputs

## Confirmation Page

This page used @input and @output and a button to return to the Product List page and it was called in the cograts page and gave it the username and the total price
