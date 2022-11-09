import { ChatBalloon, MainContainer } from "./Main.styled"
import TickDoubleBlue from "../../assets/tick-double-blue.svg"
import TickDoubleWhite from "../../assets/tick-double-white.svg"

function Main(props) {
    const { messages, deleteMessage } = props

    return (
        <MainContainer>
            {messages.map((message) => (
                <div>
                    <ChatBalloon
                        sender={message.sender}
                        onDoubleClick={() => deleteMessage(message.id)}
                    >
                        {message.sender !== "Me" && <h1>{message.sender}</h1>}
                        <p>{message.content}</p>
                        <div>
                            <span>{message.createdAt}</span>
                            {
                                message.sender === "Me"
                                ? <img src={TickDoubleWhite} alt="View status icon" />
                                : <img src={TickDoubleBlue} alt="View status icon" />
                            }
                        </div>
                    </ChatBalloon>
                </div>
            ))}
        </MainContainer>
    )
}

export default Main