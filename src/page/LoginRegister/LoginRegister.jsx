import NavStatus from '../../components/module/NavStatus/NavStatus'
import Login from '../../components/template/loginRegister/Login/Login'

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
                    this is col
                </div>
            </div>
        </div>
        <br /><br /><br /><br />
    </>
  )
}

export default LoginRegister