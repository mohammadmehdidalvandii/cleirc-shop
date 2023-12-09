import BasketCard from '../../../module/BasketCard/BasketCard'
import './BasketPage.css'
import {NavLink} from 'react-router-dom'

function BasketPage() {
  return (
    <section className="basketPage">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <BasketCard/>
                </div>
            </div>
            {/* <div className="row mt-4">
                <div className="basketPage-card">
                    <span className="basketPage-card-price">تومان</span>
                <NavLink to='/' className='basketPage-card-btn'>ادامه خرید</NavLink>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default BasketPage