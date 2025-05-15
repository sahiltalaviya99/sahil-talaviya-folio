
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-30"></div>
              <Avatar className="w-64 h-64 border-4 border-background shadow-xl">
                <AvatarImage src="/placeholder.svg" alt="Sahil Talaviya" className="object-cover" />
                <AvatarFallback className="bg-primary/10">
                  <User className="h-24 w-24 text-primary" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Frontend Developer 
              {/* & Web Tester based in India */}
            </h3>
            
            <div className="text-muted-foreground space-y-4 text-lg">
              <p>
                I am Sahil Talaviya, a dedicated Frontend Developer currently pursuing a Bachelor of Engineering in Information Technology at GIT, with an expected graduation in 2025. I specialize in developing responsive, accessible, and user-centric web interfaces, emphasizing clean and efficient code.
              </p>
              <p>
                Since beginning my journey in web development during college, I have refined my skills through diverse projects and internships. I am committed to leveraging emerging technologies, including AI, to enhance development processes, with a long-term goal of becoming a proficient Full Stack Developer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Education</h4>
                    <p className="text-muted-foreground">
                      B.Tech in Information Technology, GIT, 2025
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Experience</h4>
                    <p className="text-muted-foreground">
                      iTechNotion Pvt Ltd, Frontend Developer
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">
                      Gujarat, India
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Interests</h4>
                    <p className="text-muted-foreground">
                      Web Development, UI Design, Testing
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
