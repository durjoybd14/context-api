import { useContext } from 'react';
import { categoryContext } from '../../App';

const Home = () => {
    const [category, setCategory] = useContext(categoryContext)

    return (
        <div>
            <h1>This is Home- Count: {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Click Here</button>

        </div>
    );
};

export default Home;