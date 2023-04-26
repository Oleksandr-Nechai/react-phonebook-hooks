import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  FormikStyled,
  Items,
  Input,
  Button,
  ErrorStyle,
} from './ContactForm.styled';

function ContactForm({ onSubmitForm }) {
  const handleFormSubmit = (values, actions) => {
    onSubmitForm({ ...values });
    actions.resetForm();
  };
  const initialValues = {
    name: '',
    number: '',
  };

  const nameRegex = RegExp(
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  );

  const phoneRegex = RegExp(
    /^[\\+]?\d?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/
  );

  const SignupSchema = Yup.object({
    name: Yup.string()
      .matches(nameRegex, 'Invalid name')
      .min(5, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(phoneRegex, 'Invalid phone')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={SignupSchema}
      onSubmit={handleFormSubmit}
    >
      <FormikStyled autoComplete="off">
        <Items>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Rosie Simpson"
          />
          <ErrorMessage
            name="name"
            render={msg => <ErrorStyle>{msg}</ErrorStyle>}
          />
        </Items>
        <Items>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="+380965432100"
          />
          <ErrorMessage
            name="number"
            render={msg => <ErrorStyle>{msg}</ErrorStyle>}
          />
        </Items>
        <Button type="submit">Add contact</Button>
      </FormikStyled>
    </Formik>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
