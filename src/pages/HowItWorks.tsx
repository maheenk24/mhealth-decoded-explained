import { Smartphone, Cloud, Database, BarChart3, Users, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const dataFlow = [
    {
      step: 1,
      icon: Smartphone,
      title: 'Collection',
      description:
        'Sensors on wearables (like accelerometers, optical heart rate monitors, or thermometers) gather continuous physiological data.',
    },
    {
      step: 2,
      icon: Cloud,
      title: 'Sync & Storage',
      description:
        'Apps and phones collect, store, and encrypt this data before sending it securely to cloud servers.',
    },
    {
      step: 3,
      icon: Database,
      title: 'Integration',
      description:
        'Health data is linked with other systems, such as electronic health records (EHRs), through standardized formats like HL7 and FHIR.',
    },
    {
      step: 4,
      icon: BarChart3,
      title: 'Analysis & Feedback',
      description:
        'Clinicians, researchers, and algorithms analyze patterns — turning data into insight. Personalized feedback loops then inform your next health decisions.',
    },
    {
      step: 5,
      icon: Users,
      title: 'Public Health Impact',
      description:
        'Aggregated, anonymized data reveals trends that guide population-level interventions and resource planning.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-20 md:pb-12 bg-gradient-subtle">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">How mHealth Works</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                From Your Device to the Health System — Explained Simply
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="pt-8 pb-12 sm:pb-16 md:pt-12 md:pb-20">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Every time you check your heart rate, log your steps, or track your sleep, your device
                collects tiny data points — signals about your well-being. But what happens next?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This section walks you through the journey of health data — from your wearable or app
                to healthcare providers, research networks, and public health databases.
              </p>
            </div>
          </div>
        </section>

        {/* Data Flow Steps */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-4 sm:px-6">
            <h2 className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">The Data Journey</h2>
            
            <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
              {dataFlow.map((item, index) => (
                <div key={item.step}>
                  <Card
                    className="card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-5 sm:p-6 md:p-8">
                      <div className="grid md:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start">
                        {/* Icon and Step Number */}
                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                          <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-primary/10">
                            <item.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                          </div>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg">
                            {item.step}
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow between steps */}
                  {index < dataFlow.length - 1 && (
                    <div className="flex justify-center my-4 sm:my-6">
                      <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">Key Concepts</h2>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="card-hover animate-fade-in-up">
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Interoperability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The ability of different health systems and devices to exchange, interpret, and
                      use data seamlessly. Standards like HL7 and FHIR make this possible.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Data Encryption</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your health data is protected during transmission and storage using advanced
                      encryption, ensuring only authorized parties can access it.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Anonymization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When used for research or public health, personal identifiers are removed from
                      your data to protect your privacy while enabling valuable insights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Feedback Loops</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Continuous data collection enables real-time insights and personalized
                      recommendations, creating a cycle of monitoring, analysis, and action.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Summary */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="mb-6">The Complete Picture</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Throughout this journey, visitors will see visual data flow diagrams showing how
                interoperability connects individuals to the wider healthcare ecosystem. Your personal
                health data doesn't exist in isolation — it's part of a larger network designed to
                improve care for individuals and populations alike.
              </p>
              <p className="text-base text-muted-foreground">
                Understanding this flow helps you make informed decisions about which devices to use,
                how to share your data, and what questions to ask your healthcare providers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
