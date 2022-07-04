import { Form, Field } from "react-final-form";

function Login(props) {
  return (
    <main>
      <Form
        onSubmit={props.loginAuth}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <MyForm {...{ handleSubmit, form, submitting, pristine, values }} />
        )}
      ></Form>
    </main>
  );
}

function MyForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" type="text" name="login" placeholder="Login" />
      </div>
      <div>
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" />
        remember me
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Login;
