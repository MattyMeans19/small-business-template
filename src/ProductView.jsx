import React, {useState} from "react";
import ProductCard from "./ProductCard";
import BigProductCard from "./BigProductCard";
import productTypes from "./ProdcutTypes";
import ProductOption from "./ProductOptions";
import inventory from "./Inventory";

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


        return(
            <div>
                <div className="my-[5%] mx-[2%] p-5 border-double border-10 bg-sky-200 lg:grid grid-cols-6 gap-2 flex flex-wrap">
                    <div className="flex flex-wrap gap-5">
                    <h1 className="text-center text-[2em] mb-[5%] underline col-start-1 col-span-2">Products</h1>
                        {productTypes.map((option) =>
                        <ProductOption 
                            key={option.id}
                            name={option.title}
                            description={option.description}
                            onSelect={ProductList}
                        />
                        )}
                    </div>
                    <div className="col-start-2 col-span-full flex flex-wrap lg:grid grid-cols-3 gap-10">
                    {!typeSelected && <h1 className="text-[2.5em] col-span-full text-center">Select a product type to browse!</h1>}
                        {typeSelected && viewList.map((product) => 
                            <ProductCard 
                                key={product.id}
                                sku={product.id}
                                title={product.name}
                                description={product.info}
                                type={product.type}
                                price={product.price}
                                img={product.img}
                                onSelect={viewProduct}
                            />
                        )}
                    </div>
                </div>
                {productSelected && <div className="fixed top-5 w-full my-[5%]">
                        <BigProductCard 
                            key={productView[0].id}
                            sku={productView[0].id}
                            title={productView[0].name}
                            description={productView[0].info}
                            type={productView[0].type}
                            price={productView[0].price}
                            img={productView[0].img}
                            onExit={ExitView}
                        />
                    </div>}
            </div>
        )
}

export default ProductView;