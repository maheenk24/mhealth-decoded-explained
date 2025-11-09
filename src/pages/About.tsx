import { Target, Eye, Heart, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To demystify mHealth and wearables by providing accessible, evidence-based learning that connects personal devices to the bigger picture of healthcare and population wellness.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'A world where everyone understands how digital health fits into their daily lives — clearly, visually, and without jargon.',
    },
    {
      icon: Heart,
      title: 'Why It Matters',
      description:
        "Health technology shouldn't feel exclusive or confusing. When people understand the systems behind their devices, they can make informed choices and advocate for themselves.",
    },
  ];

  const approach = [
    {
      title: 'Plain Language',
      description: 'We explain every concept with clarity, not complexity.',
    },
    {
      title: 'Visual Learning',
      description: 'Infographics and interactive examples show how information flows — from wearables to health systems.',
    },
    {
      title: 'Real-World Application',
      description: "You'll see how mHealth supports chronic disease management, preventive care, and population health in action.",
    },
    {
      title: 'Ethical Awareness',
      description: "We address privacy, consent, and fairness head-on, helping you think critically about digital health's role in society.",
    },
  ];

  const goals = [
    'Grasp key concepts like data flow, interoperability, and privacy in plain language.',
    'Build confidence in using wearables and apps for real-world health decisions.',
    'Understand how their individual data contributes to smarter, safer healthcare systems.',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/40 via-white via-30% to-white">
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-gradient-subtle">
          <div className="container-custom px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">About This Project</h1>
              <p className="text-xl text-muted-foreground">
                Making Digital Health Understandable for Everyone
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-20">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mobile health (mHealth) technologies and wearables are reshaping how we care for
                ourselves, connect with providers, and improve public health. Yet, learning how they
                actually work can feel overwhelming — buried in buzzwords, dense research papers, or
                fragmented online articles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This project was created to change that.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe everyone deserves to understand how digital health fits into their daily
                lives — clearly, visually, and without jargon. Whether you're a student exploring the
                field, a healthcare professional adapting to new tools, or a curious learner trying to
                make sense of your smartwatch data, this site helps you bridge the gap between
                technology and health in a way that feels approachable and empowering.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="mb-8 text-center">We Aim to Help Visitors</h2>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-accent/50 card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{goal}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                Every explanation is expert-reviewed, Canadian-contextualized, and designed for
                clarity — so you can trust what you learn and apply it right away.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-12 text-center animate-fade-in">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {approach.map((item, index) => (
                  <Card
                    key={item.title}
                    className="card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Heart of It All */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-6">
                <BookOpen className="h-10 w-10 text-secondary" />
              </div>
              <h2 className="mb-6">The Heart of It All</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At its core, this project is about learning made human.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's about curiosity, empowerment, and trust — giving everyone, regardless of
                background, a fair chance to understand the digital health tools shaping their world.
                Because when people understand technology, they don't just use it — they use it wisely.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
