"use client";
import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState<"work" | "personal">("personal");
  return (
    <div className="grid md:grid-cols-6 gap-12 items-center">
      <div className="md:col-span-6 h-12 bg-green-800">tabs</div>
      <div className="md:col-span-6 h-72 bg-green-800">Projects</div>
    </div>
  );
}
