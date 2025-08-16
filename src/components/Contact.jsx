import React from "react";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="max-w-6xl mx-auto py-20 px-4 flex flex-col items-center gap-12 mt-12"
      >
        <div className="w-full md:w-2/3 bg-gradient-to-r from-yellow-100 via-gray-50 to-yellow-200 rounded-2xl shadow-xl p-10 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-6 drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Have questions or need assistance? <br />
            Our friendly team is here to help you create your dream space!
          </p>
          <a
            href="mailto:info@furny.com"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition font-semibold text-xl"
          >
            Email Us
          </a>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 01-8 0m8 0a4 4 0 01-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4"
                />
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.6 2.6-3.1 4.1-2.2 2.2-4.1 3.1-5.1 3.1s-2.9-.9-5.1-3.1c-1.5-1.5-2.5-2.9-3.1-4.1a8.38 8.38 0 01-.9-3.8C2 6.5 6.5 2 12 2s10 4.5 10 8.5z"
                />
              </svg>
              <span>123 Furny St, Design City</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-yellow-100 via-gray-50 to-yellow-200 text-center py-8 mt-16 rounded-t-2xl shadow-inner">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="#"
            className="text-yellow-600 hover:text-yellow-700 transition"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37c-.83.5-1.75.86-2.72 1.06A4.28 4.28 0 0016.1 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 012 19.54c-.36 0-.71-.02-1.06-.07A12.13 12.13 0 006.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59c-.77.34-1.6.58-2.47.7z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-yellow-600 hover:text-yellow-700 transition"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm15.11 12.95h-3.56v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-yellow-600 hover:text-yellow-700 transition"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.01 8.96v-6.34h-2.41v-2.62h2.41V9.41c0-2.39 1.44-3.7 3.64-3.7 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.75-1.57 1.52v1.83h2.67l-.43 2.62h-2.24v6.34c4.41-.9 8.01-4.55 8.01-8.96 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-600 text-lg">
          &copy; {new Date().getFullYear()} Furny. All rights reserved.
        </p>
      </footer>
    </>
  );
}
