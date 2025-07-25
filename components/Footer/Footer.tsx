import Link from 'next/link';
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <> 
      <div className="bg-gray-900 text-white py-6 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Do you like our products?</h4>
            <p className="text-sm text-gray-300 mb-1">Give us your feedback and help us improve!</p>
            <Link href="/Feedback" className="text-sm text-yellow-500 underline hover:text-yellow-400">
              Feedback Page
            </Link>
          </div>
          <div className="flex items-center gap-1 text-yellow-400 text-xl">
            {'★★★★★'.split('').map((star, idx) => (
              <span key={idx}>{star}</span>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-24 pb-10 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 border-b border-gray-700 pb-16">
          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {['Collect Payments', 'Send Money', 'Store', 'Payment Links', 'Invoices', 'Capital', 'Grow', 'Card Issuing', 'FaaS', 'Disha', 'Send App', 'Tuition'].map(item => (
                <li key={item}><Link href="/">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {['Pricing', 'Support', 'Blog', 'Integrations', 'Why you got charged', 'Cookie settings', 'Payment protection promise', 'Dashboard Guide'].map(item => (
                <li key={item}><Link href="/">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Developers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">API Documentation</Link></li>
              <li><Link href="/">API Reference</Link></li>
              <li className="flex items-center space-x-2">
                <Link href="/">API Status</Link>
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Company Info</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Customers' , 'Careers', 'Press', 'Help'].map(item => (
                <li key={item}><Link href="/">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@tamucoffee.co.ke">info@tamucoffee.co.ke</a></li>
              <li>+254 205 002 071</li>
              <li><Link href="/">X Support</Link></li>
            </ul>
          </div>

          {/* SOCIAL + SUBSCRIBE */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Stay Connected</h3>
            <div className="flex flex-wrap gap-3 text-yellow-400 text-xl mb-6">
              <a href="https://www.instagram.com/sydenhamenterprise/" target="_blank"><FaInstagram /></a>
              <a href="https://x.com/sydenham77863" target="_blank"><FaXTwitter /></a>
              <a href="https://www.youtube.com/@tamucoffee" target="_blank"><FaYoutube /></a>
              <a href="https://www.facebook.com/SydenhamPower?rdid=nirWpdBbUkKNHs7i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16t2hR8MGu%2F" target="_blank"><FaFacebook /></a>
              <a href="https://www.linkedin.com/in/sydenham-enterprise-99b888375/" target="_blank"><FaLinkedin /></a>
              <a href="https://www.tiktok.com/@sydenhamentrepris" target="_blank"><FaTiktok /></a>
            </div>

            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2 text-xs mb-6">
              {['#tamucoffee', '#coffeelovers', '#organic', '#kenya'].map(tag => (
                <span key={tag} className="bg-yellow-500 text-white px-2 py-1 rounded">{tag}</span>
              ))}
            </div>

            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Subscribe</h3>
            <p className="text-xs mb-2">Get coffee tips & offers</p>
            <input
              type="email"
              placeholder="Email address"
              className="p-2 w-full rounded text-gray-800 mb-2"
            />
            <button className="bg-yellow-500 text-white p-2 w-full rounded hover:bg-yellow-600 text-sm">
              SIGN UP
            </button>
          </div>
        </div>

        {/* SYDENHAM ENTERPRISES SECTION */}
        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-yellow-400 mb-6">Sydenham Enterprises LTD</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">

            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Construction</h4>
              <ul className="space-y-1">
                {['Lifts', 'Genset', 'Escalators', 'GMDT', 'Mechanical Engineering', 'Road Construction', 'Housing and Building'].map(item => (
                  <li key={item}><Link href="/">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">IT</h4>
              <ul className="space-y-1">
                {['Nathan', 'Digital Tech', 'RAMCO'].map(item => (
                  <li key={item}><Link href="/">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Beauty & Lifestyle</h4>
              <ul className="space-y-1">
                {['Benton','SomeByMi','Phukang Yul', 'Cosrx', 'Purito', 'Celenes', 'Evoluderm', 'Sinoz', 'Pretty skin'].map(item => (
                  <li key={item}><Link href="/">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Beverages</h4>
              <ul className="space-y-1">
                {['Tamu Tea', 'Tamu Coffee'].map(item => (
                  <li key={item}><Link href="/">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Sydenham Power</h4>
              <ul className="space-y-1">
                {['Solar Lamp', 'Solar Floodlights', 'Solar Street Lights', 'Solar Pumps', 'Solar Fridge', 'Inverters', 'Charge Controller', 'Accessories'].map(item => (
                  <li key={item}><Link href="/">{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row md:justify-between items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-2">
              <span role="img" aria-label="flag">🇰🇪</span> Kenya
            </span>
            <div className="flex gap-4 text-lg text-white">
              <a href="https://x.com/sydenham77863" target="_blank"><FaXTwitter /></a>
              <a href="https://www.facebook.com/profile.php?id=61578370683212" target="_blank"><FaFacebook /></a>
              <a href="https://www.instagram.com/sydenhamenterprise/" target="_blank"><FaInstagram /></a>
              <a href="https://youtube.com/@tamucoffee" target="_blank"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/sydenham-enterprise-99b888375/" target="_blank"><FaLinkedin /></a>
            </div>
          </div>
 
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
            {['Privacy notice', 'Terms of use', 'Cookie notice', 'Merchant service agreement', 'IMS policy', 'Send App licenses'].map(link => (
              <Link key={link} href="/">{link}</Link>
            ))}
          </div>
        </div>

        {/* WHATSAPP FLOATING CHAT BUTTON */}
        <a
          href="https://wa.me/254700000000?text=Hello%20Sydenham%20Team%2C%20I%20need%20help"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2 text-sm"
        >
          <FaWhatsapp className="text-xl" />
          <span className="hidden sm:inline">Chat with us</span>
        </a>
      </footer>
    </>
  );
}
