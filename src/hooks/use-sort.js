import { useState } from "react";

function useSort(data, updatedConfig) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
       if (sortBy && label !== sortBy) {
            setSortBy(label);
            setSortOrder('asc');
            return;
       }

       if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
       } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
       } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
       }
    };

    let sortedData = data;

    if (sortOrder && sortBy) {
        const { sortValue } = updatedConfig.find((column) => {
           return column.label === sortBy;
        });

        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);
        
            const orderCoefficient = sortOrder === 'asc' ? 1 : -1; 
        
            if (typeof valA === 'string') {
        
                return valA.localeCompare(valB) * orderCoefficient;
        
            } else {
        
                return (valA - valB) * orderCoefficient;
            }
        })
    }

    return {
        sortedData,
        sortBy,
        sortOrder,
        setSortColumn,
    };

    
}

export default useSort;