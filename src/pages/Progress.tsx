
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Award, 
  Calendar,
  Clock,
  Star,
  Plus,
  ArrowRight,
  CheckCircle2,
  Circle,
  PlayCircle
} from 'lucide-react';

const ProgressPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const learningGoals = [
    {
      id: '1',
      skill: 'React Development',
      currentLevel: 'Beginner',
      targetLevel: 'Intermediate',
      progress: 65,
      deadline: '2024-03-15',
      sessions: 8,
      totalSessions: 12,
      mentor: 'Tom Wilson',
      status: 'active'
    },
    {
      id: '2',
      skill: 'Spanish Conversation',
      currentLevel: 'Beginner',
      targetLevel: 'Conversational',
      progress: 40,
      deadline: '2024-04-01',
      sessions: 6,
      totalSessions: 15,
      mentor: 'Maria Garcia',
      status: 'active'
    },
    {
      id: '3',
      skill: 'Photography',
      currentLevel: 'Novice',
      targetLevel: 'Advanced',
      progress: 25,
      deadline: '2024-05-15',
      sessions: 3,
      totalSessions: 20,
      mentor: 'Sarah Kim',
      status: 'paused'
    }
  ];

  const skillMilestones = [
    {
      skill: 'React Development',
      milestones: [
        { title: 'Learn JSX Basics', completed: true, date: '2024-01-05' },
        { title: 'Master Hooks', completed: true, date: '2024-01-12' },
        { title: 'Component Lifecycle', completed: false, current: true },
        { title: 'State Management', completed: false },
        { title: 'Build Full Project', completed: false }
      ]
    }
  ];

  const recentSessions = [
    {
      id: '1',
      skill: 'React Development',
      date: '2024-01-10',
      duration: 90,
      mentor: 'Tom Wilson',
      rating: 5,
      notes: 'Excellent session on React hooks. Finally understand useEffect!'
    },
    {
      id: '2',
      skill: 'Spanish Conversation',
      date: '2024-01-08',
      duration: 60,
      mentor: 'Maria Garcia',
      rating: 4,
      notes: 'Great practice with past tense conjugations.'
    }
  ];

  const achievements = [
    { name: 'First Steps', description: 'Complete your first learning session', earned: true, date: '2024-01-01' },
    { name: 'Consistent Learner', description: 'Complete 5 sessions in a week', earned: true, date: '2024-01-08' },
    { name: 'Skill Sampler', description: 'Start learning 3 different skills', earned: true, date: '2024-01-10' },
    { name: 'Dedicated Student', description: 'Complete 25 learning sessions', earned: false },
    { name: 'Goal Crusher', description: 'Complete your first learning goal', earned: false },
    { name: 'Skill Master', description: 'Reach advanced level in any skill', earned: false }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Learning Progress</h1>
          <p className="text-muted-foreground">Track your skill development journey</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Goals</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Target className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg Progress</p>
                      <p className="text-2xl font-bold">43%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Sessions</p>
                      <p className="text-2xl font-bold">17</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Hours</p>
                      <p className="text-2xl font-bold">28.5</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Goals Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Learning Goals</CardTitle>
                  <CardDescription>Your active skill development targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {learningGoals.filter(goal => goal.status === 'active').map((goal) => (
                      <div key={goal.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{goal.skill}</h4>
                          <Badge variant="outline">{goal.progress}%</Badge>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{goal.sessions}/{goal.totalSessions} sessions</span>
                          <span>{getDaysUntilDeadline(goal.deadline)} days left</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Sessions</CardTitle>
                  <CardDescription>Your latest learning activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSessions.map((session) => (
                      <div key={session.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <BookOpen className="h-5 w-5 text-blue-500 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{session.skill}</h4>
                            <div className="flex items-center">
                              {[...Array(session.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            with {session.mentor} • {session.date} • {session.duration}min
                          </p>
                          <p className="text-xs italic">"{session.notes}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Learning Goals</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Set New Goal
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {learningGoals.map((goal) => (
                <Card key={goal.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{goal.skill}</CardTitle>
                      <Badge variant={goal.status === 'active' ? 'default' : 'secondary'}>
                        {goal.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {goal.currentLevel} → {goal.targetLevel}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${getProgressColor(goal.progress)}`}
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Sessions</div>
                          <div className="font-medium">{goal.sessions}/{goal.totalSessions}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Deadline</div>
                          <div className="font-medium">{getDaysUntilDeadline(goal.deadline)} days</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Mentor</div>
                          <div className="font-medium">{goal.mentor}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Status</div>
                          <div className="font-medium capitalize">{goal.status}</div>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-6">
            <h2 className="text-2xl font-semibold">Skill Milestones</h2>
            
            {skillMilestones.map((skillData) => (
              <Card key={skillData.skill}>
                <CardHeader>
                  <CardTitle>{skillData.skill} Learning Path</CardTitle>
                  <CardDescription>Track your progress through key milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillData.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {milestone.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : milestone.current ? (
                          <PlayCircle className="h-5 w-5 text-blue-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-medium ${milestone.completed ? 'text-muted-foreground' : ''}`}>
                              {milestone.title}
                            </span>
                            {milestone.completed && milestone.date && (
                              <span className="text-xs text-muted-foreground">{milestone.date}</span>
                            )}
                            {milestone.current && (
                              <Badge variant="default" className="text-xs">Current</Badge>
                            )}
                          </div>
                        </div>
                        
                        {milestone.current && (
                          <Button size="sm" variant="outline">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-semibold">Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`${achievement.earned ? 'border-green-200 bg-green-50 dark:bg-green-950' : 'opacity-60'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Award className={`h-12 w-12 ${achievement.earned ? 'text-green-600' : 'text-muted-foreground'}`} />
                      <div>
                        <h3 className="font-semibold text-lg">{achievement.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        {achievement.earned ? (
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">Earned</Badge>
                            {achievement.date && (
                              <span className="text-xs text-muted-foreground">{achievement.date}</span>
                            )}
                          </div>
                        ) : (
                          <Badge variant="outline" className="text-xs">Not Earned</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProgressPage;
