'use client';

import { FC, useState } from 'react';
import { ChatBubbleLeftIcon, UserCircleIcon, ChevronDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface Suggestion {
  identity: string;
  content: string;
  email?: string;
}

const suggestions: Suggestion[] = [
  {
    identity: 'Local Resident (30+ years)',
    content: 'Hope to preserve the diversity of Deptford Market stalls, especially Asian food and crafts. Don\'t let old merchants be pushed out.',
    email: 'jin_jenny16@163.com'
  },
  {
    identity: 'Anonymous',
    content: 'Against building high-rises! The old buildings and riverside landscape of Deptford should be well protected, not all demolished for new ones.'
  },
  {
    identity: 'Record Shop Owner',
    content: 'Suggest hosting local art exhibitions in the Olympia Building to attract young people, not just commercial development.'
  },
  {
    identity: 'Library Staff',
    content: 'Set up more bike rental points. DLR is too crowded for commuting, and green travel can help reduce traffic congestion.'
  },
  {
    identity: 'Anonymous',
    content: 'The riverside path is too dark. Add lighting and rest benches for safer evening walks and better connection between high street and Thames.'
  },
  {
    identity: 'Anonymous',
    content: 'Pepys Park should keep space for elderly activities. Don\'t use it all for housing, we need places to walk and chat.'
  }
];

const keywords = [
  { text: 'Heritage', size: 40 },
  { text: 'Community Space', size: 35 },
  { text: 'Rent Control', size: 30 },
  { text: 'Traditional Market', size: 38 },
  { text: 'Public Engagement', size: 32 },
  { text: 'Green Space', size: 36 },
  { text: 'Accessibility', size: 28 },
  { text: 'Conservation', size: 34 },
  { text: 'Local Events', size: 33 },
  { text: 'Affordable Housing', size: 31 }
];

const CommunityVoices: FC = () => {
  const [newSuggestion, setNewSuggestion] = useState('');
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const [showEmail, setShowEmail] = useState<number | null>(null);
  const [includeContact, setIncludeContact] = useState(false);
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewSuggestion('');
    setContactInfo('');
    setIncludeContact(false);
    alert('Thank you for your suggestion! We will carefully consider all feedback.');
  };

  const displayedSuggestions = showAllSuggestions ? suggestions : suggestions.slice(0, 3);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
        <span>🌐</span> Community Voices · Inspiration Hub
      </h2>

      {/* Word Cloud Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-900 flex items-center gap-2">
          <span>📊</span> Community Feedback Word Cloud
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 min-h-[200px] flex flex-wrap gap-3 justify-center items-center">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-block transition-transform hover:scale-110"
              style={{
                fontSize: `${keyword.size / 10}rem`,
                color: `hsl(${Math.random() * 360}, 70%, 45%)`,
                transform: `rotate(${Math.random() * 20 - 10}deg)`
              }}
            >
              {keyword.text}
            </span>
          ))}
        </div>
      </div>

      {/* Inspiration Wall Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-900 flex items-center gap-2">
          <span>🤝</span> Inspiration Wall
        </h3>
        <div className="space-y-4">
          {displayedSuggestions.map((suggestion, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <UserCircleIcon className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">{suggestion.identity}</span>
                {suggestion.email && (
                  <div className="relative">
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onMouseEnter={() => setShowEmail(index)}
                      onMouseLeave={() => setShowEmail(null)}
                    >
                      <EnvelopeIcon className="h-3.5 w-3.5" />
                    </button>
                    {showEmail === index && (
                      <div className="absolute left-0 top-6 bg-white rounded-md shadow-lg px-3 py-1.5 text-xs text-gray-600 whitespace-nowrap z-10">
                        {suggestion.email}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p className="text-gray-700 italic">"{suggestion.content}"</p>
            </div>
          ))}
          
          {!showAllSuggestions && (
            <button
              onClick={() => setShowAllSuggestions(true)}
              className="w-full py-3 flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg border border-gray-200 hover:border-gray-300 bg-white"
            >
              <span>View More</span>
              <ChevronDownIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Comment Form */}
      <div>
        <h3 className="text-lg font-medium mb-4 text-gray-900 flex items-center gap-2">
          <span>📝</span> Share Your Ideas
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={newSuggestion}
              onChange={(e) => setNewSuggestion(e.target.value)}
              placeholder="Share your thoughts on the Convoys Wharf regeneration project..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-green/50"
            />
          </div>
          
          {/* Contact Option */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIncludeContact(!includeContact)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                includeContact 
                ? 'bg-blue-50 text-blue-600 border-blue-200' 
                : 'bg-gray-50 text-gray-600 border-gray-200'
              }`}
            >
              <EnvelopeIcon className="h-5 w-5" />
              Include Contact Info
            </button>
          </div>

          {/* Contact Input */}
          {includeContact && (
            <div className="space-y-2">
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="Enter your email or other contact information"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-green/50"
              />
              <p className="text-xs text-gray-500">
                * Contact information will only be used for project team communication and won't be publicly displayed
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-custom-green text-white rounded-lg hover:bg-custom-green/80 transition-colors"
          >
            <ChatBubbleLeftIcon className="h-5 w-5" />
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          * All suggestions will be displayed anonymously. If contact information is provided, we will reach out privately.
        </p>
      </div>
    </div>
  );
};

export default CommunityVoices; 