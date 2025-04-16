import React, { useState, useEffect } from 'react';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowRight, FaBars, FaTimes,
  FaCode, FaFileAlt, FaChartBar, FaLaptopCode, FaMobileAlt, FaPython, FaJava,
  FaReact, FaDatabase, FaFlask, FaChartLine, FaTools, FaLock, FaHtml5, FaCss3Alt,
  FaEnvelope, FaPhoneAlt, FaWhatsapp
} from 'react-icons/fa';
import './Home.css';

// Custom icon components
const CSharpIcon = () => <FaCode className="skill-icon" />;
const NextJsIcon = () => <FaReact className="skill-icon" />;
const RIcon = () => <FaChartBar className="skill-icon" />;
const MatlabIcon = () => <FaChartLine className="skill-icon" />;
const XamarinIcon = () => <FaMobileAlt className="skill-icon" />;
const CppIcon = () => <FaCode className="skill-icon" />;
const JsIcon = () => <FaCode className="skill-icon" />;
const TailwindIcon = () => <FaCss3Alt className="skill-icon" />;
const NodeIcon = () => <FaCode className="skill-icon" />;
const ExpressIcon = () => <FaCode className="skill-icon" />;
const FlutterIcon = () => <FaMobileAlt className="skill-icon" />;
const ExcelIcon = () => <FaChartLine className="skill-icon" />;
const PowerBIIcon = () => <FaChartLine className="skill-icon" />;
const GitIcon = () => <FaGithub className="skill-icon" />;
const FigmaIcon = () => <FaTools className="skill-icon" />;
const TensorFlowIcon = () => <FaLock className="skill-icon" />;
const PyTorchIcon = () => <FaLock className="skill-icon" />;
const MongoIcon = () => <FaDatabase className="skill-icon" />;
const MySqlIcon = () => <FaDatabase className="skill-icon" />;
const PostgresIcon = () => <FaDatabase className="skill-icon" />;

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: false });

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rexwanyeki@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New message from ${data.name}: ${data.subject}`,
          _template: "box"
        })
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: false });
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section className="portfolio-container">
      {/* Navigation Bar */}
      <nav className="navbar">
  <div className="logo">Portfolio</div>
  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <FaTimes /> : <FaBars />}
  </div>
  <div className="nav-content">
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="nav-buttons">
      <a href="https://wa.me/254792615071" target="_blank" rel="noopener noreferrer" className="nav-button whatsapp-button">
        <FaWhatsapp />
      </a>
    </div>
  </div>
  {menuOpen && (
    <div className="close-button" onClick={() => setMenuOpen(false)}>
      <FaTimes />
    </div>
  )}
</nav>

      {/* Wavy Background Animation */}
      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Content Container */}
      <div className="main-content-wrapper">
        {/* Text Content */}
        <div className="content">
          <h1>Hello, my name is</h1>
          <h2>
            <span className="first-name">Rex</span> {' '}
            <span className="middle-name">Maina</span> {' '}
            <span className="last-name">Wanyeki</span>
          </h2>
          <p className="profession">Multilingual Developer</p>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
          
          {/* Download CV Button */}
          <button className="cv-btn">
            DOWNLOAD CV <FaArrowRight className="btn-arrow" />
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src="/pic.jpg" alt="Rex Maina Wanyeki" className="profile-image" />
        </div>
      </div>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {/* Academic Writing */}
          <div className="skill-category">
            <h3><FaFileAlt /> Academic Writing</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <FaFileAlt className="skill-icon" />
                <span>Research Writing</span>
              </div>
              <div className="skill-item">
                <FaFileAlt className="skill-icon" />
                <span>Report Automation</span>
              </div>
              <div className="skill-item">
                <FaFileAlt className="skill-icon" />
                <span>Thesis Formatting</span>
              </div>
              <div className="skill-item">
                <FaFileAlt className="skill-icon" />
                <span>Scientific Publications</span>
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="skill-category">
            <h3><FaCode /> Programming Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <CSharpIcon />
                <span>C#</span>
              </div>
              <div className="skill-item">
                <FaJava className="skill-icon" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <FaPython className="skill-icon" />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <RIcon />
                <span>R</span>
              </div>
              <div className="skill-item">
                <JsIcon />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <CppIcon />
                <span>C++</span>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="skill-category">
            <h3><FaLaptopCode /> Web Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <FaReact className="skill-icon" />
                <span>React.js</span>
              </div>
              <div className="skill-item">
                <NextJsIcon />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <FaHtml5 className="skill-icon" />
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <FaCss3Alt className="skill-icon" />
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <TailwindIcon />
                <span>Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <NodeIcon />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <ExpressIcon />
                <span>Express.js</span>
              </div>
              <div className="skill-item">
                <FaCode className="skill-icon" />
                <span>REST APIs</span>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="skill-category">
            <h3><FaMobileAlt /> Mobile Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <FlutterIcon />
                <span>Flutter</span>
              </div>
              <div className="skill-item">
                <XamarinIcon />
                <span>Xamarin</span>
              </div>
            </div>
          </div>

          {/* Data & Analytics */}
          <div className="skill-category">
            <h3><FaChartBar /> Data & Analytics</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <MatlabIcon />
                <span>MATLAB</span>
              </div>
              <div className="skill-item">
                <FaDatabase className="skill-icon" />
                <span>SPSS</span>
              </div>
              <div className="skill-item">
                <ExcelIcon />
                <span>Excel</span>
              </div>
              <div className="skill-item">
                <PowerBIIcon />
                <span>Power BI</span>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-category">
            <h3><FaTools /> Tools & Platforms</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <GitIcon />
                <span>Git/GitHub</span>
              </div>
              <div className="skill-item">
                <FigmaIcon />
                <span>Figma</span>
              </div>
            </div>
          </div>

          {/* Others */}
          <div className="skill-category">
            <h3><FaLock /> Others</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <TensorFlowIcon />
                <span>TensorFlow</span>
              </div>
              <div className="skill-item">
                <PyTorchIcon />
                <span>PyTorch</span>
              </div>
              <div className="skill-item">
                <FaCode className="skill-icon" />
                <span>CNN</span>
              </div>
              <div className="skill-item">
                <MongoIcon />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <MySqlIcon />
                <span>MySQL</span>
              </div>
              <div className="skill-item">
                <PostgresIcon />
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together or just say hello!</p>
        
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name *" 
                  required 
                  pattern="[A-Za-z ]{2,}" 
                  title="Please enter at least 2 characters"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email *" 
                  required 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject *" 
                  required 
                  minLength="5"
                  title="Please enter at least 5 characters"
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message *" 
                  rows="5" 
                  required
                  minLength="10"
                  title="Please enter at least 10 characters"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={formStatus.submitting}>
                {formStatus.submitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            
            {formStatus.success && (
              <div className="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {formStatus.error && (
              <div className="error-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                <span>Failed to send message. Please try again or contact me directly.</span>
              </div>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p>I'm open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!</p>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:rexwanyeki@gmail.com">rexwanyeki@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+254792615071">+254 792 615 071</a>
                  </div>
                </div>
                  <div className="whatsapp-cta">
                    <div className="whatsapp-content">
                      <FaWhatsapp className="whatsapp-icon" />
                        <div className="whatsapp-text">
                            <h4>Direct WhatsApp Chat</h4>
                            <p>Message me directly for quick responses</p>
                          </div>
                      </div>
                        <a 
                              href="https://wa.me/254792615071" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="whatsapp-button"
                            >
                              Chat Now <FaArrowRight className="button-arrow" />
                        </a>
                      </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;