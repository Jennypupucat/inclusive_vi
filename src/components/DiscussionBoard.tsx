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
      content: '欢迎来到项目讨论区！您可以在这里询问关于项目的任何问题。',
      timestamp: '刚刚',
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
      timestamp: '刚刚',
      likes: 0,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '感谢您的提问！我们正在处理您的询问...',
        timestamp: '刚刚',
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
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">项目讨论 & 智能助手</h2>
      <p className="text-gray-600 mb-6">
        在下方输入框中，您可以提出对改造计划的建议或询问项目进度、历史保护等相关信息。
        我们的 AI 智能助手会即时回复，也可供社区其他成员参考。
      </p>

      {/* 消息列表 */}
      <div className="space-y-4 h-96 overflow-y-auto mb-6">
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
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="有什么想法或问题？例如：'P07 Olympia Building 何时开始外墙清理？'"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
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