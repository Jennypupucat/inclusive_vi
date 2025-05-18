'use client';

import { useState } from 'react';
import ProgressBoard from '@/components/ProgressBoard';
import InteractiveMap from '@/components/InteractiveMap';
import DiscussionBoard from '@/components/DiscussionBoard';
import CommunityVoices from '@/components/CommunityVoices';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative">
      {/* 背景图片 */}
      <div 
        className="absolute top-0 left-0 w-full h-[65vh] bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/img1.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.9)',
        }}
      >
        {/* 渐变遮罩 */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-white opacity-90" />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 pt-[45vh]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 装饰性标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="relative z-10">
                Let's join us in the renewal of
                <br />
                <span className="text-gray-900 italic">Convoys Wharf!</span>
              </span>
              {/* 装饰性下划线 */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-custom-yellow opacity-30 transform -rotate-1"></div>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore the exciting transformation of this historic waterfront, where heritage meets modern urban development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 进度看板 */}
              <div className="lg:col-span-1">
                <ProgressBoard onSectionSelect={(section) => setSelectedSection(section)} />
              </div>

              {/* 交互地图 */}
              <div className="lg:col-span-1">
                <InteractiveMap selectedSection={selectedSection} />
              </div>

              {/* 讨论区 */}
              <div className="lg:col-span-1">
                <DiscussionBoard />
              </div>
            </div>

            {/* 社区声音模块 */}
            <div className="lg:col-span-2">
              <CommunityVoices />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 