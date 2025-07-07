"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/Navbar"
import { Search, Star, MapPin, Users } from "lucide-react"

const FindMatch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("match-score")
  const [filterSkill, setFilterSkill] = useState("all")

  const potentialMatches = [
    {
      id: "1",
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
      location: "Barcelona, Spain",
      rating: 4.9,
      matchScore: 95,
      canTeach: ["Spanish", "Photography", "Cooking"],
      wantsToLearn: ["React", "Node.js"],
      bio: "Professional photographer with 8 years experience. Love teaching languages and cooking traditional Spanish dishes.",
      responseTime: "< 2 hours",
    },
    {
      id: "2",
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "San Francisco, CA",
      rating: 4.7,
      matchScore: 88,
      canTeach: ["Python", "Machine Learning", "Data Science"],
      wantsToLearn: ["Guitar", "Photography"],
      bio: "Senior data scientist at a tech company. Passionate about AI and love making complex topics simple to understand.",
      responseTime: "< 4 hours",
    },
    {
      id: "3",
      name: "Sophie Martin",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Paris, France",
      rating: 4.8,
      matchScore: 82,
      canTeach: ["French", "Digital Marketing", "UI/UX Design"],
      wantsToLearn: ["React", "Photography"],
      bio: "Creative director with expertise in digital marketing and design. Always excited to share knowledge about design thinking.",
      responseTime: "< 1 hour",
    },
  ]

  const filteredMatches = potentialMatches
    .filter(
      (match) =>
        searchTerm === "" ||
        match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.canTeach.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        match.wantsToLearn.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .filter(
      (match) =>
        filterSkill === "all" || match.canTeach.includes(filterSkill) || match.wantsToLearn.includes(filterSkill),
    )

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (sortBy === "match-score") {
      return b.matchScore - a.matchScore
    } else if (sortBy === "rating") {
      return b.rating - a.rating
    }
    return 0
  })

  const allSkills = Array.from(new Set(potentialMatches.flatMap((match) => [...match.canTeach, ...match.wantsToLearn])))

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Find Your Perfect Match</h1>
            <p className="text-muted-foreground">Discover skill partners who want to learn what you teach</p>
          </div>
          <div className="space-x-2 flex items-center">
            <Select onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match-score">Match Score</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setFilterSkill}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                {allSkills.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by skill or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Match Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMatches.map((match) => (
            <Card key={match.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={match.avatar || "/placeholder.svg"} alt={match.name} />
                      <AvatarFallback>{match.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{match.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {match.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{match.rating}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {match.matchScore}% match
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4">{match.bio}</CardDescription>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-green-600">Can Teach:</h4>
                    <div className="flex flex-wrap gap-1">
                      {match.canTeach.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2 text-blue-600">Wants to Learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {match.wantsToLearn.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>Responds in {match.responseTime}</span>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    <span>24 swaps</span>
                  </div>
                </div>

                <Button className="w-full">Propose Skill Swap</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedMatches.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No matches found</h3>
            <p className="text-muted-foreground">Try adjusting your search or add more skills to your profile</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FindMatch
