import { useState } from 'react'
import './ProductPack.css'
import db from '../../../../data/db.json'
import ProductCard from '../../../module/ProductCard/ProductCard'

function ProductPack() {
    const [products ,SetProducts] =useState(db.products)
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
                    products.filter(product => product.pattern.includes('proSeller')).map(product=>(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                        <ProductCard {...product} price={product.price.toLocaleString()}/>
                    </div>
                    ))
                )}

                {menuProduct === 'new' &&(
                    products.filter(product=> product.pattern.includes('new')).map(product=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                        <ProductCard {...product} price={product.price.toLocaleString()}/>
                    </div>
                    ))
                )}
               {menuProduct === 'better' &&(
                products.filter(product=> product.rank.includes('better')).map(product=>(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                    <ProductCard {...product} price={product.price.toLocaleString()}/>
                </div>
                ))
               )}
            </div>
        </div>
    </section>
    )
}

export default ProductPack