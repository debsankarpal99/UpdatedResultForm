// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/form/1');
  }, [router]);
  
  return <div>Redirecting to form...</div>;
}
