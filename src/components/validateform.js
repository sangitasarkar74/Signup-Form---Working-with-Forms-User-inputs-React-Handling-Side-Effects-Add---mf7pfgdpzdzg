export default function ValidateForm(values) {
    let errors = {};

    /* Accept form only if the following criteria are satisfied and if not, display the corresponding error message.
  All fields are filled.
  Error Message: All fields are mandatory
  Name must be alphanumeric ({space} allowed)
  Error Message: Name is not alphanumeric
  Email must contain @
  Email must contain @
  Gender values must be male or female or other.
  Error Message: Please identify as male, female or others
  Phone Number must be number.
  Error Message: Phone Number must contain only numbers
  Password length at least should be 6.
  Error Message: Password must contain atleast 6 letters */

    // name
    if (!values.name.trim()) {
        errors.name = "All fields are mandatory";
    } else if (!/^[0-9a-zA-Z ]+$/i.test(values.name)) {
        errors.name = "Name is not alphanumeric";
    }

    // email
    if (!values.email) {
        errors.email = "All fields are mandatory";
    } else if (!/^\S+@\S+$/i.test(values.email)) {
        errors.email = "Email must contain @";
    }
    // gender
    if (!values.gender) {
        errors.gender = "All fields are mandatory";
    } // not required because A/C questions male is default

    // phoneNumber
    if (!values.phone) {
        errors.phone = "All fields are mandatory";
    } else if (!/^[0-9]+$/i.test(values.phone)) {
        errors.phone = "Phone Number must contain only numbers";
    }

    // password
    if (!values.password) {
        errors.password = "All fields are mandatory";
    } else if (values.password.length < 6) {
        errors.password = "Password must contain atleast 6 letters";
    }

    return errors;
}