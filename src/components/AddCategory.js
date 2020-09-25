import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {


    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
        // console.log('handleInputChange llamado');
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('handelSubmit llamado ', inputValue);
        
        if(inputValue.trim().length >2){
            setCategories(c => [inputValue,...c]);
            setinputValue('');
        }
    }
    return (

        <form onSubmit={ handelSubmit }>  
            <p>{ inputValue }</p>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />

        </form>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
