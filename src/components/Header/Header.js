import videoCam from "../../assets/video-cam.svg"
import phoneCall from "../../assets/phone-call.svg"
import moreOptions from "../../assets/more-options.svg"
import { HeaderContainer, Select, Status } from "./Header.styled"

function Header(props) {
    const { senders, currSender, onChangeSender } = props
    
    return (
        <HeaderContainer>
            <div className="sender-profile">
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="Profile photo" />
                <div>
                    <Select value={currSender} onChange={onChangeSender} >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </Select>
                    <Status>Online</Status>
                </div>
            </div>

            <div className="action-menu">
                <button>
                    <img src={videoCam} alt="Video cam icon" />
                </button>

                <button>
                    <img src={phoneCall} alt="Phone call icon" />
                </button>

                <button>
                    <img src={moreOptions} alt="More options icon" />
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header