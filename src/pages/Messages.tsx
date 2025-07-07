
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/components/Navbar';
import { 
  MessageSquare, 
  Send, 
  Search, 
  Calendar,
  Video,
  Phone,
  MoreVertical,
  Paperclip,
  Smile,
  Clock
} from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState('1');
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Perfect! See you tomorrow at 2 PM for our Spanish session',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      skill: 'Spanish Conversation'
    },
    {
      id: '2',
      name: 'Tom Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Thanks for the React tutorial! The hooks explanation was really helpful',
      timestamp: '1 hour ago',
      unread: 0,
      online: false,
      skill: 'React Development'
    },
    {
      id: '3',
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Could we reschedule our photography session to next week?',
      timestamp: '3 hours ago',
      unread: 1,
      online: true,
      skill: 'Photography'
    },
    {
      id: '4',
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The cooking session was amazing! Thanks for teaching me paella',
      timestamp: '1 day ago',
      unread: 0,
      online: false,
      skill: 'Spanish Cooking'
    }
  ];

  const messages = [
    {
      id: '1',
      senderId: '2',
      senderName: 'Maria Garcia',
      content: 'Hi! I saw your request to learn Spanish. I\'d love to help you out!',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: '2',
      senderId: 'me',
      senderName: 'You',
      content: 'That would be amazing! I\'ve been wanting to improve my conversational Spanish.',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: '3',
      senderId: '2',
      senderName: 'Maria Garcia',
      content: 'Great! In exchange, could you help me with photography? I saw you\'re quite experienced.',
      timestamp: '10:33 AM',
      type: 'text'
    },
    {
      id: '4',
      senderId: 'me',
      senderName: 'You',
      content: 'Absolutely! I\'d be happy to teach you photography basics. When would you like to start?',
      timestamp: '10:35 AM',
      type: 'text'
    },
    {
      id: '5',
      senderId: '2',
      senderName: 'Maria Garcia',
      content: 'How about tomorrow at 2 PM? We could start with a 1-hour Spanish conversation, then you can teach me portrait photography.',
      timestamp: '10:40 AM',
      type: 'text'
    },
    {
      id: '6',
      senderId: 'me',
      senderName: 'You',
      content: 'Perfect! See you tomorrow at 2 PM for our Spanish session',
      timestamp: '10:42 AM',
      type: 'text'
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="h-[calc(100vh-12rem)] flex gap-6">
          {/* Conversations List */}
          <Card className="w-1/3 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Messages
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full">
                <div className="space-y-1 p-4">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation.id)}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted ${
                        selectedChat === conversation.id ? 'bg-muted' : ''
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium truncate">{conversation.name}</h3>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                            {conversation.unread > 0 && (
                              <Badge variant="default" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate mb-1">
                          {conversation.lastMessage}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {conversation.skill}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                          <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {selectedConversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedConversation.online ? 'Online' : 'Last seen 2 hours ago'} • {selectedConversation.skill}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${message.senderId === 'me' ? 'order-2' : 'order-1'}`}>
                            <div
                              className={`p-3 rounded-lg ${
                                message.senderId === 'me'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted'
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                            <div className={`flex items-center mt-1 text-xs text-muted-foreground ${
                              message.senderId === 'me' ? 'justify-end' : 'justify-start'
                            }`}>
                              <Clock className="h-3 w-3 mr-1" />
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex items-center space-x-2 mt-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      📅 Schedule Session
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      💡 Propose Swap
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      ⭐ Leave Review
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No conversation selected</h3>
                  <p className="text-muted-foreground">Choose a conversation to start messaging</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
