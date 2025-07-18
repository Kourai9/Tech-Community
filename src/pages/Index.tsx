
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Home, MessageCircle, Bell, Users, BookOpen, MapPin, Search, Plus, MoreHorizontal, Heart, MessageSquare, Share, User, GraduationCap, Menu, X } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const posts = [
    {
      id: 1,
      author: "Maria Santos",
      course: "BSIT 3rd Year",
      time: "2h",
      content: "Just finished my React portfolio! Looking for feedback from fellow developers. Link in comments 🚀",
      image: "/lovable-uploads/7e8e72de-e1ea-4a77-958e-6c35b8097a98.png",
      likes: 24,
      comments: 8,
      shares: 3,
      skills: ["React", "JavaScript", "Web Dev"]
    },
    {
      id: 2,
      author: "John Dela Cruz",
      course: "BSCS 4th Year",
      time: "4h",
      content: "Study group for Data Structures tomorrow at the library! Room 203, 2PM. Bring your laptops 💻",
      likes: 18,
      comments: 12,
      shares: 6,
      skills: ["Data Structures", "Algorithms", "C++"]
    },
    {
      id: 3,
      author: "Sarah Johnson",
      course: "BSIT 2nd Year",
      time: "6h",
      content: "Lost my blue notebook with Database Systems notes. Last seen at the cafeteria. Please message me if found! 📚",
      likes: 8,
      comments: 4,
      shares: 12,
      skills: ["Database", "SQL"]
    }
  ];

  const studyGroups = [
    { name: "JavaScript Bootcamp", members: 45, topic: "Web Development" },
    { name: "Python Data Science", members: 32, topic: "Data Analysis" },
    { name: "Mobile App Dev", members: 28, topic: "Flutter & React Native" }
  ];

  const nearbyStudents = [
    { name: "Alex Rivera", course: "BSCS 3rd", distance: "50m away", skills: ["Python", "AI"] },
    { name: "Lisa Chen", course: "BSIT 4th", distance: "120m away", skills: ["Web Dev", "React"] },
    { name: "Mark Torres", course: "BSCS 2nd", distance: "200m away", skills: ["Java", "Mobile"] }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "messages":
        return (
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Messages</h2>
                <p className="text-gray-400">Your private conversations and group chats will appear here.</p>
              </CardContent>
            </Card>
          </div>
        );
      case "portfolio":
        return (
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Student Portfolio</h2>
                <p className="text-gray-400">Showcase your achievements, skills, and projects here.</p>
              </CardContent>
            </Card>
          </div>
        );
      case "study":
        return (
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Study Groups</h2>
                <p className="text-gray-400">Join study groups and collaborate with fellow students.</p>
                <div className="mt-6 space-y-4">
                  {studyGroups.map((group, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{group.name}</p>
                        <p className="text-sm text-gray-400">{group.members} members</p>
                      </div>
                      <Badge className="bg-blue-600 text-white">
                        {group.topic}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return (
          <>
            {/* Create Post */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-gray-400 bg-gray-700 border-gray-600 h-8 sm:h-10 text-sm px-3"
                    >
                      What's on your mind, Juan?
                    </Button>
                  </div>
                  <Button size="sm" className="flex-shrink-0 h-8 sm:h-10 px-2 sm:px-4">
                    <Plus className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Post</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-white text-sm sm:text-base truncate">{post.author}</h4>
                        <p className="text-xs sm:text-sm text-gray-400 truncate">{post.course} • {post.time}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="flex-shrink-0">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-white mb-3 text-sm sm:text-base">{post.content}</p>

                  {post.skills && (
                    <div className="flex gap-1 sm:gap-2 mb-3 flex-wrap">
                      {post.skills.map((skill, index) => (
                        <Badge key={index} className="bg-blue-600 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {post.image && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <img src={post.image} alt="Post content" className="w-full h-48 sm:h-64 object-cover" />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments • {post.shares} shares</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                    <Button variant="ghost" size="sm" className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 text-gray-400 hover:text-red-400">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Like</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 text-gray-400 hover:text-blue-400">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Comment</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 text-gray-400 hover:text-green-400">
                      <Share className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Share</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-3 sm:px-4 py-2 sm:py-3 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">FIT Connect</h1>
            <div className="relative flex-1 max-w-md hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search students, posts, study groups..." 
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("home")}
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Button>
            <Button
              variant={activeTab === "messages" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("messages")}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messages</span>
            </Button>
            <Button
              variant={activeTab === "portfolio" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("portfolio")}
              className="flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Portfolio</span>
            </Button>
            <Button
              variant={activeTab === "study" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("study")}
              className="flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Study Groups</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-3 h-3"></span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-gray-700">
            <div className="flex flex-col space-y-1 mt-3">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  setActiveTab("home");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Button>
              <Button
                variant={activeTab === "messages" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  setActiveTab("messages");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Messages</span>
              </Button>
              <Button
                variant={activeTab === "portfolio" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  setActiveTab("portfolio");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <User className="w-4 h-4" />
                <span>Portfolio</span>
              </Button>
              <Button
                variant={activeTab === "study" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  setActiveTab("study");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <BookOpen className="w-4 h-4" />
                <span>Study Groups</span>
              </Button>
            </div>
            
            {/* Mobile Search */}
            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search students, posts, study groups..." 
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>
        )}
      </header>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4">
        {/* Left Sidebar - Hidden on mobile, shown on tablet+ */}
        <aside className="hidden md:block w-full md:w-60 lg:w-64 space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm sm:text-base truncate">Juan Dela Cruz</h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">BSIT 3rd Year</p>
                </div>
              </div>
              <Button className="w-full" variant="outline" size="sm">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="text-sm">View Portfolio</span>
              </Button>
            </CardContent>
          </Card>

          {/* Study Groups */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-white text-sm sm:text-base">Active Study Groups</h3>
              {studyGroups.map((group, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm text-white truncate">{group.name}</p>
                    <p className="text-xs text-gray-400">{group.members} members</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white text-xs ml-2 flex-shrink-0">
                    {group.topic}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Nearby Students */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white text-sm sm:text-base">Nearby Students</h3>
                <MapPin className="w-4 h-4 text-green-400" />
              </div>
              {nearbyStudents.map((student, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarFallback className="text-xs">{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-white truncate">{student.name}</p>
                    <p className="text-xs text-gray-400 truncate">{student.course} • {student.distance}</p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {student.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 space-y-3 sm:space-y-4 min-w-0">
          {renderContent()}
        </main>

        {/* Right Sidebar - Hidden on mobile and tablet, shown on desktop */}
        <aside className="hidden xl:block w-80 space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-white">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">15</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white">Tech Talk: AI in Education</p>
                    <p className="text-sm text-gray-400">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">18</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white">Career Fair 2024</p>
                    <p className="text-sm text-gray-400">Friday, 9:00 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-white">Lost & Found</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <p className="text-sm text-white mb-1">Lost: iPhone 13 Pro</p>
                  <p className="text-xs text-gray-400">Library, 2nd floor</p>
                </div>
                <div className="p-3 bg-gray-700 rounded-lg">
                  <p className="text-sm text-white mb-1">Found: Black wallet</p>
                  <p className="text-xs text-gray-400">Cafeteria area</p>
                </div>
                <div className="p-3 bg-gray-700 rounded-lg">
                  <p className="text-sm text-white mb-1">Lost: Calculus textbook</p>
                  <p className="text-xs text-gray-400">Room 305</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-white">Trending Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "Java", "Machine Learning", "Web Design", "Data Science", "Mobile Dev", "AI"].map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Mobile Bottom Navigation - Facebook style */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-2 py-1 z-50">
        <div className="flex items-center justify-around max-w-sm mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center space-y-1 p-2 ${activeTab === "home" ? "text-blue-400" : "text-gray-400"}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab("study")}
            className={`flex flex-col items-center space-y-1 p-2 ${activeTab === "study" ? "text-blue-400" : "text-gray-400"}`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs">Groups</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab("messages")}
            className={`flex flex-col items-center space-y-1 p-2 ${activeTab === "messages" ? "text-blue-400" : "text-gray-400"}`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">Messages</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 p-2 text-gray-400 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="text-xs">Notifications</span>
            <span className="absolute -top-1 right-2 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab("portfolio")}
            className={`flex flex-col items-center space-y-1 p-2 ${activeTab === "portfolio" ? "text-blue-400" : "text-gray-400"}`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>

      {/* Mobile bottom padding to account for fixed bottom nav */}
      <div className="lg:hidden h-16"></div>
    </div>
  );
};

export default Index;
