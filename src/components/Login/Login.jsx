import { Form, Field } from "react-final-form";
import FieldInputContainer from "../common/FieldInputContainer/FieldInputContainer";
import createFormTest from "./../../validation/validation";
import classes from "./Login.module.css";
import { Navigate } from "react-router-dom";

function Login(props) {
  if (props.authState)
    return <Navigate replace to={`/profile/${props.currUserId}`} />;

  return (
    <main>
      <Form
        validate={createFormTest(20)}
        onSubmit={props.loginAuth}
        render={(args) => <MyForm {...args} />}
      ></Form>
    </main>
  );
}

function MyForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <FieldInputContainer
          name="login"
          errorClass={classes.error}
          placeholder="login"
          type="text"
        />
      </div>
      <div>
        <FieldInputContainer
          name="password"
          errorClass={classes.error}
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" />
        remember me
      </div>
      <div>{props.submitError}</div>
      <div>
        <button type="submit" disabled={props.submitting || props.pristine}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Login;
