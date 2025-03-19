import React, {useState} from "react";
import ProductCard from "./ProductCard";
import BigProductCard from "./BigProductCard";
import productTypes from "./ProdcutTypes";
import ProductOption from "./ProductOptions";
import inventory from "../Inventory";
import cart from "./Cart";

function ProductView(){
    const [typeSelected, changeTypeSelected] = useState(false)
    const [viewList, changeViewList] = useState()
    const [productSelected, changeProductSelected] = useState(false)
    const [productView, changeProductView] = useState()

    function ProductList(type){
        if(!typeSelected){
            changeTypeSelected(true);
        }
        const list = inventory.filter((items) => items.type == type);

        changeViewList(list)
    }

    function viewProduct(sku){
        if(productSelected){
            changeProductSelected(false)
        } else if(!productSelected){
            changeProductSelected(true)
            const product = inventory.filter((item) => item.id == sku)
            changeProductView(product)
        }
    }
    function ExitView(){
        changeProductSelected(false)
    }

    function addToCart(sku, amount){
        const cartItem = inventory.filter((item) => item.sku == sku);
        for(let i = 0; i < amount; i++){
            cart.push(cartItem);
        }
        
    
        console.log(cart);
    }


        return(
            <div className="justify-center lg:grid grid-cols-6">
                {!productSelected && <div className="my-[5%] mx-[2%] p-5 border-double border-10 bg-sky-200 col-start-1 row-start-1 lg:grid grid-cols-6 grid-rows-5 col-span-full gap-2 flex flex-wrap">
                    <div className="flex flex-wrap place-content-center lg:place-content-start gap-2 border-double border-5 shadow-2xl shadow-gray-600 p-5 row-span-full">
                    <h1 className="text-center text-[2em] mb-1 underline col-start-1 col-span-2 flex-1/1">Products</h1>
                        {productTypes.map((option) =>
                        <ProductOption 
                            key={option.id}
                            name={option.title}
                            description={option.description}
                            onSelect={ProductList}
                        />
                        )}
                    </div>
                    <div className="col-start-2 col-span-full flex flex-wrap place-content-center lg:grid grid-cols-3 gap-10">
                    {!typeSelected && <h1 className="text-[2.5em] col-span-full text-center">Select a product type to browse!</h1>}
                        {typeSelected && viewList.map((product) => 
                            <ProductCard 
                                key={product.id}
                                sku={product.id}
                                title={product.name}
                                description={product.info}
                                stock={product.stock}
                                price={product.price}
                                img={product.img}
                                onSelect={viewProduct}
                            />
                        )}
                    </div>
                </div>}
                {productSelected && <div className="col-start-1 row-start-1 col-span-full row-span-full mb-15">
                        <BigProductCard 
                            key={productView[0].id}
                            sku={productView[0].sku}
                            title={productView[0].name}
                            description={productView[0].info}
                            stock={productView[0].stock}
                            price={productView[0].price}
                            img={productView[0].img}
                            onExit={ExitView}
                            itemAdded={addToCart}
                        />
                        </div>}
            </div>
        )
}

export default ProductView;