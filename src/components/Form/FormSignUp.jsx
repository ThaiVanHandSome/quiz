import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Form as FormBox, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInp, MyCheckBox, MySelect } from './FormItem';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function FormSignUp({ setLoginSuccess, setOpenLogin }) {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Register</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', address: '', email: '', acceptTerm: false }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required('You must enter this field!')
                        .max(10, 'Must be 10 characters or less'),
                    lastName: Yup.string()
                        .required('You must enter this field!')
                        .max(8, 'Must be 8 characters or less'),
                    address: Yup.string()
                        .required('You must enter this field!')
                        .notOneOf([''], 'You must select one of options'),
                    email: Yup.string().required('You must enter this field!').email('Invalid email address'),
                    acceptTerm: Yup.boolean().oneOf([true], 'You must accept this terms'),
                })}
                onSubmit={(values) => {}}
            >
                <FormBox>
                    <MyTextInp label="First Name" name="firstName" />
                    <MyTextInp label="Last Name" name="lastName" />
                    <MySelect label="Your country" name="address">
                        <option value="">Choose your country</option>
                        <option value="hanoi">Ha Noi City</option>
                        <option value="hochiminh">Ho Chi Minh City</option>
                        <option value="binhdinh">Binh Dinh Province</option>
                        <option value="dongthap">Dong Thap Province</option>
                        <option value="camau">Ca Mau Province</option>
                    </MySelect>
                    <MyTextInp label="Your email" name="email" />
                    <MyCheckBox name="acceptTerm">I accept terms</MyCheckBox>
                    <button type="submit" className={cx('btn-submit')}>
                        SIGN UP
                    </button>
                    <p className={cx('convert')} onClick={() => setOpenLogin((prev) => !prev)}>
                        If you have account, log in!
                    </p>
                </FormBox>
            </Formik>
        </div>
    );
}

FormSignUp.propTypes = {
    setLogin: PropTypes.func.isRequired,
};

export default FormSignUp;
