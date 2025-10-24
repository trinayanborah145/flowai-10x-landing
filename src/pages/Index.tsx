import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bot,
  MessageSquare,
  Calendar,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  XCircle,
  Menu,
  X,
  Instagram,
  Linkedin,
  Youtube,
  Star,
} from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              FlowAI<span className="text-primary">.10X</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white/80 hover:text-white transition-colors"
              >
                FAQs
              </button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => window.open('https://calendly.com/flowai-10x/30min', '_blank')}
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                FAQs
              </button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => window.open('https://calendly.com/flowai-10x/30min', '_blank')}>
                Book a Call
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden" style={{background: 'radial-gradient(ellipse at bottom center, hsl(30, 100%, 55%) 0%, hsl(25, 100%, 45%) 30%, hsl(0, 0%, 4%) 70%)'}}>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-dark-bg" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-dark-bg" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-500 border-2 border-dark-bg" />
              </div>
              <div className="flex items-center gap-1 text-text-gray text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-2">5-star Agency Excellence</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get Qualified <span className="text-primary font-script italic text-6xl md:text-8xl">Clients</span> & <span className="text-primary font-script italic text-6xl md:text-8xl">Automate</span> Your Business Without Burning Out.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white mb-6 font-medium">
              FlowAI helps coaches and service-based businesses attract consistent clients, save hours every day, and scale with smart AI systems.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-semibold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                onClick={() => window.open('https://calendly.com/flowai-10x/30min', '_blank')}
              >
                Book Your Free Strategy Call
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="text-center">
              <p className="text-text-gray text-sm mb-4">You're in good hands</p>
              <div className="relative overflow-hidden">
                <div className="animate-scroll-left flex items-center gap-8 whitespace-nowrap">
                  {/* First set */}
                  <div className="text-white text-sm font-medium">Shopify Partners</div>
                  <div className="text-white text-sm font-medium">Meta Business Partner</div>
                  <div className="text-white text-sm font-medium">Google Partner</div>
                  <div className="text-white text-sm font-medium">HubSpot Certified</div>
                  <div className="text-white text-sm font-medium">Vertias Media</div>
                  <div className="text-white text-sm font-medium">Progressive Construction</div>
                  <div className="text-white text-sm font-medium">Room Editors</div>
                  {/* Duplicate set for seamless loop */}
                  <div className="text-white text-sm font-medium">Shopify Partners</div>
                  <div className="text-white text-sm font-medium">Meta Business Partner</div>
                  <div className="text-white text-sm font-medium">Google Partner</div>
                  <div className="text-white text-sm font-medium">HubSpot Certified</div>
                  <div className="text-white text-sm font-medium">Vertias Media</div>
                  <div className="text-white text-sm font-medium">Progressive Construction</div>
                  <div className="text-white text-sm font-medium">Room Editors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wide">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-4">
              What We Build for You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Bot className="w-10 h-10" />,
                title: "AI-Powered Website or Funnel",
                description:
                  "Custom-built landing pages and sales funnels designed to convert visitors into booked calls.",
              },
              {
                icon: <MessageSquare className="w-10 h-10" />,
                title: "WhatsApp Automation + Chatbot",
                description:
                  "Instant responses, lead qualification, and 24/7 engagement with smart AI chatbots.",
              },
              {
                icon: <Calendar className="w-10 h-10" />,
                title: "Smart CRM & Booking System",
                description:
                  "Automated follow-ups, appointment scheduling, and client management in one place.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Meta Ads Funnel for Consistent Leads",
                description:
                  "Proven ad strategies that bring you qualified leads every single day.",
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "Complete Client Acquisition Automation",
                description:
                  "From first contact to booked appointment — everything runs on autopilot.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-text-gray leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl font-bold text-text-charcoal">
              Everything connected — everything automated. So you can focus on growing
              your business, not chasing leads.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="process" className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wide">
              Comparison
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              But, why would you want to work{" "}
              <span className="italic text-gradient">with us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Other Agencies */}
            <Card className="p-8 bg-card/5 border-2 border-red-500/20 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white">Other Agencies</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Reactive communication",
                  "Single channel approach",
                  "Copy-paste growth strategies",
                  "Lack of research on your industry",
                  "Outsourced to junior talent",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* FlowAI */}
            <Card className="p-8 bg-card/5 border-2 border-primary/40 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-white">FlowAI</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Consistent, proactive communication",
                  "Omni-channel approach",
                  "Tailored best-fit solutions",
                  "Provides industry-specific expertise",
                  "Experts with 10+ years of experience",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  How do you tailor Google Ads strategies for different businesses?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  We start by deeply understanding your industry, target audience, and
                  business goals. Then we create custom campaigns with precise keyword
                  targeting, compelling ad copy, and optimized landing pages. Every
                  strategy is data-driven and continuously refined based on performance
                  metrics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  What's unique about your Meta Ads approach?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  Our Meta Ads strategy combines creative excellence with advanced
                  targeting. We build custom audiences, test multiple ad variations, and
                  use AI-powered optimization to maximize your ROI. Plus, we integrate
                  everything with your automated booking system so leads convert
                  instantly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  What does your AI automation agency do?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  We help businesses automate repetitive tasks using AI systems — saving time, reducing errors, and increasing productivity. From customer support to lead generation, we build custom AI solutions tailored to your workflow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  How can AI automation help my business?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  AI can handle tasks like data entry, report generation, lead management, appointment scheduling, customer responses, and more — letting your team focus on what really matters: growth and creativity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  Which industries do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  We work with all major industries including real estate, healthcare, eCommerce, hospitality, education, and professional services. Every business that deals with repetitive or manual tasks can benefit from AI automation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  What kind of processes can be automated?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  Almost any repetitive process — such as:
                  <br />• Customer service responses
                  <br />• Appointment booking
                  <br />• Invoice and accounting workflows
                  <br />• Lead capture and follow-up
                  <br />• Employee onboarding
                  <br />• Data collection and reporting
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-card/5 border-2 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-primary">
                  Do you create chatbots?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  Yes — but not just simple bots. We build AI-powered assistants that understand natural language, automate workflows, and connect with your existing tools (like WhatsApp, CRM, Google Sheets, etc.).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wide">
              Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Now I wake up to booked calls — no manual work anymore.",
                author: "Fitness Coach",
              },
              {
                quote:
                  "Our sales doubled within weeks of using their automation system.",
                author: "E-commerce Founder",
              },
              {
                quote:
                  "Best investment — my calendar and WhatsApp run on autopilot.",
                author: "Consultant",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg italic text-text-charcoal mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-text-gray font-medium">— {testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-light-gray-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-6">
              Built for Businesses That Want to Scale Smart
            </h2>
            <p className="text-lg text-text-gray leading-relaxed">
              At FlowAI, we believe growth shouldn't be complicated. That's why we
              build AI systems that handle your client flow, follow-ups, and booking — so
              you can focus on what truly matters: scaling your business and delivering
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-dark-bg overflow-hidden">
        <div className="container mx-auto px-6 relative z-10" style={{background: 'radial-gradient(circle at bottom center, hsl(30, 100%, 65%) 0%, hsl(25, 100%, 55%) 25%, hsl(20, 100%, 40%) 50%, hsl(0, 0%, 4%) 70%)'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              If you're serious about growing your business and want a system that runs
              24/7 — this is your moment.
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 mb-4"
              onClick={() => window.open('https://calendly.com/flowai-10x/30min', '_blank')}
            >
              👉 Book My Free Strategy Call
            </Button>
            <p className="text-text-gray text-sm">
              Limited spots available each month
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pure-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                FlowAI<span className="text-primary">.10X</span>
              </div>
              <p className="text-white/60 text-sm mb-2">
                Scale smart. Automate everything.
              </p>
              <a
                href="mailto:FlowAI@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                FlowAI@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/60 text-sm">
              © 2025 FlowAI | Privacy Policy | Terms
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
