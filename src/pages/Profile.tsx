
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Award, 
  Edit, 
  Plus,
  BookOpen,
  TrendingUp,
  Users,
  Clock,
  ChevronRight
} from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return <div>Please log in to view your profile</div>;
  }

  const teachingSkills = [
    { name: 'Photography', level: 'Expert', experience: '5 years', students: 12, rating: 4.9 },
    { name: 'Spanish', level: 'Native', experience: 'Lifetime', students: 8, rating: 4.8 },
    { name: 'Cooking', level: 'Advanced', experience: '3 years', students: 6, rating: 4.7 }
  ];

  const learningSkills = [
    { name: 'React', progress: 65, sessions: 8, nextSession: 'Tomorrow 3PM' },
    { name: 'Guitar', progress: 30, sessions: 4, nextSession: 'Friday 7PM' },
    { name: 'French', progress: 45, sessions: 6, nextSession: 'Monday 2PM' }
  ];

  const recentSessions = [
    {
      type: 'taught',
      skill: 'Photography',
      partner: 'Sarah Kim',
      date: '2024-01-10',
      rating: 5,
      feedback: 'Amazing teacher! Very patient and knowledgeable.'
    },
    {
      type: 'learned',
      skill: 'React',
      partner: 'Tom Wilson',
      date: '2024-01-08',
      rating: 5,
      feedback: 'Great session on React hooks!'
    }
  ];

  const achievements = [
    { name: 'Master Teacher', description: '50+ successful sessions', icon: Award, earned: true },
    { name: 'Quick Learner', description: 'Complete 10 learning sessions', icon: TrendingUp, earned: true },
    { name: 'Community Helper', description: 'Help 25+ students', icon: Users, earned: true },
    { name: 'Skill Master', description: 'Reach expert level in 3 skills', icon: BookOpen, earned: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Barcelona, Spain
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {user.rating} ({user.totalReviews} reviews)
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined Jan 2023
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  Passionate photographer and language enthusiast. I love sharing my knowledge about photography techniques and Spanish culture while learning new tech skills. Always excited to meet fellow learners!
                </p>
                
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{user.tokens}</div>
                    <div className="text-sm text-muted-foreground">Skill Tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-sm text-muted-foreground">Sessions Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">12</div>
                    <div className="text-sm text-muted-foreground">Students Taught</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="teaching">Teaching</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Teaching Skills Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Teaching Skills</span>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Skill
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teachingSkills.slice(0, 3).map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.level} • {skill.students} students</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{skill.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Progress Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {learningSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} className="h-2 mb-2" />
                        <p className="text-xs text-muted-foreground">
                          Next: {skill.nextSession}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${session.type === 'taught' ? 'bg-green-500' : 'bg-blue-500'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">
                            {session.type === 'taught' ? 'Taught' : 'Learned'} {session.skill}
                          </h4>
                          <div className="flex items-center">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          with {session.partner} • {session.date}
                        </p>
                        <p className="text-sm italic">"{session.feedback}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teaching" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Skills I Teach</span>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Skill
                  </Button>
                </CardTitle>
                <CardDescription>Share your expertise with others</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teachingSkills.map((skill) => (
                    <Card key={skill.name}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <Badge variant="secondary">{skill.level}</Badge>
                          </div>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Experience</div>
                            <div className="font-medium">{skill.experience}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Students</div>
                            <div className="font-medium">{skill.students}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Rating</div>
                            <div className="font-medium flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              {skill.rating}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Skills I'm Learning</span>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Learning Goal
                  </Button>
                </CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {learningSkills.map((skill) => (
                    <Card key={skill.name}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{skill.name}</h3>
                          <Button size="sm" variant="outline">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{skill.progress}%</span>
                          </div>
                          <Progress value={skill.progress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Sessions</div>
                            <div className="font-medium">{skill.sessions} completed</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Next Session</div>
                            <div className="font-medium">{skill.nextSession}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Badges</CardTitle>
                <CardDescription>Celebrate your skill-swapping milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <Card key={achievement.name} className={`${achievement.earned ? 'border-green-200 bg-green-50 dark:bg-green-950' : 'opacity-60'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <achievement.icon className={`h-8 w-8 ${achievement.earned ? 'text-green-600' : 'text-muted-foreground'}`} />
                          <div>
                            <h3 className="font-semibold">{achievement.name}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            {achievement.earned && (
                              <Badge variant="secondary" className="mt-1">Earned</Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
