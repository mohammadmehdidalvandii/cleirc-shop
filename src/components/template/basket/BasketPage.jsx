import './BasketPage.css'
import {NavLink} from 'react-router-dom'

function BasketPage() {
  return (
    <section className="basketPage">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    this is basket card
                </div>
            </div>
            <div className="row mt-4">
                <div className="basketPage-card">
                    <span className="basketPage-card-price">1,920,000 تومان</span>
                <NavLink to='/' className='basketPage-card-btn'>ادامه خرید</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BasketPage