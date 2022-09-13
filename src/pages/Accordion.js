// Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.

import React, {useState, useRef} from 'react'

const AccordionElement = ({title, content}) => {

  const [visible, setVisible] = useState(true);

  return (
    <div className={'accordion'}>
        <h3 className={'accordion-title'} onClick={() => setVisible(!visible)}>{title}<span className={'accordion-sign'}>{visible ? '-' : '+'}</span></h3>
        {visible && <p className={'accordion-body'}>{content}</p>}
    </div>
  )
}

const Accordion = () => {

    const accordionData = [{
        title: 'Accordion 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
        title: 'Accordion 2',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'Accordion 3',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          }
    ]
    
    // const { title, content } = accordionData;

    // const accordionRef = useRef(null);

  return (
    <div>
      <h1>Accordion</h1>
        {accordionData.map((accordion) => {
          return <AccordionElement content={accordion.content} title={accordion.title}/>
        })}

    </div>
  )
}

export default Accordion