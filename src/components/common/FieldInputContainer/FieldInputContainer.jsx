import { Field } from "react-final-form";

function FieldInputContainer(props) {
  return (
    <Field name={props.name}>
      {({ input, meta }) => {
        return (
          <input
            type={props.type}
            className={
              meta.valid
                ? props.initialClass
                : `${props.initialClass} ${props.errorClass}`
            }
            placeholder={props.placeholder}
            {...input}
          />
        );
      }}
    </Field>
  );
}

export default FieldInputContainer;
