export default function Loading() {
  return (
    <div className="min-h-screen bg-background pl-0 md:pl-20 lg:pl-64 flex flex-col transition-all duration-300">
      <main className="flex-1 p-6 lg:p-10 w-full max-w-7xl mx-auto mt-20 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full auto-rows-[160px]">
          
          {/* Hero Tile Skeleton */}
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2 rounded-3xl bg-card/50 border border-border animate-pulse" />
          
          {/* Activity Tile Skeleton */}
          <div className="md:col-span-1 lg:col-span-1 xl:col-span-2 row-span-2 rounded-3xl bg-card/50 border border-border animate-pulse" />
          
          {/* Course Tile Skeletons */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-span-1 row-span-1 rounded-3xl bg-card/50 border border-border animate-pulse p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-border" />
              <div className="h-4 w-3/4 bg-border rounded mt-4" />
              <div className="h-2 w-full bg-border rounded-full mt-6" />
            </div>
          ))}
          
        </div>
      </main>
    </div>
  );
}
