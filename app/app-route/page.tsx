import { Suspense } from "react";
import Content from "./content";

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <Content />
    </Suspense>
  );
}
