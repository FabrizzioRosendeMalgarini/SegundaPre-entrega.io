import { ProductManager } from "./productManager.js";

const productManager = new ProductManager('./products.json');

const test = async () => {

    try {
        await productManager.addProduct({});    
    } catch (error) {
        console.log('Test Case 1: ', error.message);
    }

    try {
        await productManager.addProduct({title: 'Flor', price: 1000});    
    } catch (error) {
        console.log('Test Case 2: ', error.message);
    }

    try {
        await productManager.addProduct({title: 'Flor', price: 1000, thumbnail: 'Hola', code: 'AAA', stock: 'A'});    
    } catch (error) {
        console.log('Test Case 3: ', error.message);
    }


    try {
        await productManager.addProduct({title: 'Flor', price: 1000, thumbnail: 'Hola', code: 'AAA', stock: -1});    
    } catch (error) {
        console.log('Test Case 4: ', error.message);
    }


    try {
        await productManager.addProduct({title: 'Flor', price: -1000, thumbnail: 'Hola', code: 'AAA', stock: 9});    
    } catch (error) {
        console.log('Test Case 5: ', error.message);
    }

    try {
        await productManager.addProduct({title: 'Flor1', price: 1000, thumbnail: 'Hola', code: 'AAA', stock: 4});
        await productManager.addProduct({title: 'Flor2', price: 1000, thumbnail: 'Hola', code: 'AAB', stock: 5});
        await productManager.addProduct({title: 'Flor3', price: 1000, thumbnail: 'Hola', code: 'AAC', stock: 6});
        console.log('Test Case 6: 3 productos agregados exitosamente'); 
    } catch (error) {
        console.log('Test Case 6: ', error.message); 
    }
    

    try {
        await productManager.addProduct({title: 'Flor4', price: 1000, thumbnail: 'Hola', code: 'AAC', stock: 7});
    } catch (error) {
        console.log('Test Case 7: ', error.message); 
    }

    console.log('Test Case 8: ', await productManager.getProducts());


    try {
        await productManager.addProduct({title: 'bulbo', price: 1000, thumbnail: 'Hola', code: 'nico2', stock: 7});
    } catch (error) {
        console.log('Test Case 9: ', error.message); 
    }

    try {
        console.log('Test Case 10: ', await productManager.getProductById(2));
    } catch (error) {
        console.log('Test Case 10: ', error.message); 
    }

    try {
        console.log(await productManager.getProductById(10));
    } catch (error) {
        console.log('Test Case 10: ', error.message); 
    }

    try {
        console.log(await productManager.deleteProduct(999));
    } catch (error) {
        console.log('Test Case 11: ', error.message); 
    }

    //Test Case 12: elimino un producto existente
    try {
        await productManager.deleteProduct(2);
        console.log('Test Case 12: Producto 2 eliminado'); 
    } catch (error) {
        console.log('Test Case 12: ', error.message); 
    }

    try {
        await productManager.addProduct({title: 'bulbo raiz', price: 1000, thumbnail: 'Hola', code: 'nico4', stock: 0});
    } catch (error) {
        console.log('Test Case 13: ', error.message); 
    }


    try {
        await productManager.updateProduct(101, {stock: 5, title: 'a ver a ver', id: 102, code: "bianca"});
    } catch (error) {
        console.log('Test Case 14: ', error.message); 
    }

try {
        await productManager.addProduct({title: 'bulbo raiz santi', price: 1000, thumbnail: 'Hola', code: 'nico88', stock: 0});
    } catch (error) {
        console.log('Test Case 15: ', error.message); 
    }

    try {
        await productManager.updateProduct(1000, {stock: 5, title: 'a ver a ver', id: 102, code: "bianca"});
    } catch (error) {
        console.log('Test Case 16 ', error.message); 
    }

    try {
        await productManager.updateProduct(1, {id: 999});
    } catch (error) {
        console.log('Test Case 17 ', error.message); 
    }

    try {
        await productManager.updateProduct(1, {stock: -5});
    } catch (error) {
        console.log('Test Case 18 ', error.message); 
    }


    try {
        await productManager.updateProduct(1, {code: 'AAA'});
        console.log('Test Case 19: Actualizado con éxito'); 
    } catch (error) {
        console.log('Test Case 19 ', error.message); 
    }

    try {
        await productManager.updateProduct(1, {code: 'AAC'});
        console.log('Test Case 20: Actualizado con éxito'); 
    } catch (error) {
        console.log('Test Case 20 ', error.message); 
    }
    
    try {
        await productManager.updateProduct(1, {status: 'OK'});
        console.log('Test Case 21: Actualizado con éxito'); 
    } catch (error) {
        console.log('Test Case 21 ', error.message); 
    }


}

test();