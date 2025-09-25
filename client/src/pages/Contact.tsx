import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, Download } from 'lucide-react';

export default function Contact() {
  const handleDownloadPitch = () => {
    console.log('Download faculty pitch PDF');
    // todo: remove mock functionality - implement actual PDF download
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your next adventure? Have questions about our activities? 
            We'd love to hear from you and help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Primary Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-xl mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-serif font-medium">Email</div>
                      <div className="font-serif text-muted-foreground">venturescrew@gndec.ac.in</div>
                      <div className="font-serif text-sm text-muted-foreground">
                        We typically respond within 24 hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-serif font-medium">Phone</div>
                      <div className="font-serif text-muted-foreground">+91 98765 43210</div>
                      <div className="font-serif text-sm text-muted-foreground">
                        Available during office hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-serif font-medium">Location</div>
                      <div className="font-serif text-muted-foreground">
                        Guru Nanak Dev Engineering College<br />
                        Ludhiana, Punjab, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-serif font-medium">Office Hours</div>
                      <div className="font-serif text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-xl mb-4">Follow Our Adventures</h3>
                <p className="font-serif text-muted-foreground mb-4">
                  Stay updated with our latest expeditions and connect with our community on social media.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="font-serif font-medium">Instagram:</div>
                    <div className="font-serif text-muted-foreground">@ventures.crew</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-serif font-medium">Facebook:</div>
                    <div className="font-serif text-muted-foreground">Ventures Crew GNDEC</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Faculty & Sponsors */}
            <Card className="bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-xl mb-4">For Faculty & Sponsors</h3>
                <p className="font-serif mb-6 opacity-90">
                  Interested in supporting our adventures or learning about partnership opportunities? 
                  Download our one-page pitch and discover how you can be part of our mission.
                </p>
                <Button 
                  onClick={handleDownloadPitch}
                  className="bg-white text-primary hover:bg-white/90"
                  data-testid="button-download-pitch"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Club Pitch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Campus Map Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-3xl mb-4">Find Us on Campus</h2>
            <p className="font-serif text-muted-foreground">
              Visit us at our office in the Student Activities Building or catch us at the campus adventure gear storage.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              {/* Placeholder for campus map */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-sans font-semibold text-lg mb-2">Campus Map</h3>
                  <p className="font-serif text-muted-foreground">
                    Interactive campus map will be embedded here showing<br />
                    our office location and meeting spots.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <section className="mt-16">
          <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <h3 className="font-sans font-bold text-xl mb-2 text-red-800 dark:text-red-200">
                Emergency Contact
              </h3>
              <p className="font-serif text-red-700 dark:text-red-300 mb-4">
                For emergency situations during club activities, contact:
              </p>
              <div className="font-sans font-bold text-lg text-red-800 dark:text-red-200">
                Emergency Hotline: +91 98765 00000
              </div>
              <p className="font-serif text-sm text-red-600 dark:text-red-400 mt-2">
                Available 24/7 during all club activities and expeditions
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}