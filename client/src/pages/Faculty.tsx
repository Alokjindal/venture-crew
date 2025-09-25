import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';
import { GraduationCap, Users, Award, Target, Download, TrendingUp } from 'lucide-react';

export default function Faculty() {
  const benefits = [
    {
      icon: Users,
      title: 'Student Engagement',
      description: 'Increased student participation in extracurricular activities and campus life',
      stats: '85% increase in student engagement'
    },
    {
      icon: Award,
      title: 'Leadership Development',
      description: 'Students develop crucial leadership, teamwork, and problem-solving skills',
      stats: '200+ students trained in leadership'
    },
    {
      icon: TrendingUp,
      title: 'Academic Performance',
      description: 'Adventure activities correlate with improved focus and academic outcomes',
      stats: '15% improvement in participating students'
    },
    {
      icon: Target,
      title: 'Character Building',
      description: 'Outdoor challenges build resilience, confidence, and personal growth',
      stats: '100% positive feedback on character development'
    }
  ];

  const partnershipTiers = [
    {
      title: 'Faculty Advisor',
      description: 'Provide guidance and mentorship to our adventure programs',
      benefits: ['Monthly advisor meetings', 'Trip planning consultation', 'Student mentor opportunities', 'Professional development credits'],
      commitment: '2-4 hours per month'
    },
    {
      title: 'Sponsor Partner',
      description: 'Support our mission through funding or equipment sponsorship',
      benefits: ['Brand visibility at events', 'Corporate social responsibility recognition', 'Employee team building opportunities', 'Tax benefits for educational donations'],
      commitment: 'Flexible investment levels'
    },
    {
      title: 'Active Participant',
      description: 'Join adventures and experience outdoor activities firsthand',
      benefits: ['Faculty-only adventure trips', 'Stress relief and wellness activities', 'Networking with other faculty', 'Adventure skills training'],
      commitment: 'Participate as desired'
    }
  ];

  const handleDownloadPitch = () => {
    console.log('Download faculty pitch PDF');
    // todo: remove mock functionality - implement actual PDF download
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">For Faculty & Sponsors</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us in shaping confident, capable leaders through outdoor adventures. Partner with 
            Ventures Crew to enhance student development and create lasting impact at GNDEC.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Badge variant="secondary">Educational Impact</Badge>
            <Badge variant="secondary">Leadership Development</Badge>
            <Badge variant="secondary">Community Building</Badge>
          </div>
        </div>

        {/* Value Proposition */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Why Partner With Us?</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Ventures Crew isn't just about outdoor activities—we're developing the next generation 
              of leaders through experiential learning and character-building challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-sans font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="font-serif text-muted-foreground mb-3">{benefit.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {benefit.stats}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Educational Impact */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary to-accent text-white">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-sans font-bold text-3xl mb-6">Educational Impact</h2>
                  <p className="font-serif text-lg mb-6 opacity-90 leading-relaxed">
                    Our adventure programs directly support GNDEC's educational mission by developing 
                    critical life skills that translate into academic and professional success.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-serif">Experiential learning outside the classroom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span className="font-serif">Team collaboration and communication skills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5" />
                      <span className="font-serif">Problem-solving under pressure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5" />
                      <span className="font-serif">Goal setting and achievement mindset</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-sans font-bold text-xl mb-4">By the Numbers</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="font-sans font-bold text-3xl">200+</div>
                      <div className="font-serif text-sm opacity-90">Students Impacted</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans font-bold text-3xl">50+</div>
                      <div className="font-serif text-sm opacity-90">Adventures Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans font-bold text-3xl">15%</div>
                      <div className="font-serif text-sm opacity-90">Academic Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans font-bold text-3xl">100%</div>
                      <div className="font-serif text-sm opacity-90">Safety Record</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partnership Opportunities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Partnership Opportunities</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Choose the level of involvement that works best for you. Every form of support 
              makes a meaningful difference in our students' lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {partnershipTiers.map((tier, index) => (
              <Card key={index} className="hover-elevate h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-sans text-xl">{tier.title}</CardTitle>
                  <p className="font-serif text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-sans font-semibold mb-3">Benefits Include:</h4>
                    <ul className="space-y-2 mb-4">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="font-serif text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="font-sans font-medium text-sm">Time Commitment:</div>
                    <div className="font-serif text-sm text-muted-foreground">{tier.commitment}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">What Faculty Say</h2>
            <p className="font-serif text-muted-foreground">
              Hear from faculty members who have experienced the impact of our programs firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <p className="font-serif text-muted-foreground mb-4 italic">
                  "The leadership skills I've seen students develop through Ventures Crew are remarkable. 
                  Students who participate show improved confidence and teamwork in the classroom."
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-sans font-semibold">Dr. Priya Sharma</div>
                  <div className="font-serif text-sm text-muted-foreground">Professor, Computer Science Department</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <p className="font-serif text-muted-foreground mb-4 italic">
                  "As a faculty advisor, I've been impressed by the club's commitment to safety and 
                  the positive character development I see in students who participate regularly."
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-sans font-semibold">Prof. Rajesh Kumar</div>
                  <div className="font-serif text-sm text-muted-foreground">Faculty Advisor & Mechanical Engineering</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Download & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Download Section */}
          <div>
            <Card>
              <CardContent className="p-8 text-center">
                <Download className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-bold text-2xl mb-4">Complete Partnership Guide</h3>
                <p className="font-serif text-muted-foreground mb-6">
                  Download our comprehensive partnership guide with detailed information about 
                  our programs, impact metrics, and collaboration opportunities.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="text-left">
                    <h4 className="font-sans font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1 font-serif text-sm text-muted-foreground">
                      <li>• Program overview and objectives</li>
                      <li>• Student impact and success stories</li>
                      <li>• Partnership benefits and opportunities</li>
                      <li>• Safety protocols and risk management</li>
                      <li>• Budget and sponsorship information</li>
                    </ul>
                  </div>
                </div>
                
                <Button 
                  onClick={handleDownloadPitch}
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  data-testid="button-download-faculty-pitch"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Partnership Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Next Steps */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-green-200 dark:border-green-800">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="font-sans font-bold text-2xl mb-4 text-green-800 dark:text-green-200">
                Ready to Make an Impact?
              </h2>
              <p className="font-serif text-green-700 dark:text-green-300 mb-6 max-w-2xl mx-auto">
                Join us in creating transformative experiences for GNDEC students. Whether you're 
                interested in advising, sponsoring, or participating, we'd love to discuss how we can work together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700"
                  data-testid="button-schedule-meeting"
                >
                  Schedule a Meeting
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white dark:text-green-300"
                  data-testid="button-visit-adventure"
                >
                  Visit Our Next Adventure
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}