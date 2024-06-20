
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import css from '../../sass/Module/LoginForm.module.css';
import logo from '../../images/logo.png'

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const LoginForm = () => {
    const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');
    const handleSignIn = async (values, { setSubmitting }) => {
        try {
          await dispatch(signIn(values));
          setSubmitting(false);
        } catch (error) {
          if (error.response) {
            if (error.response.status === 400) {
              setErrorText('Validation error. Please check your inputs.');
            } else if (error.response.status === 409) {
              setErrorText('User with such email already exists.');
            } else {
              setErrorText('An error occurred. Please try again later.');
            }
          } else if (error.request) {
            setErrorText('Network error. Please check your internet connection.');
          } else {
            setErrorText('Unexpected error. Please try again later.');
          }
          setSubmitting(false);
        }
      };

    return (
      <Formik
      initialValues={{  email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSignIn}
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

  