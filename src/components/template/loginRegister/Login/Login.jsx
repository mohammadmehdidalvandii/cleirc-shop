import { NavLink } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
import { Formik } from "formik";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <div className="login-wrapper">
        <h6 className="login-title">وارد حساب کاربری خود شوید</h6>
        <Formik
         initialValues={{text:" " , password:" "}}
        validate={(values)=>{
            const errors = {};

            if(values.text === ''){
                errors.text = "مقدار نام کاربری اجباری هست"
            } else if(values.text.length < 4){
                errors.text = 'تعداد حروف باید بیشتراز 4 باشد'
            }

            if(values.password === ''){
                errors.password = "مقدار گذرواژه اجباری است"
              } else if(values.password.length <  8){
                errors.password = 'مقدار حروف یا اعداد با 8 باشد'
              }
            return errors
        }}
        onSubmit={(values)=>{
            console.log('input => ' , values);
        }}
        >
          {(
           {
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched
           }
          ) => (
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-mediaLogin">
                <span className="login-mediaLogin-title">
                  با حساب اجتماعی وارد شوید
                </span>
                <div className="login-mediaLogin-links">
                  <NavLink to="/" className="login-mediaLogin-link">
                    <span className="login-mediaLogin-link-icon">
                      <FaSquareFacebook />
                    </span>
                    <span className="login-mediaLogin-link-text">فیسبوک</span>
                  </NavLink>
                  <NavLink to="/" className="login-mediaLogin-link">
                    <span className="login-mediaLogin-link-icon">
                      <FaGooglePlusSquare />
                    </span>
                    <span className="login-mediaLogin-link-text">گوگل</span>
                  </NavLink>
                </div>
              </div>

              <div className="formBox">
                <label htmlFor="text" className="formBox-label">
                  نام کاربری
                </label>
                <input
                  type="text"
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="formBox-input"
                />
                {errors.text && touched.text && (<span className="form-error"> {errors.text}</span>)}
              </div>
              <div className="formBox">
                <label htmlFor="password" className="formBox-label">
                  رمز عبور
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="formBox-input"
                />
                {errors.password && touched.password && (<span className="form-error">{errors.password}</span>)}
              </div>
              <div className="login-formLink-checkBox">
                <div className="login-checkBox">
                  <input type="checkbox" id="checkBox" />
                  <label htmlFor="checkBox" className="formBox-label">
                    مرا به خاطر بسپار
                  </label>
                </div>
                <NavLink to="/" className="login-formLinkForget">
                  رمزعبورا فراموش کرده اید؟
                </NavLink>
              </div>

              <button className="form-btn-submit">ورود</button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Login;
