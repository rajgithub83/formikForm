import React from 'react';
//import classess from '../Button/Button.css';
import { Formik, Field, ErrorMessage, useFormik } from 'formik';
//import * as Yup from 'yup';
//import TextError from '../TextError';
import Input from '../Input/Input';
import Validation from '../Validation';
//import classes from './Form.css';

const Form  = (props) => {
    let initialValues = null;

    if(props.edit != null) {
        initialValues = {
            firstName: props.edit.firstName,
            lastName: props.edit.lastName,
            birthDate: props.edit.birthDate,
            birthPlace: props.edit.birthPlace,
            addressl1: props.edit.addressl1,
            addressl2: props.edit.addressl2,
            phoneNumber: props.edit.phoneNumber
    }
    }
    else {
        initialValues = {
            firstName: '',
            lastName: '',
            birthDate: '',
            birthPlace: '',
            addressl1: '',
            addressl2: '',
            phoneNumber: ''
    }
    }




 

/*const onSubmit = values => {
        console.log('Form data', values);
}*/

/*const validationSchema = Yup.object({
    firstName: Yup.string().min(2, 'First Name is too short! Please enter atleast 2 characters!').required('Please enter your first name'),
    lastName: Yup.string().min(2, 'Last Name is too short! Please enter atleast 2 characters!').required('Please enter your last name'),
    birthDate: Yup.date().required('Please enter your Date of Birth').test('age', 'Age should be greater than 18',
    (val) => { return new Date(Date.now() - new Date(val).getTime()).getFullYear() - 1970 > 18 }),
    birthPlace: Yup.string().min(2, 'Name of the place is too short! Please enter atleast 2 characters!').required('Please enter your Birth-place'),
    addressl1: Yup.string().min(5, 'Address is too short! Please enter atleast 5 characters!').required('Please enter your address'),
    addressl2: Yup.string().min(5, 'Address is too short! Please enter atleast 5 characters!').required('Please enter your address'),
    phoneNumber: Yup.number().required('Please enter your phone-number').test('len', 'Phone-Number is either too short or too long. Please enter exactly 10 digits', 
    (val) => { if(val) return val.toString().length === 10 }),
})*/

const formData =  useFormik({
    initialValues: initialValues,
    validationSchema: Validation,
    onSubmit: (values, {resetForm}) => (
        props.addData(values),
        resetForm()
),

enableReinitialize: true
})

return (
    <div>
        <Input 
        onChange = {formData.handleChange}
        onBlur={formData.handleBlur}
        values={formData.values}
        touched={formData.touched}
        error={formData.errors}
        submit={formData.handleSubmit}
        />
    </div>
)

}

export default Form;