import React from 'react';

function Button({onClickFunction, buttonText}) {
    return (
        <div className="button-box">
            <button className="button enlarge-on-hover" onClick={onClickFunction}
            >{buttonText}</button>
    </div>
    );
}

export default Button;