// src/components/Home.jsx
import React, { useState } from 'react';
import './Home.css'; // Create this CSS file to hold styles for this component

const Home = () => {
  // Initialize state for song controls
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioElement] = useState(new Audio(`/assets/songs/song1.mp3`));

  const songs = [
    { songName: "Pink Venom by BLACKPINK", filePath: "songs/song1.mp3", coverPath: "./public/assets/covers/1.jpg" },
    { songName: "Kill this love by BLACKPINK", filePath: "songs/song2.mp3", coverPath: "./public/assets/covers/5.jpg" },
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "./public/assets/covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "/covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "./public/assets/covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "./public/assets/covers/4.jpg" },
    
    
  ];

  const playPause = () => {
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeSong = (newIndex) => {
    setSongIndex(newIndex);
    audioElement.src = `/assets/${songs[newIndex].filePath}`;
    setProgress(0);
    audioElement.play();
  };

  // Update progress bar
  audioElement.ontimeupdate = () => {
    if (audioElement.duration) {
      const progressValue = (audioElement.currentTime / audioElement.duration) * 100;
      setProgress(progressValue);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * audioElement.duration;
    audioElement.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleLogout = () => {
    // Clear session or redirect to login
    console.log('Logout button clicked');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="container">
      {/* Navigation */}
      <nav>
        <ul>
          <li className="brand"><img src="/assets/logo.png" alt="Spotify" /> Spotify</li>
          <li>Home</li>
          <li>About</li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Song List */}
      <div className="songList">
        {songs.map((song, index) => (
          <div className="songItem" key={index}>
            <img alt={song.songName} src={`./assets/covers/${index + 1}.jpg`} />
            <span className="songName">{song.songName}</span>
            <span className="songlistplay">
              <span className="timestamp">
                05:34
                <i
                  className={`far songItemPlay ${index === songIndex && isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}`}
                  onClick={() => changeSong(index)}
                />
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Control Bar */}
      <div className="bottom">
        <input
          type="range"
          id="myProgressBar"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
        />
        <div className="icons">
          <i className="fas fa-3x fa-step-backward" onClick={() => changeSong(songIndex > 0 ? songIndex - 1 : songs.length - 1)} />
          <i className={`far fa-3x ${isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}`} onClick={playPause} />
          <i className="fas fa-3x fa-step-forward" onClick={() => changeSong(songIndex < songs.length - 1 ? songIndex + 1 : 0)} />
        </div>
        <div className="songInfo">
          <img src="playing.gif" width="42px" alt="" />
          <span id="masterSongName">{songs[songIndex].songName}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
