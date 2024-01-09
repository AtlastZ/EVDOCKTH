"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
import { DataFields } from './DataFields';


interface FormData {
    data: DataFields;
}

const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        // Handle form submission (e.g., send data to an API)
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Render 115 input fields using register function */}
            <input id='inputForm' {...register('data.field1')}/>
            {errors.data?.field1 && <span>Error message for field1</span>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;