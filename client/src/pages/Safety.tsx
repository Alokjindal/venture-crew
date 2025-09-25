import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, Download, Phone } from 'lucide-react';
import safetyGearImage from '@assets/generated_images/Safety_gear_equipment_ffd8f144.png';

export default function Safety() {
  const safetyPrinciples = [
    {
      title: 'Never Adventure Alone',
      description: 'All activities are conducted in groups with experienced leaders and safety backup.',
    },
    {
      title: 'Quality Equipment Only',
      description: 'We use certified, regularly inspected safety equipment from trusted manufacturers.',
    },
    {
      title: 'Weather First',
      description: 'All activities are subject to weather conditions and may be postponed for safety.',
    },
    {
      title: 'Know Your Limits',
      description: 'Honest assessment of personal capabilities is essential for everyone\'s safety.',
    },
  ];

  const essentialGear = [
    { category: 'Personal Protection', items: ['Helmet', 'Safety harness', 'Protective gloves', 'Proper footwear'] },
    { category: 'Navigation & Communication', items: ['GPS device', 'Map and compass', 'Emergency whistle', 'Two-way radio'] },
    { category: 'First Aid & Emergency', items: ['Personal first aid kit', 'Emergency blanket', 'Flashlight', 'Extra batteries'] },
    { category: 'Weather Protection', items: ['Rain gear', 'Warm layers', 'Sun protection', 'Emergency shelter'] },
  ];

  const handleDownloadWaiver = () => {
    console.log('Download safety waiver PDF');
    // todo: remove mock functionality - implement actual PDF download
  };

  const handleDownloadChecklist = () => {
    console.log('Download gear checklist PDF');
    // todo: remove mock functionality - implement actual PDF download
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">Safety & Gear</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Safety is the foundation of every great adventure. Our comprehensive safety protocols and 
            quality gear ensure that you can focus on the excitement while we take care of your wellbeing.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Badge variant="secondary">100% Safety Record</Badge>
            <Badge variant="secondary">Certified Guides</Badge>
            <Badge variant="secondary">Professional Equipment</Badge>
          </div>
        </div>

        {/* Safety First Banner */}
        <div className="bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800 p-6 rounded-lg mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <h2 className="font-sans font-bold text-2xl text-green-800 dark:text-green-200">
              Safety is Our Priority
            </h2>
          </div>
          <p className="font-serif text-green-700 dark:text-green-300 leading-relaxed">
            In our three years of operation, we've maintained a perfect safety record through rigorous 
            planning, professional equipment, and comprehensive training. Every adventure is carefully 
            designed to challenge you while keeping risks minimal and manageable.
          </p>
        </div>

        {/* Safety Principles */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Our Safety Principles</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every decision we make, from planning adventures to responding to emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyPrinciples.map((principle, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{principle.title}</h3>
                      <p className="font-serif text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Essential Gear */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans font-bold text-3xl mb-6">Essential Gear Checklist</h2>
              <p className="font-serif text-muted-foreground mb-8 leading-relaxed">
                Proper equipment is crucial for safe adventures. While we provide specialized gear, 
                here's what you should bring or consider purchasing for regular participation.
              </p>

              <div className="space-y-6">
                {essentialGear.map((category, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-sans text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 gap-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="font-serif text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleDownloadChecklist}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  data-testid="button-download-checklist"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Complete Checklist
                </Button>
              </div>
            </div>

            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={safetyGearImage}
                alt="Professional adventure safety gear including helmets, ropes, harnesses, and first aid equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Emergency Procedures</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              While we work hard to prevent emergencies, we're fully prepared to handle any situation that may arise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-lg mb-3">24/7 Emergency Line</h3>
                <p className="font-serif text-muted-foreground mb-4">
                  Direct contact with our emergency response team during all activities.
                </p>
                <div className="font-sans font-bold text-lg text-primary">+91 98765 00000</div>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-lg mb-3">Trained Leaders</h3>
                <p className="font-serif text-muted-foreground">
                  All trip leaders are certified in wilderness first aid and emergency response procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-lg mb-3">Evacuation Plans</h3>
                <p className="font-serif text-muted-foreground">
                  Detailed evacuation procedures for every location we visit, with local emergency contacts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-sans font-bold text-2xl mb-4">Risk Assessment & Management</h2>
                  <p className="font-serif text-muted-foreground mb-6 leading-relaxed">
                    Every adventure begins with a thorough risk assessment. We evaluate weather conditions, 
                    terrain difficulty, group experience levels, and potential hazards to ensure appropriate 
                    safety measures are in place.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-serif">Pre-trip safety briefings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-serif">Continuous weather monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-serif">Dynamic route adjustment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-serif">Regular equipment inspections</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-sans font-semibold text-lg mb-4">Safety Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="font-sans font-bold text-2xl text-primary">100%</div>
                      <div className="font-serif text-sm text-muted-foreground">Safety Record</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans font-bold text-2xl text-primary">50+</div>
                      <div className="font-serif text-sm text-muted-foreground">Safe Adventures</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans font-bold text-2xl text-primary">0</div>
                      <div className="font-serif text-sm text-muted-foreground">Major Incidents</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans font-bold text-2xl text-primary">200+</div>
                      <div className="font-serif text-sm text-muted-foreground">Trained Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Safety Waiver */}
        <section className="mb-16">
          <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h2 className="font-sans font-bold text-2xl mb-4 text-amber-800 dark:text-amber-200">
                Safety Waiver Required
              </h2>
              <p className="font-serif text-amber-700 dark:text-amber-300 mb-6 max-w-2xl mx-auto">
                All participants must read, understand, and sign our safety waiver before joining any activities. 
                This document outlines the inherent risks of outdoor adventures and your responsibilities as a participant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleDownloadWaiver}
                  className="bg-amber-600 text-white hover:bg-amber-700"
                  data-testid="button-download-waiver"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Safety Waiver
                </Button>
                <Button 
                  variant="outline"
                  className="border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white dark:text-amber-300"
                  data-testid="button-waiver-faq"
                >
                  Waiver FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Safety Questions */}
        <section>
          <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-lg text-center">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h2 className="font-sans font-bold text-3xl mb-4">Safety Questions?</h2>
            <p className="font-serif text-lg mb-8 opacity-90">
              Have concerns about safety protocols or specific adventure requirements? 
              Our safety team is here to address all your questions and concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-contact-safety"
              >
                Contact Safety Team
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-safety-training"
              >
                Safety Training Info
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}