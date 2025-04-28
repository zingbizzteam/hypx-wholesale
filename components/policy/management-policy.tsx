import Image from "next/image"

const ManagementPolicy = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Management Policy</h2>

      <p className="mb-8">
        At Hypx, we are committed to fostering a culture of excellence, innovation, and integrity in the wholesale
        streetwear industry. Our management policies are designed to ensure operational efficiency, employee well-being,
        customer satisfaction, and sustainable business growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[200px] bg-gray-100">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Leadership and Governance"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">1. Leadership and Governance</h3>
          <ul className="space-y-2">
            <li>
              • We maintain a structured leadership framework that promotes transparency and accountability at all
              levels.
            </li>
            <li>• Decision-making processes are guided by ethical principles and industry best practices.</li>
            <li>• Regular strategic reviews ensure continuous improvement and alignment with market trends.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[200px] bg-gray-100">
          <Image src="/placeholder.svg?height=200&width=400" alt="Quality Assurance" fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">2. Quality Assurance</h3>
          <ul className="space-y-2">
            <li>• Our products undergo rigorous quality control checks to meet and exceed industry standards.</li>
            <li>
              • We collaborate with trusted manufacturers and suppliers to ensure premium craftsmanship and durability.
            </li>
            <li>• Customer feedback is actively analyzed to enhance product quality and innovation.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[200px] bg-gray-100">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Employee Welfare & Development"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">3. Employee Welfare & Development</h3>
          <ul className="space-y-2">
            <li>
              • We are dedicated to providing exceptional service, ensuring prompt and efficient order fulfillment.
            </li>
            <li>• Our team actively engages with clients to understand their needs and offer tailored solutions.</li>
            <li>• A streamlined communication system ensures quick response times and seamless transactions.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[200px] bg-gray-100">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Employee Welfare & Development"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">4. Employee Welfare & Development</h3>
          <ul className="space-y-2">
            <li>
              • We are dedicated to providing exceptional service, ensuring prompt and efficient order fulfillment.
            </li>
            <li>• Our team actively engages with clients to understand their needs and offer tailored solutions.</li>
            <li>• A streamlined communication system ensures quick response times and seamless transactions.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[200px] bg-gray-100">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Ethical Business Practices"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">5. Ethical Business Practices</h3>
          <ul className="space-y-2">
            <li>• Hypx operates with integrity, ensuring fair dealings with suppliers, partners, and customers.</li>
            <li>
              • We adhere to legal and regulatory requirements, maintaining transparency in all business transactions.
            </li>
            <li>• Ethical sourcing and sustainability initiatives are integrated into our operations.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[200px] bg-gray-100">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Ethical Business Practices"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">6. Ethical Business Practices</h3>
          <ul className="space-y-2">
            <li>
              • We are committed to minimizing our environmental footprint through sustainable sourcing and production
              methods.
            </li>
            <li>• Partnerships with eco-friendly suppliers and manufacturers support our green initiatives.</li>
            <li>• Community engagement programs contribute to social welfare and industry development.</li>
          </ul>
        </div>
      </div>

      <p className="mt-8">
        By upholding these principles, Hypx continues to strengthen its position as a leading wholesale streetwear
        brand, fostering trust and long-term relationships with partners, employees, and customers alike.
      </p>
    </div>
  )
}

export default ManagementPolicy
