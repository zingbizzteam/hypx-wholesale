'use client';

import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Product Card 1 */}
      <div className="bg-white border border-[#B5B5B5] overflow-hidden">
        <div className="aspect-square bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
        <div className="p-5">
          <div className="h-6 mb-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-10 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
            <div className="h-10 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="bg-white border border-[#B5B5B5] overflow-hidden">
        <div className="aspect-square bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
        <div className="p-5">
          <div className="h-6 mb-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-10 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
            <div className="h-10 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Product Card 3 */}
      <div className="bg-white border border-[#B5B5B5] overflow-hidden">
        <div className="aspect-square bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
        <div className="p-5">
          <div className="h-6 mb-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-10 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
            <div className="h-10 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}