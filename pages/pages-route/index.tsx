import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  return (
    <div className="flex-center flex-col p-6">
      <h1 className="text-2xl mb-2">Link Bug</h1>
      <h1 className="text-lg mb-10">
        pages router query {query.link || "none"}
      </h1>
      <div className="flex flex-col item-center justify-center gap-10">
        <Link href="/">back home</Link>
      </div>
    </div>
  );
}
