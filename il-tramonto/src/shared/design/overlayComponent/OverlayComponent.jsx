
import React, { useEffect, useState } from 'react';

const OverlayComponent = ({ texth1 }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOverlayVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isOverlayVisible && (
        <div className="overlay">
          <h1>{texth1}</h1>
        </div>
      )}
    </>
  );
};

export default OverlayComponent;
