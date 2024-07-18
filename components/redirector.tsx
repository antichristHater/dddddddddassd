"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function MyPage() {
  const router = useRouter();

  useEffect(() => {
    // Your logic to determine redirection
    const shouldRedirect = true;

    if (shouldRedirect) {
        // let target_link = 'https://open.spotify.com/intl-tr/track/4obIxphItouERQevAwbPfx'
        let target_link = 'https://open.spotify.com/track/2cGOXZCcQbAH4qvOYtbTmC'
        window.location.href = target_link;
        return;
    }
  }, []); // Ensure this effect runs only once on component mount

  return (
    <div>
    </div>
  );
}

export default MyPage;
