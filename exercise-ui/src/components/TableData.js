import React from  'react';

function TableData({inputType, placeHolderText, inputValue, setValue}) {
    return (        
        <td>
            <input                
                type={inputType}
                placeholder={placeHolderText}
                value={inputValue}
                onChange={e => setValue(e.target.value)} />
        </td>    
    );
}

export default TableData;