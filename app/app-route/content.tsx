"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Content() {
  const searchParams = useSearchParams();
  const link = searchParams?.get("link");

  return (
    <div className="flex-center flex-col p-6">
      <h1 className="text-2xl mb-2">Link Bug</h1>
      <h1 className="text-lg mb-10">app router query {link || "none"}</h1>
      <div className="flex flex-col item-center justify-center gap-10">
        <Link href="/">back home</Link>
      </div>
    </div>
  );
}
