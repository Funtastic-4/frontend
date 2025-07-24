import { Award, Calendar, Globe, Instagram, MapPin, MessageCircle, Phone, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { getOrganizationProfile } from "~/services/api";
import type { OrganizationProfile as OrganizationProfileType } from "~/types";

const OrganizationProfile = () => {
  const [profile, setProfile] = useState<OrganizationProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getOrganizationProfile();
        setProfile(data);
      } catch (err) {
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div className="flex justify-center items-center h-screen">No profile data available.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Cover Photo Section */}
      <div className="relative h-80 overflow-hidden rounded-b-3xl">
        <img
          src={profile.coverPhoto}
          alt="Organization Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </div>

      {/* Profile Section */}
      <div className="relative px-6 pb-6 -mt-16 z-10">
        <div className="flex justify-start mb-4">
          <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
            <AvatarImage src={profile.profilePicture} alt="Organization Profile" />
            <AvatarFallback className="bg-red-100 text-red-600 text-2xl font-bold">CY</AvatarFallback>
          </Avatar>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
              {profile.name}
            </h1>
            <p className="text-lg text-gray-600 font-medium mb-3">{profile.handle}</p>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={16} className="text-red-500" />
              <span className="font-medium">{profile.location}</span>
            </div>
            {profile.contact && (
              <div className="flex items-center gap-4 mt-4 text-gray-700">
                {profile.contact.instagram && (
                  <a href={`https://instagram.com/${profile.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-500">
                    <Instagram size={16} />
                    <span>{profile.contact.instagram}</span>
                  </a>
                )}
                {profile.contact.phone && (
                  <a href={`tel:${profile.contact.phone}`} className="flex items-center gap-2 hover:text-red-500">
                    <Phone size={16} />
                    <span>{profile.contact.phone}</span>
                  </a>
                )}
                {profile.contact.website && (
                  <a href={profile.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-500">
                    <Globe size={16} />
                    <span>{profile.contact.website}</span>
                  </a>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6 space-y-8">
        {/* Description Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">About Our Organization</h2>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {profile.description}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award size={20} className="text-red-500" />
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profile.achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-6 text-center flex flex-col justify-center items-center h-full">
                  {achievement.value && (
                    <div className="text-3xl font-bold mb-1">{achievement.value}</div>
                  )}
                  <div className={`text-sm font-medium opacity-90 ${!achievement.value ? 'text-lg' : ''}`}>
                    {achievement.label}
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
            {profile.events.map((event, index) => (
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
                4.9 (127 reviews)
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            {profile.reviews.map((review, index) => (
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

export default OrganizationProfile;

