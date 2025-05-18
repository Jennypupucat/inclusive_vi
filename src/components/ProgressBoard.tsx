'use client';

import { FC, useState } from 'react';
import { CalendarIcon, MapIcon, ChatBubbleLeftIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolidIcon } from '@heroicons/react/24/solid';

interface ProgressBoardProps {
  onSectionSelect: (section: string) => void;
}

const milestones = [
  { 
    date: 'Apr\n2021', 
    title: 'Initial Proposal',
    status: 'completed',
    description: 'Concept design and preliminary planning completed',
    color: 'custom-blue'
  },
  { 
    date: 'Jun\n2024', 
    title: 'Planning Approval',
    status: 'completed',
    description: 'Obtained planning permission from relevant authorities',
    color: 'custom-green'
  },
  { 
    date: 'Mar\n2025', 
    title: 'Construction Start',
    status: 'current',
    description: 'Main construction phase begins',
    color: 'custom-purple'
  },
  { 
    date: 'Dec\n2026', 
    title: 'Expected Completion',
    status: 'upcoming',
    description: 'All renovation works completed and ready for use',
    color: 'custom-yellow'
  },
];

const metrics = [
  { 
    label: 'Completed Sections', 
    value: 8,
    total: 22,
    color: 'custom-blue',
    icon: CheckCircleSolidIcon
  },
  { 
    label: 'Under Construction', 
    value: 5,
    total: 22,
    color: 'custom-green',
    icon: CalendarIcon
  },
  { 
    label: 'Pending Sections', 
    value: 9,
    total: 22,
    color: 'custom-purple',
    icon: MapIcon
  },
  { 
    label: 'Heritage Restoration', 
    value: 60,
    total: 100,
    color: 'custom-yellow',
    icon: ChatBubbleLeftIcon
  },
];

const PieChart: FC<{ percentage: number; color: string }> = ({ percentage, color }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90 w-14 h-14">
        {/* 背景圆环 */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-gray-200"
        />
        {/* 进度圆环 */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke={`var(--${color})`}
          strokeWidth="4"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-medium text-gray-700">
        {percentage}%
      </span>
    </div>
  );
};

const ProgressBoard: FC<ProgressBoardProps> = ({ onSectionSelect }) => {
  const [showZoneModal, setShowZoneModal] = useState(false);

  const handleMapClick = () => {
    setShowZoneModal(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">项目进度</h2>

      {/* 总体节点 - 时间轴展示 */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-6 text-gray-900">Overall Timeline</h3>
        <div className="relative">
          {/* 垂直时间轴线 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* 里程碑节点 */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                {/* 时间轴节点标记 */}
                <div className="absolute left-8 -translate-x-1/2 flex items-center justify-center">
                  {milestone.status === 'completed' ? (
                    <CheckCircleSolidIcon 
                      className="h-4 w-4"
                      style={{ color: `var(--${milestone.color})` }}
                    />
                  ) : milestone.status === 'current' ? (
                    <div 
                      className="h-4 w-4 rounded-full animate-pulse"
                      style={{ backgroundColor: `var(--${milestone.color})` }}
                    />
                  ) : (
                    <div 
                      className="h-4 w-4 rounded-full border-2"
                      style={{ borderColor: `var(--${milestone.color})` }}
                    />
                  )}
                </div>

                {/* 日期 */}
                <div className="w-16 text-right pr-8">
                  <span className="text-sm text-gray-600 whitespace-pre-line">{milestone.date}</span>
                </div>

                {/* 内容区域 */}
                <div 
                  className="flex-1 rounded-lg p-4"
                  style={{ backgroundColor: `var(--${milestone.color})15` }}
                >
                  <h4 className="text-gray-900 font-medium">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{milestone.description}</p>
                  
                  {/* 进度条 */}
                  <div className="mt-3">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500 ease-in-out"
                        style={{ 
                          backgroundColor: `var(--${milestone.color})`,
                          width: milestone.status === 'completed' ? '100%' : 
                                milestone.status === 'current' ? '50%' : '0%' 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 关键指标 */}
      <div>
        <h3 className="text-lg font-medium mb-6 text-gray-900">Key Metrics</h3>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => {
            const percentage = Math.round((metric.value / metric.total) * 100);
            const Icon = metric.icon;
            
            return (
              <div 
                key={index} 
                className="rounded-lg p-3 flex items-center gap-3"
                style={{
                  backgroundColor: `var(--${metric.color})15`
                }}
              >
                <PieChart percentage={percentage} color={metric.color} />
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <Icon 
                      className="h-4 w-4"
                      style={{
                        color: `var(--${metric.color})`
                      }}
                    />
                    <span className="text-xs text-gray-600">{metric.label}</span>
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-gray-700">
                    {metric.value}/{metric.total}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 快捷导航 */}
      <div>
        <h3 className="text-lg font-medium mb-4 text-gray-900">快捷导航</h3>
        <div className="space-y-3">
          <button
            onClick={handleMapClick}
            className="w-full flex items-center justify-center px-4 py-2 bg-custom-green text-white rounded-lg hover:bg-custom-green/80 transition-colors"
          >
            <MapIcon className="h-5 w-5 mr-2" />
            查看场地分区
          </button>
          <button
            onClick={() => onSectionSelect('discussion')}
            className="w-full flex items-center justify-center px-4 py-2 bg-custom-purple text-white rounded-lg hover:bg-custom-purple/80 transition-colors"
          >
            <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
            进入讨论区
          </button>
        </div>
      </div>

      {/* 分区说明弹窗 */}
      {showZoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full mx-4 p-6 relative">
            {/* 关闭按钮 */}
            <button
              onClick={() => setShowZoneModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* 标题 */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Site Zoning Overview</h3>
              <p className="text-gray-600 mt-2">
                The project is divided into 7 characteristic areas, encompassing townscape, scale and massing, public realm and landscape, movement, circulation and access, and land use typology. These areas work together to create a comprehensive masterplan vision.
              </p>
            </div>

            {/* 图片展示区域 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* 主要分区图 */}
              <div className="lg:col-span-8 space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/img6.png"
                    alt="分区规划图"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/img8.png"
                    alt="分区规划补充图"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* 图例说明 */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Legend</h4>
                  <img
                    src="/img7.png"
                    alt="图例"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="bg-custom-blue/10 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Characteristic Areas</h4>
                  <p className="text-xs text-gray-600">
                    Townscape • Scale & Massing • Public Realm • Movement • Circulation • Land Use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBoard; 