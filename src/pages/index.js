import React, { useEffect } from 'react';

// Redirect /support/ to /support/docs/getting-started-with-testmu-automation/
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/support/docs/getting-started-with-testmu-automation/');
    }
  }, []);

  return null;
}
