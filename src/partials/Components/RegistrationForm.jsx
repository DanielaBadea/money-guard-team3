import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../../sass/Module/RegistrationForm.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import logo from '../../images/logo.png';

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Username is required'),

  email: Yup.string().email('Invalid email format').required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');

  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      await dispatch(signUp(values));
      setSubmitting(false);
    } catch (error) {
      if (error.request) {
        setErrorText('Network error. Please check your internet connection.');
      } 
      setSubmitting(false);
    }
  };

  return (
    <div className={css.register}>
         <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting }) => (
        <Form autoComplete='off' className={css.form}>
            <div className={css.containerLogo}>
            <img src={logo} alt="Logo" />
            </div>
         
         <div className={css.wrapperInput}>
         <div >
            <Field name="username" type="text" placeholder="Name" className={`${css.input} ${css.user}`} />
            <ErrorMessage name="username" component="div" className={css.error} />
          </div>
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
            <NavLink to="/login">Already have an account? Login</NavLink>
          </div>       
        </Form>
      )}
    </Formik>

    </div>
  
   
  );
};

export default RegistrationForm;
