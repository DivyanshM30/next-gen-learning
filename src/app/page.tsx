import { Suspense } from "react";
import { Sidebar } from "@/components/Sidebar";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { HeroTile } from "@/components/tiles/HeroTile";
import { ActivityTile } from "@/components/tiles/ActivityTile";
import { CourseTile } from "@/components/tiles/CourseTile";
import { createClient } from "@/utils/supabase/server";
import { Course } from "@/types";

// Mock data fallback if Supabase fails or isn't configured
const mockCourses: Course[] = [
  { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code", created_at: "" },
  { id: "2", title: "Framer Motion Masterclass", progress: 42, icon_name: "Framer", created_at: "" },
  { id: "3", title: "UI/UX Micro-interactions", progress: 10, icon_name: "MousePointer2", created_at: "" },
  { id: "4", title: "Next.js App Router", progress: 95, icon_name: "Server", created_at: "" }
];

async function getCourses(): Promise<Course[]> {
  // Gracefully fallback to mock data if environment variables are not set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.log("Supabase credentials not found. Falling back to mock data.");
    return mockCourses;
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.error("Supabase fetch error:", error?.message);
      return mockCourses;
    }
    return data as Course[];
  } catch (err) {
    console.error("Failed to connect to Supabase:", err);
    return mockCourses;
  }
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row transition-all duration-300">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-10 w-full max-w-7xl mx-auto md:ml-20 lg:ml-64 mt-20 md:mt-0 mb-20 md:mb-0">
        
        {/* Header (optional, for some breathing room) */}
        <header className="mb-8 hidden md:block">
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-gray-400">Your learning progress at a glance.</p>
        </header>

        <BentoGrid>
          {/* Hero Tile - spans 2 cols, 2 rows */}
          <BentoItem className="md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2">
            <HeroTile />
          </BentoItem>

          {/* Activity Tile - spans 1 col (or 2 on XL), 2 rows */}
          <BentoItem className="md:col-span-1 lg:col-span-1 xl:col-span-2 row-span-2">
            <ActivityTile />
          </BentoItem>

          {/* Course Tiles */}
          {courses.map((course) => (
            <BentoItem key={course.id} className="col-span-1 row-span-1">
              <CourseTile course={course} />
            </BentoItem>
          ))}
        </BentoGrid>
      </main>
    </div>
  );
}
