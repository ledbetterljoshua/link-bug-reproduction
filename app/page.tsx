import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-center flex-col p-6">
      <h1 className="text-2xl mb-10">Link Bug</h1>
      <div className="flex flex-col item-center justify-center gap-4">
        <Link href="/pages-route?link=1">pages route link 1</Link>
        <Link className="mb-4" href="/pages-route?link=2">
          pages route link 2
        </Link>
        <Link href="/app-route?link=2">app-route link 1</Link>
        <Link href="/app-route?link=2">app-route link 2</Link>
      </div>
    </div>
  );
}
