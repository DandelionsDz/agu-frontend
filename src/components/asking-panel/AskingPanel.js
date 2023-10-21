import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Preview from "./Preview";
import Process from "./Process";
import Typing from "./Typing";
import Submitter from "./Submitter";
import Commit from "./Commit";

function AskingPanel({ isAnswering, store }) {
    let [step, setStep] = useState(0);

    useEffect(() => {
        if (step == 3) {
        }
    }, [step]);

    return (
        <Paper
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 10px",
                display: "flex",
                width: "100%",
                height: "auto",
                marginY: "15px",
            }}
        >
            <Process step={step} />

            {
                {
                    0: <Typing store={store} isAnswering={isAnswering} />,
                    1: <Preview isAnswering={isAnswering} store={store} />,
                    2: <Commit />,
                }[step]
            }

            <Submitter step={step} setStep={setStep} />
        </Paper>
    );
}

export default AskingPanel;
