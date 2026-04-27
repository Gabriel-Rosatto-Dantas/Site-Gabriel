import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Code, Database, Server, Zap, Linkedin, Github, Mail, Cloud, Settings, Construction, Layers, Terminal, GitMerge, Brain, Instagram, X, Menu, Monitor, BarChart, Bot, Workflow, LineChart, Globe, Image as ImageIcon } from 'lucide-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Configuração do base URL para assets
const BASE_URL = import.meta.env.VITE_PUBLIC_URL || '';

// Add keyframes animation for image slideshow
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    20%, 80% { opacity: 1; }
  }
`;
document.head.appendChild(style);

const WhatsAppIcon = ({ className }) => (
  <svg
    className={`w-8 h-8 text-accent transition-colors ${className || ''}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.761-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const App = () => {
  const { toast } = useToast();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const skills = [
    {
      category: "Engenharia e Análise de Dados",
      icon: <Database className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Python & SQL", description: "Construção de pipelines, análise de dados e extração de insights." },
        { name: "GCP & BigQuery", description: "Data Warehousing e processamento massivo de dados na nuvem." },
        { name: "Ferramentas de BI", description: "Power BI, Looker e Metabase para dashboards dinâmicos." },
        { name: "Airflow & ETL", description: "Orquestração e automação de fluxos de dados corporativos." },
      ]
    },
    {
      category: "Desenvolvimento Web & Interfaces",
      icon: <Monitor className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "React & Next.js", description: "Criação de Single Page Applications e sistemas robustos." },
        { name: "Tailwind CSS", description: "Estilização moderna, responsiva e de alta performance." },
        { name: "Framer Motion", description: "Animações fluidas e micro-interações que elevam a UX." },
        { name: "Landing Pages", description: "Páginas otimizadas para conversão e alta performance (Core Web Vitals)." },
      ]
    },
    {
      category: "Automações e DevOps",
      icon: <Bot className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Make / Zapier", description: "Integrações low-code entre múltiplos sistemas e APIs." },
        { name: "Scripts Python", description: "Automação de rotinas manuais, web scraping e bots." },
        { name: "Docker", description: "Containerização de aplicações para ambientes padronizados." },
        { name: "Git & CI/CD", description: "Versionamento seguro e deploy automatizado (GitHub Actions)." },
      ]
    }
  ];

  const services = [
    { 
      name: "Engenharia de Dados & Pipelines", 
      icon: <Server className="w-6 h-6 mr-3 text-accent" />,
      description: "Construção de Data Lakes e Warehouses modernos, integrando APIs e bancos de dados para centralizar as informações da sua empresa de forma segura e escalável."
    },
    { 
      name: "Análise de Dados & BI", 
      icon: <BarChart className="w-6 h-6 mr-3 text-accent" />,
      description: "Transformo seus dados em relatórios visuais interativos (Dashboards), facilitando a tomada de decisão estratégica com base em métricas reais."
    },
    { 
      name: "Criação de Sites e Landing Pages", 
      icon: <Globe className="w-6 h-6 mr-3 text-accent" />,
      description: "Desenvolvimento de sites modernos, incrivelmente rápidos e com design premium. Foco total na experiência do usuário e em gerar mais conversões."
    },
    { 
      name: "Automação de Processos (RPA)", 
      icon: <Workflow className="w-6 h-6 mr-3 text-accent" />,
      description: "Elimino tarefas manuais e repetitivas criando robôs e integrações que conectam seus sistemas (CRMs, planilhas, emails), poupando tempo e dinheiro."
    },
  ];

  const projects = [
    {
      title: "Facebook Ads Pipeline para BigQuery",
      category: "Dados",
      description: "Desenvolvimento de pipeline do Facebook Ads para Gestores de Tráfego, extraindo dados das campanhas e armazenando no BigQuery para criação de dashboards analíticos.",
      technologies: ["Python", "Pandas", "API Requests", "BigQuery"],
      images: [
        "/images/api meta ads app.jpg",
        "/images/api meta ads bigquery.jpg",
      ],
      link: "https://github.com/Gabriel-Rosatto-Dantas/API-Meta-Ads"
    },
    {
      title: "Landing Page Premium para Serviços",
      category: "Web",
      description: "Projeto de exemplo de Landing Page de alta conversão. Design focado em performance, micro-interações, tema escuro e estruturação otimizada para SEO.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      images: [],
      link: "#"
    },
    {
      title: "Dashboard Executivo de Vendas",
      category: "Dados",
      description: "Sistema interativo de análise de dados projetado para monitorar KPIs em tempo real, conectando dados de múltiplas fontes em um painel consolidado.",
      technologies: ["Power BI", "SQL", "Python", "Data Viz"],
      images: [],
      link: "#"
    },
    {
      title: "Automação de Qualificação de Leads",
      category: "Automações",
      description: "Fluxo automatizado que recebe leads de um formulário, enriquece os dados usando APIs externas e envia para o CRM, notificando a equipe no Slack.",
      technologies: ["Make/Zapier", "Python Scripts", "Webhooks"],
      images: [],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const contactEmail = "dev.gabrielrosattodantas@gmail.com";
  const githubLink = "https://github.com/Gabriel-Rosatto-Dantas";
  const linkedinLink = "https://www.linkedin.com/in/gabriel-rosatto-dantas-30104b215/";
  const whatsappLink = "https://wa.me/5511992019057";
  const instagramLink = "https://instagram.com/devgabdantas";

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Sobre Mim', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Serviços', id: 'services' },
    { name: 'Tecnologias', id: 'technologies' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center overflow-x-hidden relative">
      <Toaster />
      
      {/* Navbar Responsiva */}
      <motion.header 
        className="w-full py-4 px-6 md:px-8 fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('hero')}>
            Gabriel Rosatto Dantas
          </h1>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Button 
                key={link.id}
                variant="ghost" 
                className="text-muted-foreground hover:text-accent hover:bg-white/5 transition-colors"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground hover:text-accent p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-start pt-12 gap-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <Button 
                key={link.id}
                variant="ghost" 
                className="text-xl text-foreground hover:text-accent hover:bg-white/5 w-64 h-14"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </Button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="w-full max-w-7xl px-4 md:px-8 pt-32 pb-16 flex-grow flex flex-col items-center">
        {/* Hero Section */}
        <motion.section 
          id="hero" 
          className="text-center py-20 md:py-32 w-full flex flex-col items-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8">
            Engenheiro de Dados | Desenvolvedor Web | Analista
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight max-w-4xl">
            Transformando Dados em <span className="gradient-text">Decisões</span> e Ideias em <span className="gradient-text">Soluções Digitais</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Especialista em construir pipelines de dados robustos, automações inteligentes e interfaces web premium de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="gradient-bg text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-full glow-effect"
              onClick={() => scrollToSection('contact')}
            >
              Vamos Conversar
            </Button>
            <Button 
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent hover:text-background transition-colors px-8 py-6 text-lg rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              Ver Portfólio
            </Button>
          </div>
        </motion.section>

        {/* Sobre Mim */}
        <motion.section 
          id="about" 
          className="py-16 md:py-24 w-full"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-accent/50 flex-1" />
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text">Sobre Mim</h2>
            <div className="h-px bg-gradient-to-l from-transparent to-accent/50 flex-1" />
          </div>
          
          <div className="max-w-5xl mx-auto glassmorphism-card p-8 md:p-12 rounded-2xl border border-white/5">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/20 shadow-[0_0_30px_rgba(14,165,233,0.15)] flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src="/images/Foto Gabriel.jpg" 
                  alt="Gabriel Rosatto Dantas" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Gabriel';
                  }}
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Olá! Sou um <strong className="text-foreground font-semibold">Engenheiro de Dados e Desenvolvedor Web</strong> apaixonado por tecnologia e resolução de problemas complexos. 
                  Minha jornada na tecnologia me permitiu construir um perfil multidisciplinar: atuo desde a ingestão e tratamento de grandes volumes de dados (Python, SQL, BigQuery) até a criação das interfaces visuais que entregam essas informações ao usuário (React, TailwindCSS).
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Minha missão é ajudar empresas a automatizar processos manuais, transformar dados brutos em insights estratégicos e construir presenças digitais impactantes através de sites e landing pages otimizadas.
                </p>
                
                <div className="flex justify-center lg:justify-start space-x-6">
                  {[
                    { icon: Linkedin, link: linkedinLink, label: "LinkedIn" },
                    { icon: Github, link: githubLink, label: "GitHub" },
                    { icon: Instagram, link: instagramLink, label: "Instagram" },
                    { icon: WhatsAppIcon, link: whatsappLink, label: "WhatsApp" }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={social.label}
                      whileHover={{ y: -5, scale: 1.1 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5"
                    >
                      <social.icon className="w-6 h-6 text-gray-300 hover:text-accent transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Serviços */}
        <motion.section 
          id="services" 
          className="py-16 md:py-24 w-full"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Como Posso Ajudar Seu Negócio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Soluções completas de ponta a ponta: do banco de dados à interface do usuário.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="glassmorphism-card p-8 rounded-2xl" 
                custom={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }} 
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projetos */}
        <motion.section 
          id="projects" 
          className="py-16 md:py-24 w-full"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Projetos em Destaque</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['Todos', 'Dados', 'Web', 'Automações'].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  className={activeFilter === filter 
                    ? 'gradient-bg text-white border-0' 
                    : 'border-white/10 text-muted-foreground hover:text-white'}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glassmorphism-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5"
                >
                  <div className="relative h-64 overflow-hidden bg-black/40">
                    {project.images && project.images.length > 0 ? (
                      project.images.map((image, imageIndex) => (
                        <div 
                          key={imageIndex}
                          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                            imageIndex === 0 ? 'opacity-100' : 'opacity-0'
                          } cursor-pointer`}
                          style={{
                            animation: project.images.length > 1 ? `fadeInOut ${project.images.length * 3}s infinite ${imageIndex * 3}s` : 'none'
                          }}
                          onClick={() => {
                            const flatImages = projects.flatMap(proj => proj.images).filter(Boolean);
                            const globalIndex = flatImages.findIndex(img => img === image);
                            setLightboxOpen(true);
                            setCurrentImageIndex(globalIndex !== -1 ? globalIndex : 0);
                          }}
                        >
                          <img 
                            src={image} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.parentElement) {
                                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-muted-foreground/50 border border-white/5 bg-white/5 rounded-t-2xl">${project.title}</div>`;
                              }
                            }}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 bg-white/5">
                        <div className="flex flex-col items-center gap-2">
                          <ImageIcon className="w-12 h-12 opacity-20" />
                          <span className="text-sm font-medium">Em Breve</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10 z-20">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 group-hover:border-accent/50 transition-colors"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Ver Detalhes do Projeto
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Tecnologias */}
        <motion.section 
          id="technologies" 
          className="py-16 md:py-24 w-full"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Tecnologias & Ferramentas</h2>
            <p className="text-muted-foreground">Um stack moderno e completo para construir soluções escaláveis.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                variants={fadeInUp}
                className="glassmorphism-card p-8 rounded-2xl flex flex-col items-center border border-white/5"
              >
                <div className="bg-white/5 p-4 rounded-2xl mb-6 border border-white/5">
                  {skillCategory.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">{skillCategory.category}</h3>
                
                <div className="w-full space-y-4">
                  {skillCategory.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-black/20 p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                    >
                      <h4 className="text-accent font-medium mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contato */}
        <motion.section 
          id="contact" 
          className="py-16 md:py-32 w-full text-center relative"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full max-w-3xl mx-auto pointer-events-none" />
          
          <div className="relative z-10 glassmorphism-card max-w-4xl mx-auto p-12 rounded-3xl border border-accent/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Vamos Construir Algo Incrível?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Seja para estruturar seus dados, automatizar rotinas ou criar um site espetacular, estou pronto para ajudar no seu próximo desafio.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full gradient-bg text-white hover:opacity-90 px-8 py-6 text-lg rounded-xl flex items-center justify-center gap-3">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                  Falar no WhatsApp
                </Button>
              </a>
              <a href={`mailto:${contactEmail}`} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-white/20 text-foreground hover:bg-white/10 px-8 py-6 text-lg rounded-xl flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-accent" />
                  Enviar E-mail
                </Button>
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Image Modal */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentImageIndex}
          slides={projects
            .flatMap(project => project.images)
            .filter(Boolean)
            .map(image => ({ src: image }))}
        />
      )}

      <footer className="w-full py-8 border-t border-white/5 bg-background mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Gabriel Rosatto Dantas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Desenvolvido com</span>
            <span className="text-accent font-medium">React, TailwindCSS & Framer Motion</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;