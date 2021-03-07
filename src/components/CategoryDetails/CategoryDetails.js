import Extra from '../Extra/Extra';
import { useContext } from 'react';
import { categoryContext } from '../../App';


const CategoryDetails = () => {
    const [category, setCategory] = useContext(categoryContext)

    return (
        <div>
            <h4>This is Category details: {category}</h4>
            <button onClick={()=>setCategory(category+1)}>Click mE</button>
            <Extra></Extra>
        </div>
    );
};

export default CategoryDetails;