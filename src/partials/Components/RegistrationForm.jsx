import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../../sass/Module/RegistrationForm.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';

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

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(signUp(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" className={css.error} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className={css.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
          <div>
            <NavLink to="/login">Already have an account? Login</NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
