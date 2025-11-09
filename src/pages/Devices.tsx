import { Watch, Smartphone, Activity, Heart, Droplet, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Devices = () => {
  const wearables = [
    {
      name: 'Apple Watch / Fitbit / Garmin / Oura Ring',
      tracks: ['Activity', 'Heart Rate', 'Sleep', 'Recovery'],
      helps: 'Track activity, heart rate, sleep, and recovery. Help users spot patterns and motivate movement.',
      matters: 'Contributing anonymized data to research studies while empowering personal wellness.',
      icon: Watch,
    },
    {
      name: 'Continuous Glucose Monitors (CGMs)',
      tracks: ['Glucose Levels', 'Trends', 'Patterns'],
      helps: 'Provide real-time glucose tracking for diabetes management.',
      matters: 'Helping patients and providers optimize treatment with continuous monitoring.',
      icon: Droplet,
    },
    {
      name: 'ECG Sensors',
      tracks: ['Heart Rhythm', 'Irregularities', 'AFib Detection'],
      helps: 'Detect irregular heart rhythms like atrial fibrillation.',
      matters: 'Alerting users to seek care sooner and potentially preventing serious complications.',
      icon: Heart,
    },
  ];

  const apps = [
    {
      name: 'MyFitnessPal / Samsung Health / Apple Health',
      tracks: ['Nutrition', 'Exercise', 'Hydration'],
      helps: 'Centralize lifestyle tracking across multiple health dimensions.',
      matters: 'Creating a comprehensive picture of daily health behaviors.',
    },
    {
      name: 'Sleep Cycle / Headspace',
      tracks: ['Sleep Patterns', 'Meditation', 'Mental Wellness'],
      helps: 'Promote mental wellness and better rest through behavioral tracking.',
      matters: 'Supporting holistic health beyond just physical metrics.',
    },
  ];

  const specialized = [
    {
      name: 'Blood Pressure Monitors',
      tracks: ['Blood Pressure', 'Pulse', 'Trends Over Time'],
      helps: 'Support hypertension management through automatic data logging.',
      matters: 'Enabling better chronic condition management and treatment adjustments.',
      icon: Activity,
    },
    {
      name: 'Fertility & Hormone Trackers',
      tracks: ['Cycle Patterns', 'Hormone Levels', 'Temperature'],
      helps: 'Empower reproductive health and family planning.',
      matters: 'Providing data-driven insights for reproductive decisions.',
      icon: Heart,
    },
    {
      name: 'Respiratory Trackers / Pulse Oximeters',
      tracks: ['Oxygen Saturation', 'Breathing Rate', 'Lung Function'],
      helps: 'Help monitor lung function, oxygen saturation, and recovery.',
      matters: 'Critical for respiratory condition management and post-illness monitoring.',
      icon: Wind,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 via-white via-30% to-white">
      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-custom px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">mHealth Devices & Apps</h1>
              <p className="text-xl text-muted-foreground">
                Real Tools That Power Modern Health
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This page spotlights the devices and apps transforming how we understand our bodies
                and manage health — organized by category, with quick summaries of what each does and
                why it matters.
              </p>
            </div>
          </div>
        </section>

        {/* Wearables */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-6">
            <h2 className="mb-12 animate-fade-in">Wearables</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wearables.map((device, index) => (
                <Card
                  key={device.name}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <device.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">What It Tracks</h4>
                      <div className="flex flex-wrap gap-2">
                        {device.tracks.map((track) => (
                          <Badge key={track} variant="secondary">
                            {track}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-secondary">How It Helps</h4>
                      <p className="text-sm text-muted-foreground">{device.helps}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-info">Why It Matters</h4>
                      <p className="text-sm text-muted-foreground">{device.matters}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Smartphone Apps */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <h2 className="mb-12 animate-fade-in">Smartphone Apps</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {apps.map((app, index) => (
                <Card
                  key={app.name}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-secondary/10">
                        <Smartphone className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{app.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">What It Tracks</h4>
                      <div className="flex flex-wrap gap-2">
                        {app.tracks.map((track) => (
                          <Badge key={track} variant="secondary">
                            {track}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-secondary">How It Helps</h4>
                      <p className="text-sm text-muted-foreground">{app.helps}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-info">Why It Matters</h4>
                      <p className="text-sm text-muted-foreground">{app.matters}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Medical Trackers */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-6">
            <h2 className="mb-12 animate-fade-in">Specialized Medical Trackers</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialized.map((device, index) => (
                <Card
                  key={device.name}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <device.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">What It Tracks</h4>
                      <div className="flex flex-wrap gap-2">
                        {device.tracks.map((track) => (
                          <Badge key={track} variant="secondary">
                            {track}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-secondary">How It Helps</h4>
                      <p className="text-sm text-muted-foreground">{device.helps}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-info">Why It Matters</h4>
                      <p className="text-sm text-muted-foreground">{device.matters}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Summary */}
        <section className="section-padding">
          <div className="container-custom px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="mb-6">Where Your Data Goes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each of these devices and apps collects valuable health data that flows through secure
                systems to healthcare providers, researchers, and public health databases. Understanding
                what your devices track and why it matters empowers you to use them more effectively
                and make informed decisions about your health data.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Devices;
