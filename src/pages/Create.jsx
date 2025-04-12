import React from 'react';
import maintenanceGif from '../assets/maintenance.gif';

const Create = () => {
  return (
    <div className="page-container">
      <h1>Create Post Page</h1>
      <div className="maintenance-content">
        <h2>Page Under Maintenance</h2>
        <div className="maintenance-logo">
          <img src={maintenanceGif} alt="Maintenance" />
        </div>
      </div>

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f4f4f4;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-top: 20px;
        }

        .maintenance-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }

        h2 {
          font-size: 1.5rem;
          color: #666;
          margin-bottom: 20px;
        }

        .maintenance-logo img {
          max-width: 200px;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Create;
