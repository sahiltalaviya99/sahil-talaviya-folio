import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface InfoCard {
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function AboutSection() {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const infoCards: InfoCard[] = [
    {
      title: "Education",
      content: "BE in Information Technology, GIT, 2025",
      icon: GraduationCap,
    },
    {
      title: "Experience",
      content: "iTechNotion Pvt Ltd, Frontend Developer Intern",
      icon: Briefcase,
    },
    {
      title: "Location",
      content: "Gujarat, India",
      icon: MapPin,
    },
    {
      title: "Interests",
      content: "MERN stack enthusiast with a focus on clean UI and scalable web apps.",
      icon: User,
    },
  ];

  useEffect(() => {
    const img = new Image();
    img.src = "/my.png";
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(false);
  }, []);

  return (
    <section id="about" className="py-24 relative">
      {/* Decorative background blob */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-section relative z-10 px-4 sm:px-6 md:px-8">
        <h2 className="section-title text-3xl sm:text-4xl font-bold text-foreground mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Avatar Section */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-primary/10 rounded-full blur opacity-50" />
              <Avatar
                className={cn(
                  "w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 border-none shadow-lg hover:shadow-xl transition-shadow",
                  isImageLoaded ? "opacity-100" : "opacity-50"
                )}
              >
                {isImageLoaded ? (
                  <AvatarImage
                    src="/my.png"
                    alt="Portrait of Sahil Talaviya, Frontend Developer"
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <AvatarFallback className="bg-primary/10">
                    <User className="w-20 sm:w-24 h-20 sm:h-24 text-primary" />
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>

          {/* Bio and Info Cards Section */}
          <div className="md:col-span-8 space-y-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Frontend Developer
                </h3>
                <div className="text-muted-foreground space-y-4 text-sm sm:text-base">
                  <p className="max-w-2xl">
                    I am Sahil Talaviya, a dedicated Frontend Developer currently
                    pursuing a Bachelor of Engineering in Information Technology at
                    GIT, with an expected graduation in 2025. I specialize in
                    developing responsive, accessible, and user-centric web
                    interfaces, emphasizing clean and efficient code.
                  </p>
                  <p className="max-w-2xl">
                    Since beginning my journey in web development during college, I
                    have refined my skills through diverse projects and internships.
                    I am committed to leveraging emerging technologies, including
                    AI, to enhance development processes, with a long-term goal of
                    becoming a proficient Full Stack Developer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Info Cards as Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map(({ title, content, icon: Icon }) => (
                <Card
                  key={title}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-base">{title}</h4>
                      <Badge
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm py-1.5 px-3 cursor-default mt-2"
                      >
                        {content}
                      </Badge>
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