// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid md:grid-cols-6 gap-12 items-center">
      <div className="md:col-span-3 h-60 ">picture container</div>
      <div className="md:col-span-3 h-60 ">summary + greeting</div>
    </div>
  );
}
