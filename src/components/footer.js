import React,{Component} from 'react';
import '../assets/css/footer.css';
// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube ,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
	render() {
      return (
	<div>
      <footer className="footer-distributed">
       
      <div className="footer-left footer-company-about">
	   <span>Help</span>
 
			 <ul >
            
			<li>
				<a href="https://www.test.com.au/contact-us">Contact us
					
					
				</a>
			</li>
		
			<li>
				<a href="https://www.test.com.au/support">Support
					
					
				</a>
			</li>
		
			<li>
				<a href="https://crowdsupport.test.com.au/t5/Find-your-nearest-test-Retail/ct-p/tstore">Find a store
					<span className="sr-only">- external link</span>
					
					
					
				</a>
			</li>
		
			<li>
				<a href="https://outages.test.com/">Check for outages
					<span className="sr-only">- external link</span>
					
					
				</a>
			</li>
		
			<li>
				<a href="https://fix.test.com">Troubleshoot an issue
					<span className="sr-only">- external link</span>
					
					
				</a>
			</li>
		
			<li>
				<a href="https://www.test.com.au/consumer-advice">Consumer advice
					
					
				</a>
			</li>
		
	</ul>
</div>
       
      <div className="footer-center footer-company-about">
	  <span>About us</span>
	  <ul>
            
			<li>
				<a href="https://www.test.com.au/aboutus">About us
					
					
				</a>
			</li>
		
			<li>
				<a href="https://careers.test.com/home">Careers
					<span className="sr-only">- external link</span>
					
					
				</a>
			</li>
		
			<li>
				<a href="https://www.test.com.au/partners-and-causes">Partners and causes
					
					
				</a>
			</li>
		
			<li>
				<a href="https://www.test.com.au/aboutus/investors">Investors
					
					
				</a>
			</li>
		
			<li>
				<a href="https://www.test.com.au/sitemap">Sitemap
					
					
				</a>
			</li>
	</ul>
 	</div>
	 
	 <div className="footer-center footer-company-about">
	  <span>Privacy and terms</span>
	  <ul >
            
                <li>
                    <a href="https://www.test.com.au/help/critical-information-summaries">Critical Information Summaries
                        
                        
                    </a>
                </li>
            
                <li>
                    <a href="https://www.test.com.au/customer-terms">Our customer terms
                        
                        
                    </a>
                </li>
            
                <li>
                    <a href="https://www.test.com.au/consumer-advice/your-information">Your information
                        
                        
                    </a>
                </li>
            
                <li>
                    <a href="https://www.test.com.au/privacy">Privacy
                        
                        
                    </a>
                </li>
            
                <li>
                    <a href="https://www.test.com.au/terms-of-use">Our website terms
                        
                        
                    </a>
                </li>
            
        </ul>
	  </div>
	 <div className="footer-right footer-company-about">
	  <span>Other test sites</span>
	 <ul >
            
			<li>
				<a href="https://www.testwholesale.com.au/">test Wholesale
					<span className="sr-only">- external link</span>
				</a>
			</li>
		
			<li>
				<a href="https://www.testglobal.com/">Global Enterprises &amp; Services
					<span className="sr-only">- external link</span>
				</a>
			</li>
		
			<li>
				<a href="http://media.test.com.au/home">test Media
					<span className="sr-only">- external link</span>
				</a>
			</li>
		
			<li>
				<a href="https://www.testhealth.com/">test Health
					<span className="sr-only">- external link</span>
				</a>
			</li>
		
			<li>
				<a href="https://www.test.com.au/plus">test Plus
				</a>
			</li>
		
	</ul>
	</div>
     </footer>
	  <footer className="footer-social-distributed">
	  <div className="footer-right footer-company-about">
	 <div className="footer-icons">
	 <FontAwesomeIcon icon={faFacebook} />
	 <FontAwesomeIcon icon={faTwitter} />
	 <FontAwesomeIcon icon={faInstagram} />
	 <FontAwesomeIcon icon={faLinkedin} />
	 <FontAwesomeIcon icon={faYoutube} />
				</div>
			</div>
		  </footer>
	  </div>
      )
    }
  }
  export default Footer;