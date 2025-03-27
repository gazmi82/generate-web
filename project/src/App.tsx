import React from 'react';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, Play, Tv } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <Tv className="h-10 w-10 text-[#5603AD]" />
            <span className="text-2xl font-bold text-gray-900">artizan.tv</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-[#5603AD]">Courses</a>
            <a href="#features" className="text-gray-600 hover:text-[#5603AD]">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-[#5603AD]">Pricing</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-[#5603AD] hover:text-[#4a0294]">Log in</button>
            <button className="px-4 py-2 bg-[#5603AD] text-white rounded-lg hover:bg-[#4a0294]">
              Get Started
            </button>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Learning Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access world-class courses, expert instructors, and a supportive community to accelerate your learning journey.
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-4 bg-[#5603AD] text-white rounded-lg hover:bg-[#4a0294] flex items-center">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 border-2 border-[#5603AD] text-[#5603AD] rounded-lg hover:bg-[#5603AD] hover:text-white flex items-center">
                Watch Demo <Play className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/y8Yv4pnO7qc?controls=0&autoplay=1&mute=1&loop=1&playlist=y8Yv4pnO7qc"
                title="Educational video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose EduFlow?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#5603AD]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#5603AD]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with real-world experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#5603AD]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#5603AD]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Learning</h3>
              <p className="text-gray-600">Earn recognized certificates upon course completion.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#5603AD]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#5603AD]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Learn at your own pace with lifetime access to courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#5603AD] py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-[#5603AD]/40">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-[#5603AD]/40">Online Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-[#5603AD]/40">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-[#5603AD]/40">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Tv className="h-8 w-8 text-[#5603AD]" />
              <span className="text-xl font-bold text-gray-900">artizan.tv</span>
            </div>
            <div className="text-gray-600">
              © 2024 artizan.tv All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;