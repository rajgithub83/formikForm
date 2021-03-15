import React from 'react';
import classes from '../Button/Button.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
            firstName: '',
            lastName: '',
            birthDate: '',
            birthPlace: '',
            addressl1: '',
            addressl2: '',
            phoneNumber: ''
}

const onSubmit = values => {
        console.log('Form data', values);
}

const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    birthDate: Yup.string().required('Please enter your Date of Birth'),
    birthPlace: Yup.string().required('Please enter your Birth-place'),
    addressl1: Yup.string().required('Please enter your address'),
    addressl2: Yup.string().required('Please enter your address'),
    phoneNumber: Yup.string().required('Please enter your phone-number'),
})

function oldForm () {
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate 
    });

    console.log('Visited fields', formik.touched);
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <div className='form-control'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                {formik.touched.firstName && formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                {formik.touched.lastName && formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='birthDate'>Date of Birth</label>
                <input type='date' id='birthDate' name='birthDate' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthDate} />
                {formik.touched.birthDate && formik.errors.birthDate ? <div className='error'>{formik.errors.birthDate}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='birthPlace'>Birth Place</label>
                <input type='text' id='birthPlace' name='birthPlace' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthPlace} />
                {formik.touched.birthPlace && formik.errors.birthPlace ? <div className='error'>{formik.errors.birthPlace}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='addressl1'>Address Line 1</label>
                <input type='text' id='addressl1' name='addressl1' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.addressl1} />
                {formik.touched.addressl1 && formik.errors.addressl1 ? <div className='error'>{formik.errors.addressl1}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='addressl2'>Address Line 2</label>
                <input type='text' id='addressl2' name='addressl2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.addressl2} />
                {formik.touched.addressl2 && formik.errors.addressl2 ? <div className='error'>{formik.errors.addressl2}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input type='text' id='phoneNumber' name='phoneNumber' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber} />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className='error'>{formik.errors.phoneNumber}</div> : null}
                </div>
                <button className={classes.SubmitButton} type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default oldForm;

/* const onSubmit =  (values, onSubmitProps) => {
    console.log('Form Data', values);
    console.log('submit props', onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
}

function newForm () {

    //console.log('Visited fields', formik.touched);
    


    return (
        <Formik
            initialValues = {initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            //validateOnChange={false}
            //validateOnBlur={false}
            //validateOnMount
            >
                {
                    formik => {
                        return (
                            <Form>

                <div className='form-control'>
                <label htmlFor='firstName'>First Name</label>
                <Field type='text' id='firstName' name='firstName' placeholder='Your First Name' />
                <ErrorMessage name='firstName' component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='lastName'>Last Name</label>
                <Field type='text' id='lastName' name='lastName' placeholder='Your Last Name' />
                <ErrorMessage name='lastName' component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='birthDate'>Date of Birth</label>
                <Field type='date' id='birthDate' name='birthDate' placeholder='Your Birth Date' />
                <ErrorMessage name='birthDate' component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='birthPlace'>Birth Place</label>
                <Field type='text' id='birthPlace' name='birthPlace' placeholder='Your Birth Place' />
                <ErrorMessage name='birthPlace' component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='addressl1'>Address Line 1</label>
                <Field type='text' id='addressl1' name='addressl1' placeholder='Your Address' />
                <ErrorMessage name='addressl1' component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='addressl2'>Address Line 2</label>
                <Field type='text' id='addressl2' name='addressl2' placeholder='Your Address' />
                <ErrorMessage name='addressl2' component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <Field type='text' id='phoneNumber' name='phoneNumber' placeholder='Your Phone Number' />
                <ErrorMessage name='phoneNumber' component={TextError} />        
                </div>
                <button className={classes.SubmitButton} type='submit' disabled={!(formik.dirty && formik.isValid)} >Submit</button>
            </Form>
                        )
                    }
                }
            
        </Formik>
    )
}*/