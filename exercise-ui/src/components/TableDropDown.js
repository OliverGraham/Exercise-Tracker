import React from 'react';
import TableDropDownOption from './TableDropDownOption';
import { useState } from 'react';

function TableDropDown({unit, setUnit}) {     

    // determine which unit to display first in the dropdown menu
    const [unit1] = useState(unit === "lbs" ? "lbs" : "kg");
    const [unit2] = useState(unit === "lbs" ? "kg" : "lbs");

    return (
        <td>
            <select id="unit-dropdown" onChange={e => setUnit(e.target.value)}>
              <TableDropDownOption unit={unit1}></TableDropDownOption>
              <TableDropDownOption unit={unit2}></TableDropDownOption>
            </select>
        </td>
    );
}

export default TableDropDown;