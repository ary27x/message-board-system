import React from "react";
import "../styles/Message.css"
export default function ScienceBoard(props)
{
    const requiredData = [];
    const emptyMessage =<h3>There is nothing here , go create something !</h3>

    for (let i = 0 ; i < props.data.length ; i++)
    {
        if (props.data[i].boards["science"])
            requiredData.push(props.data[i])
    }
    var boardsData = [];
    for (let i = 0 ; i < requiredData.length ; i++)
    {
        var stringData = ""
        for (let key in requiredData[i].boards)
            {
                var tempData = "";
                if (requiredData[i].boards[key])
                    tempData = stringData == "" ? "Board : " +"/"+ key + " " : "/" + key + " "
                stringData = stringData + tempData
            }
            boardsData.push(stringData)
    }
    
    
    return (
        <div className="message-wrapper">
           <div className="header-data"> /science 🔬🔭👨‍🔬 
           </div>
            {
            requiredData.map((item , i) => <div key = {i} className="message">
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
                requiredData.length == 0 && emptyMessage
            }
        </div>
        
    )
}