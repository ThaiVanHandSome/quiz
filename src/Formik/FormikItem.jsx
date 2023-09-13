const { useField } = require('formik');

export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};

export const MyCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};

export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};
