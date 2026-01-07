export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo Animation */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-500 text-sm font-mono animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
}
