"use client"

import { useState } from "react"
import ManagementPolicy from "./management-policy"
import QualityPolicy from "./quality-policy"

const PolicyTabs = () => {
  const [activeTab, setActiveTab] = useState<"management" | "quality">("management")

  return (
    <div>
      <div className="border-b border-gray-200 mb-8">
        <div className="flex">
          <button
            className={`policy-tab ${activeTab === "management" ? "active" : ""}`}
            onClick={() => setActiveTab("management")}
          >
            Management Policy
          </button>
          <button
            className={`policy-tab ${activeTab === "quality" ? "active" : ""}`}
            onClick={() => setActiveTab("quality")}
          >
            Quality Policy
          </button>
        </div>
      </div>

      {activeTab === "management" ? <ManagementPolicy /> : <QualityPolicy />}
    </div>
  )
}

export default PolicyTabs
