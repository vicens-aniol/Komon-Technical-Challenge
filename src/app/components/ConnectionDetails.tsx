import { useState } from 'react';
import { SocialMediaConnection, SocialMediaContent } from '../types';

interface Props {
  connection: SocialMediaConnection;
}

const ConnectionDetails: React.FC<Props> = ({ connection }) => {
  const [search, setSearch] = useState("");
  const [selectedContent, setSelectedContent] = useState<SocialMediaContent | null>(null);

  const handleSelectContent = (content: SocialMediaContent) => {
    setSelectedContent(content);
  };

  const filteredContent = connection.content.filter((content) =>
    content.url.includes(search)
  );

  return ( //VISUAL ELEMENTS CONNECTION DETAILS
<div className="mt-6 w-full">
  <h2 className="text-2xl font-bold mb-4 text-black mt-6">{connection.name}</h2>
  <div className="border px-2 py-2 mb-4 bg-white text-black border-gray-200 flex items-center rounded-lg w-full md:w-1/2">
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-auto text-black mr-2">
      <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"/>
    </svg>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search content"
      className="flex-grow outline-none text-sm"
    />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredContent.map((content) => (
      <div key={content.id} className="mb-2 bg-white p-3 rounded-lg space-y-2 border-gray-200 border">
        <p className="font-medium text-black text-xs w-full">{content.type}: {content.url}</p>
        {/* Here would be implemented the selection of the preview script based on the url of the content */}
        <button onClick={() => handleSelectContent(content)} className="bg-gray-950 text-white px-4 py-2 mt-2 justify-center text-center rounded text-xs">
          Select
        </button>
      </div>
    ))}
  </div>
      {selectedContent && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Selected Content</h3>
          <p className="font-medium">{selectedContent.type}: {selectedContent.url}</p>
          <h4 className="text-base font-bold mb-2 pt-2 decoration-1">Actions</h4>
          <div className='flex w-full gap-2 md:justify-self-start'>
            {/* All backend code will be added on the funcitons stablished in the OnClick triggers of the buttons */}
            <button className="bg-gray-950 text-white px-4 py-2 mt-2 text-center rounded text-xs">Add to Profile Photo</button>
            <button className="bg-gray-950 text-white px-4 py-2 mt-2 text-center rounded text-xs">Community Share</button>
          </div>
        </div>
        // Here will also would be implemented the button to generate the polls and the multiple selection of contents, that could be added if a little more time was given
        // Here could be implemented the preview of the content based on the url of the content
      )}
    </div>
  );
};

export default ConnectionDetails;