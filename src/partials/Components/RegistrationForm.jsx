import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../../sass/Module/RegistrationForm.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import logo from '../../images/logo.png';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
import useMediaQuerry from '../../hooks/useMediaQuerry';

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Username is required'),

  email: Yup.string().email('Invalid email format').required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),

    // confirmPassword: Yup.string()
    // .oneOf([Yup.ref('password'), null], 'Passwords must match')
    // .required('Confirm password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');
  const {isDesktopOrLaptop, isBigScreen, isTabletOrMobile}=useMediaQuerry();

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
    <div className={`{css.register} ${isTabletOrMobile ? css.isTabletOrMobile : css.isDesktopOrLaptop}`}>
         <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting, values}) => (
        <Form autoComplete='off' className={css.form}>
            <div className={css.containerLogo}>
            <img src={logo} alt="Logo" />
            </div>
         
         <div className={`${css.wrapperInput}`}>
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
            <PasswordStrengthBar password={values.password} />
            <ErrorMessage name="password" component="div" className={css.error} />
          </div>
          {/* <div>
                <Field name="confirmPassword" type="password" placeholder="Confirm password" className={`${css.input} ${css.lock}`} />
                <ErrorMessage name="confirmPassword" component="div" className={css.error} />
              </div> */}
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
