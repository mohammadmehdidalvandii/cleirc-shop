import { useContext, useState } from 'react'
import './BasketCard.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import productContext from '../../../contexts/productContext'
function BasketCard() {
    const productData = useContext(productContext)
  

    const [count ,SetCount] = useState(1)
    const handlerBtnMinus =()=>{
        if(count === 1){
            SetCount(count)
        }else{
            SetCount(count -1)
        }
    }
const handlerBtnPlus = ()=>{
    SetCount(count + 1)
}
  return (
        <>
            {productData.userBasket.map(product=>(
                
                      <div className="basketCard" key={product.id}>
                      <ul className="basketCard-items">
                          <li className="basketCard-item">
                              <img src={product.img} alt="product" className="basketCard-img" />
                          </li>
                          <li className="basketCard-item">
                                  <h6 className="basketCard-productName">{product.name}</h6>
                          </li>
                          <li className="basketCard-item">
                              <div className="basketCard-countProduct">
                                  <button className="basketCard-countProduct-minus basketCard-btnCount" onClick={handlerBtnMinus}>-</button>
                                  <span className="basketCard-countProduct-number">{count}</span>
                                  <button className="basketCard-countProduct-plus basketCard-btnCount" onClick={handlerBtnPlus}>+</button>
                              </div>
                          </li>
                          <li className="basketCard-item">
                              <span className="basketCard-price">{product.price * count.toLocaleString() } تومان</span> 
                          </li>
                          <li className="basketCard-item">
                              <span className="basketCard-DeleteBtn">
                                  <RiDeleteBin6Line/>
                              </span>
                          </li>
                      </ul>
                     </div>  
            ))}
        </>
  )
}

export default BasketCard