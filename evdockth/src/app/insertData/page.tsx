"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
import { DataFields, Info } from './DataField/DataFields';
import { InfoComponent } from './DataGroup/infoComponent';


interface FormData {
    data: DataFields;
}

const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [infoData, setInfoData] = useState({}) ;

    const handleInfoChange = (info: Info) => {
        setInfoData(info);
      };

    const onSubmit = () => {
        // Handle form submission (e.g., send data to an API)
        console.log(infoData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Render 115 input fields using register function */}
            <InfoComponent onChange={handleInfoChange} />
            {/* <input id='inputForm' {...register('data.field1')}/> */}
            {/* {errors.data?.field1 && <span>Error message for field1</span>} */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;