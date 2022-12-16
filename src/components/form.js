import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SuccessForm from "./SuccessForm";

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    /* const [emailValue, setEmailValue] = useState(""); */
    const [username, setUsername] = useState("");
    // let username = "";

    console.log("outside: " + username);

    function submitForm(item) {
        // username = item
        setUsername(item);
        console.log("inside submitForm: " + username);
        setIsSubmitted(true);
    }

    /* function emailProfileHandler(item) {
          setEmailValue({emailValue: item});
          console.log("inside emailProfile: "+emailValue);
      } */
    return (
        <div>
            {!isSubmitted ? (
                <SignUpForm
          /* emailProfile = {emailProfileHandler} */ submitForm={submitForm}
                />
            ) : (
                <SuccessForm username={username} />
            )}
        </div>
    );
}

export default Form;