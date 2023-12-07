import { useContext, useState } from 'react'
import './ProductPack.css'
import ProductCard from '../../../module/ProductCard/ProductCard'
import productContext from '../../../../contexts/productContext'
import swal from 'sweetalert'

function ProductPack() {
    const productData = useContext(productContext)
  
    const [menuProduct , SetMenuProduct] =useState('proSeller')

    const handlerProductPack = (ProductID)=>{
        SetMenuProduct(ProductID)
    }
  return (
    <section className="productPack">
        <div className="container">
            <div className="row">
                <div className="productPack-buttons">
                    <button className={`productPack-btn ${menuProduct === 'proSeller'?"productPack-btnActive":null}`} onClick={()=>handlerProductPack('proSeller')} >پروفروش</button>
                    <button className={`productPack-btn ${menuProduct === 'new'?"productPack-btnActive":null}`} onClick={()=>handlerProductPack('new')} >تازه رسیده</button>
                    <button className={`productPack-btn ${menuProduct === 'better'?"productPack-btnActive":null}`} onClick={()=>handlerProductPack('better')} >رتبه برتر</button>
                </div>
            </div>
            <div className="row mt-5">
                {menuProduct === 'proSeller' && (
                    productData.products.filter(product => product.pattern.includes('proSeller')).map(product=>(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                        <ProductCard {...product} price={product.price.toLocaleString()}
                               addToBasket={()=>{
                            let isProductInBasket = productData.userBasket.some(basketProduct => 
                                basketProduct.name === product.name 
                            );
                            
                            if (isProductInBasket) {
                                swal({ title: "این محصول در سبد خرید وجود دارد", icon: "warning" });
                            } else {
                                swal({ title: "محصول اضافه شد", icon: "success" , buttons:"باشه" });
                                let newUserBasket = {
                                    id: product.id,
                                    name: product.name,
                                    img: product.img,
                                    price: product.price
                                }
                                productData.setUserBasket((prevProducts) => [...prevProducts, newUserBasket]);
                            }
                          }}
                        />
                    </div>
                    ))
                )}

                {menuProduct === 'new' &&(
                    productData.products.filter(product=> product.pattern.includes('new')).map(product=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                        <ProductCard {...product} price={product.price.toLocaleString()}
                               addToBasket={()=>{
                            let isProductInBasket = productData.userBasket.some(basketProduct => 
                                basketProduct.name === product.name 
                            );
                            
                            if (isProductInBasket) {
                                swal({ title: "این محصول در سبد خرید وجود دارد", icon: "warning" });
                            } else {
                                swal({ title: "محصول اضافه شد", icon: "success" , buttons:"باشه" });
                                let newUserBasket = {
                                    id: product.id,
                                    name: product.name,
                                    img: product.img,
                                    price: product.price
                                }
                                productData.setUserBasket((prevProducts) => [...prevProducts, newUserBasket]);
                            }
                          }}
                        />
                    </div>
                    ))
                )}
               {menuProduct === 'better' &&(
                productData.products.filter(product=> product.rank.includes('better')).map(product=>(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                    <ProductCard {...product} price={product.price.toLocaleString()}
                           addToBasket={()=>{
                            let isProductInBasket = productData.userBasket.some(basketProduct => 
                                basketProduct.name === product.name 
                            );
                            
                            if (isProductInBasket) {
                                swal({ title: "این محصول در سبد خرید وجود دارد", icon: "warning" });
                            } else {
                                swal({ title: "محصول اضافه شد", icon: "success" , buttons:"باشه" });
                                let newUserBasket = {
                                    id: product.id,
                                    name: product.name,
                                    img: product.img,
                                    price: product.price
                                }
                                productData.setUserBasket((prevProducts) => [...prevProducts, newUserBasket]);
                            }
                          }}
                    />
                </div>
                ))
               )}
            </div>
        </div>
    </section>
    )
}

export default ProductPack