import React , {useState} from "react"
import { Link } from "react-router-dom"
import "../styles/Create.css"
export default function Create(props)
{
    const [message , setMessage] = useState("")
    const [boards , setBoards] = useState({
        all : false,
        science : false, 
        music : false , 
        movies : false , 
        sports : false
    })
    function handleSwitch(event)
    {
        const bufferBoards = {...boards}
        if (event.target.id == "all")
        {
            for (let key in bufferBoards)
                bufferBoards[key] = event.target.checked;
        }
        else if (bufferBoards["all"] == true)
            bufferBoards["all"] = false;
        bufferBoards[event.target.id] = event.target.checked;
        setBoards(bufferBoards)
    }
    function handleChange(event)
    {
        setMessage(event.target.value)
    }
    function boardsAreEmpty()
    {
        for (let key in boards)
        {
            if (boards[key] == true)
                return false
        }
        return true
    }
    function readyToSubmit()
    {
        if (message != "" && !boardsAreEmpty())
            return true
        else
            return false
    }
    function handleSubmit()
    {
        if (!readyToSubmit())
            return 
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const time = hours + ":" + minutes + ":" + seconds
        const newData = {
                message ,
                boards,
                time
        }
        props.handleNewData(newData)
        window.location.href = "/"
    }
    
    return (
        <React.Fragment>
            <div id="form-wrapper">
            <div id="form">
                <div id = "data-placeholder"> Enter the messsage :</div>
                <textarea  onChange={handleChange} value = {message} id = "message" />
                <div id  = "board-placeholder"> Select the board for posting : </div>
                    <div className="board-wrapper">
                    <input type ="checkbox" id= "all" className="checkbox" onChange={handleSwitch} checked = {boards["all"]}/> All ♾️<br/>
                    </div>
                    <div className="board-wrapper">
                    <input type ="checkbox" id= "science"  className="checkbox" onChange={handleSwitch} checked = {boards["science"]}/> Science 🔬🔭👨‍🔬 <br/>
                    </div>
                    <div className="board-wrapper">
                    <input type ="checkbox" id= "music"  className="checkbox" onChange={handleSwitch} checked = {boards["music"]}/> Music 🎵🎻🎙<br/>
                    </div>
                    <div className="board-wrapper">
                    <input type ="checkbox" id= "movies"  className="checkbox" onChange={handleSwitch} checked = {boards["movies"]}/> Movie 🎥🎬🎞 <br/>
                    </div>
                    <div className="board-wrapper">
                    <input type ="checkbox" id= "sports"   className="checkbox" onChange={handleSwitch} checked = {boards["sports"]}/> Sports ⚽🏏🎾<br/>
                    </div>
                        <button onClick = {handleSubmit} id="create-submit-button">Post 🌎</button> 
                        
                
            </div>
            </div>
        </React.Fragment>
    )
}