
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MessageSquare } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-muted-foreground/20 mb-4">404</div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oops! The page you're looking for seems to have wandered off. 
              Maybe it's off learning a new skill too!
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">What can you do?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button size="lg" className="h-16" asChild>
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Go Home
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16" asChild>
                  <Link to="/dashboard">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Dashboard
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16" asChild>
                  <Link to="/find-match">
                    <Search className="mr-2 h-5 w-5" />
                    Find Skills
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16" asChild>
                  <Link to="/messages">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Check Messages
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-muted-foreground">
            <p className="mb-2">Still need help?</p>
            <p>
              Contact our support team or visit our{' '}
              <Link to="/" className="text-primary hover:underline">
                help center
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
