import Image from "next/image"
import CheckoutForm from "@/components/forms/checkout-form"
import WholesaleNote from "@/components/cart/wholesale-note"

export default function Checkout() {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Basic Tee (Unisex)",
      quantity: 200,
      image: "/placeholder.svg?height=100&width=80",
    },
    {
      id: 2,
      name: "Basic Tee (Unisex)",
      quantity: 200,
      image: "/placeholder.svg?height=100&width=80",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <WholesaleNote />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Product Summary</h2>
          <p className="text-right mb-4">(2) Items</p>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Total Quantity : {item.quantity}</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm font-medium">EDIT</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Complete Your Quote Submission</h2>
          <CheckoutForm />
        </div>
      </div>
    </div>
  )
}
