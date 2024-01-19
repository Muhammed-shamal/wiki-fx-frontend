import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../profile.css'

const YourComponent = () => {
  const [activeItem, setActiveItem] = useState('rankings'); // Initial active item
  const [filteredContent, setFilteredContent] = useState([]);

  const items = [
    { id: 'rankings', label: 'Rankings', href: '/en/wikifxranking.html' },
    { id: 'fire', label: 'Fire', href: '/en/wikifxfire.html' },
    // Add more items as needed
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.id);
  

   

    setFilteredContent(item); // Set the filtered content based on the clicked item
  };

  const renderHeaderContent = () => {
    const selectedItem = items.find(item => item.id === activeItem);

    if (selectedItem) {
      return (
        <a href={selectedItem.href} className="header-rankings">
          <span><i className={`fa-solid fa-${activeItem}`}></i></span>
          <span className="header-rankings-text" style={{ marginLeft: 6 }}>
            {selectedItem.label}
          </span>
        </a>
      );
    }

    return null;
  };

  return (
    <div className='header-potion'>
      {renderHeaderContent()}
      <ul>
        {items.map(item => (
          <li key={item.id} className={activeItem === item.id ? 'active-rank' : ''} onClick={() => handleItemClick(item)}>
            <span className='icon'><i className={`fa-solid fa-${item.id}`}></i></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
