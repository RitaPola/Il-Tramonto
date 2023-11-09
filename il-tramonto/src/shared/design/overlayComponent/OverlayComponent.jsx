import React, { useEffect, useState } from 'react';

const OverlayComponent = ({ texth1, icon }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(true);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOverlayVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setBallPosition({ x: event.clientX, y: event.clientY });
    };

    if (isOverlayVisible) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isOverlayVisible]);

  return (
    <>
    {isOverlayVisible && (
      <div className="overlay">
        <h1>{texth1}</h1>
      </div>
    )}
{isOverlayVisible && (
  <div
    className="ball"
    style={{
      left: `${ballPosition.x}px`,
      top: `${ballPosition.y}px`,
    }}
  >
    <i className={`fa fa-${icon} fa-3x`} style={{ color: "#0000000"}}></i>
  </div>
)}
  </>
  );
};

export default OverlayComponent;
