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
                Skilled in full-stack development across a range of modern
                technologies. Delivered reliable, and scalable
                applications for both internal tools and customer-facing
                platforms.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Developed scalable RESTful APIs using Spring Boot, Node.js,
                    and .NET.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Built interactive frontends using React, Angular, and
                    Next.js to enhance user experience.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Managed PostgreSQL and MSSQL databases.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Delivered production-grade applications through CI/CD
                    pipelines and Agile collaboration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Integration */}
        <div className="services-content">
          <div>
            <i className="uil uil-robot services-icon"></i>
            <h3 className="services-title">AI Integration</h3>
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

              <h3 className="services-modal-title">AI Integration</h3>
              <p className="services-modal-description">
                Leveraging the power of modern AI platforms to build intelligent
                applications that enhance productivity and user experience.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Integrated GPT-4 and Claude for AI-driven summaries and chat
                    interfaces.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Built multi-provider AI support using Azure AI Services and
                    AWS Bedrock.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Engineered token chunking mechanisms to handle large
                    payloads for AI workloads.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Created scalable AI pipelines integrated with secure backend
                    systems and databases.
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

              <h3 className="services-modal-title">
                Cloud Architecture & Deployment
              </h3>
              <p className="services-modal-description">
                Architecting scalable cloud infrastructure with security,
                performance, and cost-efficiency in mind.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Certified in AWS architecture and cloud-native deployments.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Deployed projects using Docker, Firebase, and CI/CD
                    workflows.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Managed Dev/QA/Prod environments with secure multi-tenant
                    access.
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
