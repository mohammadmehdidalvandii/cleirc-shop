import NavStatus from '../../components/module/NavStatus/NavStatus'
import Login from '../../components/template/loginRegister/Login/Login'
import Register from '../../components/template/loginRegister/Register/Register'

function LoginRegister() {
  return (
    <>
        <NavStatus status='احراز هویت'/>

        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                     <Login/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                   <Register/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginRegister