import { useState } from 'react';
import { SocialMediaConnection } from '../types';

interface Props {
  onAddConnection: (connection: SocialMediaConnection) => void;
}

const AddConnection: React.FC<Props> = ({ onAddConnection }) => {
  const [platform, setPlatform] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddConnection({
      id: Date.now().toString(),
      platform,
      name,
      username,
      content: []
    });

    // clear input fields
    setPlatform("");
    setName("");
    setUsername("");
  };

  return (
    // Buttons to connect to social media platforms
    <div className="flex flex-col space-y-4">

      {/* This buttons will have to be configured in order to desire the right API Calls in the backend, just by adding the code in the onClick Trigger */}

      {/* Facebook */}
      <button type="button" className="justify-center border border-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 py-4">
      <svg className="w-4 h-4 mr-2 -ml-1 text-black" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
      Connect with Facebook
      </button>

      {/* Instagram */}
      <button type="button" className="justify-center border border-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 py-4">
      <svg className="w-4 h-4 mr-2 -ml-1 text-black" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      Connect with Instagram
      </button>
    </div>

    // DEBUG: CODE TO ADD MANUAL CONNECTIONS
    /*<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        placeholder="Platform"
        required
        className="border p-2"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="border p-2"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Connection</button>
    </form>*/
  );
};

export default AddConnection;
