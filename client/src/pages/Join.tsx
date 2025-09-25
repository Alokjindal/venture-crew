import MembershipForm from '@/components/MembershipForm';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar, Award, Shield } from 'lucide-react';

export default function Join() {
  const benefits = [
    { icon: Users, title: 'Instant Community', description: 'Join 200+ like-minded adventurers' },
    { icon: Calendar, title: 'Regular Adventures', description: 'Access to weekly trips and activities' },
    { icon: Award, title: 'Skill Development', description: 'Learn from certified instructors' },
    { icon: Shield, title: 'Safety First', description: 'Comprehensive safety training included' },
  ];

  const membershipIncludes = [
    'Access to all club adventures and activities',
    'Professional safety training and certification',
    'Quality gear rental at discounted rates',
    'Transportation and meal arrangements',
    'Emergency insurance coverage during activities',
    'Leadership development opportunities',
    'Alumni network access and mentorship',
    'Exclusive member-only events and workshops'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">Join Ventures Crew</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards incredible adventures, lasting friendships, and personal growth. 
            Become part of GNDEC's most exciting community.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Badge variant="secondary">Open to All Students</Badge>
            <Badge variant="secondary">No Experience Required</Badge>
            <Badge variant="secondary">Faculty Welcome</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h2 className="font-sans font-bold text-3xl mb-6">Why Join Ventures Crew?</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} className="hover-elevate">
                    <CardContent className="p-6 flex items-start gap-4">
                      <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-sans font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="font-serif text-muted-foreground">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-xl mb-4">Membership Includes</h3>
                <ul className="space-y-3">
                  {membershipIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-serif text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-xl mb-4">Join Our Growing Community</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-sans font-bold text-2xl">200+</div>
                    <div className="font-serif text-sm opacity-90">Members</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-2xl">50+</div>
                    <div className="font-serif text-sm opacity-90">Adventures</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-2xl">100%</div>
                    <div className="font-serif text-sm opacity-90">Safety Record</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Membership Form */}
          <div>
            <MembershipForm />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Have questions about joining? Here are answers to the most common questions we receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-lg mb-3">Do I need prior experience?</h3>
                <p className="font-serif text-muted-foreground">
                  Not at all! We welcome complete beginners and provide comprehensive training for all activities. 
                  Our experienced members and instructors will guide you every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-lg mb-3">What about safety?</h3>
                <p className="font-serif text-muted-foreground">
                  Safety is our top priority. All activities are led by certified guides, we use professional 
                  equipment, and maintain comprehensive insurance coverage for all members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-lg mb-3">Are there membership fees?</h3>
                <p className="font-serif text-muted-foreground">
                  Basic membership is free for GNDEC students. Individual trip costs vary based on duration 
                  and included services, but we keep everything affordable for students.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-lg mb-3">Can faculty members join?</h3>
                <p className="font-serif text-muted-foreground">
                  Absolutely! We welcome faculty members and often have special faculty-focused adventures. 
                  Many faculty members serve as mentors and advisors to our student members.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}