'use client';

import { FC, useState } from 'react';

interface InteractiveMapProps {
  selectedSection: string | null;
}

const sectionData = {
  'P07': {
    id: 'P07',
    title: 'P07 – Olympia Building',
    buildYear: '1844–46',
    protectionLevel: 'Grade II Listed',
    status: 'Under structural reinforcement',
    progress: 60,
    description: 'The Olympia Building is located on the west side of the central plaza. Roof truss repairs are complete, exterior wall cleaning and reinforcement are ongoing, expected completion by end of 2025.',
    image: '/img3.png',
    docLink: 'https://historicengland.org.uk/listing/the-list/list-entry/1213012'
  },
  'P16': {
    id: 'P16',
    title: 'P16 – Evelyn Quarter',
    buildYear: '1850–52',
    protectionLevel: 'Grade II Listed',
    status: 'Under renovation planning',
    progress: 30,
    description: 'Evelyn Quarter is a key historic district. Renovation planning is underway to enhance accessibility and functionality while preserving historic features.',
    image: '/img4.png',
    docLink: '#'
  },
  'P22': {
    id: 'P22',
    title: 'P22 – The Waterfront',
    buildYear: '1862–65',
    protectionLevel: 'Grade II Listed',
    status: 'Design stage',
    progress: 15,
    description: 'The Waterfront will become a vibrant riverside space, restoring historic dock features and adding modern leisure facilities to create a public area connecting the community and the Thames.',
    image: '/img5.png',
    docLink: 'https://historicengland.org.uk/listing/the-list/list-entry/1213012'
  }
};

const InteractiveMap: FC<InteractiveMapProps> = ({ selectedSection }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowModal(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Interactive Site Zoning Map</h2>
      <p className="text-gray-600 mb-6">
        Click any block below to view detailed renovation progress and heritage information for that zone.
      </p>

      {/* Map Area */}
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
        {/* Base Map */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Interactive Area - Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Block Buttons */}
        <button
          onClick={() => handleSectionClick('P07')}
          className="absolute bg-custom-green/20 hover:bg-custom-green/40 
                   transition-colors rounded-md text-gray-800
                   backdrop-blur-sm border border-custom-green/30
                   flex items-center justify-center text-xs font-medium
                   hover:scale-105 transform transition-transform duration-200"
          style={{
            top: '50%',
            left: '43%',
            width: '45px',
            height: '28px',
          }}
        >
          P07
        </button>

        {/* P16 Button */}
        <button
          onClick={() => handleSectionClick('P16')}
          className="absolute bg-custom-green/20 hover:bg-custom-green/40 
                   transition-colors rounded-md text-gray-800
                   backdrop-blur-sm border border-custom-green/30
                   flex items-center justify-center text-xs font-medium
                   hover:scale-105 transform transition-transform duration-200"
          style={{
            top: '67%',
            left: '35%',
            width: '45px',
            height: '28px',
          }}
        >
          P16
        </button>

        {/* P22 Button */}
        <button
          onClick={() => handleSectionClick('P22')}
          className="absolute bg-custom-green/20 hover:bg-custom-green/40 
                   transition-colors rounded-md text-gray-800
                   backdrop-blur-sm border border-custom-green/30
                   flex items-center justify-center text-xs font-medium
                   hover:scale-105 transform transition-transform duration-200"
          style={{
            top: '40%',
            left: '75%',
            width: '45px',
            height: '28px',
          }}
        >
          P22
        </button>
      </div>

      {/* Improved Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full">
            {/* Title Bar */}
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {sectionData[activeSection as keyof typeof sectionData]?.title}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Image and Label Information */}
              <div>
                <img
                  src={sectionData[activeSection as keyof typeof sectionData]?.image}
                  alt={sectionData[activeSection as keyof typeof sectionData]?.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.className = 'w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center';
                    target.alt = 'Image failed to load';
                  }}
                />
                
                {/* Info Labels */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-medium">{sectionData[activeSection as keyof typeof sectionData]?.buildYear}</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Protection Level</span>
                    <span className="font-medium">{sectionData[activeSection as keyof typeof sectionData]?.protectionLevel}</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Current Status</span>
                    <span className="font-medium">{sectionData[activeSection as keyof typeof sectionData]?.status}</span>
                  </div>
                </div>
              </div>

              {/* Right: Progress and Description */}
              <div className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">{sectionData[activeSection as keyof typeof sectionData]?.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-custom-green rounded-full transition-all duration-300"
                      style={{ width: `${sectionData[activeSection as keyof typeof sectionData]?.progress}%` }}
                    />
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {sectionData[activeSection as keyof typeof sectionData]?.description}
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={sectionData[activeSection as keyof typeof sectionData]?.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-custom-green text-custom-green hover:bg-custom-green hover:text-white rounded-lg transition-colors duration-200"
                >
                  View More Archives
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap; 