import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
    <footer className="bg-gray-100 py-16 text-gray-800">
        <div className="container-fluid">
            <div className="text-center">
                <div className="flex gap-4 mb-6 justify-center">
                    <a href="https://twitter.com/philalithes" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/philiplamb" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/alex-philalithes-gallego-2a9343b6/" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <p className="mb-0">&copy; Alex Philalithes { new Date().getFullYear() }</p>
            </div>
        </div>
    </footer>
)

export default Footer