import { Box, Container, Divider } from "@mui/material";
import AiMessage from "./AiMessage";
import { Input } from "antd/es";
import UserMessage from "./UserMessage";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import useChatStore from "../../stores/ai-chatbox/store";
import NavBar from "../../components/NavBar";

function AiChatBox() {
  const chatStore = useChatStore();
  let message = chatStore.message;
  let conversation = chatStore.conversation;

  const handleMessage = (e) => {
    chatStore.setMessage(e.target.value);
  };

  const handleOnKey = (e) => {
    if(e.key === 'Enter' || e.keyCode === 13) {
        chatStore.setAddUserMessage(message);
        chatStore.setAddAiMessage(message);
        chatStore.setMessage("");
    }
  }

  return (
    <Container
      sx={{
        paddingY: "15px",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      maxWidth="md"
    >
      <Box sx={{ height: "90%", overflow: "auto" }}>
        {conversation.map((conver) => {
          if (conver.role == "ai")
            return (
              <>
                <AiMessage>{conver}</AiMessage>
                <Divider/>
              </>
            );

            return (
                <>
                  <UserMessage>{conver.content}</UserMessage>
                  <Divider/>
                </>
              ); 
        })}
      </Box>

      <Box
        sx={{
          height: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Input
          onChange={handleMessage}
          onKeyDown={handleOnKey}
          value={message}
          suffix={<SendRoundedIcon color={message && "primary"} />}
          style={{ padding: "15px" }}
          placeholder="Type your message"
        />
      </Box>
    </Container>
  );
}

export default AiChatBox;
