import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-health-tech.jpg';

const Home = () => {
  const learningSteps = [
    {
      number: '01',
      title: 'Start with the Basics',
      description: 'What is mHealth? Understand how phones, apps, and wearables track data like heart rate, sleep, and steps.',
      link: '/how-it-works',
    },
    {
      number: '02',
      title: 'Follow the Data',
      description: 'Visual explainers show how your health data flows from devices to doctors, databases, and public health systems.',
      link: '/how-it-works',
    },
    {
      number: '03',
      title: 'See It in Action',
      description: 'Real-world examples reveal how mHealth supports care for chronic diseases, preventive screenings, and wellness plans.',
      link: '/devices',
    },
    {
      number: '04',
      title: 'Understand Ethics & Privacy',
      description: "Learn how consent, interoperability, and data protection work behind the scenes to keep your information safe.",
      link: '/ethics',
    },
    {
      number: '05',
      title: 'Zoom Out to the Big Picture',
      description: 'See how your personal data helps drive population-level insights and smarter healthcare policies.',
      link: '/applications',
    },
    {
      number: '06',
      title: "Apply What You've Learned",
      description: "Walk away able to use wearables more effectively and talk digital health with clarity — in class, clinics, or conversation.",
      link: '/applications',
    },
  ];

  const assurances = [
    {
      icon: CheckCircle2,
      title: 'Is this accurate and trustworthy?',
      description: 'Every explanation is backed by reputable Canadian public health and informatics sources — no hype, just facts you can trust.',
    },
    {
      icon: Users,
      title: "What if I don't have a tech or medical background?",
      description: "We use plain language, relatable visuals, and real-world examples so anyone — student, professional, or curious explorer — can follow along with confidence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/40 via-secondary/10 via-50% to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle opacity-50"></div>
        <div className="container-custom px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="mb-6">
                Explore mHealth & Wearables,{' '}
                <span className="text-gradient">Made Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how mobile health technologies and wearables are transforming personal
                wellness, clinical care, and public health — all explained in clear, visual,
                real-world language.
              </p>
              <Link to="/how-it-works">
                <Button size="lg" className="gap-2 group">
                  Start Exploring Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Digital health visualization showing data from wearables"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Information Gap */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="mb-6">The Information Gap</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trying to learn mHealth? You're stuck between hype and heavy jargon.
            </p>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              Blogs focus on buzz, videos gloss over the details, and academic papers assume you
              already speak health informatics. There's no single, credible source that connects
              everyday wearables to data, care delivery, and population health — in a way that's
              clear, engaging, and built for learners.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="section-padding">
        <div className="container-custom px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">From Confused to Confident</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how mHealth really works — from devices to data to decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningSteps.map((step, index) => (
              <Link key={step.number} to={step.link}>
                <Card
                  className="card-hover animate-fade-in-up border-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-secondary hover:to-primary hover:text-primary-foreground group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 group-hover:text-primary-foreground/30 mb-4 transition-colors">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-foreground transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed transition-colors">{step.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert-Backed Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Expert-Backed. Beginner-Friendly.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {assurances.map((item, index) => (
              <Card
                key={item.title}
                className="card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="mb-6">Your Learning Journey Starts Here</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understand digital health — clearly, visually, and on your terms.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Whether you're a student, a professional, or just curious, everything you need to learn
              about mHealth is one click away. No sign-up. No paywall.
            </p>
            <Link to="/how-it-works">
              <Button size="lg" className="gap-2 group">
                Begin Learning
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
