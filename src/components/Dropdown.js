import Panel from './Panel';
import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    

    useEffect(() => {
        
        const handleDocClick = (event) => {
            // if DOM-element is not visible
            if (!divEl.current) {
                return;
            }
            
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // !!! EventListener with 'true' third arg otherwise setState event and re-rendering 
        // eccure faster than document's EventListener executes
        document.addEventListener('click', handleDocClick, true);

        return () => document.removeEventListener('click', handleDocClick);
    },[])
    
    const handleOptionClick = (option) => {
        setIsOpen(false);
        
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
           <div className='cursor-pointer hover:bg-sky-100' onClick={() => handleOptionClick(option)} key={option.value}>
             {option.label}           
           </div>
        ); 
        
    });

    const handleClick = () => {
        setIsOpen((current) => {
            if (current === isOpen) {
                return !isOpen;
            }
        });
    };

    // const handleClick = () => {
    //    setIsOpend(!isOpen);
    // };

    return (

        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between cursor-pointer hover:bg-sky-100' onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg' />
            </Panel>
            {isOpen && <Panel>{renderedOptions}</Panel>}
        </div>
    );    

}

export default Dropdown;