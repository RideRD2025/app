const ChatBotMessage = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-200 text-gray-800 rounded-tl-none'}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatBotMessage;