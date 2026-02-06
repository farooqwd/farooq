import { Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  return (
    <header className="h-[60px] bg-white border-b border-[#E0E8ED] flex items-center justify-between px-6">
      {/* Search */}
      <div className="relative w-[318px] h-[34px]">
        <input
          type="text"
          placeholder="search"
          className="w-full h-full pl-4 pr-10 text-[14px] bg-[#F5F8FA] border border-[#E0E8ED] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20 focus:border-[#1D3557] placeholder:text-[#8597A8] placeholder:capitalize"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8597A8]" strokeWidth={1.5} />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="relative p-1 text-[#8597A8] hover:text-[#1D3557]">
          <Bell className="w-4 h-4" strokeWidth={1.5} />
          <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] bg-[#DB1F26] rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2 h-[32px] px-2 bg-[#F9FAFA] rounded-[30px] cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-[#D9D9D9] overflow-hidden">
            <img 
              src="https://ui-avatars.com/api/?name=M&background=D9D9D9&color=1D3557&size=24&font-size=0.5" 
              alt={userName}
              className="w-6 h-6 rounded-full object-cover"
            />
          </div>
          <span 
            className="text-[12px] font-medium text-[#23252A] capitalize leading-[16px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {userName}
          </span>
          <ChevronDown className="w-3 h-3 text-[#17181C]" />
        </div>
      </div>
    </header>
  );
}
