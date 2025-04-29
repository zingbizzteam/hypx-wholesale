import Image from "next/image"
import PolicyTabs from "@/components/policy/policy-tabs"

export default function OurPolicies() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h1>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/Images/OurPolicies/hero_section.png"
            alt="HYPX Policies"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PolicyTabs />
        </div>
      </section>
    </div>
  )
}
