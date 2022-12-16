import React from "react";

function SuccessForm({ username }) {
    /* If Form is correctly filled and submitted successfully, extract the username from the Email 
      address and display Hello {username}. For example: if the email address is zen@newtonschool.com then show Hello zen. Remove older error messages if there are any. */

    return (
        <div>
            <h2>Hello {username}</h2>
        </div>
    );
}

export default SuccessForm;