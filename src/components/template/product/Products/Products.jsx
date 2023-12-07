import './Products.css'
import {MdSearch} from 'react-icons/md'
import ProductCard from '../../../module/ProductCard/ProductCard'
import { useContext, useState } from 'react'
import productContext from '../../../../contexts/productContext'
import swal from 'sweetalert'
function Products() {
    const productData = useContext(productContext)
  
    const [allProducts ,setAllProducts] =useState(false)
    const [search , setSearch] = useState('')

    const showAllProducts =()=>{
        setAllProducts(true)
    }
    const searchProductsHandler =()=>{
            const newProduct = productData.products.filter(product => product.name.includes(search))
        productData.setProducts(newProduct)
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
                    <input type="text"  className='productFilter-input' placeholder='جستجو ...(نام محصول)'  value={search} onChange={(e)=>setSearch(e.target.value) }/>
                   
                    <button className="productFilter-btn" onClick={searchProductsHandler} >
                        <MdSearch className='productFilter-icon'/>
                    </button>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            {
                allProducts? (
                    productData.products.map(product=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                      <ProductCard {...product}  price={product.price.toLocaleString()} key={product.id} 
                           addToBasket={()=>{
                            let isProductInBasket = productData.userBasket.some(basketProduct => 
                                basketProduct.name === product.name && 
                                basketProduct.price === product.price
                            );
                            
                            if (isProductInBasket) {
                                swal({ title: "این محصول در سبد خرید وجود دارد", icon: "warning" });
                            } else {
                                swal({ title: "محصول اضافه شد", icon: "success" });
                                let newUserBasket = {
                                    id: product.id,
                                    name: product.name,
                                    img: product.img,
                                    price: product.price
                                }
                                productData.setUserBasket((prevProducts) => [...prevProducts, newUserBasket]);
                            }
                          }} />
                      </div>
                  ))
                ):(
                    productData.products.slice(0,11).map(product=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                      <ProductCard {...product} price={product.price.toLocaleString()} key={product.id}
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
                )
            }
        </div>
        <div className="row mt-3">
            <button className='button_bg_white products-btn' 
            onClick={showAllProducts}
            style={{display :allProducts ? "none" :"block"}}
            >مشاهد بیشتر</button>
        </div>
    </div>
</section>
  )
}

export default Products