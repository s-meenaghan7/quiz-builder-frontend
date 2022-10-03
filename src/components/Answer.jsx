import React from 'react';

export default function Answer({ id }) {
    return (
        <tr>
            <td> {id} </td>
            <td> <input type='text' /> </td>
            <td> <input type='radio' name='isCorrect' /> </td>
        </tr>
    );
}

