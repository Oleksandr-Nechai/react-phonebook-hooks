import PropTypes from 'prop-types';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import s from './ContactForm.module.css';

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
    /^[\+]?\d?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/
  );

  const SignupSchema = Yup.object({
    name: Yup.string(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
      .matches(nameRegex, 'Invalid name')
      .min(5, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    number: Yup.string(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
      .matches(phoneRegex, 'Invalid phone')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleFormSubmit}
      className={s.form}
    >
      <Form autoComplete="off" className={s.form}>
        <label className={s.label}>
          Name
          <Field
            type="text"
            name="name"
            className={s.input}
            placeholder="Rosie Simpson"
          />
          <ErrorMessage
            name="name"
            render={msg => <div>{msg}</div>}
          />
        </label>
        <label className={s.label}>
          Number
          <Field
            type="tel"
            name="number"
            className={s.input}
            placeholder="+380965432100"
          />
          <ErrorMessage
            name="number"
            render={msg => <div>{msg}</div>}
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
