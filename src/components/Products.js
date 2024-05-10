import React from "react";
import { useSelector } from "react-redux";

function Products() {

    const products = useSelector(state => state.productsReducer.value); // products is an array


    return (
        <>
            <h1>PRODUCTS</h1>
            <div id="flex-container">
                {products.length > 0 && products.map((eachProduct, index) => {
                    return (
                        <div id="flex-item" key={index}>
                            <div id="product-head">                  

                                <h2>{eachProduct.title}</h2>
                            </div>
                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">$</span>
                                    {eachProduct.price}
                                </h2>                                
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Products;