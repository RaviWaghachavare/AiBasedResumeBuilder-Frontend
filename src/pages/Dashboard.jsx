
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="brand">ResumeAI</h2>

        <nav>
          <button className="nav-item active">
            Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/resumes")}
          >
            My Resumes
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/resume/new")}
          >
            Create Resume
          </button>
        </nav>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your AI Resume Builder</p>
          </div>

          <button
            className="profile-button"
            onClick={() => setShowMenu(!showMenu)}
          >
            My Account ▾
          </button>

          {showMenu && (
            <div className="profile-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </header>

        <section className="welcome-card">
          <div>
            <span className="eyebrow">YOUR CAREER STARTS HERE</span>
            <h2>Build a resume that opens doors.</h2>
            <p>
              Create, manage and improve your professional resume
              in one place.
            </p>

            <button
              className="primary-button"
              onClick={() => navigate("/resume/new")}
            >
              + Create New Resume
            </button>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>Total Resumes</span>
            <h2>0</h2>
            <p>Your saved resumes</p>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <h2>0</h2>
            <p>Ready-to-use resumes</p>
          </div>

          <div className="stat-card">
            <span>AI Tools</span>
            <h2>Coming soon</h2>
            <p>Improve your resume with AI</p>
          </div>
        </section>

        <section className="recent-section">
          <div>
            <h2>Recent Resumes</h2>
            <p>Your latest resume documents will appear here.</p>
          </div>

          <div className="empty-state">
            <div className="document-icon">📄</div>
            <h3>No resumes yet</h3>
            <p>Create your first resume here to get started.</p>

            <button
              className="secondary-button"
              onClick={() => navigate("/resume/new")}
            >
              Create your first resume
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
