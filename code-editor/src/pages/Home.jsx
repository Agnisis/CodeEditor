import React from "react";
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router";
const Home = () => {


const navigate=useNavigate();
const [roomId,setRoomId]=useState('')
const [username, setUsername] = useState("");


  const createNewRoom=(e)=>{
    e.preventDefault()
    const id=uuidv4()
    setRoomId(id)
    toast.success('created new room')

    console.log(id)

  }


  const joinRoom=()=>{
    if(!roomId || !username){
      toast.error('Room ID & Username Required')
      return
    }

    //redirect
    navigate(`/editor/${roomId}`,{
      state:{
        username,
      }
    })
  }

  return (
    <div className="text-white flex items-center justify-center h-screen">
      <div className="items-center justify-center bg-gray-800 p-4 m-5 rounded-xl max-w-fit ">
        <img
          className="h-1/2 w-1/2"
          src="/code-sync.png"
          alt="code-sync logo"
        />
        <h4 className="text-xl mt-3">Paste Invitation Room ID</h4>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="ROOM ID"
            className="my-3 p-2 rounded-sm border-2 border-cyan-500 outline-none  text-slate-600"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="my-3 p-2 rounded-sm border-2 border-cyan-500 outline-none  text-slate-600"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button className="bg-green-400 py-2 px-3  rounded-lg text-xl font-bold justify-end hover:bg-green-500 cursor-pointer transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 w-20 ml-auto" onClick={joinRoom}>
            Join
          </button>
          <span className="my-4 items-center">
            If you dont have an invite Create &nbsp;
            <a
              onClick={createNewRoom}
              href=""
              className=" text-green-500 italic hover:text-green-400"
            >
              New Room
            </a>
          </span>
        </div>
      </div>

      <footer className="fixed bottom-0 p-5 text-3xl">
        <h4>Built with ❤️ </h4>
      </footer>
    </div>
  );
};

export default Home;
