import React, { useState, useEffect } from 'react';
import { Actor, HttpAgent } from "@dfinity/agent";
import { artist_tracking_backend } from 'declarations/artist_tracking_backend'; // Import the IDL
import './index.scss';

const App = () => {
  const [artists, setArtists] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(''); // State to handle errors

  useEffect(() => {
    const init = async () => {
      try {
        const agent = new HttpAgent({ host: "http://localhost:8000" });
        const artistTrackingBackend = Actor.createActor(artist_tracking_backend_idl, {
          agent,
          canisterId: 'YOUR_BACKEND_CANISTER_ID' // Replace with your actual canister ID
        });

        const [artistData, projectData] = await Promise.all([
          artistTrackingBackend.getArtists(),
          artistTrackingBackend.getProjects()
        ]);

        setArtists(artistData);c
        setProjects(projectData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch artists and projects. Please try again later.");
      }
    };

    init();
  }, []);

  return (
    <div>
      <h1>Artists and Projects</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <h2>Artists</h2>
        <ul>
          {artists.map((artist, index) => (
            <li key={index}>{artist.name} - {artist.contactInfo}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project.title} - {project.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;