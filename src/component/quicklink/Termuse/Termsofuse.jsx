import React from 'react';
import './Termsofuse.css';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';

const TermsOfUse = () => {
  return (
    <>
    <Header/>
    <div className="terms-container">
      <h1 className='font-medium text-2xl mb-3'>Sole Vague Terms of Use</h1>
      <p className="updated-date text-black font-med">Last Updated: April 3, 2025</p>

      <p className='text-black font-normal'>
        Welcome to Sole Vague. These Terms of Use ("Terms") govern your access to and use of our website, products, and services (collectively, the "Site"). 
        By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Site.
      </p>

      <h2 className='font-medium'>1. Acceptance of Terms</h2>
      <p className='text-black font-normal'>
        By using the Site, you confirm that you have read, understood, and agree to these Terms, including any modifications that may be made from time to time.
        Your continued use of the Site signifies your acceptance of any updated Terms.
      </p>

      <h2 className='font-medium'> 2. Modifications to the Terms</h2>
      <p className='text-black font-normal'>
        Sole Vague reserves the right to change, modify, or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Site.
      </p>

      <h2 className='font-medium'>3. Use of the Site</h2>
      <ul className='text-black font-normal'>
        <li className='font-normal'> Eligibility: You must be at least 18 years old to use this Site.</li>
        <li className='font-normal'>Account Registration: You are responsible for maintaining the confidentiality of your account information.</li>
        <li className='font-normal'> Prohibited Activities: Do not engage in activities that could harm the Site or other users.</li>
      </ul>

      <h2 className='font-medium'>4. Intellectual Property Rights</h2>
      <p className='text-black font-normal'> All content on the Site is the property of Sole Vague and protected by copyright laws.</p>

      <h2 className='font-medium'>5. Product Information and Orders</h2>
      <ul className='text-black font-normal'>
        <li className='font-normal'>Accuracy: We strive to provide accurate product descriptions but do not guarantee error-free content.</li>
        <li className='font-normal'>Orders: We reserve the right to cancel or refuse any order.</li>
        <li className='font-normal'>Pricing: Prices are subject to change without notice.</li>
      </ul>

      <h2 className='font-medium'>6. Disclaimers and Limitation of Liability</h2>
      <p className='text-black font-normal'>
        The Site is provided on an "as is" basis without warranties. Sole Vague is not liable for any indirect or consequential damages.
      </p>

      <h2 className='font-medium'>7. Indemnification</h2>
      <p className='text-black font-normal'>You agree to indemnify and hold harmless Sole Vague from any claims arising from your use of the Site.</p>

      <h2 className='font-medium'>8. Governing Law and Dispute Resolution</h2>
      <p className='text-black font-normal'>Any disputes will be resolved through binding arbitration under applicable law.</p>

      <h2 className='font-medium'>9. Termination</h2>
      <p className='text-black font-normal'>Sole Vague reserves the right to terminate access to the Site for any violation of these Terms.</p>

      <h2 className='font-medium'>10. Contact Information</h2>
      <p className='text-black font-normal'>
        <span className='font-medium'>Sole Vague Support</span>  <br />
        Email: support@solevague.com <br />
        Address: Kathmandu,Nepal
      </p>

      <p className="disclaimer text-black font-normal">
        *This Terms of Use agreement is a sample and does not constitute legal advice. Consult a legal professional for compliance.*
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default TermsOfUse;
