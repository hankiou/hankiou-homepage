export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-slate-700 border-t-accent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-accent rounded-full animate-pulse opacity-20"></div>
      </div>
      <p className="mono-label mt-4">LOADING PORTFOLIO...</p>
    </div>
  );
};
