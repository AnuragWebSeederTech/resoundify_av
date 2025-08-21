import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple Modal Component (You'd likely use a dedicated library for a more robust solution)
const Modal = ({ title, content, isOpen, onClose, onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"> {/* Changed to bg-black/50 for a darker overlay */}
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
        <div className="text-slate-700 text-sm leading-relaxed mb-6">
          {content}
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="acceptCheckbox"
            className="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="acceptCheckbox" className="text-slate-700 text-sm">
            I have read and agree to the {title.toLowerCase()}.
          </label>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              if (isChecked) {
                onAccept();
                onClose();
              } else {
                alert("Please accept the terms to proceed.");
              }
            }}
            className={`px-4 py-2 rounded-md transition-colors ${
              isChecked
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-300 text-white cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const companyDescription =
    "Resoundify delivers unparalleled Dante-enabled AV solutions, transforming connectivity and communication. We empower professional audio experiences with innovation and reliability.";

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Expanded content for Privacy Policy
  const privacyPolicyContent = (
    <>
      <p className="mb-3">
        **Effective Date: July 1, 2025**
      </p>
      <p className="mb-3">
        Resoundify ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, resoundify.com, and any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE SITE.
      </p>
      
      <p className="mb-2">
        **1. Information We Collect**
      </p>
      <ul className="list-disc ml-5 mb-3">
        <li>**Personal Data:** We collect personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
        <li>**Derivative Data:** Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        <li>**Financial Data:** Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, [e.g., Stripe, PayPal], and you are encouraged to review their privacy policy.</li>
      </ul>

      <p className="mb-2">
        **2. How We Use Your Information**
      </p>
      <p className="mb-3">
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      </p>
      <ul className="list-disc ml-5 mb-3">
        <li>Create and manage your account.</li>
        <li>Process your transactions and send related information, including purchase confirmations and invoices.</li>
        <li>Enable user-to-user communications.</li>
        <li>Request feedback and contact you about your use of the Site.</li>
        <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
        <li>Improve the efficiency and operation of the Site.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        <li>Notify you of updates to the Site.</li>
      </ul>

      <p className="mb-2">
        **3. Disclosure of Your Information**
      </p>
      <p className="mb-3">
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>
      <ul className="list-disc ml-5 mb-3">
        <li>**By Law or to Protect Rights:** If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
        <li>**Third-Party Service Providers:** We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        <li>**Marketing Communications:** With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</li>
      </ul>

      <p className="mb-2">
        **4. Security of Your Information**
      </p>
      <p className="mb-3">
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </p>

      <p className="mb-2">
        **5. Your Rights**
      </p>
      <p className="mb-3">
        You have rights regarding your personal information, including the right to access, correct, delete, or restrict its use. Please contact us to exercise these rights or if you have any questions about our privacy practices.
      </p>
      
      <p className="mb-2">
        **6. Cookies and Tracking Technologies**
      </p>
      <p className="mb-3">
        We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
      </p>

      <p className="mb-2">
        **7. Changes to This Privacy Policy**
      </p>
      <p className="mb-3">
        We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this policy.
      </p>
    </>
  );

  // Expanded content for Terms of Use
  const termsOfUseContent = (
    <>
      <p className="mb-3">
        **Last Updated: July 1, 2025**
      </p>
      <p className="mb-3">
        Welcome to Resoundify! These Terms of Use ("Terms") govern your use of the Resoundify website (the "Site"), operated by Resoundify ("we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the Site.
      </p>

      <p className="mb-2">
        **1. Acceptance of Terms**
      </p>
      <p className="mb-3">
        By accessing and using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as any additional terms and conditions that are referenced herein or that may apply to specific sections of the Site.
      </p>

      <p className="mb-2">
        **2. User Conduct**
      </p>
      <p className="mb-3">
        You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.
      </p>

      <p className="mb-2">
        **3. Intellectual Property Rights**
      </p>
      <p className="mb-3">
        All content on the Site, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Resoundify or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>

      <p className="mb-2">
        **4. Disclaimers**
      </p>
      <p className="mb-3">
        THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) AND OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE PROVIDED BY RESOUNDIFY ON AN "AS IS" AND "AS AVAILABLE" BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING. RESOUNDIFY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE, OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE, UNLESS OTHERWISE SPECIFIED IN WRITING.
      </p>

      <p className="mb-2">
        **5. Limitation of Liability**
      </p>
      <p className="mb-3">
        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL RESOUNDIFY, ITS AFFILIATES, OR THEIR RESPECTIVE LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
      </p>

      <p className="mb-2">
        **6. Indemnification**
      </p>
      <p className="mb-3">
        You agree to defend, indemnify, and hold harmless Resoundify, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Site, including, but not limited to, your User Contributions, any use of the Site's content, services, and products other than as expressly authorized in these Terms of Use, or your use of any information obtained from the Site.
      </p>

      <p className="mb-2">
        **7. Governing Law and Jurisdiction**
      </p>
      <p className="mb-3">
        These Terms and your use of the Site are governed by and construed in accordance with the laws of **India**, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms or the Site shall be instituted exclusively in the courts of **Delhi, India**, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country.
      </p>

      <p className="mb-2">
        **8. Changes to These Terms**
      </p>
      <p className="mb-3">
        We reserve the right to revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Site thereafter. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
      </p>
    </>
  );

  const handlePrivacyAccept = () => {
    // Logic for when privacy policy is accepted
    console.log("Privacy Policy Accepted!");
    // You might want to store this in local storage or a cookie
    // to prevent showing the modal again to the same user.
  };

  const handleTermsAccept = () => {
    // Logic for when terms of use are accepted
    console.log("Terms of Use Accepted!");
    // You might want to store this in local storage or a cookie.
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-950 to-black text-slate-300 py-12 px-4 sm:px-6 lg:px-8 shadow-sm rounded-t-3xl relative overflow-hidden">
      {/* Main Footer Content Grid - Now using max-w-7xl for better control and proper padding */}
      <div className="relative z-10 w-[95%] mx-auto py-8 bg-opacity-500 rounded-xl backdrop-blur-sm lg:ml-25 md:ml-0">
        {" "}
        {/* Corrected width and padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-8">
          {/* Company Info Section - Takes 2 columns on XL screens, adjusted for flex to push legal links down */}
          <div className="xl:col-span-2 text-center md:text-left flex flex-col justify-between">
            {" "}
            {/* Added flex flex-col justify-between */}
            <div>
              {" "}
              {/* Wrapper for logo and description */}
              <div className="mb-6">
                {/* Resoundify logo text with stronger visual impact using a slightly deeper slate for contrast */}
                <img
                  src="/images/resoundifyLogo2.png"
                  alt="Resoundify Logo"
                  className="w-80 h-16 rounded-3xl mx-auto md:mx-0 mb-2"
                />
                <p className="text-slate-400 font-semibold text-xl leading-tight">
                  Where Sound Meets Innovation
                </p>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm mb-8 max-w-md mx-auto md:mx-0 opacity-95">
                {companyDescription}
              </p>
            </div>
            {/* Legal Links - now pushed to the bottom of this flex container */}
            <div className="flex items-center space-x-6 justify-center md:justify-start pt-4 md:pt-0">
              {" "}
              {/* Added pt-4 for mobile spacing, md:pt-0 to remove on larger screens */}
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-emerald-500 transition-colors duration-300 text-sm font-medium hover:text-emerald-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTermsModal(true)}
                className="text-emerald-500 transition-colors duration-300 text-sm font-medium hover:text-emerald-300"
              >
                Terms of Use
              </button>
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            {" "}
            {/* Added text-center for mobile */}
            <h4 className="text-xl font-bold text-white mb-6 relative group cursor-pointer">
              Quick Links
              {/* Corrected underline positioning for proper hover effect on all screens */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-400 transition-colors duration-300 text-base relative inline-block group hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services Section */}
          <div className="text-center md:text-left">
            {" "}
            {/* Added text-center for mobile */}
            <h4 className="text-xl font-bold text-white mb-6 relative group cursor-pointer">
              Services
              {/* Corrected underline positioning for proper hover effect on all screens */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Audio Solutions", path: "/services/audio" },
                { name: "Video Systems", path: "/services/video" }, // Changed to Link
                { name: "Network Integration", path: "/services/network" },
                { name: "Consultation", path: "/services/consultation" },
                { name: "Installation", path: "/services/installation" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-slate-400 transition-colors duration-300 text-base relative inline-block group hover:text-emerald-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Information Section */}
          <div className="text-center md:text-left">
            {" "}
            {/* Added text-center for mobile */}
            <h4 className="text-xl font-bold text-white mb-6 relative group cursor-pointer">
              Get In Touch
              {/* Corrected underline positioning for proper hover effect on all screens */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>
            <div className="space-y-5">
              {/* Email */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Email Us</p>
                <a
                  href="mailto:resoundify@example.com"
                  className="text-emerald-400 font-semibold transition-colors duration-300 text-base underline-offset-2 hover:text-emerald-500 hover:underline"
                >
                  resoundify@example.com
                </a>
              </div>
              {/* Phone */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Call Us</p>
                <a
                  href="tel:+919876543210"
                  className="text-emerald-400 font-semibold transition-colors duration-300 text-base underline-offset-2 hover:text-emerald-500 hover:underline"
                >
                  +91-9876543210
                </a>
              </div>
              {/* Location */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Visit Us</p>
                <p className="text-white text-base leading-relaxed font-medium">
                  Innovation Hub, Tech City
                  <br />
                  India
                </p>
              </div>
              {/* Business Hours */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Business Hours</p>
                <p className="text-white text-base font-medium">
                  Mon - Fri: 9AM - 6PM
                  <br />
                  Sat: 10AM - 4PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Bar (Copyright & "Designed By") */}
      <div className="mt-10 pt-2 relative z-10 border-t-2 border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-0 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left section: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Resoundify. All Rights Reserved.
            </p>
          </div>
          {/* Right section: Designed & Developed by */}
          <div className="text-center md:text-right">
            <p className="text-slate-600 text-sm">
              Designed & developed by
              <span className="text-emerald-400 cursor-pointer transition-colors duration-300 ml-1 font-semibold hover:text-emerald-500">
                <a
                  href="https://www.webseeder.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WebSeeder Technologies
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Privacy Policy Modal */}
      <Modal
        title="Privacy Policy"
        content={privacyPolicyContent}
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        onAccept={handlePrivacyAccept}
      />
      {/* Terms of Use Modal */}
      <Modal
        title="Terms of Use"
        content={termsOfUseContent}
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={handleTermsAccept}
      />
    </footer>
  );
};

export default Footer;