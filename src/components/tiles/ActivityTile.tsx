"use client";

import { motion } from "framer-motion";

export function ActivityTile() {
  // Mock data for a bar chart
  const data = [40, 25, 60, 30, 80, 45, 90];
  const max = Math.max(...data);

  return (
    <div className="h-full w-full p-6 flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Activity</h3>
          <p className="text-sm text-gray-400">Weekly learning hours</p>
        </div>
        <div className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-lg">
          +12%
        </div>
      </div>

      {/* Mock Chart */}
      <div className="flex-1 flex items-end justify-between gap-2 mt-auto">
        {data.map((val, i) => (
          <div key={i} className="w-full flex flex-col items-center gap-2">
            <div className="w-full bg-background rounded-t-sm rounded-b-sm overflow-hidden h-[100px] flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(val / max) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1, type: "spring", stiffness: 100 }}
                className={`w-full rounded-t-sm ${i === data.length - 1 ? 'bg-primary' : 'bg-border hover:bg-gray-600 transition-colors'}`}
              />
            </div>
            <span className="text-[10px] text-gray-500 uppercase font-medium">
              {['M','T','W','T','F','S','S'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
