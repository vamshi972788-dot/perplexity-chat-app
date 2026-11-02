
// import { socketconnection } from "../service/chat.socket";

// export const usechat = () =>{

//     return(
//         socketconnection
//     )

// }

import { socketconnection } from "../service/chat.socket.js";

export const useChat = () => {
    return socketconnection;
};