"use client";

import { useState } from 'react';
import AddConnection from './components/AddConnection';
import ConnectionList from './components/ConnectionList';
import ConnectionDetails from './components/ConnectionDetails';
import { mockConnections } from './mocks/connections';
import { SocialMediaConnection } from './types';

const HomePage: React.FC = () => {
  const [connections, setConnections] = useState<SocialMediaConnection[]>(mockConnections);
  const [selectedConnection, setSelectedConnection] = useState<SocialMediaConnection | null>(null);

  const handleAddConnection = (connection: SocialMediaConnection) => {
    setConnections((prevConnections) => [...prevConnections, connection]);
  };

  const handleEditConnection = (id: string, name: string) => {
    setConnections((prevConnections) =>
      prevConnections.map((connection) =>
        connection.id === id ? { ...connection, name } : connection
      )
    );
  };

  const handleSelectConnection = (id: string) => {
    const connection = connections.find((connection) => connection.id === id);
    setSelectedConnection(connection ?? null);
  };

  return ( // Fully responsive layout
<div className="mx-auto h-screen py-0 flex flex-col md:flex-row md:px-0">
  <div className="w-full md:px-10 py-10 md:w-1/4 mb-4 md:mb-0 px-6">
    <div className="flex flex-col h-full px-4 md:px-0">

      {/* Logo */}
      <div className="mb-4">
        <img className="object-cover w-40 mb-4 mx-auto md:mx-0" src="logo-komon-dark.svg" alt="Image" />
      </div>

      {/* Profile photo */}
      <div className="mb-4">
        <img className="rounded-full object-cover h-20 w-20 mx-auto md:mx-0" src="profile_photo.png" alt="Profile Photo" />
      </div>

      {/* Child components */}
      
      <p className="py-4 font-bold">+ Add Conection</p>
      <AddConnection onAddConnection={handleAddConnection} />
      <hr className="my-4 dashed border-gray-100" ></hr>
      <p className="pb-4 font-bold">Connected Accounts</p>
      <ConnectionList connections={connections} onEditConnection={handleEditConnection} onSelectConnection={handleSelectConnection} />
    </div>
  </div>
  <div className="w-full md:w-3/4 bg-gray-100">
    <div className="flex h-full px-4 md:px-10">
      {selectedConnection && <ConnectionDetails connection={selectedConnection} />}
    </div>
  </div>
</div>
  );
};

export default HomePage;
