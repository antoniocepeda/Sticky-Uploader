import React from 'react';
import { Link } from 'react-router-dom';
import { StickyNote, ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Landing Page
        </Link>

        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: January 1, 2024</p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Account information (name, email, password)</li>
            <li>Content you create (sticky notes, uploads)</li>
            <li>Usage information and preferences</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Send important updates and notifications</li>
            <li>Protect against misuse and abuse</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            This includes encryption, secure servers, and regular security audits.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@stickyuploader.com">privacy@stickyuploader.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};