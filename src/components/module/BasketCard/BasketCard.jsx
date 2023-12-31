import { useContext, useState,useEffect } from 'react'
import './BasketCard.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import productContext from '../../../contexts/productContext'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'
function BasketCard() {
    const productData = useContext(productContext)
    const [counts ,SetCounts] = useState(productData.userBasket.map(product=>product.count))
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        let sum = 0;
        productData.userBasket.forEach((product, index) => {
            sum += product.price * counts[index];
        });
        setTotalPrice(sum);
    };
    useEffect(() => {
        calculateTotalPrice();
    }, [productData.userBasket.length , counts]);

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
const handlerRemoveProducts = (productID) => {
    let newBasket = productData.userBasket.filter(product => product.id !== productID);
    productData.setUserBasket(newBasket);
    swal({title:"محصول حذف  شد", icon:'success' ,buttons:"باشه"})

};
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
                              <span className="basketCard-price">{ (product.price * counts[index]).toLocaleString() || product.price.toLocaleString() } تومان</span> 
                          </li>
                          <li className="basketCard-item">
                              <span className="basketCard-DeleteBtn" onClick={()=>handlerRemoveProducts(product.id)}>
                                  <RiDeleteBin6Line/>
                              </span>
                          </li>
                      </ul>
                     </div>  
            ))}

<div className="row mt-4">
                <div className="basketPage-card">
                    <span className="basketPage-card-price">{totalPrice.toLocaleString()} تومان</span>
                <NavLink to='/' className='basketPage-card-btn'>ادامه خرید</NavLink>
                </div>
            </div>
        </>
  )
}

export default BasketCard