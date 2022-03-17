import styles from "./ChatBot.module.css";

import { memo, useEffect, useRef, useState } from "react";
import FormData from "form-data";
import axios from "axios";
import styled, { keyframes } from "styled-components";

export default function ChatBot() {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const userId = useState(0);
    const fullChatBlockRef = useRef(null);
    const botFirstMessageRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        console.log("hello bot");
        const dataHolaBot = new FormData();
        dataHolaBot.append("message", "hola bot");
        dataHolaBot.append("driver", "web");
        dataHolaBot.append("userId", userId);
        // data.append("attachment", null);
        dataHolaBot.append("interactive", false);
        // data.append("attachment_data", undefined);

        axios.post("https://bcnscience-meetings.com/medicamente/chatbot/getBotResponse", dataHolaBot)
            .then(response => {
                const botMessages = response.data.messages.map(msg => {
                    msg.isBotText = true;
                    return msg
                })
                setMessages(messages.concat(botMessages));
            })
            .catch(err => {
                console.log(err.message);
            })
    },[]);

    // useEffect(() => {
    //     bottomRef.current.scrollIntoView({ behavior: "smooth" });
    // }, [messages])

    const toggleChatBot = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOption = (messageKey, optionValue) => {

        const newMessages = [...messages];
        console.log(newMessages);
        console.log(messageKey);
        newMessages[messageKey].actions = newMessages[messageKey].actions.filter(function(a) {
            a.selected = true;
            return a.value == optionValue
        });

        console.log(newMessages);
        setMessages(newMessages);

        const data = new FormData();
        data.append("message", optionValue);
        data.append("driver", "web");
        data.append("userId", userId);
        data.append("attachment", null);
        data.append("interactive", true);
        data.append("attachment_data", undefined);

        console.log("sending response");
        
        // post answer
        axios.post("https://bcnscience-meetings.com/medicamente/chatbot/getBotResponse", data)
            .then(response => {

                setTimeout(function() {
                // add new messages to state
                const botMessages = response.data.messages.map(msg => {
                    msg.isBotText = true;
                    return msg;
                })
                messages = messages.map(m => {
                    m.firstMessage = false;
                    return m;
                })
                botMessages[0].firstMessage = true;
                setMessages(messages.concat(botMessages));

                // scroll to new msgs
                let	scrollContainer = fullChatBlockRef.current;

                let scrollTarget = botFirstMessageRef.current;

                // if (sender == "bot") {
                    scrollTarget = botFirstMessageRef.current.offsetTop - 20;
                // } else {
                //     scrollTarget = scrollContainer.scrollHeight;
                // }

                console.log(scrollTarget);
                console.log(scrollContainer);

                scrollContainer.scrollTo({
                    top: scrollTarget,
                    left: 0,
                    behavior: 'smooth'
                });
                }, 1000);
                
            })
            .catch(err => {
                console.log(err.message);
            })
        
    }

	function getTime() {
		let today = new Date();
		let hours = today.getHours();
		let minutes = today.getMinutes();

		if (hours < 10) {
			hours = "0" + hours;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		let time = hours + ":" + minutes;
		return time;
	}

    const floatup = keyframes`
        from {
            transform: translateY(14px);
            opacity: .0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    `;

    const ChatBotToggler = styled.button`
        background-image: ${isOpen ? `url("https://bcnscience-meetings.com/medicamente/chatbot/img/flecha.png")` : `url("https://bcnscience-meetings.com/medicamente/chatbot/img/avatar.png")`};
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: center;
        background-color: ${isOpen ? `#0f359b` : `#ffffff`};
        transition: background-color 0.2s ease-out;
        // transition: background-image 0.2s ease-out;
        position: fixed;
        bottom: 30px;
        right: 50px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        outline: none;
        border: none;
        -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);

        .cb-bubble {
            color: #292929;
            position: absolute;
            bottom: 100px;
            right: 97px;
            width: 230px;
            border: 1px solid #8f8f8f;
            border-radius: 30px;
            border-bottom-right-radius: 0px;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            animation: ${floatup} 1.5s forwards;
            -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
        }
    `;

    const ChatBotContainer = styled.div`
        height: 0;
        min-width: 370px;
        overflow: hidden;
        // transition: height 0.2s ease-out;
        transition: opacity 0.2s ease-out;
        opacity: 0;
        background-color: #e6ebf4;
        position: fixed;
        bottom: 130px;
        right: 50px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        // resize: both;
        // overflow: scroll;
        -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);

        #cb-resize {
            position: absolute;
            left: 9px;
            top: 0;
            width: 20px;
            height: 20px;
            background-size: 100%;
            background-image: url("https://bcnscience-meetings.com/medicamente/chatbot/img/resize.png");
            z-index: 999;
            cursor: ew-resize;
            background-repeat: no-repeat;
            background-position: center;
        }

        &.active {
            min-height: 300px;
            height: 500px;
            opacity: 1;
        }

        .full-chat-block {
            height: 100%;
            text-align: center;
            overflow: auto;
            scrollbar-width: none;
            height: max-content;
            transition: height 0.2s ease-out;

            .cb-np4 {
                position: absolute;
                bottom: -43px;
                right: 5px;
                font-size: 7px;
                color: #ffffff;
            }

            @media screen and (max-width:600px) {
                width: 100%;
                border-radius: 0px;
            }

            .cb-chat-img {
                display: inline-block;
                width: 20px;
                margin-right: 8px;
            }
            
            .chat-header {
                background-image: linear-gradient(90deg, #aebe07, #143996);
                height: 100px;
                line-height: 100px;
                font-family: helvetica;
                font-size: 26px;
                font-weight: bold;
                color: white;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                position: absolute;
                top: 0px;
                z-index: 9;
                width: 100%;
                user-select: none;

                .cb-avatar-container {

                    background-color: #ffffff;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin-left: 20px;
                    #cb-avatar {
                        width: 38px;
                        height: 56px;
                        margin-top: 6px;
                        vertical-align: top;
                    }
                }
            }

            .outer-container {
                min-height: 500px;
                bottom: 0%;
                position: relative;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;

                .chat-container {
                    max-height: 400px;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    scroll-behavior: smooth;
                    hyphens: auto;

                    .chat-container::-webkit-scrollbar {
                        display: none;
                    }

                    #chatbox {
                        padding-left: 10px;
                        padding-right: 10px;
                    }
        
                    .chat-bar-input-block {
                        display: flex;
                        float: left;
                        box-sizing: border-box;
                        justify-content: space-between;
                        width: 100%;
                        align-items: center;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                        padding: 10px;
                    }
        
                    /* Chat bubbles */
        
                    #userInput {
                        width: 75%;
                    }
        
                    .input-box {
                        float: left;
                        border: none;
                        box-sizing: border-box;
                        width: 100%;
                        border-radius: 10px;
                        padding: 10px;
                        font-size: 16px;
                        color: #000;
                        background-color: white;
                        outline: none
                    }
        
                    .userText {
                        color: white;
                        font-family: Helvetica;
                        font-size: 16px;
                        font-weight: normal;
                        text-align: right;
                        clear: both;
                    }
        
                    .userText span {
                        line-height: 1.5em;
                        display: inline-block;
                        background: #5ca6fa;
                        padding: 10px;
                        border-radius: 8px;
                        border-bottom-right-radius: 2px;
                        max-width: 80%;
                        margin-right: 10px;
                        animation: ${floatup} .5s forwards;
                        text-align: left;
                    }
        
                    .botText {
                        color: #001d77;
                        font-family: Helvetica;
                        font-weight: normal;
                        font-size: 16px;
                        text-align: left;

                        span {
                            line-height: 1.5em;
                            display: inline-block;
                            background: #ffffff;
                            padding: 10px;
                            margin-right: 50px;
                            border-radius: 12px;
                            border-bottom-left-radius: 0px;
                            animation: ${floatup} .5s forwards
                        }
                    }

                    .actionBtn span {
                        margin-left: 20px;
                        cursor: pointer;
                        background-color: #aebe07;
                        color: #ffffff;
                        transition: background-color 0.3s;

                        &.selected {
                            cursor: unset;
                            background-color: #7d870a;
                        }
    
                        &:hover {
                            background-color: #7d870a;
                        }
                    }
                }
            }
        }
    `
  
    // TODO: does this even work? 
    // function areEqual(prevMessage, message) {
    //     console.log(message, prevMessage);
    //     return message.text == prevMessage.text;
    // }
    
    // const Message = memo((message, key)=> {
    //     console.log(key)
    //     console.log(message)
    //     return <div>
    //             <p className={"mb-3 " + (message.isBotText ? "botText" : "userText")} ref={message.firstMessage ? botFirstMessageRef : null}>
    //                 <span dangerouslySetInnerHTML={{__html: message.text}}></span>
    //             </p>
    //             {message.actions && message.actions.map((option, optionKey) => {
    //                 return (
    //                     <div key={optionKey} className="mb-3 userText actionBtn">
    //                         <span className={`${option.selected ? "selected" : ""}`} dangerouslySetInnerHTML={{__html: option.text}} data-group={key} onClick={e => {handleClickOption(key, option.value)}}></span>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    // }, areEqual);
  
    return (
        <>
            <ChatBotToggler onClick={toggleChatBot} type="button">
				<div className='cb-bubble'>
					¿Puedo ayudar en algo?
				</div>
            </ChatBotToggler>

            <ChatBotContainer className={isOpen ? "active" : ""}>
    			<div id="cb-resize"></div>
				<div className="full-chat-block" ref={fullChatBlockRef}>
					<div className="chat-header">
						<span className="cb-avatar-container">
							<img id="cb-avatar" src="https://bcnscience-meetings.com/medicamente/chatbot/img/avatar.png" />
						</span>
                        <span>¡Hola! Soy PhilBot</span>
                    </div>

					<div className="outer-container">
                        <div className="chat-container">
                            
                            <div id="chatbox">
                                <h5 id="chat-timestamp">{getTime()}</h5>
                                {messages.map((message, key) => {
                                    return (
                                        <div>
                                            <p className={"mb-3 " + (message.isBotText ? "botText" : "userText")} ref={message.firstMessage ? botFirstMessageRef : null}>
                                                <span dangerouslySetInnerHTML={{__html: message.text}}></span>
                                            </p>
                                            
                                            {message.actions && message.actions.map((option, optionKey) => {
                                                return (
                                                    <div key={optionKey} className="mb-3 userText actionBtn">
                                                        <span className={`${option.selected ? "selected" : ""}`} dangerouslySetInnerHTML={{__html: option.text}} data-group={key} onClick={e => {handleClickOption(key, option.value)}}></span>
                                                    </div>
                                                )}
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div className="chat-bar-input-block">
                                <div id="userInput">
                                    {/* <input id="textInput" className={styles.input_box} type="text" name="msg"
                                        placeholder="Escribe aquí cualquier duda..." /> */}
                                </div>
                            </div>

                            <div ref={bottomRef} id="chat-bar-bottom">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </ChatBotContainer>
        </>
    )
}