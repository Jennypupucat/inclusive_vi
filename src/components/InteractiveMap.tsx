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
    status: '结构加固中',
    progress: 60,
    description: 'Olympia Building 位于中央广场西侧。现阶段已完成屋顶桁架修复，正在进行外墙清理与加固，预计 2025 年底前完工。',
    image: '/img3.png',
    docLink: 'https://historicengland.org.uk/listing/the-list/list-entry/1213012'
  },
  'P16': {
    id: 'P16',
    title: 'P16 – Evelyn Quarter',
    buildYear: '1850–52',
    protectionLevel: 'Grade II Listed',
    status: '改造规划中',
    progress: 30,
    description: 'Evelyn Quarter 是该地区重要的历史街区之一。目前正在进行改造规划的制定，计划将在保留历史建筑特色的基础上，提升其可达性和使用功能。',
    image: '/img4.png',
    docLink: '#'
  },
  'P22': {
    id: 'P22',
    title: 'P22 – The Waterfront',
    buildYear: '1862–65',
    protectionLevel: 'Grade II Listed',
    status: '设计阶段',
    progress: 15,
    description: 'The Waterfront区域将打造成为一个充满活力的滨水空间。该项目将恢复历史码头特色，同时融入现代滨水休闲设施，创造一个连接社区与泰晤士河的公共空间。',
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
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">场地分区交互地图</h2>
      <p className="text-gray-600 mb-6">
        点击下方任一区块，可查看该分区的详细改造进度与历史保护信息。
      </p>

      {/* 地图区域 */}
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
        {/* 底图 */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* 交互区域 - 半透明遮罩层 */}
        <div className="absolute inset-0 bg-black/5" />

        {/* 区块按钮 */}
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

        {/* P16按钮 */}
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

        {/* P22按钮 */}
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

      {/* 改进的弹窗 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full">
            {/* 标题栏 */}
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
              {/* 左侧：图片和标签信息 */}
              <div>
                <img
                  src={sectionData[activeSection as keyof typeof sectionData]?.image}
                  alt={sectionData[activeSection as keyof typeof sectionData]?.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.className = 'w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center';
                    target.alt = '图片加载失败';
                  }}
                />
                
                {/* 信息标签 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">建筑年代</span>
                    <span className="font-medium">{sectionData[activeSection as keyof typeof sectionData]?.buildYear}</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">保护等级</span>
                    <span className="font-medium">{sectionData[activeSection as keyof typeof sectionData]?.protectionLevel}</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">当前状态</span>
                    <span className="font-medium">{sectionData[activeSection as keyof typeof sectionData]?.status}</span>
                  </div>
                </div>
              </div>

              {/* 右侧：进度和描述 */}
              <div className="space-y-4">
                {/* 进度条 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">施工进度</span>
                    <span className="text-sm font-medium">{sectionData[activeSection as keyof typeof sectionData]?.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-custom-green rounded-full transition-all duration-300"
                      style={{ width: `${sectionData[activeSection as keyof typeof sectionData]?.progress}%` }}
                    />
                  </div>
                </div>

                {/* 详细描述 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {sectionData[activeSection as keyof typeof sectionData]?.description}
                  </p>
                </div>

                {/* 操作按钮 */}
                <a
                  href={sectionData[activeSection as keyof typeof sectionData]?.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-custom-green text-custom-green hover:bg-custom-green hover:text-white rounded-lg transition-colors duration-200"
                >
                  查看更多历史档案
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