import { Shield, Lock, Eye, Scale, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Ethics = () => {
  const principles = [
    {
      icon: CheckCircle2,
      title: 'Informed Consent',
      description:
        "Users should always understand what's collected, who sees it, and why. Consent must be clear, specific, and revocable at any time.",
    },
    {
      icon: Lock,
      title: 'Data Security',
      description:
        'Encryption, secure cloud servers, and anonymization protect your privacy from collection to storage. Multiple layers of security safeguard your most sensitive information.',
    },
    {
      icon: Shield,
      title: 'Interoperability Ethics',
      description:
        'Sharing across systems must be responsible — promoting better care without compromising individual rights. Standards ensure data moves safely.',
    },
    {
      icon: Scale,
      title: 'Ethical AI',
      description:
        'Algorithms used in mHealth tools must avoid bias and uphold fairness when analyzing or predicting health outcomes. Transparency in AI decision-making is crucial.',
    },
    {
      icon: Eye,
      title: 'Your Rights',
      description:
        'Under Canadian privacy law (PIPEDA and PHIPA), individuals can access, correct, or revoke consent for their digital health data at any time.',
    },
  ];

  const dataJourney = [
    {
      step: 'Collection',
      description: 'Your device collects health data with your permission',
      protection: 'Local encryption begins immediately',
    },
    {
      step: 'Transmission',
      description: 'Data travels securely to cloud servers',
      protection: 'End-to-end encryption protects data in transit',
    },
    {
      step: 'Storage',
      description: 'Information stored in secure, compliant databases',
      protection: 'Access controls and encryption at rest',
    },
    {
      step: 'Analysis',
      description: 'Healthcare providers or researchers analyze patterns',
      protection: 'Anonymization for research, controlled access for clinical use',
    },
    {
      step: 'Feedback',
      description: 'Insights returned to you and your care team',
      protection: 'Only authorized parties receive identifiable information',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/40 via-white via-30% to-white">
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-gradient-subtle">
          <div className="container-custom px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Ethics & Privacy</h1>
              <p className="text-xl text-muted-foreground">
                Protecting the Most Personal Data You Own
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-20">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With great data comes great responsibility. Health data is among the most sensitive
                information we produce — and managing it ethically is crucial to building trust in
                digital health.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This section explains how data protection, consent, and transparency underpin ethical
                mHealth design.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-6">
            <h2 className="text-center mb-12 animate-fade-in">Core Ethical Principles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card
                  key={principle.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="p-4 rounded-2xl bg-primary/10 inline-flex mb-6">
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Journey */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12 animate-fade-in">
                How Your Data Is Protected — Every Step of the Way
              </h2>
              
              <div className="space-y-6">
                {dataJourney.map((stage, index) => (
                  <Card
                    key={stage.step}
                    className="card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-[auto_1fr_1fr] gap-6 items-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{stage.step}</h3>
                          <p className="text-muted-foreground">{stage.description}</p>
                        </div>
                        <div className="bg-success/10 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Shield className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{stage.protection}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-12 animate-fade-in">Your Data Rights in Canada</h2>
              
              <div className="space-y-6 animate-fade-in-up">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">Access Your Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to request and receive a copy of all health data collected
                      about you, in a readable format.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">Correct Inaccuracies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If you find errors in your health data, you can request corrections to ensure
                      accuracy in your records.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">Revoke Consent</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You can withdraw your consent for data collection or sharing at any time,
                      though some health services may require data collection to function.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">Understand Usage</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to know how your data is being used, who has access to it,
                      and for what purposes it's being processed.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-6">Building Trust Through Transparency</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The future of digital health depends on trust. When you understand how your data is
                protected, who can access it, and what rights you have, you can engage with mHealth
                technologies confidently.
              </p>
              <p className="text-base text-muted-foreground">
                Every reputable mHealth platform should clearly communicate their privacy practices,
                data security measures, and your rights as a user. Don't hesitate to ask questions or
                seek clarity before sharing your health data.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ethics;
