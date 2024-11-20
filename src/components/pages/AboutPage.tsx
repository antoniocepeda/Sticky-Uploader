import React from 'react';
import { Link } from 'react-router-dom';
import { StickyNote, ArrowLeft } from 'lucide-react';

export const AboutPage: React.FC = () => {
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

        {/* Rest of the component remains unchanged */}
        <div className="text-center mb-12">
          <StickyNote className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Sticky Uploader</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your digital sticky note solution</p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>Our Story</h2>
          <p>
            Sticky Uploader 5000 was born from a simple idea: making digital collaboration as natural
            and intuitive as using physical sticky notes. We believe that the best ideas often start
            with a simple note, and we wanted to bring that experience to the digital world.
          </p>

          <h2>Our Mission</h2>
          <p>
            We're on a mission to revolutionize the way people capture and share ideas. By combining
            the familiarity of sticky notes with modern digital features, we're creating a platform
            that makes collaboration easier and more enjoyable than ever.
          </p>

          <h2>Features</h2>
          <ul>
            <li>Create and customize digital sticky notes</li>
            <li>Share notes with team members</li>
            <li>Organize ideas with our intuitive interface</li>
            <li>Access your notes from anywhere</li>
            <li>Real-time collaboration</li>
          </ul>

          <h2>Join Our Community</h2>
          <p>
            Whether you're a student, professional, or creative thinker, Sticky Uploader 5000 is
            designed to help you capture and organize your ideas effectively. Join our growing
            community of users who are discovering new ways to collaborate and create.
          </p>
        </div>
      </div>
    </div>
  );
};