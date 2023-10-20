import { Box, Step, StepLabel, Stepper } from "@mui/material";

function Process({step}) {
  const QontoStepIcon = (props) => {
    const { active, completed, className } = props;
    return (
      <Box
        display={"flex"}
        height={"22px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            width: "20px",
            height: "20px",
            background: completed ? "#ffcc01" : active ? "#6a737c" : "#e3e6e8",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
    );
  };

  return (
    <Box>
      <Stepper activeStep={step} alternativeLabel>
        <Step key={"1"}>
          <StepLabel StepIconComponent={QontoStepIcon}>{"Chỉnh sửa"}</StepLabel>
        </Step>

        <Step key={"2"}>
          <StepLabel StepIconComponent={QontoStepIcon}>{"Xem thử"}</StepLabel>
        </Step>

        <Step key={"3"}>
          <StepLabel StepIconComponent={QontoStepIcon}>{"Xác nhận"}</StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
}

export default Process;
