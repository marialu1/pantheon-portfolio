'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console (in production, send to error tracking service)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center space-y-8 px-6 max-w-2xl">
        {/* Error Icon */}
        <div className="text-8xl">⚠️</div>

        {/* Error Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Something Went Wrong</h1>
          <p className="text-xl text-slate-400">
            The gods are displeased. An unexpected error occurred while rendering this chamber.
          </p>
        </div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-6 rounded-lg bg-red-500/10 border border-red-500/30 text-left">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Error Details:</h3>
            <p className="text-sm text-red-300 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-slate-500 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={reset}
            className="px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
          >
            Try Again
          </button>

          <a
            href="/"
            className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            Return to Entrance
          </a>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-slate-600">
          If this problem persists, the pantheon may be undergoing maintenance.
        </div>
      </div>
    </div>
  )
}
