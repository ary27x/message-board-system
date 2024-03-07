import React from "react";
import "../styles/Message.css"
export default function AllBoard(props)
{
    var boardsData = [];
    const emptyMessage =<h3>There is nothing here , go create something !</h3>

    for (let i = 0 ; i < props.data.length ; i++)
    {
        var stringData = ""
        for (let key in props.data[i].boards)
            {
                var tempData = "";
                if (props.data[i].boards[key])
                    tempData = stringData == "" ? "Board : " +"/"+ key + " " : "/" + key + " "
                stringData = stringData + tempData
            }
            boardsData.push(stringData)
    }
    
    
    return (
        <div className="message-wrapper">
           <div className="header-data"> /all  ♾️
           </div>
            {
            props.data.map((item , i) => <div key = {i} className="message">
                <div className="message-class">
                {item.message}
                    </div>
                    <div className="meta-wrapper">
                        <div className="time-wrapper">Post Time : {item.time}</div>
                        <div className="posted-on-wrapper"> 
                        {boardsData[i]}
                        </div>
                        </div>
                
                </div>)
            }
            {
                props.data.length == 0 && emptyMessage
            }
        </div>
        
    )
}