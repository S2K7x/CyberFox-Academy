import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Code, Users, Download, Video, MessageCircle, Target, Lock, Database, Cpu, Award, ChevronRight, Menu, X } from 'lucide-react';

const CyberfoxLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Deviens un expert en cybersécurité";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      title: "🧩 Fondamentaux & Systèmes",
      range: "Modules 1-9",
      description: "Linux, réseaux, protocols TCP/IP, scripting",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "🧠 Hacking Éthique & Pentest",
      range: "Modules 10-15",
      description: "Web hacking, OWASP Top 10, exploits, Metasploit",
      icon: <Terminal className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "🛡️ Analyse & Défense",
      range: "Modules 16-20",
      description: "Blue Team, SIEM, forensics, incident response",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, text: "Formations modernes et accessibles" },
    { icon: <Video className="w-6 h-6" />, text: "Cours vidéos + lives interactifs" },
    { icon: <Target className="w-6 h-6" />, text: "Apprends avec de vrais cas d'attaque" },
    { icon: <Cpu className="w-6 h-6" />, text: "Deviens un analyste cyber complet" },
    { icon: <Users className="w-6 h-6" />, text: "Communauté active sur Discord" }
  ];

  return (
    <div className="bg-[#0A0F1F] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-[#0A0F1F]/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🦊</div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Cyberfox Academy
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#programme" className="hover:text-cyan-400 transition">Programme</a>
              <a href="#formats" className="hover:text-cyan-400 transition">Formats</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition">
                Rejoindre
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0F1F] border-t border-cyan-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#programme" className="block hover:text-cyan-400 transition">Programme</a>
              <a href="#formats" className="block hover:text-cyan-400 transition">Formats</a>
              <a href="#contact" className="block hover:text-cyan-400 transition">Contact</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full">
                Rejoindre
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
              Formation cybersécurité 2025
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Apprends à protéger, analyser et hacker éthiquement — à ton rythme ou en live avec{' '}
            <span className="text-cyan-400 font-semibold">Cyberfox Academy</span> 🦊
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Télécharger le syllabus
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            
            <button className="group border-2 border-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Rejoindre Discord
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-cyan-400" />
              <span>20+ modules vidéo</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Sessions live</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-pink-400" />
              <span>Certification</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-cyan-400" />
        </div>
      </section>

      {/* Les autres sections restent inchangées… */}

    </div>
  );
};

export default CyberfoxLanding;
