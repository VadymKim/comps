import Button from '../components/Button';
import { AiFillApple, AiFillApi } from "react-icons/ai";

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!');
    };  
 
    return (
        <div>
            <Button 
               secondary 
               outline 
               className="mb-5" 
               onClick={handleClick}
            > 
               <AiFillApple /> 
               Buy now 
            </Button>
            <Button secondary rounded><AiFillApi /> More detail </Button> 
            <Button warning>Order</Button> 
            <Button success outline>Cancel</Button>
        </div>
    ); 
}

export default ButtonPage;