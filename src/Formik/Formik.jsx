import React from 'react';
import { useFormik, Formik } from 'formik';
import * as Yub from 'yup';

import classNames from 'classnames/bind';
import styles from './Formik.module.scss';

const cx = classNames.bind(styles);

const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email Invalid';
    }

    return errors;
};

function FormikTest() {
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
        },
        validationSchema: Yub.object({
            firstName: Yub.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yub.string().max(15, 'Must be 20 characters or less').required('Required'),
            email: Yub.string().email('Invalid email').required('Required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <label htmlFor="text">First Name</label>
                <input id="firstName" type="firstName" {...formik.getFieldProps('firstName')} />
                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <label htmlFor="text">Last Name</label>
                <input id="lastName" type="lastName" {...formik.getFieldProps('lastName')} />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormikTest;
