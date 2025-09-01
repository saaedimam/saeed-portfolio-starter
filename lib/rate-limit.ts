// Simple in-memory rate limiting (for production, use Redis or similar)
const requests = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(identifier: string, limit: number = 5, windowMs: number = 60000) {
  const now = Date.now();
  const key = identifier;
  
  const requestData = requests.get(key);
  
  if (!requestData || now > requestData.resetTime) {
    // Reset or create new entry
    requests.set(key, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }
  
  if (requestData.count >= limit) {
    return { success: false, remaining: 0 };
  }
  
  requestData.count++;
  return { success: true, remaining: limit - requestData.count };
}
