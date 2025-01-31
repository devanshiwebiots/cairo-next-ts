"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/ecommerce");
  }, [router]);
  return <main></main>;
};

export default Home;
