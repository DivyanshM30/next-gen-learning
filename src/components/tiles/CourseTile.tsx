"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "../DynamicIcon";
import { Course } from "@/types";

interface CourseTileProps {
  course: Course;
}

export function CourseTile({ course }: CourseTileProps) {
  return (
    <div className="h-full w-full p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Abstract grain/mesh background */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      {/* Top section: Icon and Title */}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
          <DynamicIcon name={course.icon_name} className="text-primary w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-white leading-tight line-clamp-2">
          {course.title}
        </h3>
      </div>

      {/* Bottom section: Progress */}
      <div className="relative z-10 mt-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Progress</span>
          <span className="text-sm font-bold text-white">{course.progress}%</span>
        </div>
        
        {/* Progress Bar Track */}
        <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
          {/* Animated Fill */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="h-full bg-primary rounded-full relative"
          >
            {/* Subtle glow on the progress bar itself */}
            <div className="absolute inset-0 bg-white/20 w-full h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
