import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import { Link } from "react-router-dom"
import { ArrowRight, Users, Calendar, Star, Zap, Search, Globe, Shield, Sparkles } from "lucide-react"

const Home = () => {
  const steps = [
    {
      step: "1",
      title: "Sign Up & Add Skills",
      description: "Create your profile and list what you can teach and want to learn",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Find Your Match",
      description: "Our algorithm connects you with compatible skill partners",
      icon: <Search className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Schedule & Swap",
      description: "Book sessions and start exchanging knowledge",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Rate & Earn",
      description: "Review sessions and earn tokens for future swaps",
      icon: <Star className="w-6 h-6" />,
    },
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Verified profiles and secure messaging",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with learners worldwide",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Matching",
      description: "Smart algorithm finds perfect partners",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Developer",
      skills: "Taught: Python → Learned: Photography",
      quote:
        "I helped Mark build his first web scraper, and he taught me portrait lighting. It felt amazing to exchange knowledge instead of money!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Music Teacher",
      skills: "Taught: Guitar → Learned: React",
      quote:
        "Trading guitar lessons for coding tutorials was brilliant. I gained a new skill while sharing my passion for music.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Language Coach",
      skills: "Taught: French → Learned: Digital Marketing",
      quote:
        "SkillSwap connected me with amazing people. I improved my career prospects while helping others learn languages.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ]

  const popularSkills = [
    "Programming",
    "Languages",
    "Design",
    "Music",
    "Photography",
    "Cooking",
    "Marketing",
    "Writing",
    "Fitness",
    "Art",
    "Business",
    "Crafts",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
        <div className="relative container-responsive py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-6 sm:mb-8">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium animate-bounce-subtle">
                🚀 Join the Skill Revolution
              </Badge>
            </div>

            <h1 className="text-responsive-3xl font-bold mb-6 sm:mb-8 text-gradient leading-tight">
              Trade Skills,
              <br className="hidden sm:block" />
              Not Money
            </h1>

            <p className="text-responsive-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Learn anything, teach everything. Connect with people who want to learn what you know, and teach what they
              excel at. No money, just knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
              <Button size="lg" className="text-lg px-8 py-6 hover-glow focus-ring" asChild>
                <Link to="/register">
                  Start Swapping <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 focus-ring bg-transparent" asChild>
                <Link to="/login">I'm Already a Member</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-responsive-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-slide-up">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Active Learners</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Skills Available</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 mb-2">25K+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Successful Swaps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">Why Choose SkillSwap?</h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
              Experience the future of learning with our innovative platform
            </p>
          </div>

          <div className="grid grid-responsive-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 sm:p-8 hover-lift shadow-soft hover-glow transition-smooth">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Skills */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">Popular Skills</h2>
            <p className="text-responsive-base text-muted-foreground">Discover what others are learning and teaching</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {popularSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm sm:text-base hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">How SkillSwap Works</h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to start exchanging knowledge with like-minded learners
            </p>
          </div>

          <div className="grid grid-responsive-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <Card key={step.step} className="relative border-2 hover-lift shadow-soft hover-glow transition-smooth">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 mx-auto shadow-medium">
                    {step.step}
                  </div>
                  <div className="mb-3 sm:mb-4 text-blue-600">{step.icon}</div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">Success Stories</h2>
            <p className="text-responsive-base text-muted-foreground">Real people, real skill swaps, real results</p>
          </div>

          <div className="grid grid-responsive-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="hover-lift shadow-soft hover-glow transition-smooth">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {testimonial.skills}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-sm sm:text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container-responsive text-center">
          <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Ready to Start Learning?</h2>
          <p className="text-responsive-lg mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners who are already trading skills and expanding their horizons.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-glow focus-ring" asChild>
            <Link to="/register">
              <Zap className="mr-2 h-5 w-5" />
              Get Started Free
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8 sm:py-12">
        <div className="container-responsive">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-gradient">SkillSwap</span>
            </div>
            <div className="text-muted-foreground text-sm text-center sm:text-right">
              © 2024 SkillSwap. Empowering knowledge exchange.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
