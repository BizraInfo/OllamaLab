/**
 * Main Application Component
 * Professional-grade React application with comprehensive error handling and routing
 */

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import ScrollToTop from '@/utils/ScrollToTop';
import ErrorBoundary from '@/components/ErrorBoundary';

// Pages - Lazy loaded for optimal performance
const Home = React.lazy(() => import('@/pages/Home'));

// Loading component with professional styling
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400">
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p 
        className="text-white text-lg font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading OllamaLab...
      </motion.p>
    </motion.div>
  </div>
);

// Error fallback component
const AppErrorFallback: React.FC<{ retry: () => void }> = ({ retry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-4">
    <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8 text-center">
      <div className="mb-6">
        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Error</h1>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error while loading OllamaLab. Our team has been notified.
        </p>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={retry}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
        >
          Reload Application
        </button>
      </div>
    </div>
  </div>
);

// Main App Component
export default function App(): React.ReactElement {
  return (
    <ErrorBoundary fallback={AppErrorFallback}>
      <div className="min-h-screen">
        <ScrollToTop />
        
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />
              
              {/* Future Routes - Ready for expansion */}
              {/* 
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools/:toolId" element={<ToolDetailPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              */}
              
              {/* 404 - Catch all unmatched routes */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 p-4">
                  <div className="text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                    <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                    <p className="text-lg text-white mb-6">Page not found</p>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                    >
                      Go Home
                    </button>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}