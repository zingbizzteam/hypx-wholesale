"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { toast } from "react-toastify"

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const CheckoutForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    address: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch cart items from localStorage
  const getCartItems = () => {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" })) // Clear error on change
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^\d{7,15}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Invalid phone number"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setIsSubmitting(true)

    // Prepare order data
    const cartItems = getCartItems()
    if (!cartItems.length) {
      toast.error("Your cart is empty!")
      setIsSubmitting(false)
      return
    }

    // Calculate subtotal and total
    const subtotal = cartItems.reduce((sum: number, item: any) => sum + (item.price || 0) * item.quantity, 0)
    const total = subtotal // Add tax/shipping if needed

    const payload = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: `${formData.countryCode} ${formData.phone}`,
      shippingAddress: formData.address,
      items: cartItems.map((item: any) => ({
        productId: item.productId || item._id,
        quantity: item.quantity,
        price: item.price || 0,
      })),
      subtotal,
      tax: 0,
      shippingFee: 0,
      discount: 0,
      total,
      notes: "",
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        toast.success("Order submitted successfully!")
        // Optionally clear cart
        localStorage.removeItem("cart")
        setTimeout(() => {
          router.push("/quote-confirmation")
        }, 500)
      } else {
        toast.error(data.error || "Failed to submit order")
      }
    } catch (err: any) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full items-center font-space-grotesk ">
      <div className="w-full">
        <label htmlFor="name" className="block text-2xl font-bold text-[#333333] mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          required
          className="w-full"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>

      <div className="flex w-full justify-between gap-5">
        <div className="w-full">
          <label htmlFor="email" className="block text-2xl font-bold text-[#333333] mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your E-mail"
            required
            className="w-full"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="grid grid-cols-1 md:flex md:w-full gap-4">
          <div className="self-end">
            <label htmlFor="phone" className="block text-2xl font-bold text-[#333333] mb-1">
              Phone Number
            </label>
            <div className="flex">
              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="appearance-none bg-transparent border-b border-gray-300 pr-8 py-2"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 ml-2"
                required
              />
            </div>
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="address" className="block text-2xl font-bold text-[#333333] mb-1">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Your Address"
          required
          className="w-full min-h-[80px] rounded border p-2"
        />
        {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
      </div>

      <button
        type="submit"
        className="w-[60%] bg-black text-white py-3 font-medium rounded hover:bg-gray-800 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Get Quote"}
      </button>
    </form>
  )
}

export default CheckoutForm
