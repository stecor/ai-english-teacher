import React from 'react';

interface OverlayProps {
  targetId: string;  // The ID of the element to highlight
  message: string;   // Instructional message
}

const Overlay: React.FC<OverlayProps> = ({ targetId, message }) => {
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return null;

  const rect = targetElement.getBoundingClientRect();

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Semi-transparent background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Highlighted area */}
      <div
        className="absolute border-2 border-green-500 bg-transparent pointer-events-none"
        style={{
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        }}
      ></div>

      {/* Tooltip Message */}
      <div
        className="absolute bg-white text-gray-800 p-3 rounded shadow-lg text-sm"
        style={{
          top: `${rect.bottom + 10}px`,  // Position tooltip below the element
          left: `${rect.left}px`,
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default Overlay;
