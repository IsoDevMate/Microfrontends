import faker from 'faker';
import webpack from 'webpack';
//import { createRequire } from "module";
//const require = createRequire(import.meta.url);
let products = '';

for (let i=0; i<3;i++){
    const name = faker.commerce.productName()
    //console.log(name)
    products +=`<div>${name}</div>`
}
   document.querySelector('#dev-product').innerHTML = products
