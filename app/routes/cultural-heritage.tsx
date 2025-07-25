import { Star, MapPin, Users, Camera, Heart, Share2, ChevronRight, Award, Calendar, Clock, Ticket } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import Header from "../components/Header"

export function meta() {
  return [
    { title: "Cultural Heritage - Borobudur Temple" },
    { name: "description", content: "Explore the cultural heritage of Borobudur Temple" },
  ];
}

export default function CulturalPlaceProfile() {
  // Mock data for the cultural place
  const place = {
    name: "Borobudur Temple",
    type: "UNESCO World Heritage Site",
    rating: 4.9,
    reviewCount: 2847,
    location: "Magelang, Central Java, Indonesia",
    established: "8th-9th Century",
    visitors: "1.2M annually",
    description:
      "Borobudur is a magnificent 9th-century Mahayana Buddhist temple and one of the greatest Buddhist monuments in the world. This ancient marvel features over 2,600 relief panels and 504 Buddha statues, telling the story of Buddhist cosmology and the path to enlightenment. Experience sunrise ceremonies, explore intricate stone carvings, and immerse yourself in centuries of spiritual heritage while learning about traditional Javanese culture and Buddhist philosophy.",
    highlights: ["UNESCO World Heritage", "Buddhist Monument", "Sunrise Ceremony", "Stone Carvings"],
  }

  const galleryImages = [
    "/placeholder.png?height=200&width=300&text=Borobudur+Sunrise",
    "/placeholder.png?height=200&width=300&text=Buddha+Statues",
    "/placeholder.png?height=200&width=300&text=Stone+Reliefs",
    "/placeholder.png?height=200&width=300&text=Temple+Architecture",
    "/placeholder.png?height=200&width=300&text=Cultural+Ceremony",
    "/placeholder.png?height=200&width=300&text=Panoramic+View",
  ]

  const experiences = [
    {
      date: "15",
      month: "MAR",
      title: "Sunrise Temple Tour",
      description: "Witness the magical sunrise over Borobudur with guided temple exploration",
      participants: 25,
      duration: "4 hours",
      price: "IDR 450,000",
    },
    {
      date: "22",
      month: "MAR",
      title: "Buddhist Heritage & Culture Walk",
      description: "Explore the temple's history, Buddhist teachings, and local village culture",
      participants: 18,
      duration: "3 hours",
      price: "IDR 350,000",
    },
    {
      date: "05",
      month: "APR",
      title: "Traditional Craft Workshop",
      description: "Learn stone carving and traditional Javanese arts from local artisans",
      participants: 12,
      duration: "5 hours",
      price: "IDR 550,000",
    },
  ]

  const achievements = [
    {
      number: "1,200+",
      label: "Years of History",
      icon: "🏛️",
    },
    {
      number: "2,672",
      label: "Relief Panels",
      icon: "🎨",
    },
    {
      number: "504",
      label: "Buddha Statues",
      icon: "🧘",
    },
    {
      number: "1.2M",
      label: "Annual Visitors",
      icon: "👥",
    },
  ]

  const reviews = [
    {
      name: "Emma Thompson",
      rating: 5,
      comment:
        "Absolutely breathtaking! The sunrise experience was magical and the guide's knowledge about Buddhist history was incredible.",
      date: "2 days ago",
      avatar: "/placeholder.png?height=40&width=40&text=ET",
    },
    {
      name: "Hiroshi Tanaka",
      rating: 5,
      comment:
        "A spiritual journey through time. The intricate stone carvings tell amazing stories of ancient Buddhist culture.",
      date: "1 week ago",
      avatar: "/placeholder.png?height=40&width=40&text=HT",
    },
    {
      name: "Sarah Mitchell",
      rating: 4,
      comment:
        "Incredible historical site with stunning architecture. The cultural workshop was an amazing hands-on experience.",
      date: "2 weeks ago",
      avatar: "/placeholder.png?height=40&width=40&text=SM",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Content with top padding to account for fixed header */}
      <div className="pt-20">
        {/* Cover Photo Section */}
        <div className="relative h-72 bg-red-600 overflow-hidden mx-6 rounded-2xl">
          <img
            src="/placeholder.png?height=288&width=800&text=Borobudur+Temple+Panoramic+View"
            alt="Borobudur Temple"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <Button size="sm" className="bg-white hover:bg-gray-50 text-red-600 rounded-full shadow-lg">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button size="sm" className="bg-white hover:bg-gray-50 text-red-600 rounded-full shadow-lg">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Place Type Badge */}
        <div className="absolute bottom-6 left-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-gray-900">{place.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Place Header */}
      <div className="px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{place.name}</h1>
              <div className="flex items-center gap-2 text-red-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{place.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Built: {place.established}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {place.visitors}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 fill-red-600 text-red-600" />
                <span className="text-xl font-bold text-gray-900">{place.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{place.reviewCount} reviews</p>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-red-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Heritage Site</h2>
            <p className="text-gray-700 leading-relaxed">{place.description}</p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-8">
            {place.highlights.map((highlight, index) => (
              <div key={index} className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heritage Statistics */}
      <div className="px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">Heritage Highlights</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-red-600 text-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="text-2xl font-bold mb-1">{achievement.number}</div>
                <div className="text-red-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-semibold text-gray-900">Temple Gallery</h2>
            </div>
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 rounded-full bg-transparent"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={image || "/placeholder.png"}
                    alt={`Temple view ${index + 1}`}
                    className="w-72 h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Experiences */}
      <div className="px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Ticket className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">Cultural Experiences & Tours</h2>
          </div>
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <Card key={index} className="rounded-2xl border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white rounded-2xl p-4 text-center min-w-[80px]">
                      <div className="text-xl font-bold">{experience.date}</div>
                      <div className="text-xs text-red-100">{experience.month}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">{experience.title}</h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">{experience.price}</div>
                          <div className="text-sm text-gray-500">per person</div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{experience.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {experience.participants} max participants
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-red-600 fill-red-600" />
              <h2 className="text-xl font-semibold text-gray-900">Visitor Reviews</h2>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">Write Review</Button>
          </div>

          <div className="space-y-4">
            {reviews.map((review, index) => (
              <Card key={index} className="rounded-2xl border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar || "/placeholder.png"} />
                      <AvatarFallback className="bg-red-100 text-red-700 font-semibold">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "fill-red-600 text-red-600" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 rounded-full px-8 bg-transparent"
            >
              Load More Reviews
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
