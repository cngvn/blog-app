"use client";
import Link from "next/link";
import { parent } from "../components/parent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const page = () => {
  const [datt, setDatt] = useState([]);
  const path = usePathname();
  const test = async () => {
    const b = await fetch(`https://dev.to/api/articles${path}`);
    const a = await b.json();
    setDatt(a);
  };
  useEffect(() => {
    test();
  }, []);
  console.log(datt);
  return (
    <parent>
      <header>
        <Link href="/">
          <button>home page</button>
        </Link>
      </header>
      <div>
        <img src={datt.cover_image} />
        <div>{datt.type_of}</div>
        <div>{datt.title}</div>
        <div>{datt.description}</div>
        <div>{datt.readable_publish_date}</div>
        <div>{datt?.user?.name}</div>
        <div>{datt?.user?.username}</div>
        <img src={datt?.user?.profile_image} />
        <div>{datt?.user?.twitter_username}</div>
      </div>
    </parent>
  );
};
export default page;
