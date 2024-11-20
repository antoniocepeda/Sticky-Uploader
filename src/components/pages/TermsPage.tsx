import React from 'react';
import { Link } from 'react-router-dom';
import { StickyNote, ArrowLeft, FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
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
          <FileText className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: January 1, 2024</p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Sticky Uploader, you agree to be bound by these Terms of
            Service and all applicable laws and regulations.
          </p>

          <h2>2. User Accounts</h2>
          <p>
            You are responsible for maintaining the security of your account and password.
            The company cannot and will not be liable for any loss or damage from your failure
            to comply with this security obligation.
          </p>

          <h2>3. Content Guidelines</h2>
          <ul>
            <li>You retain ownership of your content</li>
            <li>Do not upload illegal or harmful content</li>
            <li>Respect others' intellectual property rights</li>
            <li>We reserve the right to remove content that violates these terms</li>
          </ul>

          <h2>4. Service Availability</h2>
          <p>
            We strive to provide uninterrupted service but cannot guarantee 100% uptime.
            We reserve the right to modify or discontinue the service at any time.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            The service is provided "as is" without warranties of any kind. We are not
            liable for any damages arising from the use of our service.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the
            service constitutes acceptance of new terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms should be sent to{' '}
            <a href="mailto:legal@stickyuploader.com">legal@stickyuploader.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};