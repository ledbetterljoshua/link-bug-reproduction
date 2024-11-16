import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-center flex-col p-6">
      <h1 className="text-2xl mb-10">Link Bug</h1>
      <div className="flex flex-col item-center justify-center gap-10">
        <Link href="/another?link=1">link 1</Link>
        <Link href="/another?link=2">link 2</Link>
      </div>
    </div>
  );
}
