import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';


function Accordion({ items }) {
    const [expandedItem, setExpandedItem] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedItem((currentExpandedItem) => {
            if (currentExpandedItem === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
    };

    // *** another version of handleClick but might cause a bug (stail expandedItem) 
    //  IN VERY VERY VERY RARE EDGE CASES (likely never) (click after click in 1ms)

    // const handleClick = (nextIndex) => {
    //     if (nextIndex === expandedItem) {
    //         setExpandedItem(-1);
    //     } else {
    //         setExpandedItem(nextIndex);
    //     }
    // }    

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedItem;
        const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;

           
        return (
            <div key={item.id} className='border border-zinc-500' >
                <div onClick={() => handleClick(index)} className='flex justify-between bg-cyan-200 cursor-pointer'>
                    {item.label}
                    <span className='text-xl'>{icon}</span>
                </div>
                <div>
                    {isExpanded && item.content} {/* or {isExpanded && <div>{item.content}</div>} without DIV above and under */}
                </div>
            </div>
        );

    });

    return <div>{ renderedItems }</div>;
}

export default Accordion;