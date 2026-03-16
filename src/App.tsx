/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Stethoscope, 
  Smile, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Heart,
  Award,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  { title: "Examination", icon: <Stethoscope className="w-5 h-5" />, description: "Comprehensive dental check-ups to maintain your oral health." },
  { title: "Hygiene", icon: <ShieldCheck className="w-5 h-5" />, description: "Professional cleaning and gum health maintenance." },
  { title: "Composite Fillings", icon: <ShieldCheck className="w-5 h-5" />, description: "Natural-looking fillings to restore your teeth." },
  { title: "Crowns & Bridges", icon: <ShieldCheck className="w-5 h-5" />, description: "Durable restorations for damaged or missing teeth." },
  { title: "Dentures", icon: <ShieldCheck className="w-5 h-5" />, description: "Comfortable and natural-looking tooth replacement." },
  { title: "Root Canal", icon: <ShieldCheck className="w-5 h-5" />, description: "Expert treatments to save your natural teeth." },
  { title: "Teeth Whitening", icon: <Sparkles className="w-5 h-5" />, description: "Brighten your smile with our professional whitening treatments." },
  { title: "Invisalign", icon: <Smile className="w-5 h-5" />, description: "Straighten your teeth discreetly with clear aligners." },
  { title: "Implants", icon: <ShieldCheck className="w-5 h-5" />, description: "Permanent solutions for missing teeth with dental implants." },
  { title: "Composite Bonding", icon: <Sparkles className="w-5 h-5" />, description: "Enhance your smile with aesthetic composite bonding." },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcfb] font-sans text-[#1a1a1a] selection:bg-emerald-100 selection:text-emerald-900">
      {/* Practice Notification Banner */}
      <div className="bg-[#1a1a1a] text-white py-2 px-6 text-center text-[10px] uppercase tracking-[0.2em] font-medium">
        Routine examinations now available • Contact us to book your appointment
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 top-8 ${scrolled ? 'px-6' : 'px-6 md:px-12'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-8 py-3 border border-white/20' : 'py-4'}`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-serif italic text-xl transition-transform group-hover:rotate-12">518</div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight leading-none">Dental</span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-semibold text-slate-400">Rochdale</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'About Us', 'Treatments', 'Fees', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-emerald-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-100 active:scale-95">
              Book Visit
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-[#1a1a1a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {['Home', 'About Us', 'Treatments', 'Fees', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-3xl font-serif italic text-[#1a1a1a]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#1a1a1a] text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-2xl">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-emerald-50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-amber-50 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-emerald-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-700">Trusted Family Dentist in Rochdale</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1] mb-8 text-[#1a1a1a]">
              Crafting <span className="italic">Timeless</span> <br />
              <span className="text-emerald-900 font-medium">Healthy Smiles.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-xl leading-relaxed font-light">
              At 518 Dental, we combine clinical excellence with a compassionate touch. Our husband-and-wife led team provides a caring, relaxed environment for you and your family to achieve the smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#1a1a1a] text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-emerald-800 transition-all shadow-2xl hover:shadow-emerald-100 flex items-center justify-center gap-3 group">
                Reserve Your Visit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-[#1a1a1a] border border-[#1a1a1a]/10 px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center justify-center gap-3">
                Our Treatments
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 border-t border-[#1a1a1a]/5 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-[#fdfcfb] overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/p${i}/200/200`} 
                      alt="Patient" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Sparkles key={i} size={12} className="fill-current" />)}
                </div>
                <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-slate-400">Trusted by 2,000+ Happy Patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dental-luxury/800/1000" 
                alt="Modern Dental Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-[220px] border border-slate-50">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <Clock size={20} />
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-2">Availability</p>
              <p className="text-sm font-serif italic mb-1">Mon - Fri: 9am - 5pm</p>
              <p className="text-[10px] text-slate-400 leading-relaxed">Accepting new NHS and Private patients.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-[#1a1a1a]/5 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Years of Care", value: "15+", icon: <Award size={20} /> },
              { label: "Happy Smiles", value: "5k+", icon: <Heart size={20} /> },
              { label: "Expert Clinicians", value: "10+", icon: <Users size={20} /> },
              { label: "Modern Facilities", value: "100%", icon: <ShieldCheck size={20} /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="text-emerald-600 mb-4 transition-transform group-hover:scale-110 duration-500">
                  {stat.icon}
                </div>
                <p className="text-5xl font-serif font-light text-[#1a1a1a] mb-2">{stat.value}</p>
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="treatments" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-emerald-600" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-700">Our Expertise</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-[#1a1a1a]">
                Treatments Designed <br />
                <span className="italic">For Your Well-being.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-light">
              From routine maintenance to advanced restorative procedures, our team is equipped with the latest technology to serve you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative mb-8 overflow-hidden rounded-2xl aspect-[16/10]">
                  <img 
                    src={`https://picsum.photos/seed/service${i}/600/400`} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ChevronRight size={16} />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-emerald-600">0{i + 1}</span>
                  <h4 className="text-xl font-serif italic text-[#1a1a1a]">{service.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-600 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Team Section */}
      <section id="about-us" className="py-32 bg-[#f9f8f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-[1px] border-[#1a1a1a]/5 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/team-518/800/1000" 
                  alt="The Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 border border-emerald-200 rounded-full animate-pulse" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-emerald-600" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-700">Meet the Team</span>
              </div>
              <h3 className="text-5xl font-serif font-light text-[#1a1a1a] mb-8 leading-tight">
                Headed by Husband and Wife Team, <span className="italic">Lawiza & Sajid.</span>
              </h3>
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-light mb-12">
                <p>
                  Here at 518 Dental, we have a passionate team who strive to ensure we deliver the service you expect and deserve. Our patients have access to an array of NHS and private treatments ranging from routine care to advanced cosmetic treatments.
                </p>
                <p>
                  Coming to the dentist is a daunting experience for most people and we pride ourselves in providing a caring and relaxed environment for the patient and their families.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Continuing Professional Education",
                  "Latest Dental Developments",
                  "Caring & Relaxed Environment",
                  "NHS & Private Care"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-transparent text-[#1a1a1a] border border-[#1a1a1a] px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#1a1a1a] hover:text-white transition-all shadow-xl">
                Our Patient Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-[#1a1a1a] rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-5xl md:text-7xl font-serif font-light text-white mb-10 leading-tight">
                Ready to transform <br />
                <span className="italic">your smile?</span>
              </h3>
              <p className="text-slate-400 text-xl mb-16 leading-relaxed font-light">
                Join our family of happy patients today. We are currently accepting new patients for both NHS and private care in Rochdale.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-[#1a1a1a] px-12 py-6 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-emerald-50 transition-all shadow-2xl">
                  Book Online Now
                </button>
                <button className="bg-transparent text-white border border-white/20 px-12 py-6 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white/5 transition-all">
                  Call 01706 645 518
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white pt-32 pb-16 border-t border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-serif italic text-xl">518</div>
                <span className="text-2xl font-serif font-bold tracking-tight">Dental</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light">
                Trusted family dentistry in Rochdale. Delivering the service you expect and deserve with a passionate, dedicated team.
              </p>
              <div className="flex gap-6">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-slate-300 hover:text-emerald-600 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a] mb-10">Practice</h4>
              <ul className="space-y-5 text-sm text-slate-400 font-light">
                {['About Us', 'Meet The Team', 'Patient Journey', 'Treatments', 'Fees', 'Contact'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-emerald-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a] mb-10">Treatments</h4>
              <ul className="space-y-5 text-sm text-slate-400 font-light">
                {['Examination', 'Hygiene', 'Whitening', 'Invisalign', 'Implants', 'Bonding'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-emerald-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a] mb-10">Connect</h4>
              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <MapPin size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <span className="text-sm text-slate-400 leading-relaxed font-light">518 Whitworth Rd, Rochdale OL12 0SN, UK</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone size={18} className="text-emerald-600 shrink-0" />
                  <span className="text-sm text-slate-400 font-light">01706 645 518</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail size={18} className="text-emerald-600 shrink-0" />
                  <span className="text-sm text-slate-400 font-light">admin@518dental.co.uk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-[#1a1a1a]/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">
            <p>© 2024 518 DENTAL - ALL RIGHTS RESERVED</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Complaints</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
