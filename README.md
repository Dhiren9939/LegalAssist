# LegalAssist - Indian Law Chatbot

LegalAssist is a modern, responsive web application that provides users with accurate information about Indian law through an AI-powered chat interface. This application is designed to help users get legal information in a user-friendly and accessible way.

## Features

- **Interactive Chat Interface**: Ask questions about Indian law and receive detailed answers
- **Legal References**: All responses include citations to relevant Indian laws and regulations
- **Markdown Support**: Responses are formatted with headings, lists, and emphasis for better readability
- **Modern UI**: Clean, professional interface with a legal-themed design
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Responses**: Connect to Gemini API for up-to-date legal information

## Tech Stack

- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- React-Markdown for rendering formatted responses
- Google's Gemini API for AI responses

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/legal-assist.git
   cd legal-assist
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Project Structure

```
src/
├── components/
│   └── ChatWindow.tsx   # Main chat interface component
├── pages/
│   ├── Home.tsx         # Landing page
│   └── Chat.tsx         # Chat page
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Usage

1. Visit the home page and click "Begin Consultation"
2. Type your legal question in the input field
3. Press Enter or click the send button
4. View the response with references to relevant Indian laws
5. Continue the conversation or clear the chat to start over

## Disclaimer

LegalAssist provides general legal information based on Indian law. It is not a substitute for professional legal advice. Always consult with a qualified legal professional for specific legal concerns.
