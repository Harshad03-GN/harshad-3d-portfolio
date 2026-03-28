import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Engineer I</h4>
                <h5>MRI Software</h5>
              </div>
              <h3>Actively Working</h3>
            </div>
            <p>
              Currently working as a Quality Engineer, ensuring software quality and reliability. Leveraging expertise in cloud infrastructure, DevOps practices, and testing methodologies to deliver high-quality solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>Sahyadri College</h5>
              </div>
              <h3>Dec 2021 TO Jan 2025</h3>
            </div>
            <p>
              Bachelor of Engineering in Computer Science with CGPA: 7.8. Strong foundation in cloud computing, DevOps principles, and modern software engineering practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
