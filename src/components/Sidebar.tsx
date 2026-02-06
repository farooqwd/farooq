import {
  Home,
  FileText,
  User,
  File,
  BarChart3,
  Users,
  ArrowLeft,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

interface SidebarProps {
  navItems: NavItem[];
}

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard: Home,
  Eye: FileText,
  CheckSquare: User,
  FileText: File,
  BarChart3: BarChart3,
  Users: Users,
};

export default function Sidebar({ navItems }: SidebarProps) {
  return (
    <aside className="w-[256px] min-h-screen bg-[#1D3557] flex flex-col flex-shrink-0 border-r border-[#F1F2F3] relative">
      {/* Logo */}
      <div className="px-[23px] py-[10px] h-[60px] flex items-center">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L4 7L14 12L24 7L14 2Z" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 21L14 26L24 21" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 14L14 19L24 14" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span 
            className="text-white font-bold text-[18px] tracking-wide"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            TAHWUL
          </span>
        </div>
      </div>

      {/* Collapse button */}
      <div className="absolute w-8 h-8 left-[240px] top-[14px] bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center cursor-pointer z-10">
        <ArrowLeft className="w-4 h-4 text-[#747A8B]" strokeWidth={1.5} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-[23px] pt-[16px]">
        <ul className="space-y-[8px]">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.id}>
                <a
                  href="#"
                  className={`flex items-center gap-[10px] px-[10px] py-[10px] rounded-[8px] text-[14px] font-medium leading-[16px] capitalize transition-all duration-200 w-[208px] h-[40px] ${
                    item.active
                      ? 'bg-[rgba(152,174,192,0.1)] text-white'
                      : 'text-[#7B9FC3] hover:bg-[rgba(152,174,192,0.05)] hover:text-white'
                  }`}
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
