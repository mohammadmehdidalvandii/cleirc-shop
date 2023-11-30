import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <div className="register-wrapper">
        <h6 className="register-title">همین الان ثبت نام کنید</h6>

        <Formik
        initialValues={{email:"", text:"", password:""}}
        validate={(values)=>{
            const errors ={};

                if(values.email === ''){
                    errors.email = 'مقدار ایمیل اجباری است'
                } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email = 'ایمیل وارد شد معتبر نیست'
                }

                if(values.text === ''){
                    errors.text = 'مقدار نام کاربری اجباری است '
                } else if(values.text.length < 4){
                    errors.text = 'حداقل باید 4حروف داشته باشد'
                }

                if(values.password === ''){
                    errors.password = 'مقدار رمز اجباری است'
                } else if(values.password.length < 8 ){
                    errors.password = "حداقل باید 8 کارکتر داشته باشد"
                }
            return errors
        }}
        
        onSubmit={(values)=>{
            console.log('input ', values)
        }}
        >
          {( {
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched
           }) => (
            <form  className="register-form" onSubmit={handleSubmit}>
              <div className="formBox">
                <label htmlFor="" className="formBox-label">
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                 value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="formBox-input"
                />
                 {/* {errors.email && touched.email && (<span className="form-error"> {errors.email}</span>)} */}
               {errors.email && touched.email && (<span className="form-error">{errors.email}</span>)}
              </div>
              <div className="formBox">
                <label htmlFor="" className="formBox-label">
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
                <label htmlFor="" className="formBox-label">
                  رمزعبور
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="formBox-input"
                />
                 {errors.password && touched.password && (<span className="form-error"> {errors.password}</span>)}
              </div>

              <div className="register-checkBox">
                <input type="checkbox" id="checkBox" />
                <span>موافقم</span>
                <NavLink to="/" className="formBox-textLink">
                  شرایط و ضوابط
                </NavLink>
              </div>
              <button className="form-btn-submit">ثبت نام</button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Register;
