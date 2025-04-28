// lib/utils.ts
import { format } from 'date-fns';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
/**
 * Generates a unique order number using date and random digits
 */
export function generateOrderNumber(): string {
  const dateStr = format(new Date(), 'yyyyMMdd');
  const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `ORD-${dateStr}-${randomDigits}`;
}

/**
 * Custom rate limiter for order placement
 * This is a simple implementation - consider using a Redis-based solution for production
 */
const attemptCache = new Map<string, { count: number, timestamp: number }>();

export function checkOrderRateLimit(userId: string): boolean {
  const now = Date.now();
  const userAttempts = attemptCache.get(userId);
  
  // Clean up old entries
  for (const [key, value] of attemptCache.entries()) {
    if (now - value.timestamp > 3600000) { // 1 hour
      attemptCache.delete(key);
    }
  }
  
  if (!userAttempts) {
    attemptCache.set(userId, { count: 1, timestamp: now });
    return true;
  }
  
  // Reset counter if more than 1 hour has passed
  if (now - userAttempts.timestamp > 3600000) {
    attemptCache.set(userId, { count: 1, timestamp: now });
    return true;
  }
  
  // Limit to 5 orders per hour
  if (userAttempts.count >= 5) {
    return false;
  }
  
  // Increment counter
  attemptCache.set(userId, { 
    count: userAttempts.count + 1, 
    timestamp: userAttempts.timestamp 
  });
  
  return true;
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
