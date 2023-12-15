import React, { useCallback, useEffect, useState } from 'react'
import FormInput from '../../../components/Input/FormInput'
import { ErrorMessage, Field, Form, Formik, FormikHandlers, FormikValues, useFormik } from 'formik'
import { getKey } from '../../../utils'
import * as Yup from 'yup';
import ButtonComponent from '../../../components/button/ButtonComponent';
import ButtonText from '../../../components/button/ButtonText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../stores/Store';
import { createNewAddress, fetchAddress } from '../state/address.slice';
import { AddressComponenetVisblity } from '../../../Layout/Authenticated/Pages/Checkout';
const AddNewAddress = ({ addressState }: { addressState: React.Dispatch<React.SetStateAction<AddressComponenetVisblity>> }) => {

    const dispatch = useAppDispatch();
    const { user } = useSelector((state: RootState) => state.authReducer)
    function addNewAddressInputs({ id, className, label, name, type, placeHolder, value }: any) {
        return {
            id,
            label,
            name,
            type,
            className,
            placeHolder,
            value,

        }
    }



    const initialValues = {
        title: '',
        recipientName: '',
        email: '',
        city: '',
        state: '',
        phone: '',
        zip: '',
        street_address: '',
    } as unknown as InitialValues

    interface InitialValues {
        title: string;
        recipientName: string;
        email: string;
        city: string;
        state: string;
        phone: string;
        zip: string;
        street_address: string;
    }



    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Address Title is required'),
        recipientName: Yup.string(),
        email: Yup.string().email('Invalid email format'),
        city: Yup.string(),
        state: Yup.string(),
        phone: Yup.string(),
        zip: Yup.string(),
        street_address: Yup.string(),
    });
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here, e.g., dispatching an action to create an address
            console.log(values);
        },
    });
    const handleSubmit = async (values: InitialValues) => {
        // Handle form submission here, e.g., dispatching an action to create an address
     const result =  await   dispatch(createNewAddress({
            ...values,
            userId: user.id
        }
        )).then((r)=>{
            if(r.meta.requestStatus === 'fulfilled'){
                dispatch(fetchAddress(user.id)).then((r)=>{
                    if(r.meta.requestStatus === 'fulfilled'){
                        addressState(AddressComponenetVisblity.AddressList)
                    }
                })
            }
        })
        console.log(values);
    };

    const [inputElements, setInputElements] = useState([
        addNewAddressInputs({ id: 'title', label: 'Address Title*', name: 'title', type: 'text', placeHolder: '', value: '', className: 'col-6' }),
        addNewAddressInputs({ id: 'recipientName', label: 'Receipent Name', name: 'recipientName', type: 'email', placeHolder: '', value: '', className: 'col-6' }),
        addNewAddressInputs({ id: 'email', label: 'Email', name: 'email', type: 'email', placeHolder: '', value: '', className: 'col-6' }),
        addNewAddressInputs({ id: 'phone', label: 'Phone', name: 'phone', type: 'text', placeHolder: '', value: '', className: 'col-6' }),
        addNewAddressInputs({ id: 'state', label: 'State', name: 'state', type: 'text', placeHolder: '', value: '', className: 'col-6' }),
        addNewAddressInputs({ id: 'city', label: 'City', name: 'city', type: 'text', placeHolder: '', value: '', className: 'col-6' }),
        addNewAddressInputs({ id: 'zip', label: 'Postcode/ZIP', name: 'zip', type: 'number', placeHolder: '', value: '', className: 'col-12' }),
        addNewAddressInputs({ id: 'street_address', label: 'Phone', name: 'street_address', type: 'text', placeHolder: '', value: '', className: 'col-12' }),
    ])

    const handleInputChange = useCallback(
        (e: any, id: any) => {
            formik.handleChange(e); // Handle formik change
            // You can add any additional logic here if needed
        },
        [formik.handleChange]
    );
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {(formik) => (
                <Form>
                    <div className="d-flex flex-row flex-wrap px-3 justify-content-between">
                        {
                            inputElements.map((element) => {
                                return (
                                    <div key={element.id} className="col-6" style={{ maxWidth: '351px' }}>
                                        <div className="my-3" style={{ minWidth: '250px' }}>
                                            <label htmlFor="title" className="form-label label_style">
                                                {element.label}
                                            </label>
                                            <Field
                                                type="text"
                                                className="form-control p-2-5"
                                                id={element.id}
                                                name={element.name}
                                            />
                                            <ErrorMessage name={element.name} component="div" className="error-message" />
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="d-flex flex-row mt-5 gap-2">
                        <ButtonComponent className='px-5 py-3  border ' isSubmitButton={true} backgroundColor='primary' disabled={false} >
                            <ButtonText className='color-' fontSize='small' >Save Address</ButtonText>
                        </ButtonComponent>
                        <ButtonComponent className='px-5 py-3  border ' handelClick={() => { addressState(AddressComponenetVisblity.AddressList) }} isSubmitButton={true} backgroundColor='primary' disabled={false} >
                            <ButtonText className='color' fontSize='small' >Cancel</ButtonText>
                        </ButtonComponent>
                    </div>

                </Form>
            )}

        </Formik>
    )
}

export default AddNewAddress