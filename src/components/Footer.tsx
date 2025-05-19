import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="mt-12 pt-6 pb-6 border-t border-gray-200">
      <div className="flex flex-col items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4 mb-3">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-custom-purple transition-colors">
            {/* Instagram SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-custom-purple transition-colors">
            {/* TikTok SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 17a4 4 0 1 1 0-8v8zm0 0a4 4 0 0 0 4-4V3h3a5 5 0 0 0 5 5" /></svg>
          </a>
          <a href="https://www.convoyswharf.com" target="_blank" rel="noopener noreferrer" className="hover:text-custom-purple transition-colors">
            Official Website
          </a>
        </div>
        <div className="text-xs text-gray-500">
          Made with  Convoys Wharf | UCL BSEER | Jennypupucat.github
        </div>
      </div>
    </footer>
  );
};

export default Footer; 