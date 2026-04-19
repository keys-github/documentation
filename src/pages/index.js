import React, { useEffect } from 'react';

// Redirect /support/ to /support/docs/
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/support/docs/');
    }
  }, []);

  return null;
}
