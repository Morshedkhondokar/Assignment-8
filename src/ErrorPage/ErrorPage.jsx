import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <h1 className="text-9xl font-bold text-purple-600">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-500 mt-2">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link 
                to="/" 
                className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
            >
                Back to Home
            </Link>
    </div>
    );
};

export default ErrorPage;