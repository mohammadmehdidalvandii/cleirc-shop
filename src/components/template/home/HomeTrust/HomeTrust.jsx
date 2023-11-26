import './HomeTrust.css'

function HomeTrust() {
  return (
    <section className="homeTrust">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-12">
                    <div className="homeTrust-card">
                        <img src="/assets/images/trust-1.png" alt="trust-image" className="homeTrust-card-img" />
                        <div className="homeTrust-card-content">
                            <h6 className="HomeTrust-card-title">پشتیبانی آنلاین 24/7</h6>
                            <p className="HomeTrust-card-paraph">
                                        ما اینجا هستیم تا از شما حمایت کنیم. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-12">
                    <div className="homeTrust-card">
                        <img src="/assets/images/trust-2.png" alt="trust-image" className="homeTrust-card-img" />
                        <div className="homeTrust-card-content">
                            <h6 className="HomeTrust-card-title">ضمانت پول</h6>
                            <p className="HomeTrust-card-paraph">
                                        30 روز ضمانت بازگشت وجه </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-12">
                    <div className="homeTrust-card">
                        <img src="/assets/images/trust-3.png" alt="trust-image" className="homeTrust-card-img" />
                        <div className="homeTrust-card-content">
                            <h6 className="HomeTrust-card-title">ارسال رایگان </h6>
                            <p className="HomeTrust-card-paraph">ارسال رایگان برای کلیه شهرهای کشور ایران</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeTrust