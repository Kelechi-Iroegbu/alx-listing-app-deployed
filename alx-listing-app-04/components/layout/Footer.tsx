// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="font-semibold text-lg">LuxStay</h3>
            <p className="text-sm text-gray-600 mt-2">Find the best luxury stays worldwide.</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-medium">Company</h4>
              <ul className="mt-2 space-y-1">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Support</h4>
              <ul className="mt-2 space-y-1">
                <li>Help Center</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} LuxStay. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
