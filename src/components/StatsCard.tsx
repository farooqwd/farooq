import { Files, FileSearch, FileOutput, FileCheck } from 'lucide-react';

interface StatsCardProps {
  type: 'total' | 'review' | 'progress' | 'completed';
  value: number;
  label: string;
}

const iconConfig = {
  total: {
    Icon: Files,
  },
  review: {
    Icon: FileSearch,
  },
  progress: {
    Icon: FileOutput,
  },
  completed: {
    Icon: FileCheck,
  },
};

export default function StatsCard({ type, value, label }: StatsCardProps) {
  const { Icon } = iconConfig[type];

  return (
    <div 
      className="bg-white rounded-[10px] border border-[#E0E8ED] px-4 flex items-center gap-3 w-full"
      style={{ height: '80px' }}
    >
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#DB1F26]" strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <p 
          className="text-[24px] font-bold text-[#1D3557] leading-[16px] mb-2"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          {value}
        </p>
        <p 
          className="text-[14px] text-[#8597A8] whitespace-nowrap capitalize leading-[16px]"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
