import { FooterContainer } from "./Footer.styled"
import smiley from "../../assets/smiley.svg"
import paperClip from "../../assets/paperclip.svg"
import microphone from "../../assets/microphone.svg"
import { useState } from "react"

function Footer(props) {
    const { sendMessage } = props

    const [ text, setText ] = useState("")

    const changeText = (e) => {
        setText(e.target.value)
    }
    
    const clearText = () => {
        setText("")
    }

    const handleMessage = (e) => {
        if (e.key === "Enter") {
            sendMessage(text)
            setText("")
        }
    }

    return (
        <FooterContainer>
            <div>
                <button className="emoji">
                    <img src={smiley} alt="Emoji icon" />
                </button>

                <input
                    value={text}
                    onChange={changeText}
                    placeholder="Type a message"
                    onKeyDown={handleMessage}
                />
                
                <button className="paperclip">
                    <img src={paperClip} alt="Append icon" />
                </button>
            </div>

            <button className="microphone">
                <img src={microphone} alt="Microphone icon" />
            </button>
        </FooterContainer>
    )
}

export default Footer