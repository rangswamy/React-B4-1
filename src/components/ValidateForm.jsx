const ValidateForm = (values) => {

    const errors = {};
    if(!values.name){
      errors.name='Name is required'
    }
    if(!values.email){
      errors.email='email is required'
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
    if(!values.subject){
      errors.subject='Subject is required'
    }
    if(!values.message){
      errors.message='Message is required'
    }
    // else if (!/^[a-zA-Z]{2,100}$/.test(values.message)) {
    //     errors.message = "message should be between 10 and 100 characters long";
    //   }
    return errors;
}

export default ValidateForm