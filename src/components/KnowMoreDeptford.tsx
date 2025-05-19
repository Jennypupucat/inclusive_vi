'use client';

import { FC, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const KnowMoreDeptford: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#F8F9FA] rounded-[10px] shadow-lg p-4 border border-[#E0E0E0] h-[220px] flex items-center gap-8 w-full max-w-xl">
      {/* 左侧小图 */}
      <div className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden bg-gray-200">
        <img src="/img9.png" alt="Deptford" className="w-full h-full object-cover" />
      </div>
      {/* 右侧内容 */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2 break-words">Know More About Deptford</h3>
        <p className="text-gray-600 mb-4 text-sm break-words">Discover Deptford's unique history and vibrant community. Click to discover more.</p>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-8 h-[40px] bg-[#36454F] text-white font-semibold rounded-[20px] transition-all duration-300 hover:bg-[#2C3A47] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#36454F] self-start w-auto max-w-full"
        >
          Learn More
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[90vw] max-w-[800px] h-[80vh] max-h-[600px] p-8 relative flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-6 top-6 text-gray-600 hover:text-[#FF5733] transition-colors text-2xl"
              aria-label="Close"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
            <div className="flex-1 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-center">Deptford: A Waterfront Community of History and Renewal</h3>
              <p className="text-gray-600 mb-6 text-center">
                Deptford was once home to the Royal Dockyard, witnessing the glory of the Age of Discovery. Today, the Convoys Wharf regeneration project aims to blend historical heritage with modern life, reviving waterfront vitality.
              </p>
              <div className="flex gap-4 w-full max-w-xl mx-auto">
                <div className="w-1/2">
                  <img src="/img1.png" alt="Historical Deptford" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="w-1/2">
                  <img src="/img2.png" alt="Modern Deptford" className="w-full h-40 object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowMoreDeptford; 