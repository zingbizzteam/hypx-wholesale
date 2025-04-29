// /app/shop/page.tsx
"use client";

import { Suspense } from "react";
import ShopPageContent from "./ShopPageContent";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-12"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div></div>}>
      <ShopPageContent />
    </Suspense>
  );
}
