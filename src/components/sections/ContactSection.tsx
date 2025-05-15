import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-section relative z-10">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground text-lg">
              Feel free to reach out to me for any inquiries, collaboration
              opportunities, or just to say hello. I'll get back to you as soon
              as possible.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-md bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:sahil@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sahiltalaviya9922@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-md bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a
                    href="tel:+911234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9909657018
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Illustration Only */}
          <div className="lg:col-span-7">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1545665277-5937489579f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww"
                  alt="Contact Illustration"
                  className="w-full h-[450px] object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
