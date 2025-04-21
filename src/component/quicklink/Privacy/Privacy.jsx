import React from 'react';
import './Privacy.css';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="privacy-policy-container">
      <h1 className='underline text-black font-medium'>Privacy Policy</h1>
      <p className='font-normal'>Last Updated: April 3, 2025</p>
      
      <p className='font-normal'>Welcome to Sole Vague. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>
      
      <h2 className='underline font-medium'>1. Information We Collect</h2>
      <ul>
        <li className='font-normal'> Personal Information :  When you register, place an order, or contact us, we may collect your name, email, phone number, and shipping address.</li>
        <li className='font-normal'>Payment Information: We do not store payment details. All transactions are securely processed through third-party payment providers.</li>
        <li className='font-normal'> Browsing Information: We collect data such as IP address, browser type, and pages visited to improve user experience.</li>
      </ul>
      
      <h2 className='underline font-medium'>2. How We Use Your Information</h2>
      <ul>
        <li className='font-normal'>To process and fulfill orders.</li>
        <li className='font-normal'>To improve our website and customer service.</li>
        <li className='font-normal'>To send promotional emails (if you opt-in).</li>
        <li className='font-normal'>To prevent fraud and secure transactions.</li>
      </ul>
      
      <h2 className='underline font-medium'>3. How We Protect Your Information</h2>
      <p className='font-normal'>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
      
      <h2 className='underline font-medium'>4. Sharing Your Information</h2>
      <p className='font-normal'>We do not sell or rent your personal data. However, we may share it with:</p>
      <ul>
        <li className='font-normal'>Trusted third-party service providers (e.g., payment processors, shipping partners).</li>
        <li className='font-normal'>Law enforcement if required by law.</li>
      </ul>
      
      <h2 className='underline font-medium'>5. Your Choices</h2>
      <p className='font-normal'> You can opt-out of marketing emails and request the deletion of your account and data at any time.</p>
      
      <h2 className='underline font-medium'>6. Cookies</h2>
      <p className='font-normal'>We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.</p>
      
      <h2 className='underline font-medium'>7. Changes to This Policy</h2>
      <p className='font-normal'>We may update this Privacy Policy periodically. Continued use of the site implies acceptance of any changes.</p>
      
      <h2 className='underline font-medium'>8. Contact Us</h2>
      <p className='font-normal'>If you have any questions about this Privacy Policy, contact us at:</p>
      <p className='font-normal'>Email: support@solevague.com</p>
      <p className='font-normal'> Address: Kathmandu,Nepal</p>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
