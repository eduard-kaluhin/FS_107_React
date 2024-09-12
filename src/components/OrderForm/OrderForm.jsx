import { Field, Form, Formik } from 'formik';
import s from './OrderForm.module.css';
const OrderForm = () => {
  const initialValues = {
    username: '',
    email: '',
    city: '',
    petType: '',
    age: '',
    summary: '',
    gender: 'Жін',
    agree: false,
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>ПІБ:</span>
              <Field name='username' className={s.input} placeholder="Введіть ім'я" />
            </label>
            <label className={s.label}>
              <span>Емейл:</span>
              <Field name='email' className={s.input} placeholder='Введіть емейл' />
            </label>
            <label className={s.label}>
              <span>Місто:</span>
              <Field name='city' className={s.input} placeholder='Введіть місто' />
            </label>
            <label className={s.label}>
              <span>Вид улюбленця:</span>
              <Field as='select' name='petType' className={s.input}>
                <option value='Собака'>Собака</option>
                <option value='Кошеня'>Кошеня</option>
                <option value='Папуга'>Папуга</option>
                <option value='Крокодил'>Крокодил</option>
              </Field>
            </label>
            <label className={s.label}>
              <span>Вік:</span>
              <Field type='number' name='age' className={s.input} placeholder='Введіть вік улюбленця' />
            </label>
            <label className={s.label}>
              <span>Побажання:</span>
              <Field as='textarea' name='summary' className={s.input} placeholder='Введіть побажання' />
            </label>
            <div>
              <label>
                <Field type='radio' value='Жін' name='gender' className={s.input} />
                Жін
              </label>
              <label>
                <Field type='radio' value='Чол' name='gender' className={s.input} />
                Чол
              </label>
            </div>
            <label>
              <Field type='checkbox' name='agree' className={s.input} />
              Прочитав (ні) правила і погоджуюсь
            </label>
            <button disabled={values.agree === false} type='submit'>
              Створити замовлення
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
