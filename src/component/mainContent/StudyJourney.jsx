import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepConnector from "@mui/material/StepConnector";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import checkmark icon from Material-UI
import { styled } from "@mui/material/styles";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import hexaImage from "../images/hexagonn.png";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
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
  zIndex: 1, // Ensure hexagon is on top
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
    borderColor: "orange", // Show the line with a color
    borderLeftWidth: 8, // Broader vertical line
    borderStyle: "solid", // Ensure the border style is solid
    minHeight: 24, // Adjust the height to ensure visibility
    position: "relative",
    // Adding a pseudo-element for a visual line connecting to the hexagon
    "::before": {
      content: '""',
      position: "absolute",
      left: "-14px", // Adjust this value to align with the hexagon
      top: "50%",
      width: "14px", // Line width
      height: "1px",
      backgroundColor: "orange",
      transform: "translateY(-50%)",
    },
  },
  [`& .${StepConnector.lineVertical}`]: {
    marginLeft: 8, // Align with the hexagon
  },
  [`& .${StepConnector.root}`]: {
    backgroundColor: "transparent", // Ensure background doesn't interfere
  },
}));

const steps = [
  {
    stepName: "A1",
    label: "Audit Reports",
  },
  {
    stepName: "A2",
    label: "Engagement Quality and Acceptance, Planning, and Internal Control",
  },
  {
    stepName: "A3",
    label: "Risk, Evidence, and Sampling",
  },
  {
    stepName: "Mini Exam 1",
    label: "",
  },
  {
    stepName: "A4",
    label:
      "Performing Further Procedures, Forming Conclusions, and Communication...",
  },
  {
    stepName: "Mini Exam 2",
    label: "",
  },
  {
    stepName: "A5",
    label: "Integrated Audits, Attestation Engagements, Compliance, and ...",
  },
  {
    stepName: "A6",
    label: "Accounting and Review Service Engagements, Interim Reviews, and...",
  },
  {
    stepName: "Mini Exam 3",
    label: "",
  },
  {
    stepName: "Simulated Exam 1",
    label: "",
  },
  {
    stepName: "Simulated Exam 2",
    label: "",
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
  const navigate = useRouter();
  const handleDescription = () => {
    navigate.replace("/a1-auditreport");
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
        <div className="">
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
            <div className=" flex justify-between items-center hover:bg-gray-100">
              <div className="">
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
              </div>
              <div className="cursor-pointer" onClick={handleDescription}>
                <IoIosArrowForward />
              </div>
            </div>
            {activeStep === index && (
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    onClick={handleNext}
                    sx={{
                      mr: 1,
                      fontSize: ".75rem",
                      backgroundColor: "orange",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#eab148", // Change to the desired hover color
                        color: "#fff", // Optionally adjust text color on hover
                      },
                    }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{
                      mr: 1,
                      fontSize: ".75rem",
                      backgroundColor: "orange",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#eab148", // Change to the desired hover color
                        color: "#fff", // Optionally adjust text color on hover
                      },
                    }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            )}
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Finished!</Typography>
          {/* <Button
            onClick={handleReset}
            sx={{ mt: 1, mr: 1, backgroundColor: "orange" }}
          >
            Reset
          </Button> */}
        </Paper>
      )}
      <button className=" bg-gray-800 w-full text-white font-bold p-2 rounded-md mt-5 mb-7 hover:bg-gray-700">
        Switch to Final Review
      </button>
    </Box>
  );
}
