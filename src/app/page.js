'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Zap, Users, Book, Video, MessageCircle, Download, ArrowRight, Terminal } from 'lucide-react';
export default function CyberfoxLanding() {
  import React, { useState, useEffect } from 'react';
import { Shield, Zap, Users, Book, Video, MessageCircle, Download, ArrowRight, Terminal, Lock, Eye, Server, Network, Bug } from 'lucide-react';

export default function CyberfoxLanding() {
  const [typedText, setTypedText] = useState('');
  const fullText = '> Initialisation du système de formation...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      title: '🧩 Fondamentaux & Systèmes',
      range: 'Modules 1-9',
      items: ['Réseau & Protocoles', 'Linux & Windows', 'Scripting & Automatisation'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: '🧠 Hacking Éthique & Pentest',
      range: 'Modules 10-15',
      items: ['Reconnaissance', 'Exploitation', 'Post-exploitation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '🛡️ Analyse & Défense',
      range: 'Modules 16-20',
      items: ['Blue Team', 'Forensics', 'Incident Response'],
      color: 'from-cyan-400 to-purple-500'
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: 'Formations modernes, simples et accessibles' },
    { icon: <Video className="w-6 h-6" />, text: 'Cours vidéos + lives interactifs' },
    { icon: <Shield className="w-6 h-6" />, text: 'Apprends avec de vrais cas d\'attaque' },
    { icon: <Terminal className="w-6 h-6" />, text: 'Deviens un analyste cyber complet' },
    { icon: <Users className="w-6 h-6" />, text: 'Communauté active sur Discord' }
  ];

  return (
    <div className="bg-[#0A0F1F] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-[#0A0F1F]"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 font-mono text-cyan-400 text-sm">
            {typedText}<span className="animate-pulse">▊</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Deviens un expert en
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              cybersécurité
            </span>
            avec Cyberfox Academy 🦊
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Apprends à protéger, analyser et hacker éthiquement — à ton rythme ou en live.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="/syllabus.pdf" 
              download
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Télécharger le syllabus
            </a>
            
            <a 
              href="https://discord.gg/cyberfox" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-2 border-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Rejoindre Discord
            </a>
          </div>

          {/* Video Placeholder */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-cyan-500/30 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-all">
                    <Video className="w-10 h-10 text-cyan-400" />
                  </div>
                  <p className="text-gray-400">Vidéo de présentation - Bientôt disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Why Cyberfox Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pourquoi <span className="text-cyan-400">Cyberfox</span> ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {benefit.icon}
                </div>
                <p className="text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* Tech Illustration */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <Terminal className="w-32 h-32 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0A0F1F] to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Un parcours complet en <span className="text-purple-400">3 étapes</span>
          </h2>
          
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            De débutant à professionnel, maîtrise tous les aspects de la cybersécurité
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur p-8 rounded-2xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                  <p className="text-cyan-400 text-sm font-mono mb-6">{module.range}</p>
                  
                  <ul className="space-y-3">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/syllabus.pdf" 
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Télécharger le syllabus complet (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-cyan-900/30"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            La cybersécurité <span className="text-cyan-400">n'attend pas</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Rejoins la prochaine génération d'experts.
          </p>
          
          <a 
            href="https://forms.google.com/cyberfox-inscription" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
          >
            🔥 Rejoindre Cyberfox Academy maintenant
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">Cyberfox</span> Academy 🦊
            </div>
            
            <div className="flex gap-6">
              <a href="https://discord.gg/cyberfox" className="hover:text-cyan-400 transition-colors">Discord</a>
              <a href="https://youtube.com/@cyberfox" className="hover:text-cyan-400 transition-colors">YouTube</a>
              <a href="https://linkedin.com/company/cyberfox" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="https://instagram.com/cyberfox" className="hover:text-cyan-400 transition-colors">Instagram</a>
              <a href="https://github.com/cyberfox" className="hover:text-cyan-400 transition-colors">GitHub</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex gap-6">
              <a href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</a>
              <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
            
            <p>© 2025 Cyberfox Academy — Built for the next generation of hackers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
}
