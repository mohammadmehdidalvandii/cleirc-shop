import './ProductCard.css'
import { NavLink } from 'react-router-dom'
import {FaRegHeart, FaSearch, FaShoppingCart} from 'react-icons/fa'

function ProductCard({img , name ,price , addToBasket}) {

 
  return (
    <div className="productCard">
    <div className="productCard-image-text">
    <img src={img} alt="product" className="productCard-img" />
    <span className="productCard-text">جدید</span>
    </div>
    <div className="productCard-linkMenu">
        <NavLink to='/' className='productCard-link'>
            <FaRegHeart/>
        </NavLink>
        <NavLink to='/' className='productCard-link'>
            <FaSearch/>
        </NavLink>
        <NavLink to='#' className='productCard-link' onClick={addToBasket}>
            <FaShoppingCart/>
        </NavLink>
    </div>
    <div className="productCard-content">
        <NavLink to='/' className='productCard-content-linkName'>{name}</NavLink>
        <span className="productCard-price">{price} تومان</span>
    </div>
</div>
  )
}

export default ProductCard