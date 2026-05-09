"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs = ({ tabs = [], defaultTab, className }: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full flex flex-col gap-y-2", className)}>
      {/* Tab bar */}
      <div className="flex gap-2 flex-wrap bg-black/40 backdrop-blur-sm p-1.5 rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-5 py-2 text-sm font-semibold rounded-xl text-white outline-none transition-colors flex-1 sm:flex-none"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white/15 shadow-lg backdrop-blur-sm rounded-xl border border-white/20"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-5 sm:p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 min-h-64">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.97, x: -8, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.97, x: -8, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
