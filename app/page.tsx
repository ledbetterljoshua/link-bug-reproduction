import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-center flex-col p-6">
      <h1 className="text-2xl mb-10">Link Bug</h1>
      <div className="flex flex-col item-center justify-center gap-4">
        <Link prefetch={false} href="/pages-route?link=1">
          pages route link 1 - works
        </Link>
        <Link prefetch={false} href="/pages-route?link=2">
          pages route link 2 - broken: query param defaults to link 1
        </Link>
        <Link prefetch={false} className="mb-4" href="/pages-route?link=3">
          pages route link 3 - broken: query param defaults to link 1
        </Link>
        <Link href="/app-route?link=2">app-route link 1 - works</Link>
        <Link href="/app-route?link=2">app-route link 2 - works</Link>
        <Link href="/app-route?link=3">app-route link 3 - works</Link>
      </div>
    </div>
  );
}
