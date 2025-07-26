// Create functions that use regex to clean data

// function to get email addresses from string data
export function extractEmails(text) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex);
}

// function to get phone numbers from string data
export function extractPhoneNumbers(text) {
    const phoneRegex = /\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
    return text.match(phoneRegex);
}
