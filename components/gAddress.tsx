import { headers } from 'next/headers';

export default function logIp() {
  const header = headers();
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1'); 
  return (ip);
}