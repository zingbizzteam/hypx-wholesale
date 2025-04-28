"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"

const CheckoutForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    address: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/quote-confirmation")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
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
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
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
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Your address"
          required
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Get Quote"}
      </button>
    </form>
  )
}

export default CheckoutForm
