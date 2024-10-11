import { useState, useEffect } from 'react';

const VideoComponent = () => {
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component is mounted
  }, []);

  return (
    <div>
      
      {isMounted && (
        <video width="640" height="360" controls>
          <source src="/videos/portuguese_version.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoComponent;
