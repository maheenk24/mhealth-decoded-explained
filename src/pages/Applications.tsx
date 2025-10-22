import { HeartPulse, Shield, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Applications = () => {
  const chronicDiseaseExamples = [
    {
      condition: 'Diabetes Management',
      description:
        'Patients use continuous glucose monitors to adjust insulin in real time, reducing dangerous spikes and crashes.',
      impact:
        'Better glucose control reduces long-term complications and improves quality of life.',
    },
    {
      condition: 'Cardiac Health',
      description:
        'Wearables detect irregular heart rhythms early, alerting users to seek medical attention.',
      impact:
        'Early detection of conditions like atrial fibrillation can prevent strokes and heart failure.',
    },
    {
      condition: 'Asthma & COPD',
      description:
        'Tracking apps help individuals monitor triggers and share updates with providers.',
      impact:
        'Better trigger management leads to fewer emergency visits and improved respiratory health.',
    },
  ];

  const preventiveCareExamples = [
    {
      title: 'Early Warning Detection',
      description:
        'Sleep, activity, and stress data reveal early warning signs of illness or burnout before serious symptoms develop.',
    },
    {
      title: 'Behavior Change',
      description:
        'Step count and heart rate trends encourage healthy behavior change before disease develops, promoting long-term wellness.',
    },
    {
      title: 'Preventive Screenings',
      description:
        'Continuous monitoring can identify patterns that warrant preventive screenings or lifestyle interventions.',
    },
  ];

  const populationExamples = [
    {
      title: 'Epidemiological Research',
      description:
        'Aggregated mHealth data supports research by mapping trends in physical activity, stress, or chronic disease prevalence across populations.',
    },
    {
      title: 'Resource Allocation',
      description:
        "Public health agencies use population-level data to design targeted interventions and improve resource allocation where it's needed most.",
    },
    {
      title: 'Health Equity',
      description:
        'Population data can reveal health disparities and inform policies to address inequities in healthcare access and outcomes.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Real-World Applications</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                How mHealth Is Transforming Care
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Digital health isn't just about numbers — it's about real impact on people and
                systems. This section uses real-world examples to show how continuous, personalized
                data helps healthcare professionals and public health teams improve outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Chronic Disease Management */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 md:mb-12 animate-fade-in">
              <div className="p-2 sm:p-3 rounded-xl bg-primary/10">
                <HeartPulse className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h2 className="text-center sm:text-left">Chronic Disease Management</h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
              {chronicDiseaseExamples.map((example, index) => (
                <Card
                  key={example.condition}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    <div className="grid md:grid-cols-[1fr_auto] gap-4 sm:gap-6">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">{example.condition}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                          {example.description}
                        </p>
                        <div className="bg-success/10 p-3 sm:p-4 rounded-lg">
                          <p className="text-sm font-medium text-success-foreground">
                            <span className="font-bold">Impact:</span> {example.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Preventive Care */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 md:mb-12 animate-fade-in">
              <div className="p-2 sm:p-3 rounded-xl bg-secondary/10">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              </div>
              <h2 className="text-center sm:text-left">Preventive Care & Early Detection</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {preventiveCareExamples.map((example, index) => (
                <Card
                  key={example.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3 text-secondary">{example.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{example.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Population-Level Insights */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 md:mb-12 animate-fade-in">
              <div className="p-2 sm:p-3 rounded-xl bg-primary/10">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h2 className="text-center sm:text-left">Population-Level Insights</h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
              {populationExamples.map((example, index) => (
                <Card
                  key={example.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3">{example.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{example.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Micro to Macro */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-primary/10 mb-6">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h2 className="mb-6">From Individual to Population Impact</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                The power of mHealth lies in its dual impact: improving individual health outcomes
                while contributing to broader public health insights.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                When you track your steps, monitor your heart rate, or log your sleep, you're not
                just helping yourself — anonymized data from millions of users helps researchers
                understand health trends, identify at-risk populations, and develop evidence-based
                interventions.
              </p>
              <p className="text-base text-muted-foreground">
                This &quot;micro-to-macro&quot; flow demonstrates how personal health data, when ethically
                aggregated and analyzed, becomes a powerful tool for advancing public health and
                creating more equitable healthcare systems.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Applications;
