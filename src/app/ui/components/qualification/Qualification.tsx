'use client';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import {
  Certifications,
  EducationalRecords,
  type ExperienceRecords
} from '../../types/types';
import './qualification.css';

type QualificationProps = {
  experience: ExperienceRecords[];
  education: EducationalRecords[];
  certifications: Certifications[];
};

const Qualification = ({ experience, education, certifications }: QualificationProps) => {
  const [toggleState, setToggleState] = useState(1);
  const [toggleModal, setToggleModal] = useState('0');

  const toggleModalRecords = (index: string) => {
    setToggleModal(index);
  };

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Personal Journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 3
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-award qualification-icon"></i>
            Certifications
          </div>
        </div>

        <div className="qualification-sections">
          <div
            className={
              toggleState === 1
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            {experience.map((record, index) =>
              index % 2 === 0 ? (
                <div key={index} className="qualification-data">
                  <div className="qual-col-content">
                    <h3 className="qualification-title">{record._title}</h3>
                    <span className="qualification-subtitle">
                      {record._companyName}
                    </span>
                    <div className="qualification-more-details">
                      <span
                        className="qualification-more-button"
                        onClick={() => toggleModalRecords(record._id)}
                      >
                        More Details
                        <i className="uil uil-plus-circle qualification-button-icon"></i>
                      </span>
                    </div>
                  </div>

                  <div className="qual-col-line">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div className="qual-col-empty"></div>
                </div>
              ) : (
                <div key={index} className="qualification-data">
                  <div className="qual-col-empty"></div>

                  <div className="qual-col-line">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div className="qual-col-content">
                    <h3 className="qualification-title">{record._title}</h3>
                    <span className="qualification-subtitle">
                      {record._companyName}
                    </span>
                    <div className="qualification-more-details">
                      <span
                        className="qualification-more-button"
                        onClick={() => toggleModalRecords(record._id)}
                      >
                        More Details
                        <i className="uil uil-plus-circle qualification-button-icon"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            {education.map((record, index) =>
              index % 2 === 0 ? (
                <div key={index} className="qualification-data">
                  <div className="qual-col-empty"></div>

                  <div className="qual-col-line">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div className="qual-col-content">
                    <h3 className="qualification-title">{record._degree}</h3>
                    <span className="qualification-subtitle">
                      {record._institutionName}
                    </span>
                    <div className="qualification-more-details">
                      <span
                        className="qualification-more-button"
                        onClick={() => toggleModalRecords(record._id)}
                      >
                        More Details
                        <i className="uil uil-plus-circle qualification-button-icon"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className="qualification-data">
                  <div className="qual-col-content">
                    <h3 className="qualification-title">{record._degree}</h3>
                    <span className="qualification-subtitle">
                      {record._institutionName}
                    </span>
                    <div className="qualification-more-details">
                      <span
                        className="qualification-more-button"
                        onClick={() => toggleModalRecords(record._id)}
                      >
                        More Details
                        <i className="uil uil-plus-circle qualification-button-icon"></i>
                      </span>
                    </div>
                  </div>

                  <div className="qual-col-line">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div className="qual-col-empty"></div>
                </div>
              ),
            )}
          </div>

          <div
            className={
              toggleState === 3
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            {certifications.map((certification, index) =>
              index % 2 === 0 ? (
                <div key={index} className="qualification-data">
                  <div className="qual-col-content">
                    <h3 className="qualification-title">
                      {certification._name}
                    </h3>
                    <span className="qualification-subtitle">
                      {certification._institution}
                    </span>
                    <div className="qualification-more-details">
                      <span
                        className="qualification-more-button"
                        onClick={() => toggleModalRecords(certification._id)}
                      >
                        More Details
                        <i className="uil uil-plus-circle qualification-button-icon"></i>
                      </span>
                    </div>
                  </div>

                  <div className="qual-col-line">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div className="qual-col-empty"></div>
                </div>
              ) : (
                <div key={index} className="qualification-data">
                  <div className="qual-col-empty"></div>

                  <div className="qual-col-line">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div className="qual-col-content">
                    <h3 className="qualification-title">
                      {certification._name}
                    </h3>
                    <span className="qualification-subtitle">
                      {certification._institution}
                    </span>
                    <div className="qualification-more-details">
                      <span
                        className="qualification-more-button"
                        onClick={() => toggleModalRecords(certification._id)}
                      >
                        More Details
                        <i className="uil uil-plus-circle qualification-button-icon"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      {experience.map((record) => (
        <div
          key={record._id}
          className={
            toggleModal === record._id
              ? 'qualification-modal active-modal'
              : 'qualification-modal'
          }
          onClick={() => toggleModalRecords('0')}
        >
          <div className="qualification-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <i
              onClick={() => toggleModalRecords('0')}
              className="uil uil-times qualification-modal-close"
            ></i>

            <h3 className="qualification-modal-title">{record._title}</h3>
            <div
              className="qualification-modal-services grid"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(record._description),
              }}
            ></div>
            <br />
            <ul className="qualification-modal-services grid">
              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-calendar-alt qualification-modal-extra-icon"></i>
                  Duration
                </h3>
                <p className="qualification-modal-info">
                  {new Date(record._startDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                  {' - '}
                  {new Date(
                    new Date(record._endDate).getFullYear() === 2000
                      ? Date.now()
                      : record._endDate,
                  ).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              </li>

              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-lightbulb-alt qualification-modal-extra-icon"></i>
                  Skills
                </h3>
                <p className="qualification-modal-info">
                  {record._skills
                    .sort((a, b) => a._name.localeCompare(b._name))
                    .map((skill) => skill._name)
                    .join(', ')}
                </p>
              </li>

              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-map-marker qualification-modal-extra-icon"></i>
                  Location
                </h3>
                <p className="qualification-modal-info">{record._location}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
      {education.map((record) => (
        <div
          key={record._id}
          className={
            toggleModal === record._id
              ? 'qualification-modal active-modal'
              : 'qualification-modal'
          }
          onClick={() => toggleModalRecords('0')}
        >
          <div className="qualification-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <i
              onClick={() => toggleModalRecords('0')}
              className="uil uil-times qualification-modal-close"
            ></i>

            <h3 className="qualification-modal-title">{record._degree}</h3>
            <div
              className="qualification-modal-services grid"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(record._description),
              }}
            ></div>
            <br />
            <ul className="qualification-modal-services grid">
              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-calendar-alt qualification-modal-extra-icon"></i>
                  Duration
                </h3>
                <p className="qualification-modal-info">
                  {new Date(record._startDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                  {' - '}
                  {new Date(record._endDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              </li>

              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-lightbulb-alt qualification-modal-extra-icon"></i>
                  Skills
                </h3>
                <p className="qualification-modal-info">
                  {record._skills
                    .sort((a, b) => a._name.localeCompare(b._name))
                    .map((skill) => skill._name)
                    .join(', ')}
                </p>
              </li>

              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-map-marker qualification-modal-extra-icon"></i>
                  Location
                </h3>
                <p className="qualification-modal-info">{record._location}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
      {certifications.map((certification) => (
        <div
          key={certification._id}
          className={
            toggleModal === certification._id
              ? 'qualification-modal active-modal'
              : 'qualification-modal'
          }
          onClick={() => toggleModalRecords('0')}
        >
          <div className="qualification-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <i
              onClick={() => toggleModalRecords('0')}
              className="uil uil-times qualification-modal-close"
            ></i>

            <h3 className="qualification-modal-title">{certification._name}</h3>
            <ul className="qualification-modal-services grid">
              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-file-check qualification-modal-extra-icon"></i>
                  Credential ID
                </h3>
                <p className="qualification-modal-info">
                  {certification._credentialID}
                </p>
              </li>
              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-calendar-alt qualification-modal-extra-icon"></i>
                  Issued
                </h3>
                <p className="qualification-modal-info">
                  {new Date(certification._date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              </li>

              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-lightbulb-alt qualification-modal-extra-icon"></i>
                  Skills
                </h3>
                <p className="qualification-modal-info">
                  {certification._skills
                    .sort((a, b) => a._name.localeCompare(b._name))
                    .map((skill) => skill._name)
                    .join(', ')}
                </p>
              </li>

              <li className="qualification-modal-project">
                <h3 className="qualification-modal-subtitle">
                  <i className="uil uil-globe qualification-modal-extra-icon"></i>
                  URL
                </h3>
                <p className="qualification-modal-info">
                  <a
                    href={certification._url}
                    className="qualification-more-button"
                    target="_blank"
                    style={{ textDecoration: 'underline' }}
                  >
                    {certification._name}
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Qualification;
