
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import css from '../../sass/Module/LoginForm.module.css';

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const LoginForm = () => {
    
    const dispatch = useDispatch();

    return (
      <Formik
        initialValues={{ email: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
            dispatch(signIn(values));
            setSubmitting(false);
          }}
      >
          {() => (
      <Form >
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
        <button type="submit">Login</button>
        <div>
            <NavLink to="/register">
            Don't have an account? Sign up
            </NavLink>
        </div>
      </Form>
    )}
      </Formik>
    );
  };

  export default LoginForm;