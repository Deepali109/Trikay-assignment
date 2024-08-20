import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepConnector from "@mui/material/StepConnector";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import hexaImage from "../images/hexagonn.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

// Custom StepIcon component with hexagon shape
const Hexagon = styled("div")(({ active, completed }) => ({
  width: 22,
  height: 19,
  backgroundColor: active || completed ? "orange" : "#ccc",
  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "0.5rem",
  zIndex: 1,
}));

function HexagonStepIcon(props) {
  const { active, completed, icon } = props;
  return (
    <div className="bg-gray-100 shadow-lg shadow-gray-300">
      <Hexagon active={active} completed={completed}>
        {completed ? <CheckCircleIcon fontSize="small" /> : icon}
      </Hexagon>
    </div>
  );
}

// Custom connector with a broad vertical line and hexagon shapes
const HexagonStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${StepConnector.line}`]: {
    borderColor: "orange",
    borderLeftWidth: 8,
    borderStyle: "solid",
    minHeight: 24,
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      left: "-14px",
      top: "50%",
      width: "14px",
      height: "1px",
      backgroundColor: "orange",
      transform: "translateY(-50%)",
    },
  },
  [`& .${StepConnector.lineVertical}`]: {
    marginLeft: 8,
  },
  [`& .${StepConnector.root}`]: {
    backgroundColor: "transparent",
  },
}));

const steps = [
  {
    stepName: "A1",
    label: "Audit Reports",
    link: "/a1-auditreport",
  },
  {
    stepName: "A2",
    label: "Engagement Quality and Acceptance, Planning, and Internal Control",
    link: "/a2",
  },
  {
    stepName: "A3",
    label: "Risk, Evidence, and Sampling",
    link: "/a3",
  },
  {
    stepName: "Mini Exam 1",
    label: "",
    link: "/mini-exam-1",
  },
  {
    stepName: "A4",
    label:
      "Performing Further Procedures, Forming Conclusions, and Communication...",
    link: "/a4",
  },
  {
    stepName: "Mini Exam 2",
    label: "",
    link: "/mini-exam-2",
  },
  {
    stepName: "A5",
    label: "Integrated Audits, Attestation Engagements, Compliance, and ...",
    link: "/a5",
  },
  {
    stepName: "A6",
    label: "Accounting and Review Service Engagements, Interim Reviews, and...",
    link: "/a6",
  },
  {
    stepName: "Mini Exam 3",
    label: "",
    link: "/mini-exam-3",
  },
  {
    stepName: "Simulated Exam 1",
    label: "",
    link: "/simulated-exam-1",
  },
  {
    stepName: "Simulated Exam 2",
    label: "",
    link: "/simulated-exam-2",
  },
];

export default function StudyJourney() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "10px 20px",
        minWidth: 500,
      }}
    >
      <div className="flex">
        <div>
          <Image
            src={hexaImage}
            alt="Logo"
            className="h-24 w-28 -ml-7 -mt-10"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg text-gray-800 font-bold">Study Journey</h3>
          <h4 className="flex items-center text-xs font-semibold">
            How do I become Exam Day Ready? <IoMdArrowDropdown size={20} />
          </h4>
        </div>
      </div>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<HexagonStepConnector />}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <Link
              href={step.link}
              className="flex justify-between items-center hover:bg-gray-100"
            >
              <StepLabel StepIconComponent={HexagonStepIcon}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontSize: ".9rem", color: "orange" }}
                >
                  {step.stepName}
                </Typography>{" "}
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontSize: ".8rem", color: "black" }}
                >
                  {step.label}
                </Typography>
              </StepLabel>
              <IoIosArrowForward />
            </Link>
          </Step>
        ))}
      </Stepper>

      <button className=" bg-gray-800 w-full text-white font-bold p-2 rounded-md mt-5 mb-7 hover:bg-gray-700">
        Switch to Final Review
      </button>
    </Box>
  );
}
