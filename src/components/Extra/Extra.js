import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Extra = () => {
    const category = useContext(categoryContext)
    
    return (
        <div>
            <h1>extra: {category}</h1>
        </div>
    );
};

export default Extra;