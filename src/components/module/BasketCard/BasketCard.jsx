import { useContext, useState } from 'react'
import './BasketCard.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import productContext from '../../../contexts/productContext'
function BasketCard() {
    const productData = useContext(productContext)
  

    const [counts ,SetCounts] = useState(productData.userBasket.map(product=>product.count === 1))

    const handlerBtnMinus =(index)=>{
        let newCounts = [...counts]
        if(newCounts[index]  === 1){
         newCounts[index] = +newCounts[index]
        }else{
            newCounts[index] = newCounts[index] -1
        }
        SetCounts(newCounts)
    }
const handlerBtnPlus = (index)=>{
    let newCounts = [...counts]
 newCounts[index] = newCounts[index] + 1
 SetCounts(newCounts)
}
  return (
        <>
            {productData.userBasket.map((product,index)=>(
                
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
                                  <button className="basketCard-countProduct-minus basketCard-btnCount" onClick={()=>handlerBtnMinus(index)}>-</button>
                                  <span className="basketCard-countProduct-number">{counts[index] || 1}</span>
                                  <button className="basketCard-countProduct-plus basketCard-btnCount" onClick={()=>handlerBtnPlus(index)}>+</button>
                              </div>
                          </li>
                          <li className="basketCard-item">
                              <span className="basketCard-price">{product.price * counts[index] || product.price } تومان</span> 
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