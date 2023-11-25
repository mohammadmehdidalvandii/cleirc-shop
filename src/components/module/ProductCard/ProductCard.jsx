import './ProductCard.css'
import { NavLink } from 'react-router-dom'
import {FaRegHeart, FaSearch, FaShoppingCart} from 'react-icons/fa'
function ProductCard() {
  return (
    <div className="productCard">
    <div className="productCard-image-text">
    <img src="/assets/images/product-1.jpg" alt="product" className="productCard-img" />
    <span className="productCard-text">جدید</span>
    </div>
    <div className="productCard-linkMenu">
        <NavLink to='/' className='productCard-link'>
            <FaRegHeart/>
        </NavLink>
        <NavLink to='/' className='productCard-link'>
            <FaSearch/>
        </NavLink>
        <NavLink to='/' className='productCard-link'>
            <FaShoppingCart/>
        </NavLink>
    </div>
    <div className="productCard-content">
        <NavLink to='/' className='productCard-content-linkName'>الماس برازنده</NavLink>
        <span className="productCard-price">450,000, تومان</span>
    </div>
</div>
  )
}

export default ProductCard