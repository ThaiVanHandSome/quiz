import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yub from 'yup';

function FormikContext() {
    return (
        <Formik
            initialValues={{ email: '', firstName: '', lastName: '', color: '' }}
            validationSchema={Yub.object({
                firstName: Yub.string().max(15, 'Must be 15 characters or less').required('Required'),
                lastName: Yub.string().max(15, 'Must be 20 characters or less').required('Required'),
                email: Yub.string().email('Invalid email').required('Required'),
            })}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {/* {(formik) => (
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
            )} */}
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />

                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <label htmlFor="color">Color</label>
                <Field name="color" as="select">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </Field>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default FormikContext;
