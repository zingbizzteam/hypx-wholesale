"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Thank you for subscribing!")
      setEmail("")
    }, 1000)
  }

  return (
    <div className="mt-6">
      <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail address"
          className="newsletter-input w-full pr-10"
          required
        />
        <button type="submit" className="newsletter-btn" disabled={isSubmitting} aria-label="Subscribe">
          <ArrowRight size={20} />
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-green-400">{message}</p>}
    </div>
  )
}

export default NewsletterForm
