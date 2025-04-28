import Image from "next/image"
import PolicyTabs from "@/components/policy/policy-tabs"

export default function OurPolicies() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h1>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HYPX%20-%20OUR%20POLICIES%20-%20MGMT%20POLICY.png-cBLSq93GZKkyYVhmcjuTMF4Zd6DDTP.jpeg"
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
