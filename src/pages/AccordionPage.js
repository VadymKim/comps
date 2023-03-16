import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
       id: 'r4uru5',
       label: 'Can I use React in any project',
       content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 
    },
    {
        id: 'rti7i6ihig',
        label: 'Can I use JavaScript in any project',
        content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 
     },
     {
        id: 'fn4n3nn',
        label: 'Can I use CSS in any project',
        content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 
     },
  ];

  return <Accordion items={items} />;   
}

export default AccordionPage;