const vegy = [
    {name: 'Onion', cost: 5, weight: 10,},
    {name: 'Carrot', cost: 10, weight: 5,},
    {name: 'Tomato', cost: 15, weight: 12,},
];

function getValue(vegitable) {
    
    return vegitable.cost;
}

const sortOrder = 'asc';

vegy.sort((a, b) => {
    const valA = getValue(a);
    const valB = getValue(b);

    const orderCoefficient = sortOrder === 'asc' ? 1 : -1; 

    if (typeof valA === 'string') {

        return valA.localeCompare(valB) * orderCoefficient;

    } else {

        return (valA - valB) * orderCoefficient;
    }
})