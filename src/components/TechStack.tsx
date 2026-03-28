import "./styles/TechStack.css";

const TechStack = () => {
  const skills = {
    "Cloud Platforms": ["AWS", "Microsoft Azure", "AWS CloudFormation"],
    "Container & Orchestration": ["Docker", "Kubernetes", "Helm", "Vagrant"],
    "CI/CD & Automation": ["Jenkins", "GitHub Actions", "Terraform", "Ansible"],
    "Programming": ["Python", "Bash", "YAML"],
    "Monitoring & Logging": ["AWS CloudWatch", "Azure Monitor"],
    "Other Tools": ["Git", "GitHub", "Linux (Ubuntu, CentOS)", "Windows"],
  };

  return (
    <div className="techstack-container">
      <h2>My Techstack</h2>
      <div className="techstack-grid">
        {Object.entries(skills).map(([category, technologies]) => (
          <div key={category} className="tech-category">
            <h3>{category}</h3>
            <div className="tech-items">
              {technologies.map((tech) => (
                <div key={tech} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
