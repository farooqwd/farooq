import { ArrowUpDown } from 'lucide-react';
import type { Document } from '../data/mockData';

interface DocumentTableProps {
  documents: Document[];
}

function SortIcon() {
  return (
    <ArrowUpDown className="w-3 h-3 text-[#8597A8] ml-2 flex-shrink-0" strokeWidth={1.5} />
  );
}

export default function DocumentTable({ documents }: DocumentTableProps) {
  const getStatusStyle = (status: Document['status']) => {
    switch (status) {
      case 'Approved':
        return {
          bg: 'bg-[rgba(52,199,89,0.1)]',
          text: 'text-[#34C759]',
        };
      case 'Pending Review':
        return {
          bg: 'bg-[rgba(255,204,0,0.1)]',
          text: 'text-[#FFCC00]',
        };
      case 'In Progress':
        return {
          bg: 'bg-[rgba(29,53,87,0.1)]',
          text: 'text-[#1D3557]',
        };
      case 'Draft':
        return {
          bg: 'bg-[rgba(133,151,168,0.1)]',
          text: 'text-[#8597A8]',
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-500',
        };
    }
  };

  return (
    <div className="overflow-x-auto">
      {/* Table Header */}
      <div className="bg-[#F5F8FB] rounded-[10px] mx-4 mt-3 mb-2 px-4 h-[40px] flex items-center">
        <div className="flex w-full items-center">
          <div className="w-[100px] flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Document number
            </span>
            <SortIcon />
          </div>
          <div className="w-[180px] flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Document Name
            </span>
            <SortIcon />
          </div>
          <div className="w-[120px] flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Document Lead
            </span>
            <SortIcon />
          </div>
          <div className="w-[140px] flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Document Preparer
            </span>
            <SortIcon />
          </div>
          <div className="w-[90px] flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Date
            </span>
            <SortIcon />
          </div>
          <div className="w-[90px] flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Due Date
            </span>
            <SortIcon />
          </div>
          <div className="flex-1 flex items-center cursor-pointer">
            <span className="text-[12px] font-normal text-[#1D3557] capitalize tracking-[0.02em] leading-[22px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              Status
            </span>
            <SortIcon />
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="px-4">
        {documents.map((doc, index) => (
          <div 
            key={index} 
            className={`flex w-full items-center py-4 ${
              index < documents.length - 1 ? 'border-b border-[#E0E8ED]' : ''
            }`}
          >
            <div className="w-[100px] text-[14px] text-[#1D3557] capitalize leading-[20px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {doc.documentNumber}
            </div>
            <div className="w-[180px] text-[14px] text-[#1D3557] capitalize leading-[20px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {doc.documentName}
            </div>
            <div className="w-[120px] text-[14px] text-[#1D3557] capitalize leading-[20px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {doc.documentLead}
            </div>
            <div className="w-[140px] text-[14px] text-[#1D3557] capitalize leading-[20px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {doc.documentPreparer}
            </div>
            <div className="w-[90px] text-[14px] text-[#1D3557] capitalize leading-[20px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {doc.date}
            </div>
            <div className="w-[90px] text-[14px] text-[#1D3557] capitalize leading-[20px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {doc.dueDate}
            </div>
            <div className="flex-1">
              <span 
                className={`inline-flex items-center justify-center px-[10px] py-[5px] rounded-[30px] text-[14px] font-normal capitalize leading-[20px] ${getStatusStyle(doc.status).bg} ${getStatusStyle(doc.status).text}`}
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {doc.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
