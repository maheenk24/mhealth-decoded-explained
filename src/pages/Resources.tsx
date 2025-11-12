import { ExternalLink, BookOpen, Building2, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroResources from '@/assets/hero-resources.jpg';

const Resources = () => {
  const organizations = [
    {
      name: 'World Health Organization (WHO)',
      description: 'Global health authority with digital health guidelines and mHealth frameworks.',
      url: 'https://www.who.int/health-topics/digital-health',
    },
    {
      name: 'Canada Health Infoway',
      description: 'Independent organization advancing digital health across Canada.',
      url: 'https://www.infoway-inforoute.ca/en/',
    },
    {
      name: 'Canadian Institute for Health Information (CIHI)',
      description: "Provides essential data and insights on Canada's health systems and population health.",
      url: 'https://www.cihi.ca/',
    },
    {
      name: 'Public Health Agency of Canada (PHAC)',
      description: 'Federal agency responsible for public health, disease prevention, and health promotion.',
      url: 'https://www.canada.ca/en/public-health.html',
    },
  ];

  const readings = [
    {
      title: 'What Is mHealth?',
      source: 'WHO Digital Health Guidelines',
      description: 'Comprehensive introduction to mobile health technologies and their role in healthcare delivery.',
      url: 'https://www.who.int/publications/i/item/9789241550505',
    },
    {
      title: 'The Role of Wearables in Patient Monitoring',
      source: 'PubMed Central',
      description: 'Research on how wearable devices are transforming patient care and clinical decision-making.',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9330198/',
    },
    {
      title: 'Ethical AI in Healthcare',
      source: 'Health Canada Framework',
      description: 'Guidelines for ethical development and deployment of AI tools in health settings.',
      url: 'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html',
    },
  ];

  const quickFacts = [
    {
      fact: 'The average person generates over 2 million data points per year through wearables.',
      category: 'Data Volume',
    },
    {
      fact: 'Nearly 1 in 3 Canadians now use a health or fitness app regularly.',
      category: 'Adoption Rate',
    },
    {
      fact: 'Continuous glucose monitors can reduce hypoglycemic events by up to 40% in diabetes patients.',
      category: 'Clinical Impact',
    },
    {
      fact: 'Wearable ECG sensors can detect atrial fibrillation with over 95% accuracy.',
      category: 'Detection Accuracy',
    },
  ];

  const glossary = [
    {
      term: 'Interoperability',
      definition:
        'The ability of different health information systems, devices, and applications to access, exchange, and cooperatively use data in a coordinated manner.',
    },
    {
      term: 'FHIR',
      definition:
        'Fast Healthcare Interoperability Resources - a standard for exchanging healthcare information electronically.',
    },
    {
      term: 'De-identification',
      definition:
        'The process of removing or obscuring personal identifiers from health data to protect individual privacy.',
    },
    {
      term: 'Digital Twin',
      definition:
        'A virtual representation of a patient created using continuous health data, used to model health scenarios and predict outcomes.',
    },
    {
      term: 'Health Equity',
      definition:
        'The principle that everyone should have a fair opportunity to attain their full health potential, regardless of social position or circumstances.',
    },
    {
      term: 'Precision Medicine',
      definition:
        'A medical approach that uses individual variability in genes, environment, and lifestyle to customize healthcare for each patient.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 via-white via-30% to-white">
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-gradient-subtle">
          <div className="container-custom px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Resources</h1>
              <p className="text-xl text-muted-foreground">
                Learn, Explore, and Stay Informed
              </p>
              <p className="text-base text-muted-foreground mt-4">
                A curated library for anyone wanting to dive deeper into health data, privacy, and
                digital innovation.
              </p>
              <div className="mt-8">
                <img 
                  src={heroResources} 
                  alt="Library with educational resources and digital learning materials"
                  className="w-full rounded-xl shadow-lg animate-fade-in"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Organizations */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-20">
          <div className="container-custom px-6">
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
              <div className="p-3 rounded-xl bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h2>Organizations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {organizations.map((org, index) => (
                <Card
                  key={org.name}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{org.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{org.description}</p>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Readings */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-6">
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
              <div className="p-3 rounded-xl bg-secondary/10">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h2>Key Readings</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {readings.map((reading, index) => (
                <Card
                  key={reading.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold">{reading.title}</h3>
                      <Badge variant="secondary">{reading.source}</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {reading.description}
                    </p>
                    <a
                      href={reading.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      Read More
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-6">
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
              <div className="p-3 rounded-xl bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2>Did You Know?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {quickFacts.map((item, index) => (
                <Card
                  key={item.fact}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <Badge className="mb-4" variant="outline">
                      {item.category}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">{item.fact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <h2 className="text-center mb-12 animate-fade-in">Key Terms Glossary</h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {glossary.map((item, index) => (
                <Card
                  key={item.term}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">{item.term}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
