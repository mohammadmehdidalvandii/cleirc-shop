import './Products.css'
import {MdSearch} from 'react-icons/md'
import ProductCard from '../../../module/ProductCard/ProductCard'
import db from '../../../../data/db.json'
import { useState } from 'react'
function Products() {
    const [products , setProducts] =useState([...db.products])
    const [allProducts ,setAllProducts] =useState(false)
    const [search , setSearch] = useState('')

    const showAllProducts =()=>{
        setAllProducts(true)
    }
    const searchProductsHandler =()=>{
            const newProduct = db.products.filter(product => product.name.includes(search))
            setProducts(newProduct)
    }
    useState(()=>{
  
            searchProductsHandler();
    
    },[search])
   
  return (
    <section className="products">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h4 className="product-title">محصولات</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="productFilter-search">
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value) }   className='productFilter-input' placeholder='جستجو ...(نام محصول)'/>
                    <button className="productFilter-btn" onClick={searchProductsHandler}>
                        <MdSearch className='productFilter-icon'/>
                    </button>
                </div>
            </div>
        </div>
        <div className="row mt-5">

            {allProducts ? (
                products.map(product=>(

                  <div className="col-lg-3 col-md-6 col-sm-12" key={product}>
                <ProductCard  {...product} price={product.price.toLocaleString()}/>
                     </div>
                ))
            ):(
                products.slice(0 , 11.).map(product=>(
                  <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                <ProductCard {...product} price={product.price.toLocaleString()}/>
                    </div>
                ))
            )}
        </div>
        <div className="row mt-3">
            <button className='button_bg_white products-btn' 
            style={{display :allProducts ? "none" :"block"}}
             onClick={showAllProducts}>مشاهد بیشتر</button>
        </div>
    </div>
</section>
  )
}

export default Products