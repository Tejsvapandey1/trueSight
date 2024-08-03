import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
      
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          HOW TO STAY FOCUSED WHILE WORK
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion><Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          HOW TO AVOID DISTRACTIONS
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion><Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          HOW TO BE MORE PRODUCTIVE
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion><Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          WAYS TO MAINTAIN A HEALTHY LIFESTYLE
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion><Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          HOW TO GET 200CR PACKAGE
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion><Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          STRATIGIES TO ROB SENIOR CORE OF CODECHEF
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion><Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color:"#FFFFFF"
          }}
        >
          HOW TO STAY FOCUSED WHILE WORK
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
