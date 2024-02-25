import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqs = ({faqs}:any) => {
  return (
    <div className="w-full px-4 sm:px-12 md:px-20 lg:px-32 py-8 flex flex-col gap-4 ">
    <h6 className="inter text-2xl text-primary font-semibold">
      Frequenly Asked Questions
    </h6>
    {faqs?.map((faq: any) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq?.question}
          </AccordionSummary>
          <AccordionDetails>
            <p className="inter text-sm text-gray-500">
              {faq?.answer}
            </p>
          </AccordionDetails>
        </Accordion>
      );
    })}
 
  </div>
  )
}

export default Faqs