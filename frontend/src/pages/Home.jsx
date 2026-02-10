import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100">
      <div className="w-full max-w-md p-8 mx-auto bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <div className="text-center mb-8">
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto text-indigo-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236L20 8v8l-8 4-8-4V8l8-3.764z" />
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <h1 className="text-3xl font-sans font-bold text-white">
            LegalAssist
          </h1>
          <p className="mt-2 text-gray-400 font-sans">
            Your trusted companion for legal guidance
          </p>
        </div>

        <button
          onClick={() => navigate("/chat")}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 flex items-center justify-center"
        >
          <span>Begin Consultation</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Get professional legal information based on Indian law</p>
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        <p>© 2025 LegalAssist • All rights reserved</p>
      </footer>
    </div>
  );
}