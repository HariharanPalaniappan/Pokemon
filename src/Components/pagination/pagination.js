import React from 'react';
import './pagination.css'
const pagination = (props) => {
return(
    <div className="pagination">
        <button onClick={() => props.clickEvent()}>{props.name}</button>
    </div>
);
}
export default pagination;