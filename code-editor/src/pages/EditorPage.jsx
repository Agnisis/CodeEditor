import React from "react";
import Editor from "../components/Editor";
import { useState } from "react";
import Client from "../components/Client";

const EditorPage = () => {

  const [clients, setClients] = useState([
    { socketId: 1, username: "Agnisis" },
    { socketId: 2, username: "Dutta" },
  ]);
  return (
    <div className="flex ">
      <div>
        <div>
          <div>
            <img src="/code-sync.png" alt="" />
          </div>
          <h3 className="text-white font-semibold">Connected</h3>
          {/* clientslist */}
          <div>
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>

        <button className="bg-white p-3 text-slate-800 font-medium rounded-lg m-3">
          Copy Room ID
        </button>
        <button className="bg-green-500 p-3 text-white font-medium rounded-lg m-3">
          leave
        </button>
      </div>

      {/* right */}
      <div>
        <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
