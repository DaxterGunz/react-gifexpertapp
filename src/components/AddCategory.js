import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    
    const handleSubmit = ( e ) =>{
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        };
        //Nota recordatoria, utiliza la propiedad destructurada de props al poner el algumento entre llaves este puede ser llamado
        

    };

  return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </ form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
