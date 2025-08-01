'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookiePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setShowPopup(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-100 text-black rounded-xl p-4 shadow-lg w-[90%] max-w-xl text-center border border-gray-300">
      <p className="text-sm font-medium mb-4">
        🍪 We use cookies to enhance your shopping experience. By continuing, you accept our cookie policy.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleAccept}
          className="bg-black text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-white text-black px-5 py-2 text-sm border border-black rounded hover:bg-gray-200 transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
