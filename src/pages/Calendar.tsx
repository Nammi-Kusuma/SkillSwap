
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar as CalendarIcon, Clock, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');

  const sessions = [
    {
      id: '1',
      title: 'Spanish Conversation',
      partner: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-15',
      time: '14:00',
      duration: 60,
      type: 'learning',
      status: 'confirmed'
    },
    {
      id: '2',
      title: 'Photography Basics',
      partner: 'Tom Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-16',
      time: '10:00',
      duration: 90,
      type: 'teaching',
      status: 'pending'
    },
    {
      id: '3',
      title: 'React Development',
      partner: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-17',
      time: '16:30',
      duration: 120,
      type: 'learning',
      status: 'confirmed'
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getSessionsForDate = (date: number) => {
    const dateString = `2024-01-${date.toString().padStart(2, '0')}`;
    return sessions.filter(session => session.date === dateString);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Calendar</h1>
          <p className="text-muted-foreground">Manage your skill exchange sessions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-semibold">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="outline" onClick={() => navigateMonth('prev')}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => navigateMonth('next')}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      New Session
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentDate).map((day, index) => {
                    if (day === null) {
                      return <div key={index} className="h-24 p-1"></div>;
                    }
                    
                    const daysSessions = getSessionsForDate(day);
                    const isToday = day === new Date().getDate() && 
                                   currentDate.getMonth() === new Date().getMonth() && 
                                   currentDate.getFullYear() === new Date().getFullYear();
                    
                    return (
                      <div
                        key={day}
                        className={`h-24 p-1 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                          isToday ? 'bg-primary/10 border-primary' : ''
                        }`}
                      >
                        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                          {day}
                        </div>
                        <div className="space-y-1">
                          {daysSessions.slice(0, 2).map((session) => (
                            <div
                              key={session.id}
                              className={`text-xs p-1 rounded truncate ${
                                session.type === 'teaching' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {formatTime(session.time)} {session.title}
                            </div>
                          ))}
                          {daysSessions.length > 2 && (
                            <div className="text-xs text-muted-foreground">
                              +{daysSessions.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Today's Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {sessions.filter(s => s.date === '2024-01-15').length > 0 ? (
                  <div className="space-y-3">
                    {sessions.filter(s => s.date === '2024-01-15').map((session) => (
                      <div key={session.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={session.avatar} alt={session.partner} />
                          <AvatarFallback>{session.partner.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{session.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {formatTime(session.time)} • {session.duration}min
                          </p>
                        </div>
                        <Badge variant={session.type === 'teaching' ? 'default' : 'secondary'}>
                          {session.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">No sessions scheduled for today</p>
                )}
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sessions.map((session) => (
                    <div key={session.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={session.avatar} alt={session.partner} />
                            <AvatarFallback>{session.partner.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{session.partner}</span>
                        </div>
                        <Badge 
                          variant={session.status === 'confirmed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {session.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {session.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {session.date} • {formatTime(session.time)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Sessions</span>
                    <span className="text-sm font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Teaching</span>
                    <span className="text-sm font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Learning</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Hours</span>
                    <span className="text-sm font-medium">12.5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
