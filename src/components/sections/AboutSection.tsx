import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-secondary/20 relative"
      aria-label="About Me"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-section px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center md:text-left">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Avatar */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-30"></div>
              <Avatar className="w-full h-full border-4 border-background shadow-xl">
                <AvatarImage
                  src="/my.png"
                  alt="Sahil Talaviya"
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary/10">
                  <User className="h-20 w-20 text-primary" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* About Info */}
          <div className="lg:col-span-8 space-y-8">
            

            {/* About Description Box */}
            <Card className="bg-white shadow-md border-none rounded-lg">
              
              <CardContent className="p-6 space-y-3 text-base sm:text-lg text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Frontend Developer pursuing B.E. in Information Technology at GIT (Graduating 2025).
                  </li>
                  <li>
                    Skilled in building responsive, accessible, and modern web interfaces using React and JavaScript.
                  </li>
                  <li>
                    Currently interning at iTechNotion Pvt. Ltd., contributing to real-world, production-ready projects.
                  </li>
                  <li>
                    Passionate about clean UI, scalable architecture, and leveraging AI tools for development efficiency.
                  </li>
                  <li>
                    Aspiring Full Stack Developer focused on delivering intuitive and high-performing applications.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  title: "Education",
                  description: "BE in Information Technology, GIT, 2025",
                },
                {
                  icon: <Briefcase className="h-6 w-6" />,
                  title: "Experience",
                  description: "iTechNotion Pvt Ltd, Frontend Developer Intern",
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Location",
                  description: "Gujarat, India",
                },
                {
                  icon: <User className="h-6 w-6" />,
                  title: "Interests",
                  description: "MERN stack enthusiast with a focus on clean UI and scalable web apps.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
