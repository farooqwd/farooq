import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, ActivityItem } from '../../components/UI'
import './Perspectives.css'

function Perspectives() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'evidence', label: 'Evidence' },
  ]

  const evidenceStats = [
    { value: 4, label: 'Total Evidence', icon: 'fa-file-alt', color: 'blue' },
    { value: 3, label: 'Under Review Evidence', icon: 'fa-search', color: 'orange' },
    { value: 2, label: 'In Progress Evidence', icon: 'fa-clock', color: 'yellow' },
    { value: 1, label: 'Completed Evidence', icon: 'fa-check-circle', color: 'green' },
  ]

  const documents = [
    { number: '5.4.1.1', name: 'Digital_Transformation_Plan.Pdf', lead: 'Ahmed Khaled', preparer: 'Ahmed Khaled', date: '2025-08-01', dueDate: '2025-08-01', status: 'approved' },
    { number: '5.4.1.2', name: 'KPI_Framework.Xlsx', lead: 'Mona Hamed', preparer: 'Mona Hamed', date: '2025-08-01', dueDate: '2025-08-01', status: 'pending' },
    { number: '5.4.1.3', name: 'Roadmap_Version1.Docx', lead: 'Rami AlSharif', preparer: 'Rami AlSharif', date: '2025-08-01', dueDate: '2025-08-01', status: 'pending' },
  ]

  const comments = [
    { initial: 'E', author: 'Sara Ibrahim', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
    { initial: 'M', author: 'Mona Hamed', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
  ]

  const activities = [
    { text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif', time: '5 Mins Ago' },
    { text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed', time: '20 Mins Ago' },
    { text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team', time: '1 Hour Ago' },
  ]

  const overviewData = [
    { label: 'Objective', value: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.' },
    { 
      label: 'Implementation Requirements', 
      value: [
        'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
        'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
        'B. Strategic Initiatives, Programs, And Performance Indicators.',
        'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
        'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.'
      ]
    },
    { label: 'Evidence Documents', value: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.' },
    { label: 'Related Regulations', value: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).' },
    { label: 'Scope', value: 'All Government Entities.' },
  ]

  const leaders = [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  ]

  return (
    <div className="perspectives">
      {/* Page Header */}
      <div className="page-header">
        <Link to="/dashboard" className="back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Digital Transformation Strategic Planning</span>
        </Link>
      </div>

      {/* Info Card */}
      <div className="info-card card">
        <div className="info-card-content">
          <span className="category-badge">Strategy & Planning</span>
          <h1 className="info-title">Digital Transformation Strategic Planning</h1>
          <p className="info-description">Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals</p>
        </div>
        <div className="progress-ring">
          <svg viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="35" fill="none" stroke="#e8e8e8" strokeWidth="6"/>
            <circle cx="40" cy="40" r="35" fill="none" stroke="#22c55e" strokeWidth="6" 
              strokeDasharray="220 220" strokeDashoffset="0" transform="rotate(-90 40 40)"/>
          </svg>
          <div className="progress-ring-value">100%</div>
        </div>
      </div>

      {/* Evidence Stats */}
      <div className="evidence-stats">
        {evidenceStats.map((stat, index) => (
          <div key={index} className="evidence-stat-card">
            <div className={`evidence-stat-icon ${stat.color}`}>
              <i className={`fas ${stat.icon}`}></i>
            </div>
            <div className="evidence-stat-info">
              <div className="evidence-stat-value">{stat.value}</div>
              <div className="evidence-stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="tab-content">
          {/* Overview Table */}
          <div className="overview-card card">
            <div className="overview-table">
              {overviewData.map((row, index) => (
                <div key={index} className="overview-row">
                  <div className="overview-label">{row.label}</div>
                  <div className="overview-value">
                    {Array.isArray(row.value) ? (
                      row.value.map((text, i) => <p key={i}>{text}</p>)
                    ) : (
                      row.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaders Section */}
          <div className="leaders-section card">
            <h3>Leaders</h3>
            <div className="leaders-cards">
              {leaders.map((leader, index) => (
                <div key={index} className="leader-card">
                  <img src={leader.image} alt={leader.name} />
                  <div className="leader-card-info">
                    <div className="leader-card-name">{leader.name}</div>
                    <div className="leader-card-role">{leader.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'evidence' && (
        <div className="tab-content">
          {/* Data Table */}
          <div className="data-table-container card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Document Number <i className="fas fa-sort"></i></th>
                  <th>Document Name <i className="fas fa-sort"></i></th>
                  <th>Document Lead <i className="fas fa-sort"></i></th>
                  <th>Document Preparer <i className="fas fa-sort"></i></th>
                  <th>Date <i className="fas fa-sort"></i></th>
                  <th>Due Date <i className="fas fa-sort"></i></th>
                  <th>Status <i className="fas fa-sort"></i></th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index}>
                    <td data-label="Doc Number">{doc.number}</td>
                    <td data-label="Document" className="doc-name">{doc.name}</td>
                    <td data-label="Lead">{doc.lead}</td>
                    <td data-label="Preparer">{doc.preparer}</td>
                    <td data-label="Date">{doc.date}</td>
                    <td data-label="Due Date">{doc.dueDate}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${doc.status}`}>
                        {doc.status === 'approved' ? 'Approved' : 'Pending Review'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Grid */}
          <div className="bottom-grid">
            {/* Comments Section */}
            <div className="comments-section card">
              <h3>Comments</h3>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <div className="comment-avatar">{comment.initial}</div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-author">{comment.author}</span>
                        <span className="comment-date">{comment.date}</span>
                      </div>
                      <p className="comment-text">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="comment-input-container">
                <textarea className="comment-input" placeholder="Write a comment..."></textarea>
              </div>
              <button className="post-comment-btn">
                <i className="fas fa-paper-plane"></i>
                Post Comment
              </button>
            </div>

            {/* Recent Activities */}
            <div className="recent-activities-section card">
              <h3>Recent Activities</h3>
              <div className="activities-list">
                {activities.map((activity, index) => (
                  <ActivityItem 
                    key={index} 
                    text={activity.text} 
                    time={activity.time} 
                    dotColor="red"
                    isLink={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Perspectives
