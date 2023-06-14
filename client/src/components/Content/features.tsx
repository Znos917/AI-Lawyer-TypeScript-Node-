import { Fragment, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'

export default function features() {
  const [open, setOpen] = useState(1)

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <Fragment>
      <Accordion className="list-row mt-3 py-5 px-12" open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Instant legal help
        </AccordionHeader>
        <AccordionBody className="list-detail">
          Ask any question you want and we'll be happy to assist you.
        </AccordionBody>
      </Accordion>
      <Accordion className="list-row mt-3 py-5 px-12" open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Document generator
        </AccordionHeader>
        <AccordionBody className="list-detail">
          Create any legal agreement in one minute without legal expertise.
        </AccordionBody>
      </Accordion>
      <Accordion className="list-row mt-3 py-5 px-12" open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Document checker
        </AccordionHeader>
        <AccordionBody className="list-detail">
          Get an easy-to-understand summary of any agreement.
        </AccordionBody>
      </Accordion>
      <Accordion className="list-row mt-3 py-5 px-12" open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Document compare
        </AccordionHeader>
        <AccordionBody className="list-detail">
          Compare different agreements and see the differences between them.
        </AccordionBody>
      </Accordion>
    </Fragment>
  )
}
