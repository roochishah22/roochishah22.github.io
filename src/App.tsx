import { useState } from 'react';
import { FileText, Code, Dumbbell, Palette, User, Mail } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'athletics', label: 'Athletics', icon: Dumbbell },
    { id: 'art', label: 'Art', icon: Palette },
    { id: 'contact', label: 'Contact Me', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#F5E6C3] text-[#800020]">
      {/* Header */}
      <header className="border-b-4 border-[#800020] px-8 py-12">
        <h1 className="text-6xl tracking-tight">Roochi Shah</h1>
      </header>

      {/* Main Layout - Unique Split Design */}
      <div className="flex min-h-[calc(100vh-200px)]">
        {/* Vertical Navigation */}
        <nav className="w-64 border-r-4 border-[#800020] p-8">
          <ul className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                      activeSection === section.id
                        ? 'bg-[#800020] text-[#F5E6C3] translate-x-2'
                        : 'hover:translate-x-1'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content Area */}
        <main className="flex-1 p-12">
          {activeSection === 'about' && (
            <div className="max-w-3xl">
              <h2 className="text-4xl mb-6 border-b-2 border-[#800020] pb-3 inline-block">About Me - Roochi Shah</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I build GenAI tooling at NVIDIA for DriveOS and love working on ML that runs efficiently in the real world, especially on-device and federated systems.
                </p>
                <p>
                  Off the screen, I'm happiest outside (run/swim/bike/mountains) or working with my hands through embroidery, ceramics, and painting.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'resume' && (
            <div className="max-w-3xl">
              <h2 className="text-4xl mb-6 border-b-2 border-[#800020] pb-3 inline-block">Resume</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Download my resume to learn more about my professional experience and qualifications.
                </p>
                <button className="bg-[#800020] text-[#F5E6C3] px-8 py-4 text-lg hover:opacity-90 transition-opacity flex items-center gap-3">
                  <FileText className="w-5 h-5" />
                  Download Resume (PDF)
                </button>
                <div className="mt-8 pt-8 border-t-2 border-[#800020]">
                  <h3 className="text-2xl mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="#" className="block hover:translate-x-2 transition-transform">
                      → LinkedIn Profile
                    </a>
                    <a href="#" className="block hover:translate-x-2 transition-transform">
                      → GitHub
                    </a>
                    <a href="#" className="block hover:translate-x-2 transition-transform">
                      → Email Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="max-w-4xl">
              <h2 className="text-4xl mb-6 border-b-2 border-[#800020] pb-3 inline-block">Personal Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[1, 2, 3, 4].map((project) => (
                  <div
                    key={project}
                    className="border-4 border-[#800020] p-6 hover:translate-x-2 hover:translate-y-2 transition-transform"
                  >
                    <h3 className="text-2xl mb-2">Project {project}</h3>
                    <p className="mb-4 opacity-80">
                      Coming soon
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'athletics' && (
            <div className="max-w-3xl">
              <h2 className="text-4xl mb-6 border-b-2 border-[#800020] pb-3 inline-block">Athletics</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#800020] pl-6">
                  <h3 className="text-2xl mb-2">Hiking/Mountaineering</h3>
                  <p className="opacity-80">
                    Coming soon
                  </p>
                </div>
                <div className="border-l-4 border-[#800020] pl-6">
                  <h3 className="text-2xl mb-2">Running</h3>
                  <p className="opacity-80">
                    Coming soon
                  </p>
                </div>
                <div className="border-l-4 border-[#800020] pl-6">
                  <h3 className="text-2xl mb-2">Triathlon</h3>
                  <p className="opacity-80">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'art' && (
            <div className="max-w-4xl">
              <h2 className="text-4xl mb-6 border-b-2 border-[#800020] pb-3 inline-block">Art</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="aspect-square border-4 border-[#800020] hover:border-8 transition-all cursor-pointer flex items-center justify-center"
                  >
                    <span className="text-xl opacity-50">Coming soon</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="max-w-3xl">
              <h2 className="text-4xl mb-6 border-b-2 border-[#800020] pb-3 inline-block">Contact Me</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-[#800020] pl-6">
                  <h3 className="text-2xl mb-2">Email</h3>
                  <a 
                    href="mailto:roochi.shah22@gmail.com" 
                    className="text-lg hover:translate-x-2 inline-block transition-transform"
                  >
                    roochi.shah22@gmail.com
                  </a>
                </div>
                <div className="border-l-4 border-[#800020] pl-6">
                  <h3 className="text-2xl mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:translate-x-2 inline-block transition-transform"
                  >
                    Connect with me on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}