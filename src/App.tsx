/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  Layout, 
  Zap, 
  CheckCircle2, 
  Star, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  MousePointer2,
  Sparkles
} from 'lucide-react';

const FEATURES = [
  {
    title: "Conversion-First Design",
    description: "We don't just build pretty sites. We build sales machines designed to guide your users toward the checkout button.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Lightning Fast Performance",
    description: "Speed is a feature. Our websites load in under a second, ensuring you never lose a customer to a loading spinner.",
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Bespoke Visual Identity",
    description: "Stand out from the crowd with a unique design that perfectly captures your brand's essence and values.",
    icon: <Layout className="w-6 h-6 text-indigo-400" />,
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content: "Our conversion rate jumped by 45% within the first month of launching our new site. The design is absolutely stunning.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Chen",
    role: "Founder of Peak Performance",
    content: "The team at Convert understood our vision immediately. They delivered a site that feels premium and performs even better.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director at Bloom",
    content: "Working with Convert was the best investment we made this year. Our customers constantly compliment the new interface.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden font-sans">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Convert.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Process', 'Work', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/70 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-white/70 hover:text-white transition-colors">
              Log in
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all glow-primary">
              Get Started
            </button>
            <button 
              className="md:hidden text-white/70 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-display font-medium">
              {['Solutions', 'Process', 'Work', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] text-gradient mb-6">
            Turn your viewers into <br />
            <span className="text-indigo-400">loyal buyers</span> fast
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build gorgeous, high-performance websites that don't just look good—they convert. 
            Tailored for modern teams who demand excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-medium transition-all glow-primary flex items-center justify-center gap-2 group">
              Book a strategy call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all">
              View our work
            </button>
          </div>
        </motion.div>

        {/* Hero Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 w-full max-w-6xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
            {/* Mock Dashboard UI */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-medium">
                <span>Overview</span>
                <span>Analytics</span>
                <span>Conversion</span>
              </div>
              <div className="w-12" />
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="h-40 bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Total Revenue</p>
                      <h3 className="text-3xl font-bold">$124,592.00</h3>
                    </div>
                    <div className="bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded-full font-bold">+12.5%</div>
                  </div>
                  <div className="flex items-end gap-1 h-12">
                    {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-indigo-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-4">
                    <p className="text-xs text-white/40 mb-2">Conversion Rate</p>
                    <div className="text-2xl font-bold">4.82%</div>
                    <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-indigo-500" />
                    </div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-4">
                    <p className="text-xs text-white/40 mb-2">Avg. Session</p>
                    <div className="text-2xl font-bold">04:22</div>
                    <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[42%] bg-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-full bg-white/5 rounded-xl border border-white/10 p-6">
                  <h4 className="text-sm font-medium mb-4">Top Sources</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Organic Search', val: '42%', color: 'bg-indigo-500' },
                      { name: 'Social Media', val: '28%', color: 'bg-purple-500' },
                      { name: 'Direct', val: '18%', color: 'bg-blue-500' },
                      { name: 'Referral', val: '12%', color: 'bg-pink-500' },
                    ].map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white/60">{s.name}</span>
                          <span className="font-bold">{s.val}</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${s.color}`} style={{ width: s.val }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient">Built for performance</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-12">Trusted by founders</h2>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed italic">
                  "{TESTIMONIALS[activeTestimonial].content}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={TESTIMONIALS[activeTestimonial].avatar} 
                    alt={TESTIMONIALS[activeTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-indigo-600/30 p-1"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-bold text-lg">{TESTIMONIALS[activeTestimonial].name}</h5>
                    <p className="text-white/40 text-sm uppercase tracking-widest">{TESTIMONIALS[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Ready to scale your <br /> conversion rate?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Join 50+ high-growth companies that trust Convert to build their digital presence. 
                Limited slots available for Q2.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                  Get a free audit
                </button>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-indigo-200" />
                  <span className="text-sm font-medium">No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Convert.</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              The conversion-first design agency for modern tech companies. 
              Building the future of the web, one pixel at a time.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/60">Agency</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/60">Services</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Copywriting</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/60">Newsletter</h5>
            <p className="text-xs text-white/40 mb-4">Get conversion tips delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 p-2 rounded-lg transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-xs text-white/20">
          <p>© 2024 Convert Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:hidden z-50">
        <button className="w-full bg-indigo-600 text-white py-4 rounded-full font-bold shadow-2xl glow-primary">
          Book a Call
        </button>
      </div>
    </div>
  );
}
