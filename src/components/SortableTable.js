import Table from "./Table";
import useSort from "../hooks/use-sort";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function SortableTable(props) {
    const {config, data} = props;

    

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                            <div className="flex justify-center items-center p-1">
                               {getIcons(column.label, sortBy, sortOrder)}
                               {column.label}
                            </div>
                          </th>
        }
    });
    
    const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(data, updatedConfig);

    return <Table {...props} data={sortedData} config={updatedConfig}/>;
      
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>;
    }

    if (sortOrder === null) {
        return (
         <div>
            <GoChevronUp />
           <GoChevronDown />
        </div>
        );
    } else if (sortOrder === 'asc') {
        return ( 
            <div>
               <GoChevronUp />
            </div>
        );
    } else if (sortOrder === 'desc') {
        return (
           <div>
             <GoChevronDown />
           </div>
        );
    }
}

export default SortableTable;