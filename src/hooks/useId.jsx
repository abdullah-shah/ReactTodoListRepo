import React, { useState } from 'react';

// Custom hook to generate unique IDs
function useId() {
  const [id, setId] = useState(0);

  const generateId = () => {
    setId((prevId) => prevId + 1);
  };

  return [id, generateId];
}

export default useId