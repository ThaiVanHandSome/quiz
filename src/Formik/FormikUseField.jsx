import { MyTextInput, MyCheckBox, MySelect } from './FormikItem';
import { Formik, Form } from 'formik';
import * as Yub from 'yup';

function FormikUseField() {
    return (
        <Formik
            initialValues={{ firstName: '', acceptTerms: false, jobType: '' }}
            validationSchema={Yub.object({
                firstName: Yub.string().max(15, 'Must be 15 characters or less').required('Required'),
                acceptTerms: Yub.boolean().required('Required').oneOf([true], 'You must accept the terms'),
                jobType: Yub.string()
                    .required('Required')
                    .oneOf(['designer', 'development', 'product', 'other'], 'Invalid job type'),
            })}
            onSubmit={(values) => {
                alert(JSON.stringify(values));
            }}
        >
            <Form>
                <MyTextInput label={'First Name'} name="firstName" type="text" />
                <MyCheckBox name="acceptTerms"></MyCheckBox>
                <MySelect label="Job Type" name="jobType">
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                </MySelect>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default FormikUseField;
