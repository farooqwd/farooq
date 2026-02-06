import { Send } from 'lucide-react';
import type { Comment } from '../data/mockData';

interface CommentsProps {
  comments: Comment[];
}

export default function Comments({ comments }: CommentsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-[#E0E8ED] p-6 flex flex-col">
      <h3 
        className="text-[16px] font-bold text-[#1D3557] mb-4 capitalize leading-[16px]"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        Comments
      </h3>
      
      <div className="space-y-4 flex-1">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="bg-white border border-[#E0E8ED] rounded-[10px] p-4"
          >
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#E0E8ED] flex items-center justify-center flex-shrink-0">
                <span 
                  className="text-[#8597A8] text-[10px] font-medium"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  {comment.initials}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span 
                    className="text-[14px] font-bold text-[#1D3557] capitalize leading-[16px]"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                  >
                    {comment.author}
                  </span>
                  <span 
                    className="text-[14px] text-[#8597A8] capitalize leading-[16px]"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                  >
                    {comment.date}
                  </span>
                </div>
                <p 
                  className="text-[14px] text-[#1D3557] capitalize leading-[20px]"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  {comment.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Empty comment box for new comment */}
        <div className="bg-white border border-[#E0E8ED] rounded-[10px] p-4 min-h-[111px]">
          <textarea
            placeholder=""
            rows={3}
            className="w-full text-[14px] bg-transparent focus:outline-none resize-none placeholder:text-[#8597A8]"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          />
        </div>
      </div>

      {/* Post Comment Button */}
      <button 
        className="mt-4 inline-flex items-center justify-center gap-[10px] px-6 py-[14px] bg-[#1D3557] text-white rounded-[8px] hover:bg-[#2d4a6f] transition-colors w-[175px] h-[34px]"
      >
        <Send className="w-4 h-4 text-white" fill="white" strokeWidth={0} />
        <span 
          className="text-[16px] font-normal capitalize leading-[16px]"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          post comment
        </span>
      </button>
    </div>
  );
}
