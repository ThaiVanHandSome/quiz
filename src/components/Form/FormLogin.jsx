import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Form as FormBox, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInp, MyPassword } from './FormItem';
import Dialog from '../Dialog';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function FormLogin({ setLoginSuccess, setOpenLogin, setOpenDialog }) {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Register</h1>
            <Formik
                initialValues={{ userName: '', password: '' }}
                validationSchema={Yup.object({
                    userName: Yup.string().required('You must enter this field!'),
                    password: Yup.string().required('You must enter this field!'),
                })}
                onSubmit={(values) => {
                    if (values.userName === 'thaivan' && values.password === '12345678') {
                        localStorage.setItem('login', JSON.stringify(true));
                        setLoginSuccess(true);
                    } else {
                        setOpenDialog(true);
                    }
                }}
            >
                <FormBox>
                    <MyTextInp label="User name" name="userName" />
                    <MyPassword label="Password" name="password" />
                    <button type="submit" className={cx('btn-submit')}>
                        LOGIN
                    </button>
                    <p className={cx('convert')} onClick={() => setOpenLogin((prev) => !prev)}>
                        If you do not have account, create it!
                    </p>
                </FormBox>
            </Formik>
        </div>
    );
}

FormLogin.propTypes = {
    setLogin: PropTypes.func.isRequired,
};

export default FormLogin;
