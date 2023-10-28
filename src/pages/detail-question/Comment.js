import { Box, Typography } from "@mui/material";
import CustomButton from "../../components/custom-button/CustomButton";
import AskingPanel from "../../components/asking-panel/AskingPanel";
import HumanAnswer from "./HumanAnswer";
import { useState } from "react";
import useDetailQuestionStore from "../../stores/detail-question/store";
import EditIcon from "@mui/icons-material/Edit";
import { borderColor } from "../../utils/colors";

function Comment({ answers }) {
    let [isAnswering, setIsAnswering] = useState(false);
    let detailStore = useDetailQuestionStore();
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                marginTop: "5px",
                height: "10%",
            }}
        >
            <Box
                paddingBottom={"20px"}
                borderTop={`1px solid ${borderColor}`}
                width={"100%"}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "18px",
                            textAlign: "left",
                            fontWeight: "bold",
                        }}
                    >
                        All Answers{" "}
                    </Typography>
                    <CustomButton
                        padding="0 15px"
                        onClick={() => setIsAnswering(!isAnswering)}
                    >
                        <EditIcon />
                    </CustomButton>
                </Box>

                {isAnswering && (
                    <AskingPanel store={detailStore} isAnswering={true} />
                )}

                {answers?.length > 0
                    ? answers.map((answer) => {
                          return (
                              <HumanAnswer key={answer.id} answer={answer} />
                          );
                      })
                    : "There is no answer yet"}
            </Box>
        </Box>
    );
}

export default Comment;
