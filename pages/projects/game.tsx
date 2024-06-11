
import React, { useState, useEffect } from 'react';


export default function Game() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  }, []);


  return (
    <div>
    </div>);
}
