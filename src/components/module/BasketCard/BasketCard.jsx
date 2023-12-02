import { useState } from 'react'
import './BasketCard.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
function BasketCard() {
    const [count ,SetCount] = useState(0)
    const handlerBtnMinus =()=>{
        if(count === 0){
            SetCount(count)
        }else{
            SetCount(count -1)
        }
    }
const handlerBtnPlus = ()=>{
    SetCount(count + 1)
}
  return (
   <div className="basketCard">
    <ul className="basketCard-items">
        <li className="basketCard-item">
            <img src="/assets/images/product-1.jpg" alt="product" className="basketCard-img" />
        </li>
        <li className="basketCard-item">
                <h6 className="basketCard-productName">میز</h6>
        </li>
        <li className="basketCard-item">
            <div className="basketCard-countProduct">
                <button className="basketCard-countProduct-minus basketCard-btnCount" onClick={handlerBtnMinus}>-</button>
                <span className="basketCard-countProduct-number">{count}</span>
                <button className="basketCard-countProduct-plus basketCard-btnCount" onClick={handlerBtnPlus}>+</button>
            </div>
        </li>
        <li className="basketCard-item">
            <span className="basketCard-price">1,454,000 تومان</span> 
        </li>
        <li className="basketCard-item">
            <span className="basketCard-DeleteBtn">
                <RiDeleteBin6Line/>
            </span>
        </li>
    </ul>
   </div>
  )
}

export default BasketCard