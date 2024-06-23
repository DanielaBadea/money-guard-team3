
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import css from '../../sass/Module/LoginForm.module.css';
import logo from '../../images/logo.png'
import useMediaQuerry from "../../hooks/useMediaQuerry";

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const LoginForm = () => {
    const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');
  const {isDesktopOrLaptop, isBigScreen, isTabletOrMobile}=useMediaQuerry();

   const handleSignIn = async (values, { setSubmitting }) => {
        try {
            await dispatch(signIn(values));
            setSubmitting(false);
        } catch (error) {
            if (error.request) {
                setErrorText('Network error. Please check your internet connection.');
            } 
            }
            setSubmitting(false);
        };

    return (
      <Formik
      initialValues={{  email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSignIn}
      className={`${isTabletOrMobile ? css.isTabletOrMobile : css.isDesktopOrLaptop}`}
      >
          {({ isSubmitting }) => (
      <Form autoComplete='off' className={css.form}>
      <div className={css.containerLogo}>
      <img src={logo} alt="Logo" />
      </div>
   
   <div className={css.wrapperInput}>
    <div>
      <Field name="email" type="email" placeholder="E-mail" className={`${css.input} ${css.mail}`}/>
      <ErrorMessage name="email" component="div" className={css.error} />
    </div>
    <div>
      <Field name="password" type="password" placeholder="Password" className={`${css.input} ${css.lock}`}/>
      <ErrorMessage name="password" component="div" className={css.error} />
    </div>

   </div>
    <div className={css.button}>
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Signing up...' : 'Sign up'}
    </button>
    </div>
   
    <div className={css.error}>{errorText}</div>
    <div className={css.link}>
    <NavLink to="/register">Don't have an account? Register</NavLink>
    </div>       
  </Form>
    )}
      </Formik>
    );
  };

  export default LoginForm;

  