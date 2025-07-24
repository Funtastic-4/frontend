import { Award, Calendar, ExternalLink, MapPin, MessageCircle, Star, Users, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { getTraditionDetail } from "~/services/api";
import type { TraditionDetail as TraditionDetailType } from "~/types";

const TraditionDetail = () => {
  const [detail, setDetail] = useState<TraditionDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getTraditionDetail();
        setDetail(data);
      } catch (err) {
        console.error("Error fetching detail data:", err);
        setError(`Failed to fetch detail data. ${err instanceof Error ? err.message : ""}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  if (!detail) {
    return <div className="flex justify-center items-center h-screen">No tradition detail's data available.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Cover Photo Section */}
      <div className="relative h-80 overflow-hidden rounded-b-3xl">
        <img
          src={detail.coverPhoto}
          alt="Tradition Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </div>

      {/* Detail Section */}
      <div className="relative px-6 pb-6 -mt-16 z-10">
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {detail.name}
            </h1>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={16} className="text-red-500" />
              <span className="font-medium">Found across Java, Indonesia</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6 space-y-8">
        {/* Description Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">About This Tradition</h2>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {detail.description}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Fun Facts Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb size={20} className="text-red-500" />
            Fun Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {detail.funfact.map((fact, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-6 text-center flex flex-col justify-center items-center h-full">
                  <div className="text-3xl font-bold mb-1">{fact.value}</div>
                  <div className="text-sm font-medium opacity-90">
                    {fact.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Places Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-red-500" />
            Places to Visit
          </h2>
          <div className="space-y-4">
            {detail.places.map((place, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-red-100">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                      <p className="text-gray-600 mb-3">{place.description}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} />
                        <span>{place.location}</span>
                      </div>
                    </div>
                    <a 
                      href={place.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-red-500" />
            Upcoming Events & Programs
          </h2>
          <div className="space-y-4">
            {detail.events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-red-100">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-red-500 text-white p-3 rounded-xl text-center min-w-[60px] h-fit">
                      <div className="text-xl font-bold leading-none">{event.date.day}</div>
                      <div className="text-xs font-semibold uppercase mt-1">{event.date.month}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{event.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    {event.link && (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200 h-fit"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <MessageCircle size={20} className="text-red-500" />
              What Travelers Say
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#ef4444" className="text-red-500" />
                ))}
              </div>
              <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                4.8 (89 reviews)
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            {detail.reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={review.author.avatar} alt={review.author.name} />
                      <AvatarFallback className="bg-red-100 text-red-600">{review.author.name.charAt(0)}</AvatarFallback>  
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.author.name}</h4>
                      <p className="text-sm text-gray-500">{review.author.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#ef4444" className="text-red-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TraditionDetail;