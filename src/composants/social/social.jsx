import { faLinkedin, faGithub, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/styles/StyleContenu.css';

const SocialLinks = () => {
    return (
        <div className="hidden lg:flex fixed left-6 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-6 z-20 social-links-container">
            <div className="social-bar"></div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className="social-icon" />
            </a>
            <div className="social-bar"></div>
        </div>
    );
};

export default SocialLinks;

