import React from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

// This is extracted from the right-side animated dashboard in how-helping-companies
const AnimatedDashboard = () => (
    <motion.div
        className="flex justify-center items-center w-full max-w-md"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
    >
        <motion.div
            animate={{ y: [0, -16, 0, 16, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative w-64 h-96 bg-gradient-to-br from-orange-100 to-purple-100 dark:from-slate-900 dark:to-gray-900 rounded-3xl shadow-2xl border-4 border-orange-200 dark:border-orange-700 flex items-center justify-center overflow-hidden"
        >
            {/* Single SFA/Sales Dashboard */}
            <div className="absolute inset-0 flex flex-col items-stretch justify-start p-4 gap-2">
                {/* Status bar */}
                <div className="w-28 h-3 rounded-full bg-gray-200 dark:bg-gray-700 mb-1 animate-pulse self-center" />
                {/* User Info */}
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-300 to-yellow-300 dark:from-orange-600 dark:to-yellow-600 flex items-center justify-center text-white font-bold text-sm shadow">U</div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">User Name</span>
                    <div className="ml-auto flex gap-1">
                        <div className="w-4 h-4 rounded-full bg-green-400/80 animate-pulse" />
                        <div className="w-4 h-4 rounded-full bg-blue-400/80" />
                    </div>
                </div>
                {/* Banner */}
                <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative rounded-xl bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-600 dark:to-orange-800 flex items-center px-3 py-2 mb-1 overflow-hidden">
                    <span className="text-xs font-semibold text-gray-800 dark:text-white mr-2">Artificial Intelligent Insight Engine</span>
                    <span className="ml-auto text-xs bg-yellow-400/80 dark:bg-yellow-700 text-white px-2 py-1 rounded shadow">Try Now</span>
                </motion.div>
                {/* Stats */}
                <div className="flex justify-between gap-2 mb-1">
                    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror' }} className="flex-1 rounded-lg bg-gray-100 dark:bg-gray-800 px-2 py-1 text-center">
                        <div className="text-[11px] text-gray-600 dark:text-gray-300">Today's Sales</div>
                        <div className="text-sm font-bold text-orange-600 dark:text-orange-300">₹ 5790</div>
                    </motion.div>
                    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2.2, repeatType: 'mirror', delay: 0.1 }} className="flex-1 rounded-lg bg-gray-100 dark:bg-gray-800 px-2 py-1 text-center">
                        <div className="text-[11px] text-gray-600 dark:text-gray-300">New Leads</div>
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-300">12</div>
                    </motion.div>
                    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2.4, repeatType: 'mirror', delay: 0.2 }} className="flex-1 rounded-lg bg-gray-100 dark:bg-gray-800 px-2 py-1 text-center">
                        <div className="text-[11px] text-gray-600 dark:text-gray-300">Closed Deals</div>
                        <div className="text-sm font-bold text-green-600 dark:text-green-300">4</div>
                    </motion.div>
                </div>
                {/* Sales Bar Chart */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex-1 flex flex-col justify-end">
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">Sales Insights</div>
                    <div className="flex items-end h-24 gap-2 w-full">
                        <motion.div animate={{ height: [32, 64, 32] }} transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror', delay: 0 }} className="w-6 rounded bg-orange-400/80 dark:bg-orange-600/80" style={{ height: 48 }} />
                        <motion.div animate={{ height: [64, 32, 64] }} transition={{ repeat: Infinity, duration: 2.1, repeatType: 'mirror', delay: 0.1 }} className="w-6 rounded bg-blue-400/80 dark:bg-blue-600/80" style={{ height: 36 }} />
                        <motion.div animate={{ height: [40, 72, 40] }} transition={{ repeat: Infinity, duration: 2.2, repeatType: 'mirror', delay: 0.2 }} className="w-6 rounded bg-green-400/80 dark:bg-green-600/80" style={{ height: 60 }} />
                        <motion.div animate={{ height: [52, 28, 52] }} transition={{ repeat: Infinity, duration: 2.3, repeatType: 'mirror', delay: 0.3 }} className="w-6 rounded bg-gray-300/80 dark:bg-gray-700/80" style={{ height: 32 }} />
                        <motion.div animate={{ height: [28, 52, 28] }} transition={{ repeat: Infinity, duration: 2.4, repeatType: 'mirror', delay: 0.4 }} className="w-6 rounded bg-yellow-300/80 dark:bg-yellow-600/80" style={{ height: 40 }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                    </div>
                </motion.div>
                {/* Glowing highlight */}
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2.4, repeatType: "mirror" }} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-orange-300/30 dark:bg-orange-700/30 blur-2xl rounded-full" />
                {/* Phone icon in the background */}
                <Smartphone className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-24 text-orange-400 dark:text-orange-600 opacity-20" />
            </div>
        </motion.div>
    </motion.div>
);

export default AnimatedDashboard;
