import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Briefcase, Code, Database, Server, Zap, Linkedin, Github, Mail, Cloud, Settings, Construction, Layers, Terminal, GitMerge, Brain, MessageSquare, MessageCircle, Instagram, X } from 'lucide-react';

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
  
  const dataEngineeringSkills = [
    {
      category: "Linguagens de Programação",
      icon: <Code className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Python", description: "Sintaxe clara, vastas bibliotecas (Pandas, NumPy, PySpark) para manipulação e análise de dados." },
        { name: "SQL", description: "Essencial para bancos de dados relacionais, otimização de queries, procedures e diversos dialetos (MySQL, PostgreSQL)." },
      ]
    },
    {
      category: "Bancos de Dados",
      icon: <Database className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Relacionais (SQL)", description: "PostgreSQL" },
        //{ name: "Relacionais (SQL)", description: "PostgreSQL, MySQL, SQL Server, Oracle." },
        { name: "Não Relacionais (NoSQL)", description: "MongoDB" },
        //{ name: "Não Relacionais (NoSQL)", description: "MongoDB, Cassandra, Redis, HBase." },
        { name: "Data Warehouses", description: "Google BigQuery" }
        //{ name: "Data Warehouses", description: "Amazon Redshift, Google BigQuery, Snowflake, Azure Synapse, Databricks Lakehouse." },
      ]
    },
    {
      category: "Ferramentas de Big Data",
      icon: <Layers className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Apache Hadoop", description: "Framework para processamento distribuído (HDFS, MapReduce)." },
        { name: "Apache Spark", description: "Processamento de dados em tempo real e em lote, análise em memória." },
        //{ name: "Apache Kafka", description: "Plataforma de streaming distribuído para eventos em tempo real." },
      ]
    },
    {
      category: "ETL e Orquestração de Dados",
      icon: <Settings className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Apache Airflow", description: "Gerenciamento de fluxo de trabalho, agendamento e monitoramento." },
        //{ name: "Prefect/Dagster", description: "Alternativas ao Airflow com recursos avançados." },
        //{ name: "Apache NiFi", description: "Automação de fluxos de dados entre sistemas." },
        //{ name: "Talend, Informatica, Fivetran, Airbyte", description: "Ferramentas de ingestão e transformação de dados." },
        //{ name: "dbt (data build tool)", description: "Transformação de dados com foco em colaboração e versionamento." },
      ]
    },
    {
      category: "Plataformas de Nuvem",
      icon: <Cloud className="w-10 h-10 text-accent mb-4" />,
      items: [
        //{ name: "AWS", description: "S3, EC2, RDS, DynamoDB, Redshift, EMR, Kinesis, Glue." },
        { name: "Google Cloud Platform (GCP)", description: "Cloud Storage, Compute Engine, BigQuery, Cloud SQL, Dataproc, Pub/Sub, Dataflow." },
        //{ name: "Microsoft Azure", description: "Data Lake Storage, VMs, SQL Database, Cosmos DB, Synapse Analytics, Databricks, Event Hubs, Data Factory." },
      ]
    },
    {
      category: "Modelagem de Dados",
      icon: <Construction className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Modelagem Dimensional", description: "Design e otimização para data warehouses (esquemas estrela e floco de neve)." },
      ]
    },
    {
      category: "DevOps e Automação",
      icon: <GitMerge className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Infraestrutura como Código (IaC)", description: "Terraform, CloudFormation." },
        { name: "Controle de Versão", description: "Git para colaboração e gerenciamento de código." },
        { name: "Containers e Orquestração", description: "Docker" },
        //{ name: "Containers e Orquestração", description: "Docker, Kubernetes." },
        { name: "CI/CD", description: "Automação de testes e implantações de pipelines de dados." },
      ]
    },
    {
      category: "Conhecimentos Complementares",
      icon: <Brain className="w-10 h-10 text-accent mb-4" />,
      items: [
        { name: "Linux/Unix", description: "Base para muitas tecnologias de Big Data e serviços de nuvem." },
        { name: "Segurança de Dados", description: "Práticas de segurança, criptografia e governança." },
        { name: "Qualidade de Dados", description: "Métodos para garantir integridade e precisão." },
        { name: "Monitoramento e Log", description: "Ferramentas para acompanhar desempenho." },
      ]
    }
  ];


  const services = [
    { 
      name: "Criação de Sistemas de Integração de Dados", 
      icon: <Code className="w-6 h-6 mr-3 text-primary" />,
      description: "Desenvolvo sistemas que permitem que diferentes partes da sua empresa compartilhem informações de forma segura e eficiente, como se fosse uma ponte digital entre seus departamentos."
    },
    { 
      name: "Organização e Estruturação de Dados", 
      icon: <Server className="w-6 h-6 mr-3 text-primary" />,
      description: "Ajudo a organizar suas informações de forma estruturada, como se fosse uma biblioteca digital, onde cada dado tem seu lugar certo e pode ser encontrado facilmente."
    },
    { 
      name: "Otimização de Bancos de Dados", 
      icon: <Database className="w-6 h-6 mr-3 text-primary" />,
      description: "Melhoro a performance dos seus sistemas de armazenamento de dados, fazendo com que as informações sejam acessadas mais rapidamente, como organizar um arquivo para encontrar documentos mais facilmente."
    },
    { 
      name: "Automação de Processos com Dados", 
      icon: <Zap className="w-6 h-6 mr-3 text-primary" />,
      description: "Crio sistemas que automatizam tarefas repetitivas com dados, como se fosse um assistente digital que trabalha 24 horas por dia, coletando e processando informações automaticamente."
    },
    { 
      name: "Integração de Sistemas", 
      icon: <Layers className="w-6 h-6 mr-3 text-primary" />,
      description: "Conecto diferentes sistemas e fontes de dados da sua empresa, permitindo que todos trabalhem juntos de forma harmoniosa, como uma orquestra onde cada instrumento tem seu papel."
    },
    { 
      name: "Soluções para Grandes Volumes de Dados", 
      icon: <Terminal className="w-6 h-6 mr-3 text-primary" />,
      description: "Desenvolvo sistemas capazes de lidar com grandes quantidades de informações em tempo real, como um sistema de controle de tráfego que processa milhares de dados por segundo."
    },
  ];

  const projects = [
    {
      title: "Facebook Ads Pipeline de dados para BigQuery",
      description: "Desenvolvimento de pipeline do Facebook Ads para Gestores de Trafego, onde o objetivo é extrair os dados das campanhas, anúncios, clientes, conversões, entre outros, e armazenar no BigQuery para análise e criação de dashboards.",
      technologies: ["Python", "Pandas", "Requests", "Bigquery"],
      images: [
        "/images/api meta ads app.jpg",
        "/images/api meta ads bigquery.jpg",
      ],
      link: "https://github.com/Gabriel-Rosatto-Dantas/API-Meta-Ads"
    },
    {
      title: "Data Warehouse Moderno",
      description: "Implementação de data warehouse na nuvem utilizando Snowflake e dbt para transformação de dados.",
      technologies: ["Snowflake", "dbt", "SQL", "Python"],
      images: [
      ],
      link: "#"
    },
    {
      title: "Sistema de Análise de Dados",
      description: "Sistema completo de análise de dados com dashboard interativo e relatórios automatizados.",
      technologies: ["Python", "PostgreSQL", "Power BI", "Airflow"],
      images: [
      ],
      link: "#"
    }
  ];

  const contactEmail = "dev.gabrielrosattodantas@gmail.com";
  const githubLink = "https://github.com/Gabriel-Rosatto-Dantas";
  const linkedinLink = "https://www.linkedin.com/in/gabriel-rosatto-dantas-30104b215/";
  const whatsappLink = "https://wa.me/5511992019057";
  const instagramLink = "https://instagram.com/devgabdantas";


  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center overflow-x-hidden">
      <Toaster />
      
      <motion.header 
        className="w-full py-6 px-4 md:px-8 fixed top-0 z-50 bg-background/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Gabriel Rosatto Dantas - Engenheiro de Dados</h1>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-background"
              onClick={() => {
                const homeSection = document.getElementById('hero');
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Home
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-background"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Sobre Mim
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-background"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-background"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Serviços
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-background"
              onClick={() => {
                const technologiesSection = document.getElementById('technologies');
                if (technologiesSection) {
                  technologiesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Tecnologias
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-background"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contato
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 md:px-8 pt-32 pb-16 flex-grow">
        <motion.section 
          id="hero" 
          className="text-center py-20 md:py-32"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="gradient-text">Engenharia de Dados</span> de Impacto para <span className="subtle-accent-text">Seu Negócio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Especialista em Python, SQL e ecossistemas de Big Data, transformando dados brutos em insights valiosos com 1 ano de experiência.
          </p>
        </motion.section>

        <motion.section 
          id="about" 
          className="py-16 md:py-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">Sobre Mim</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg flex-shrink-0">
                <img 
                  src="/images/Foto Gabriel.jpg" 
                  alt="Gabriel Rosatto Dantas" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Olá! Sou um Engenheiro de Dados Freelancer com 1 ano de experiência dedicados a construir e otimizar pipelines de dados robustos e escaláveis. Minha expertise centraliza-se em Python e SQL, complementada por um profundo conhecimento em tecnologias de Big Data, ETL, e plataformas de nuvem. Minha missão é ajudar empresas de tecnologia e recrutadores a extrair o máximo valor de seus dados, transformando desafios complexos em soluções data-driven eficientes e inovadoras.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-8 h-8 text-gray-400 hover:text-accent transition-colors" />
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-8 h-8 text-gray-400 hover:text-accent transition-colors" />
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-8 h-8 text-gray-400 hover:text-accent transition-colors" />
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon className="w-8 h-8 text-gray-400 hover:text-accent transition-colors" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="py-16 md:py-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glassmorphism-card rounded-lg overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                {...(index === 0 && { 
                  onClick: () => console.log('Clique no Card do Projeto: ', project.title)
                })}
              >
                <div className="relative">
                  <div className="relative h-48 overflow-hidden">
                    {project.images.map((image, imageIndex) => (
                      <div 
                        key={imageIndex}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                          imageIndex === 0 ? 'opacity-100' : 'opacity-0'
                        } cursor-pointer`}
                        style={{
                          animation: `fadeInOut ${project.images.length * 3}s infinite ${imageIndex * 3}s`
                        }}
                        onClick={() => {
                          const flatImages = projects.flatMap(proj => proj.images);
                          const globalIndex = flatImages.findIndex(img => img === image);
                          console.log('Clicada imagem:', image, 'Índice Global:', globalIndex);
                          setLightboxOpen(true);
                          setCurrentImageIndex(globalIndex);
                          console.log('lightboxOpen:', true, 'currentImageIndex:', globalIndex);
                        }}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Imagem ${imageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-background"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Ver Projeto
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="services" 
          className="py-16 md:py-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Serviços Oferecidos</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-8">
              {services.map((service, index) => (
                <motion.li 
                  key={index} 
                  className="glassmorphism-card p-6 rounded-xl" 
                  custom={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03 }} 
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    whileHover: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className="flex items-start">
                    {service.icon}
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-primary mb-2">{service.name}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section 
          id="technologies" 
          className="py-16 md:py-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Tecnologias e Ferramentas</h2>
          {console.log('Renderizando seção de tecnologias:', dataEngineeringSkills)}
          <div className="space-y-12">
            {dataEngineeringSkills.map((skillCategory, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <div className="flex flex-col items-center mb-8">
                  {skillCategory.icon}
                  <h3 className="text-2xl font-semibold text-primary">{skillCategory.category}</h3>
                </div>
                <div className={`grid gap-6 ${
                  skillCategory.items.length === 1 
                    ? 'grid-cols-1 max-w-md mx-auto' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {skillCategory.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex} 
                      className="glassmorphism-card p-6 rounded-xl text-center"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <h4 className="text-lg font-semibold text-accent mb-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="py-16 md:py-24 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Vamos Construir Algo Incrível?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Se você busca um especialista em Engenharia de Dados para seu próximo projeto, entre em contato!
          </p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="text-accent" />
              <span className="text-lg text-accent font-semibold">+55 11 99201-9057</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-accent" />
              <span className="text-lg text-accent font-semibold">dev.gabrielrosattodantas@gmail.com</span>
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
          slides={projects.flatMap(project => project.images.map(image => ({ 
            src: image,
            alt: project.title,
            title: project.title
          })))}
        />
      )}

      <footer className="w-full py-8 border-t border-border/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gabriel Rosatto Dantas. Todos os direitos reservados.</p>
          <p className="text-sm mt-1">Desenvolvido com <span className="text-accent">React, TailwindCSS & Framer Motion</span></p>
        </div>
      </footer>
    </div>
  );
};

export default App;