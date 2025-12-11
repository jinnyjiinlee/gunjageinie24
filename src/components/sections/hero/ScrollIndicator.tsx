export default function ScrollIndicator() {
  return (
    <div className="mt-8 sm:mt-12 flex-col items-center gap-2 text-gray-500 hidden sm:flex">
      <span className="text-xs tracking-widest">SCROLL</span>
      <div className="w-px h-8 bg-gradient-to-b from-[#00FF88] to-transparent" />
    </div>
  );
}
