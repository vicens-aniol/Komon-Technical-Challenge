import { useState } from 'react';
import { SocialMediaConnection } from '../types';

interface Props {
  connections: SocialMediaConnection[];
  onEditConnection: (id: string, name: string) => void;
  onSelectConnection: (id: string) => void;
}

const ConnectionList: React.FC<Props> = ({ connections, onEditConnection, onSelectConnection }) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const handleEdit = (connection: SocialMediaConnection) => {
    setEditId(connection.id);
    setEditName(connection.name);
  };

  const handleSave = (id: string) => {
    onEditConnection(id, editName);
    setEditId(null);
  };

  return (
    <div className="grid gap-3 overflow-y-auto" style={{ maxHeight: "calc(100vh - 50px)" }}>
      {connections.map((connection) =>
        editId === connection.id ? (
          <div key={connection.id} className="flex items-center space-x-2 bg-gray-950 p-3 rounded-lg">
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="text-white w-3/4 bg-transparent text-base border-b border-white"
            />
            <button onClick={() => handleSave(connection.id)} className="w-1/4 px-0 py-2 justify-center text-center fill-white hover:fill-white/50">
              <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
                <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z" className="transition-colors"/>
              </svg>
            </button>
          </div>
        ) : (
          <div key={connection.id} className="flex items-center space-x-2 bg-gray-950 p-3 rounded-lg">
            <div className="text-white w-3/4"><p className="text-xs font-regular text-gray-400">{connection.platform}</p><p className='text-bold text-sm'>{connection.name}</p></div>
            <button onClick={() => handleEdit(connection)} className="px-4 py-2 justify-center text-center fill-white hover:fill-white/50">
              <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full text-white"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" className="transition-colors"/></svg>
            </button>
            <button onClick={() => onSelectConnection(connection.id)} className="text-white px-4 py-2 border-white fill-white hover:fill-white/50"><svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full text-white"><path d="M13 24v-13.333l10 8.333h-6.156l-3.844 5zm8-20h2v-4h-4v2h2v2zm0 6h2v-4h-2v4zm-4-10h-4v2h4v-2zm4 14.73l2 1.645v-4.375h-2v2.73zm-10-14.73h-4v2h4v-2zm0 20h-4v2h4v-2zm-10-16h2v-2h2v-2h-4v4zm2 2h-2v4h2v-4zm0 6h-2v4h2v-4zm0 6h-2v4h4v-2h-2v-2z" className="transition-colors "/></svg></button>
          </div>
        )
      )}
    </div>
  );
};

export default ConnectionList;