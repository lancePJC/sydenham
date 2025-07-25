// pages/feedback.tsx
import { useState } from 'react';
import Head from 'next/head';
import { FaStar } from 'react-icons/fa';

export default function FeedbackPage() {
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] =
    useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  /* ── submit handler ─────────────────────── */
  const sendFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !message.trim()) return;

    setStatus('sending');
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, message }),
      });
      setStatus('sent');
      setRating(0);
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Feedback – Sydenham Enterprises</title>
      </Head>

      <main className="min-h-screen bg-gray-50 px-4 py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-6">
          We value your feedback
        </h1>

        <form
          onSubmit={sendFeedback}
          className="w-full max-w-lg bg-white shadow-lg rounded p-6 space-y-4"
        >
          {/* Rating */}
          <label className="block font-medium text-gray-700 mb-1">
            How would you rate your experience?
          </label>
          <div className="flex gap-1 text-2xl">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                onClick={() => setRating(n)}
                className="focus:outline-none"
                aria-label={`${n} star${n > 1 ? 's' : ''}`}
              >
                <FaStar
                  className={
                    rating >= n ? 'text-yellow-400' : 'text-gray-300'
                  }
                />
              </button>
            ))}
          </div>

          {/* Message */}
          <label htmlFor="msg" className="block font-medium text-gray-700">
            Your message
          </label>
          <textarea
            id="msg"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:ring-yellow-500 focus:border-yellow-500"
          />

          {/* Submit */}
          <button
            disabled={status === 'sending'}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded w-full disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Feedback'}
          </button>

          {/* Status message */}
          {status === 'sent' && (
            <p className="text-green-600 text-sm text-center">
              Thank you for your feedback!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Error sending feedback. Please try again.
            </p>
          )}
        </form>
      </main>
    </>
  );
}
