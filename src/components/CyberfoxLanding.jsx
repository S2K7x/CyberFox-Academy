import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Code, Users, Download, Video, MessageCircle, Target, Lock, Database, Cpu, Award, ChevronRight, Menu, X } from 'lucide-react';

const CyberfoxLanding = () => {
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

      {/* Why Cyberfox Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi <span className="text-cyan-400">Cyberfox</span> ?
            </h2>
            <p className="text-gray-400 text-lg">Une approche moderne de la cybersécurité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <p className="text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="programme" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Un parcours complet en <span className="text-purple-400">3 étapes</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">Du débutant à l'expert en cybersécurité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-[#0F1629] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition`}></div>
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{module.range}</p>
                  <p className="text-gray-400">{module.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Télécharger le syllabus complet (PDF)
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* Learning Formats Section */}
      <section id="formats" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Deux formats d'<span className="text-cyan-400">apprentissage</span>
            </h2>
            <p className="text-gray-400 text-lg">Choisis ce qui te convient le mieux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-500 transition hover:shadow-2xl hover:shadow-cyan-500/30">
              <div className="text-5xl mb-6">🎥</div>
              <h3 className="text-3xl font-bold mb-4">Mode Live</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Apprends en direct sur Zoom ou Discord, pose tes questions en temps réel, pratique en groupe avec d'autres élèves.
              </p>
              <ul className="space-y-3 mb-8 text-gray-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  Sessions interactives hebdomadaires
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  Accès direct au formateur
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  Travaux pratiques en groupe
                </li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold transition">
                Rejoindre une session gratuite
              </button>
            </div>

            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-2 border-purple-500/30 rounded-3xl p-8 hover:border-purple-500 transition hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="text-3xl font-bold mb-4">Mode Vidéo</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Suis la formation à ton rythme, depuis n'importe où, avec des vidéos de haute qualité disponibles 24/7.
              </p>
              <ul className="space-y-3 mb-8 text-gray-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  Accès illimité aux modules
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  Apprends à ton rythme
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  Contenu mis à jour régulièrement
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition">
                Découvrir les modules
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Lock className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            La cybersécurité <span className="text-cyan-400">n'attend pas</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Rejoins la prochaine génération d'experts en cybersécurité dès aujourd'hui
          </p>
          <button className="group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105 inline-flex items-center gap-3">
            🔥 Rejoindre Cyberfox Academy maintenant
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition" />
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0A0F1F]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Reste informé 📧</h2>
            <p className="text-gray-400">Inscris-toi pour recevoir les dernières nouveautés</p>
          </div>

          <div className="bg-[#0F1629] border border-cyan-500/20 rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Prénom</label>
                <input
                  type="text"
                  className="w-full bg-[#0A0F1F] border border-cyan-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#0A0F1F] border border-cyan-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                  placeholder="john@example.com"
                />
              </div>
              <button
                onClick={() => alert('Merci ! Connecte ton webhook Discord ici')}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                S'inscrire à la newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🦊</span>
                <span className="text-xl font-bold text-cyan-400">Cyberfox Academy</span>
              </div>
              <p className="text-gray-400">
                La référence en formation cybersécurité pour la nouvelle génération.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#programme" className="hover:text-cyan-400 transition">Programme</a></li>
                <li><a href="#formats" className="hover:text-cyan-400 transition">Formats</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Mentions légales</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Communauté</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  <Video className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  <Code className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-400">
            <p>© 2025 Cyberfox Academy — Built for the next generation of hackers 🦊</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberfoxLanding;
};

export default CyberfoxLanding;
