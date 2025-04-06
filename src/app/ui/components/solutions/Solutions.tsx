'use client';
import { useState } from 'react';
import './solutions.css';

const Solutions = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">All the Solutions I offer</span>

      <div className="services-container container grid">
        {/* Software Development */}
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">Software Development</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Software Development</h3>
              <p className="services-modal-description">
                Over 1 year of experience building full-stack, scalable, and AI-integrated systems across enterprise and portfolio-grade projects.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Built GPT‑4–powered interfaces with Azure AI, React, and Node.js.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Developed scalable APIs using Spring Boot, Node.js, and .NET.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Created responsive UIs with React, Angular, and Next.js.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Integrated databases, AI pipelines, and secure backend logic.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Coordination */}
        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">Project Coordination</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Project Coordination</h3>
              <p className="services-modal-description">
                Proven leadership in Agile teams, enhancing collaboration and delivery velocity through structured workflows and mentorship.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Coordinated Agile projects with Scrum ceremonies in Jira.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Led pull requests, reviews, and enforced code standards.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Mentored developers and authored onboarding documentation.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Facilitated knowledge sharing and engineering collaboration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consulting Services */}
        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services-title">Consulting Services</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Consulting Services</h3>
              <p className="services-modal-description">
                Guidance on architecture, optimization, and developer enablement across full-stack platforms.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Specialized advice on Java, Spring Boot, React, and Node.js.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Benchmarked models like Claude 3.5 via Azure/AWS Bedrock.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Helped teams scale systems and refine developer workflows.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cloud Architecture & Deployment */}
        <div className="services-content">
          <div>
            <i className="uil uil-cloud-check services-icon"></i>
            <h3 className="services-title">Cloud Architecture</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Cloud Architecture & Deployment</h3>
              <p className="services-modal-description">
                Architecting scalable cloud infrastructure with security, performance, and cost-efficiency in mind.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Trained in AWS architecture and cloud-native deployments.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Deployed projects using Docker, Firebase, and CI/CD workflows.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Managed Dev/QA/Prod environments with secure multi-tenant access.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
