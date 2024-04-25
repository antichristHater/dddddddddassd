"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function MyPage() {
  const router = useRouter();

  useEffect(() => {
    // Your logic to determine redirection
    const shouldRedirect = true;

    if (shouldRedirect) {
        window.location.href = 'https://www.spotify.com';
        return;
    }
  }, []); // Ensure this effect runs only once on component mount

  return (
    <div>
    </div>
  );
}

export default MyPage;
