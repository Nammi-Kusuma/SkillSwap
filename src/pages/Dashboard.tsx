"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/contexts/AuthContext"
import { Link } from "react-router-dom"
import {
  Calendar,
  Search,
  Star,
  Zap,
  Users,
  MessageSquare,
  Award,
  Clock,
  TrendingUp,
  Bell,
  BookOpen,
  ArrowRight,
  Activity,
} from "lucide-react"

const Dashboard = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Access Required</h2>
            <p className="text-muted-foreground mb-4">Please log in to access the dashboard</p>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const upcomingSessions = [
    {
      id: "1",
      partner: "Maria Garcia",
      skill: "Spanish Conversation",
      date: "2024-01-15",
      time: "2:00 PM",
      type: "learning",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "2",
      partner: "Tom Wilson",
      skill: "React Basics",
      date: "2024-01-16",
      time: "10:00 AM",
      type: "teaching",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ]

  const skillProgress = [
    { skill: "Photography", progress: 65, level: "Intermediate", sessions: 8 },
    { skill: "Spanish", progress: 30, level: "Beginner", sessions: 4 },
    { skill: "Cooking", progress: 45, level: "Beginner", sessions: 6 },
  ]

  const recentActivity = [
    {
      type: "session_completed",
      message: "Completed Photography session with Sarah Kim",
      time: "2 hours ago",
      icon: Award,
    },
    {
      type: "skill_match",
      message: "New skill match found: Guitar lessons",
      time: "1 day ago",
      icon: Users,
    },
    {
      type: "review_received",
      message: "Received 5-star review from Alex Chen",
      time: "2 days ago",
      icon: Star,
    },
    {
      type: "milestone",
      message: "Reached 10 completed sessions milestone!",
      time: "3 days ago",
      icon: TrendingUp,
    },
  ]

  const achievements = [
    { name: "First Swap", description: "Complete your first skill exchange", earned: true },
    { name: "Helpful Teacher", description: "Receive 10 five-star reviews", earned: true },
    { name: "Quick Learner", description: "Complete 5 learning sessions in a week", earned: false },
    { name: "Skill Master", description: "Reach advanced level in any skill", earned: false },
  ]

  const suggestedMatches = [
    {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      canTeach: "Photography",
      wantsToLearn: "Guitar",
      matchScore: 95,
      rating: 4.9,
    },
    {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      canTeach: "Spanish",
      wantsToLearn: "React",
      matchScore: 88,
      rating: 4.7,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-responsive py-6 sm:py-8 space-responsive">
        {/* Welcome Header */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-responsive-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground text-responsive-base">Continue your learning journey</p>
        </div>

        {/* Session Reminder Banner */}
        <Card className="mb-6 sm:mb-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/50 shadow-soft animate-slide-up">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center space-x-3">
                <Bell className="h-5 w-5 text-blue-600 mt-0.5 sm:mt-0 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100 text-sm sm:text-base">
                    Upcoming Session Reminder
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    Spanish Conversation with Maria Garcia in 2 hours
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="self-start sm:self-center focus-ring bg-transparent">
                Join Session
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-responsive-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="hover-lift shadow-soft transition-smooth">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Skill Tokens</p>
                  <p className="text-2xl sm:text-3xl font-bold">{user.tokens}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15 this week
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft transition-smooth">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Rating</p>
                  <p className="text-2xl sm:text-3xl font-bold">{user.rating}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.2 this month
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft transition-smooth">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Swaps</p>
                  <p className="text-2xl sm:text-3xl font-bold">3</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Activity className="h-3 w-3 mr-1" />2 new requests
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-soft transition-smooth">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sessions Done</p>
                  <p className="text-2xl sm:text-3xl font-bold">24</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +3 this week
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-responsive">
            {/* Upcoming Sessions */}
            <Card className="shadow-soft hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>Your scheduled skill swaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth gap-4"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={session.avatar || "/placeholder.svg"}
                          alt={session.partner}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-medium text-sm sm:text-base truncate">{session.skill}</h4>
                          <p className="text-sm text-muted-foreground">with {session.partner}</p>
                          <p className="text-sm text-muted-foreground">
                            {session.date} at {session.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 self-start sm:self-center">
                        <Badge variant={session.type === "teaching" ? "default" : "secondary"} className="text-xs">
                          {session.type === "teaching" ? "Teaching" : "Learning"}
                        </Badge>
                        <Button size="sm" variant="ghost" className="focus-ring">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 focus-ring bg-transparent" variant="outline" asChild>
                  <Link to="/calendar">
                    View Full Calendar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-soft hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Clock className="mr-2 h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest skill exchange updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                    >
                      <div className="flex-shrink-0 p-2 bg-muted rounded-full">
                        <activity.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm sm:text-base">{activity.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-responsive">
            {/* Skill Progress */}
            <Card className="shadow-soft hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learning Progress
                </CardTitle>
                <CardDescription>Track your skill development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillProgress.map((skill) => (
                    <div key={skill.skill}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm sm:text-base">{skill.skill}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                      <Progress value={skill.progress} className="h-2 mb-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{skill.progress}% complete</span>
                        <span>{skill.sessions} sessions</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Matches */}
            <Card className="shadow-soft hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Users className="mr-2 h-5 w-5" />
                  Skill Matches
                </CardTitle>
                <CardDescription>Perfect learning partners for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestedMatches.map((match, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={match.avatar || "/placeholder.svg"}
                          alt={match.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{match.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {match.rating}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {match.matchScore}% match
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">
                        <span className="font-medium">Teaches:</span> {match.canTeach} •
                        <span className="font-medium"> Learns:</span> {match.wantsToLearn}
                      </div>
                      <Button size="sm" className="w-full focus-ring">
                        Connect
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 focus-ring bg-transparent" asChild>
                  <Link to="/find-match">
                    Find More Matches
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft hover-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Award className="mr-2 h-5 w-5" />
                  Achievements
                </CardTitle>
                <CardDescription>Your skill exchange milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-smooth ${achievement.earned ? "bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800" : "opacity-50"}`}
                    >
                      <Award
                        className={`h-4 w-4 flex-shrink-0 ${achievement.earned ? "text-green-600" : "text-muted-foreground"}`}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-responsive-lg font-semibold mb-4 sm:mb-6">Quick Actions</h2>
          <div className="grid grid-responsive-4 gap-4">
            <Button size="lg" className="h-16 sm:h-20 focus-ring hover-glow" asChild>
              <Link to="/find-match" className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Search className="h-5 w-5" />
                <span className="text-sm sm:text-base">Find New Match</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 sm:h-20 focus-ring bg-transparent" asChild>
              <Link to="/messages" className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm sm:text-base">Check Messages</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 sm:h-20 focus-ring bg-transparent" asChild>
              <Link to="/profile" className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm sm:text-base">Update Profile</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 sm:h-20 focus-ring bg-transparent">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm sm:text-base">Schedule Session</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
