import './style.css';
// named import
import { products } from './data/products.js';

// default import
import refs from './consts/refs.js';
import displayCardsMarkup from './templates/cardTemplate.js';
import handleOpenCardModal from './templates/modalTemplate.js';

//! v1
// import { a, b, c, d, e, addAll } from './namespace.js';

// console.log(a, b, c, d, e);
// console.log(addAll());

//! v2 namespace import
// import * as namespaceExample from './namespace.js';

// console.log(namespaceExample);
// console.log(namespaceExample.a);
// console.log(namespaceExample.addAll());

displayCardsMarkup(products, refs.productListEl);

refs.productListEl.addEventListener('click', handleOpenCardModal);
