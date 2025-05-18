import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export default function ContactSection() {
  const contactItems: ContactItem[] = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Email",
      content: (
        <a
          href="mailto:sahiltalaviya9922@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          sahiltalaviya9922@gmail.com
        </a>
      ),
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Phone",
      content: (
        <a
          href="tel:+919909657018"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          +91 9909657018
        </a>
      ),
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Location",
      content: <span className="text-muted-foreground">Gujarat, India</span>,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/10 relative">
      {/* Background decoration - improved positioning */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-56 sm:h-56 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col  mb-12">
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-foreground relative inline-block">
            Contact Me
          </h2> */}
                  <h2 className="section-title md:text-left">Contact Me</h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8 w-full max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              {/* <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get In Touch
              </h3> */}
              <p className="text-muted-foreground text-base sm:text-lg">
                Feel free to reach out to me for any inquiries, collaboration
                opportunities, or just to say hello. I'll get back to you as soon
                as possible.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              {contactItems.map((item, idx) => (
                <Card 
                  key={idx} 
                  className="border border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
                    <div className="p-3 sm:p-4 rounded-md bg-primary/10 text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-1">{item.title}</h4>
                      {item.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Illustration */}
          <div className="lg:col-span-7 w-full">
            <Card className="overflow-hidden border-none shadow-xl rounded-lg transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="relative w-full h-0 pb-[75%] sm:pb-[66%] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&auto=format&fit=crop&q=80"
                    alt="Contact Illustration"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}