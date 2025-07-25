import { useParams } from "react-router";
import { heritageSites, getExperiencesForSite, getReviewsForSite } from "~/data/heritage-sites";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Clock, MapPin, Star, Users, Ticket, ChefHat, Eye } from "lucide-react";

export default function CulturalHeritageDetail() {
  const { siteId } = useParams();
  const site = heritageSites.find(s => s.id === siteId);

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Heritage Item Not Found</h1>
          <p className="text-gray-600">The cultural heritage item you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const experiences = getExperiencesForSite(site.id);
  const reviews = getReviewsForSite(site.id);

  // Type-specific content sections
  const getAboutTitle = () => {
    switch (site.type) {
      case 'food': return 'About This Food';
      case 'dance': return 'About This Dance';
      case 'museum': return 'About This Museum';
      case 'site':
      default: return 'About This Heritage Site';
    }
  };

  const getQuickInfoFields = () => {
    switch (site.type) {
      case 'food':
        return [
          { icon: MapPin, label: 'Origin', value: site.location },
          { icon: Clock, label: 'Recipe Heritage', value: site.established },
          { icon: Users, label: 'Popularity', value: site.visitors }
        ];
      case 'dance':
        return [
          { icon: MapPin, label: 'Region', value: site.location },
          { icon: Clock, label: 'Developed', value: site.established },
          { icon: Users, label: 'Audience', value: site.visitors }
        ];
      case 'museum':
        return [
          { icon: MapPin, label: 'Location', value: site.location },
          { icon: Clock, label: 'Founded', value: site.established },
          { icon: Users, label: 'Annual Visitors', value: site.visitors }
        ];
      case 'site':
      default:
        return [
          { icon: MapPin, label: 'Location', value: site.location },
          { icon: Clock, label: 'Established', value: site.established },
          { icon: Users, label: 'Visitors', value: site.visitors }
        ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 pb-6">
      {/* Cover Image with rounded container */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-3xl shadow-lg">
            <img 
              src={site.coverImage} 
              alt={site.name}
              className="w-full h-full object-cover"
            />
            {/* Fade gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg relative z-10 p-4 sm:p-6 mb-6 border border-red-100">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">{site.name}</h1>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {site.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="text-xs rounded-full border-red-200 text-red-700 hover:bg-red-50">
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{site.rating}</span>
                  <span className="text-gray-600">({site.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="rounded-2xl shadow-lg border-red-200 mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* About Section */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{getAboutTitle()}</h2>
                <p className="text-gray-700 leading-relaxed">{site.description}</p>
              </div>
              
              {/* Quick Info with faint red border */}
              <div className="border-l-2 border-red-200 pl-6">
                <h3 className="font-semibold mb-4 text-gray-800">Quick Information</h3>
                <div className="space-y-3">
                  {getQuickInfoFields().map((field, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <field.icon className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">{field.label}</div>
                        <div className="text-sm text-gray-600">{field.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Main Content */}
          <div className="space-y-6">

            {/* Highlights */}
            <Card className="rounded-2xl shadow-lg border-red-100">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Highlights</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {site.highlights.map((highlight, index) => (
                    <div key={index} className="bg-gradient-to-br from-red-50 to-white rounded-xl p-3 text-center border border-red-100">
                      <span className="text-sm font-medium text-red-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card className="rounded-2xl shadow-lg border-red-100">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
                  {site.galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-xl border border-red-100">
                      <img 
                        src={image} 
                        alt={`${site.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Type-specific content */}
            {(site.type === 'site' || site.type === 'museum') && experiences.length > 0 && (
              <Card className="rounded-2xl shadow-lg border-red-100">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Ticket className="h-5 w-5 text-red-600" />
                    <h2 className="text-xl font-semibold text-gray-800">
                      {site.type === 'museum' ? 'Programs & Events' : 'Cultural Experiences'}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {experiences.map((experience, index) => (
                      <div key={index} className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 border border-red-100">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="bg-red-600 text-white rounded-xl p-3 text-center min-w-[70px] self-start">
                            <div className="text-lg font-bold">{experience.date}</div>
                            <div className="text-xs text-red-100">{experience.month}</div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{experience.title}</h3>
                              <div className="text-left sm:text-right">
                                <div className={`text-lg font-bold ${experience.price === 'Free' ? 'text-green-600' : 'text-red-600'}`}>
                                  {experience.price}
                                </div>
                                {experience.price !== 'Free' && (
                                  <div className="text-sm text-gray-500">per person</div>
                                )}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-3 text-sm sm:text-base">{experience.description}</p>
                            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-sm text-gray-500">
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
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {site.type === 'dance' && (
              <Card className="rounded-2xl shadow-lg border-red-100">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-5 w-5 text-red-600" />
                    <h2 className="text-xl font-semibold text-gray-800">Where to See & Learn</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 border border-red-100">
                      <h3 className="font-semibold text-gray-900 mb-2">Cultural Centers & Performance Venues</h3>
                      <p className="text-gray-600 mb-3">Experience authentic {site.name} performances at traditional venues and cultural centers across {site.location}.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-red-50">
                          <div className="font-medium text-red-700">Traditional Performance Venues</div>
                          <div className="text-sm text-gray-600">Local cultural centers and temples</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-red-50">
                          <div className="font-medium text-red-700">Learning Workshops</div>
                          <div className="text-sm text-gray-600">Hands-on dance classes available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {site.type === 'food' && (
              <Card className="rounded-2xl shadow-lg border-red-100">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="h-5 w-5 text-red-600" />
                    <h2 className="text-xl font-semibold text-gray-800">Where to Taste & Learn</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 border border-red-100">
                      <h3 className="font-semibold text-gray-900 mb-2">Authentic {site.name} Experiences</h3>
                      <p className="text-gray-600 mb-3">Discover the best places to taste authentic {site.name} and learn about its preparation throughout {site.location}.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-red-50">
                          <div className="font-medium text-red-700">Traditional Restaurants</div>
                          <div className="text-sm text-gray-600">Family-owned warungs and restaurants</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-red-50">
                          <div className="font-medium text-red-700">Cooking Classes</div>
                          <div className="text-sm text-gray-600">Learn authentic recipes from locals</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-red-50">
                          <div className="font-medium text-red-700">Food Markets</div>
                          <div className="text-sm text-gray-600">Fresh ingredients and street vendors</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-red-50">
                          <div className="font-medium text-red-700">Cultural Tours</div>
                          <div className="text-sm text-gray-600">Food history and cultural significance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews Section */}
            <Card className="rounded-2xl shadow-lg border-red-100">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <h2 className="text-xl font-semibold text-gray-800">Visitor Reviews</h2>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Write Review
                  </button>
                </div>
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 border border-red-100">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm flex-shrink-0">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                            <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button className="border border-red-300 text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition-colors">
                    Load More Reviews
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}