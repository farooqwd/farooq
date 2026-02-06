import type { Activity } from '../data/mockData';

interface RecentActivitiesProps {
  activities: Activity[];
}

export default function RecentActivities({ activities }: RecentActivitiesProps) {
  return (
    <div className="bg-white rounded-[10px] border border-[#E0E8ED] p-4 w-[368px]">
      <h3 
        className="text-[16px] font-bold text-[#1D3557] mb-4 capitalize leading-[16px]"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        Recent Activities
      </h3>
      
      <div className="divide-y divide-[#E0E8ED]">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className={`flex items-start gap-3 ${index === 0 ? 'pb-4' : 'py-4'}`}
          >
            <div className="w-[6px] h-[6px] rounded-full bg-[#DB1F26] mt-2 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p 
                className="text-[16px] font-medium text-[#1D3557] leading-[22px] capitalize"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {activity.description}
              </p>
            </div>
            <span 
              className="text-[12px] text-[#8597A8] capitalize leading-[16px] whitespace-nowrap flex-shrink-0"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              {activity.timeAgo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
