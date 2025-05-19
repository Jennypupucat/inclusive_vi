'use client';

import { FC, useState } from 'react';
import { ChatBubbleLeftIcon, PaperAirplaneIcon, HandThumbUpIcon as ThumbUpIcon } from '@heroicons/react/24/outline';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
  likes: number;
}

const DiscussionBoard: FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Welcome to the project discussion area! You can ask any questions about the project here.',
      timestamp: 'Just now',
      likes: 0,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: 'Just now',
      likes: 0,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // 模拟AI智能回复
    setTimeout(() => {
      let reply = 'Thank you for your question! We are processing your inquiry...';
      const lower = input.toLowerCase();
      if (lower.includes('olympia')) {
        reply = 'The Olympia Building restoration is expected to be completed by the end of 2025. This historic structure will be transformed into a vibrant community space while preserving its architectural heritage.';
      } else if (lower.includes('history')) {
        reply = 'Deptford has a rich maritime history as the site of the Royal Dockyard. The area witnessed the glory of the Age of Discovery and played a crucial role in Britain\'s naval history. Today, we\'re working to preserve this heritage while creating a modern, sustainable community.';
      } else if (lower.includes('community')) {
        reply = 'Community engagement is a core part of the Convoys Wharf regeneration plan. We\'re actively working with local residents, businesses, and cultural organizations to ensure the development meets community needs while preserving Deptford\'s unique character.';
      } else if (lower.includes('market')) {
        reply = 'The Deptford Market is a vital part of our community\'s identity. We\'re committed to preserving its diversity, especially the Asian food and crafts stalls, while improving facilities and accessibility for both vendors and visitors.';
      } else if (lower.includes('park') || lower.includes('green space')) {
        reply = 'Pepys Park and other green spaces are essential for community wellbeing. Our plans include enhancing these areas with better lighting, seating, and accessibility while maintaining space for community activities and events.';
      } else if (lower.includes('transport') || lower.includes('accessibility')) {
        reply = 'We\'re improving transport links and accessibility throughout the area. This includes better cycling infrastructure, enhanced DLR connections, and improved pedestrian routes to create a more connected and sustainable community.';
      } else if (lower.includes('housing') || lower.includes('rent')) {
        reply = 'Affordable housing is a key priority in our regeneration plans. We\'re working to ensure a mix of housing options that meet community needs while maintaining the area\'s character and accessibility.';
      } else if (lower.includes('art') || lower.includes('culture')) {
        reply = 'Cultural activities are central to our vision. We plan to host local art exhibitions in the Olympia Building and create new spaces for community events, workshops, and performances.';
      } else if (lower.includes('safety') || lower.includes('security')) {
        reply = 'Community safety is paramount. We\'re implementing improved lighting, better surveillance, and enhanced public spaces to create a safer environment for all residents and visitors.';
      } else if (lower.includes('river') || lower.includes('waterfront')) {
        reply = 'The Thames waterfront is a key feature of Deptford. Our plans include creating a vibrant riverside path with better lighting, seating, and public spaces to connect the high street with the river.';
      }
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: reply,
        timestamp: 'Just now',
        likes: 0,
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleLike = (messageId: string) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === messageId ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Project Discussion & Intelligent Assistant</h2>
      <p className="text-gray-600 mb-6">
        Below the input box, you can propose suggestions for the project or ask questions about project progress, historical protection, etc.
        Our intelligent assistant will reply immediately, and it can also be referenced by other community members.
      </p>

      {/* 消息列表 */}
      <div className="space-y-4 h-[calc(100%-200px)] overflow-y-auto mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.type === 'user'
                  ? 'bg-custom-green text-gray-100'
                  : 'bg-custom-blue/20 text-gray-800'
              }`}
            >
              <div className="flex items-start gap-3">
                {message.type === 'ai' && (
                  <ChatBubbleLeftIcon className="h-6 w-6 text-gray-700" />
                )}
                <div className="flex-1">
                  <p>{message.content}</p>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className={message.type === 'user' ? 'text-gray-100/90' : 'text-gray-600'}>
                      {message.timestamp}
                    </span>
                    <button
                      onClick={() => handleLike(message.id)}
                      className={`flex items-center gap-1 ${
                        message.type === 'user'
                          ? 'text-gray-100/90 hover:text-white'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <ThumbUpIcon className="h-4 w-4" />
                      <span>{message.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 输入区域 */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's your idea or question? For example: 'When will the P07 Olympia Building start exterior cleaning?'"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-transparent"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-custom-purple text-white rounded-lg px-4 py-2 hover:bg-custom-purple/80 transition-colors"
        >
          <PaperAirplaneIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DiscussionBoard; 