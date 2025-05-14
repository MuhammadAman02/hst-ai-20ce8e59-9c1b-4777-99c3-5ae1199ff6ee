const responses = [
  "Hello! How can I assist you today?",
  "I'm sorry, I didn't quite understand that. Could you please rephrase?",
  "That's an interesting question! Let me think about it.",
  "I'm here to help. What would you like to know?",
  "I'm afraid I don't have enough information to answer that accurately.",
  "Is there anything else I can help you with?",
];

export function getBotResponse(message: string): string {
  // For now, we'll just return a random response
  return responses[Math.floor(Math.random() * responses.length)];
}