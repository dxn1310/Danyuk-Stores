import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
  } from '@chakra-ui/react'

import Cards from "../itemListComponents/Cards.js"
import AccordianMenu from './AccordianMenu.js';
import img from "../../landing/images/img1.jpg";

export default function AccordionType({types,Data}) {
    const itemName = "Hello";
    const itemPic = {img};
    const itemData = "my name is Dhanish Siddharth euifberc bb erbrebrupburburbberq;bekvbjbajckjkab;reuivv erbvab jk curye a;uis.hdciblurevyv e;v"

  return (
    <div>
        <Accordion defaultIndex={[0]} allowToggle width={"100%"} marginTop={"2rem"}>
            {types.map((key,index) => (
                <AccordionItem width={"100%"}  border={"1px"} marginBottom={"1.5rem"} align={"center"} borderRadius={"2rem"}>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='center' width={"100%"}>
                        {key}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <AccordianMenu type={key} Data={Data}/>
                        {/* <Cards itemName={itemName} itemData={itemData} itemPic={img}/> */}
                    
                    </AccordionPanel>
                </AccordionItem>
            ))} 
        </Accordion>     
    </div>
  )
}
