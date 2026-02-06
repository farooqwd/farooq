import { ArrowLeft } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import DocumentTable from './components/DocumentTable';
import Comments from './components/Comments';
import RecentActivities from './components/RecentActivities';
import ProgressCircle from './components/ProgressCircle';
import {
  navigationItems,
  statsData,
  documents,
  comments,
  recentActivities,
  projectInfo,
  currentUser,
} from './data/mockData';

function App() {
  return (
    <div className="flex min-h-screen bg-[#F5F8FA]">
      {/* Sidebar */}
      <Sidebar navItems={navigationItems} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Header */}
        <Header userName={currentUser.name} />

        {/* Content Area */}
        <main className="flex-1 px-6 py-6 overflow-auto">
          {/* Back button and title */}
          <div className="flex items-center gap-2 mb-6">
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#1D3557]" strokeWidth={1.5} />
            </button>
            <h1 
              className="text-[16px] font-bold text-[#1D3557] capitalize leading-[16px]"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              {projectInfo.title}
            </h1>
          </div>

          {/* Rectangle 2999 - Project Info Card */}
          <div 
            className="bg-[#FFFFFF] rounded-[10px] border border-[#E0E8ED] mb-4 relative box-border"
            style={{ 
              width: '1136px', 
              height: '109px',
            }}
          >
            <div className="flex items-start justify-between h-full px-4 py-4">
              <div className="flex flex-col justify-center h-full">
                {/* Category Tag */}
                <span 
                  className="inline-flex items-center justify-center px-[10px] py-[3px] text-[12px] font-medium text-[#8597A8] border border-[#E0E8ED] rounded-[30px] mb-2 capitalize leading-[22px] w-fit"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  {projectInfo.category}
                </span>
                
                {/* Title */}
                <h2 
                  className="text-[16px] font-bold text-[#1D3557] mb-1 capitalize leading-[16px]"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  {projectInfo.title}
                </h2>
                
                {/* Description */}
                <p 
                  className="text-[14px] text-[#8597A8] capitalize leading-[16px]"
                  style={{ fontFamily: 'Cairo, sans-serif', width: '597px' }}
                >
                  {projectInfo.description}
                </p>
              </div>

              {/* Progress Circle - Group 1171274797 */}
              <div className="flex items-center justify-center h-full pr-2">
                <ProgressCircle percentage={projectInfo.progress} />
              </div>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="flex gap-4 mb-4" style={{ width: '1136px' }}>
            <div style={{ width: '272px' }}>
              <StatsCard type="total" value={statsData.totalEvidence} label="Total Evidence" />
            </div>
            <div style={{ width: '270px' }}>
              <StatsCard type="review" value={statsData.underReviewEvidence} label="Under Review Evidence" />
            </div>
            <div style={{ width: '272px' }}>
              <StatsCard type="progress" value={statsData.inProgressEvidence} label="In Progress Evidence" />
            </div>
            <div style={{ width: '272px' }}>
              <StatsCard type="completed" value={statsData.completedEvidence} label="Completed Evidence" />
            </div>
          </div>

          {/* Tabs - Frame 1171275119 */}
          <div 
            className="flex items-center p-[3px] gap-[6px] bg-[rgba(224,232,237,0.5)] rounded-[8px] mb-4"
            style={{ width: '225px', height: '40px' }}
          >
            <button 
              className="flex items-center justify-center rounded-[8px] text-[14px] font-normal text-[#8597A8] capitalize leading-[20px]"
              style={{ fontFamily: 'Cairo, sans-serif', width: '99px', height: '34px', padding: '7px 15px' }}
            >
              Overview
            </button>
            <button 
              className="flex items-center justify-center bg-[#FFFFFF] rounded-[8px] text-[14px] font-normal text-[#1D3557] capitalize leading-[20px]"
              style={{ fontFamily: 'Cairo, sans-serif', width: '114px', height: '34px', padding: '7px 16px' }}
            >
              Evidence
            </button>
          </div>

          {/* Rectangle 3000 - Table Card */}
          <div 
            className="bg-[#FFFFFF] rounded-[10px] border border-[#E0E8ED] mb-4 overflow-hidden pb-4 box-border"
            style={{ width: '1136px', height: '259px' }}
          >
            <DocumentTable documents={documents} />
          </div>

          {/* Bottom Section: Comments and Recent Activities */}
          <div className="flex gap-4" style={{ width: '1136px' }}>
            {/* Rectangle 3005 - Comments */}
            <div style={{ width: '753px', height: '433px' }}>
              <Comments comments={comments} />
            </div>
            {/* Rectangle 1232 - Recent Activities */}
            <div style={{ width: '368px', height: '294px' }}>
              <RecentActivities activities={recentActivities} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
