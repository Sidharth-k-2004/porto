import React, { useState } from 'react';
import './projects_section.css';
import inventoryhome from '../screens/inventory-homepage.jpg';
import paracacheHome from '../screens/paracache_home.png'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('project');

  const projects = {
    project: [
      { url: paracacheHome, name: 'Paracache Simulator' },
      { url: inventoryhome, name: 'Inventory Management' },
      { url: 'https://via.placeholder.com/200?text=Web+Project+3', name: 'Web Project 3' },
      { url: 'https://via.placeholder.com/200?text=Web+Project+4', name: 'Web Project 4' },
      { url: 'https://via.placeholder.com/200?text=Web+Project+5', name: 'Web Project 5' },
      { url: 'https://via.placeholder.com/200?text=Web+Project+6', name: 'Web Project 6' },
      { url: 'https://via.placeholder.com/200?text=Web+Project+5', name: 'Web Project 5' },
      { url: 'https://via.placeholder.com/200?text=Web+Project+6', name: 'Web Project 6' }
    ],
    MiniDescription: [
      { url: inventoryhome,Title:'Streamlined inventory management with voice detection and and advanced image detection', name :' User-Friendly Interface: Our app offers an intuitive and easy-to-use interface, allowing users to manage their inventory efficiently without any hassle. Voice Command Integration: Say goodbye to tedious manual data entry! Our app enables users to manage their inventory using simple voice commands, making the process faster and more convenient. Stock Level Alerts: Never run out of stock again! Our app provides real-time alerts based on the stock level, ensuring that users are always informed and prepared to restock inventory as needed. Manual Inventory Management: Need to make quick adjustments? Our app allows users to manually add, remove, or modify inventory items with ease, providing flexibility and control over the inventory management process. Multilingual Support: Breaking language barriers! Our app supports communication in multiple languages, catering to smaller shops and businesses that may not be proficient in managing inventory using computers in a single language. Accessibility for Smaller Shops: Empowering smaller businesses! Our app levels the playing field by providing advanced inventory management tools in an accessible and user-friendly format, allowing smaller shops to compete more effectively in the market.' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+2', name: 'Android Project 2' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+3', name: 'Android Project 3' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+4', name: 'Android Project 4' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+5', name: 'Android Project 5' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+6', name: 'Android Project 6' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+7', name: 'Android Project 7' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+8', name: 'Android Project 8' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+9', name: 'Android Project 9' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+10', name: 'Android Project 10' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+11', name: 'Android Project 11' },
      { url: 'https://via.placeholder.com/200?text=Android+Project+12', name: 'Android Project 12' }
    ],
    KnowMore: [
      { url: 'https://via.placeholder.com/200?text=ML+Project+1', name: 'ML Project 1' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+2', name: 'ML Project 2' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+3', name: 'ML Project 3' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+4', name: 'ML Project 4' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+5', name: 'ML Project 5' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+6', name: 'ML Project 6' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+7', name: 'ML Project 7' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+8', name: 'ML Project 8' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+9', name: 'ML Project 9' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+10', name: 'ML Project 10' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+11', name: 'ML Project 11' },
      { url: 'https://via.placeholder.com/200?text=ML+Project+12', name: 'ML Project 12' }
    ]
  };
  const renderProjects = () => {
    return (
      <div className="grid-container">
        {projects[activeTab].map((project, index) => (
          <div className="grid-item" key={index}>
            <img src={project.url} alt={`Project ${index + 1}`} />
            <div className="text">{project.name}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderDescriptions = () => {
    return (
      <div className="list-container">
        {projects.MiniDescription.map((project, index) => (
          <div className="list-item" key={index}>
            <img src={project.url} alt={`Project ${index + 1}`} className="list-image" />
            <div className="list-text">
              <h3 className='list-text-header'>{project.Title}</h3>
              <p className='list-text-para'>{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

//   return (
//     <div className="projects">
//       <h1>Projects</h1>
//       <p>Projects are a great way to demonstrate skills and experience. Below are some of my works, showcasing various skills in web development, Android, and machine learning.</p>
//       <div className="tabs">
//         <div className={`tab ${activeTab === 'project' ? 'active' : ''}`} onClick={() => setActiveTab('project')}>WebDev</div>
//         <div className={`tab ${activeTab === 'MiniDescription' ? 'active' : ''}`} onClick={() => setActiveTab('MiniDescription')}>Description</div>
//         <div className={`tab ${activeTab === 'Resume' ? 'active' : ''}`} onClick={() => setActiveTab('KnowMore')}>Resume&Certificate</div>
//       </div>
//       <div className="tab-content">
        
//         <div className="grid-container">
//           {projects[activeTab].map((project, index) => (
//             <div className="grid-item" key={index}>
//               <img src={project.url} alt={`Project ${index + 1}`} />
//               <div className="text">{project.name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
return (
  <div className="projects">
    <h1>Projects</h1>
    <p>Projects are a great way to demonstrate skills and experience. Below are some of my works, showcasing various skills in web development, Android, and machine learning.</p>
    <div className="tabs">
      <div className={`tab ${activeTab === 'project' ? 'active' : ''}`} onClick={() => setActiveTab('project')}>WebDev</div>
      <div className={`tab ${activeTab === 'MiniDescription' ? 'active' : ''}`} onClick={() => setActiveTab('MiniDescription')}>Description</div>
      <div className={`tab ${activeTab === 'KnowMore' ? 'active' : ''}`} onClick={() => setActiveTab('KnowMore')}>Resume&Certificate</div>
    </div>
    <div className="tab-content">
      {activeTab === 'project' ? renderProjects() : renderDescriptions()}
    </div>
  </div>
);
};

export default Projects;
