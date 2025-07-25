import { Link } from "react-router";
import { heritageSites } from "~/data/heritage-sites";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Star, MapPin } from "lucide-react";

export default function CulturalHeritageList() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'food': return 'bg-red-50 text-red-700 border-red-200';
      case 'dance': return 'bg-red-100 text-red-800 border-red-300';
      case 'museum': return 'bg-gray-50 text-gray-700 border-gray-200';
      case 'site':
      default: return 'bg-white text-red-600 border-red-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'food': return '🍽️ Food';
      case 'dance': return '💃 Dance';
      case 'museum': return '🏛️ Museum';
      case 'site':
      default: return '🏛️ Site';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="rounded-3xl shadow-lg border border-red-100 p-8 sm:p-12 mb-8" style={{background: 'linear-gradient(135deg, #8c1817, #b91c1c)'}}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Indonesian Cultural Heritage
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Discover the rich cultural tapestry of Indonesia through our diverse heritage collection
            </p>
          </div>
        </div>

        {/* Heritage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {heritageSites.map((site) => (
            <Link key={site.id} to={`/cultural-heritage/${site.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-red-100 hover:border-red-200 overflow-hidden rounded-2xl bg-white hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={site.coverImage} 
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs font-medium rounded-full ${getTypeColor(site.type)}`}>
                      {getTypeLabel(site.type)}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{site.rating}</span>
                    </div>
                  </div>

                  <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {site.name}
                  </h2>
                  
                  <div className="flex items-start gap-1 mb-3">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 line-clamp-2">{site.location}</span>
                  </div>

                  {/* Additional Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {site.badges.slice(0, 2).map((badge, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs rounded-full border-red-200 text-red-700 bg-red-50"
                      >
                        {badge}
                      </Badge>
                    ))}
                    {site.badges.length > 2 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs rounded-full border-gray-200 text-gray-500"
                      >
                        +{site.badges.length - 2}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {site.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-red-100">
                    <span className="text-xs text-gray-500">
                      {site.reviewCount.toLocaleString()} reviews
                    </span>
                    <span className="text-sm font-medium text-red-600 group-hover:text-red-700">
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-red-100 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Discover More Heritage
            </h3>
            <p className="text-gray-600 mb-6">
              Indonesia has thousands of cultural heritage sites. Explore more through our comprehensive cultural guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200">
                Explore More Sites
              </button>
              <button className="border border-red-300 text-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-50 transition-all duration-200">
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
