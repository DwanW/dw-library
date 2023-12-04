export default function Page() {
  return (
    <div className="grid md:grid-cols-6 gap-12 items-center">
      <div className="md:col-span-6 h-24 bg-green-800">
        work passion summary
      </div>
      <div className="md:col-span-6 h-40 bg-green-800">skill cards</div>
      <div className="md:col-span-6 h-48 bg-green-800">
        work history timeline
      </div>
      <div className="md:col-span-6 h-48 bg-green-800">education list</div>
    </div>
  );
}
