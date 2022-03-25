import { useState, useEffect } from 'react';

const UseForm = Validate => {
    const [values, setValues] = useState({
        fullname: '',
        username: '',
        password: '',
        rePassword: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        setErrors(Validate(values))
        setIsSubmitting(true)
        
        if(!Validate(values).fullname || !Validate(values).username || !Validate(values).password ||  !Validate(values).rePassword){
            ;
        }else{
            e.preventDefault();
        }
        
        
    }

    return { handleChange, values, handleSubmit, errors }
}

export default UseForm;