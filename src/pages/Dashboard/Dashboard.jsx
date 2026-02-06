import { StatCard, ProgressColumn, ActivityItem, LeaderItem } from '../../components/UI'
import { progressData } from '../../data/progressData'
import './Dashboard.css'

function Dashboard() {
  const stats = [
    { value: '78.65%', label: 'Overall Progress', icon: 'fa-gift', iconColor: 'red' },
    { value: '95', label: 'Total Criteria', icon: 'fa-clipboard-list', iconColor: 'blue' },
    { value: '52', label: 'Completed Criteria', icon: 'fa-check-square', iconColor: 'orange' },
    { value: '386', label: 'Evidence Documents', icon: 'fa-cloud-upload-alt', iconColor: 'teal' },
    { value: '302', label: 'Evidence (Completed)', icon: 'fa-check-circle', iconColor: 'green' },
    { value: '258', label: 'Uploaded To DGA', icon: 'fa-upload', iconColor: 'purple' },
  ]

  const leaders = [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: '96%', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', score: '94%', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Mohammad Al-Mansour', role: 'IT Perspective', score: '92%', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  ]

  const activities = [
    { text: 'Document "Strategy _Review.Pdf" Was Uploaded By Ahmed Khaled', time: '5 Mins Ago', dotColor: 'blue' },
    { text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', time: '20 Mins Ago', dotColor: 'yellow' },
    { text: 'New Criterion "5.3 Digital Identity" Was Created By Admin', time: '1 Hour Ago', dotColor: 'red' },
  ]

  const timelinePoints = [
    { date: 'Mar 17', label: 'Kickoff Workshop', completed: true },
    { date: 'March 18', label: 'Data Collection', completed: true },
    { date: 'May 8', label: 'Initial Phase', completed: false },
    { date: 'May 9-July 12', label: 'Verification', completed: false },
    { date: 'July 13', label: 'Completion Reviews', completed: false },
    { date: 'August 21', label: 'Cycle Conclusion', completed: false },
  ]

  const barData = [
    { month: 'Jan', height: 75, color: 'blue' },
    { month: 'Feb', height: 85, color: 'blue' },
    { month: 'Mar', height: 50, color: 'green' },
    { month: 'Apr', height: 78, color: 'blue' },
    { month: 'May', height: 25, color: 'red' },
    { month: 'Jun', height: 60, color: 'blue' },
    { month: 'Jul', height: 68, color: 'blue' },
    { month: 'Aug', height: 55, color: 'blue' },
    { month: 'Sept', height: 48, color: 'green' },
    { month: 'Oct', height: 82, color: 'blue' },
    { month: 'Nov', height: 45, color: 'green' },
    { month: 'Dec', height: 72, color: 'blue' },
  ]

  return (
    <div className="dashboard">
      {/* Project Timeline */}
      <section className="project-timeline card">
        <div className="section-header">
          <h2>Project Timeline</h2>
          <select className="year-select">
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>
        <div className="timeline">
          <div className="timeline-track">
            <div className="timeline-progress" style={{ width: '25%' }}></div>
          </div>
          <div className="timeline-points">
            {timelinePoints.map((point, index) => (
              <div key={index} className={`timeline-point ${point.completed ? 'completed' : 'upcoming'}`}>
                <div className="point-dot"></div>
                <div className="point-date">{point.date}</div>
                <div className="point-label">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats-row">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* Progress Status */}
      <section className="progress-status card">
        <div className="section-header">
          <h2>Progress Status</h2>
          <div className="status-legend">
            <span className="legend-item"><span className="dot gray"></span> Not Started</span>
            <span className="legend-item"><span className="dot yellow"></span> In Progress</span>
            <span className="legend-item"><span className="dot green"></span> Completed</span>
            <span className="legend-item"><span className="dot orange"></span> Partially Uploaded</span>
            <span className="legend-item"><span className="dot blue"></span> Fully Uploaded</span>
            <span className="legend-item"><span className="dot red"></span> Delayed</span>
          </div>
        </div>
        <div className="progress-grid">
          {progressData.map((column, index) => (
            <ProgressColumn key={index} {...column} />
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bottom-section">
        {/* Compliance Score */}
        <div className="compliance-card card">
          <h3>Overall Compliance Score</h3>
          <div className="donut-chart">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="45" fill="none" stroke="#e8e8e8" strokeWidth="14"/>
              <circle cx="60" cy="60" r="45" fill="none" stroke="#e63946" strokeWidth="14" 
                strokeDasharray="99 283" strokeDashoffset="70" transform="rotate(0 60 60)"/>
              <circle cx="60" cy="60" r="45" fill="none" stroke="#2d9a59" strokeWidth="14" 
                strokeDasharray="184 283" strokeDashoffset="70" transform="rotate(126 60 60)"/>
            </svg>
            <div className="donut-center">
              <span className="donut-value">65%</span>
            </div>
          </div>
          <div className="donut-label">Basic Standards 2025</div>
        </div>

        {/* Top Leaders */}
        <div className="leaders-card card">
          <h3>Top Performing Perspective Leaders</h3>
          <div className="leaders-list">
            {leaders.map((leader, index) => (
              <LeaderItem key={index} {...leader} />
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="activities-card card">
          <h3>Recent Activities</h3>
          <div className="activities-list">
            {activities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts-section">
        {/* Bar Chart */}
        <div className="performance-card card">
          <h3>12-Month Performance</h3>
          <div className="bar-chart">
            <div className="chart-y-axis">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>
            <div className="chart-bars">
              {barData.map((bar, index) => (
                <div key={index} className="bar-group">
                  <div className={`bar ${bar.color}`} style={{ height: `${bar.height}%` }}></div>
                  <span className="bar-label">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Readiness */}
        <div className="audit-card card">
          <h3>Audit Readiness</h3>
          <div className="audit-content">
            <div className="gauge-chart">
              <svg viewBox="0 0 200 120">
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e8e8e8" strokeWidth="16" strokeLinecap="round"/>
                <path d="M 20 100 A 80 80 0 0 1 172 60" fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round"/>
              </svg>
              <div className="gauge-center">
                <span className="gauge-value">80<span className="gauge-percent">%</span></span>
                <span className="gauge-label">Readiness Level</span>
              </div>
            </div>
            <div className="audit-stats">
              <div className="audit-stat">
                <div className="audit-stat-value">12</div>
                <div className="audit-stat-label">Overdue Stds</div>
              </div>
              <div className="audit-stat">
                <div className="audit-stat-value">5</div>
                <div className="audit-stat-label">Missing Evidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
