import { MapPin, Calendar, Users, Award, Star, MessageCircle } from "lucide-react"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const OrganizationProfile = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white min-h-screen">
            {/* Cover Photo Section */}
            <div className="relative h-80 overflow-hidden rounded-b-3xl">
                <img
                    src="/placeholder.png?height=320&width=800"
                    alt="Organization Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
            </div>

            {/* Profile Section */}
            <div className="relative px-6 pb-6 -mt-16 z-10">
                <div className="flex justify-start mb-4">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                        <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Organization Profile" />
                        <AvatarFallback className="bg-red-100 text-red-600 text-2xl font-bold">CY</AvatarFallback>
                    </Avatar>
                </div>

                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
                    <CardContent className="p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                            Cyrilus Yodha Maheswara Cultural Foundation
                        </h1>
                        <p className="text-lg text-gray-600 font-medium mb-3">@cyrilusy</p>
                        <div className="flex items-center gap-2 text-gray-700">
                            <MapPin size={16} className="text-red-500" />
                            <span className="font-medium">Yogyakarta, Indonesia</span>
                        </div>
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
                                We are dedicated to preserving and promoting the rich cultural heritage of Yogyakarta. Our mission is to
                                connect travelers with authentic local experiences while supporting traditional artisans and cultural
                                practitioners. Through our programs, we bridge the gap between ancient traditions and modern tourism,
                                ensuring that our cultural legacy continues to thrive for future generations.
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
                        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold mb-1">150+</div>
                                <div className="text-sm font-medium opacity-90">Cultural Sites Preserved</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold mb-1">5,000+</div>
                                <div className="text-sm font-medium opacity-90">Travelers Guided</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold mb-1">25</div>
                                <div className="text-sm font-medium opacity-90">Local Artisans Supported</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold mb-1">10</div>
                                <div className="text-sm font-medium opacity-90">Years of Experience</div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Events Section */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar size={20} className="text-red-500" />
                        Upcoming Events & Programs
                    </h2>
                    <div className="space-y-4">
                        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-red-100">
                            <CardContent className="p-6">
                                <div className="flex gap-4">
                                    <div className="bg-red-500 text-white p-3 rounded-xl text-center min-w-[60px] h-fit">
                                        <div className="text-xl font-bold leading-none">15</div>
                                        <div className="text-xs font-semibold uppercase mt-1">Mar</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Batik Workshop & Cultural Tour</h3>
                                        <p className="text-gray-600 mb-3">Learn traditional batik making techniques from master artisans</p>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Users size={14} />
                                                <span>12 participants</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>Taman Sari</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-red-100">
                            <CardContent className="p-6">
                                <div className="flex gap-4">
                                    <div className="bg-red-500 text-white p-3 rounded-xl text-center min-w-[60px] h-fit">
                                        <div className="text-xl font-bold leading-none">22</div>
                                        <div className="text-xs font-semibold uppercase mt-1">Mar</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Jogja Heritage Walking Tour</h3>
                                        <p className="text-gray-600 mb-3">Explore the historical sites and hidden gems of Yogyakarta</p>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Users size={14} />
                                                <span>20 participants</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>Malioboro Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-red-100">
                            <CardContent className="p-6">
                                <div className="flex gap-4">
                                    <div className="bg-red-500 text-white p-3 rounded-xl text-center min-w-[60px] h-fit">
                                        <div className="text-xl font-bold leading-none">05</div>
                                        <div className="text-xs font-semibold uppercase mt-1">Apr</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Gamelan Music Experience</h3>
                                        <p className="text-gray-600 mb-3">Immerse yourself in the enchanting world of Javanese gamelan</p>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Users size={14} />
                                                <span>15 participants</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>Sultan Palace</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
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
                        <Card className="hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                                        <AvatarFallback className="bg-red-100 text-red-600">SJ</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                        <p className="text-sm text-gray-500">From Australia</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} fill="#ef4444" className="text-red-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic leading-relaxed">
                                    "An absolutely incredible experience! The team's knowledge of local culture is unmatched. They showed
                                    us hidden gems that we never would have found on our own."
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Marco Rodriguez" />
                                        <AvatarFallback className="bg-red-100 text-red-600">MR</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Marco Rodriguez</h4>
                                        <p className="text-sm text-gray-500">From Spain</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} fill="#ef4444" className="text-red-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic leading-relaxed">
                                    "The batik workshop was amazing! Learning from master artisans while understanding the cultural
                                    significance made this trip truly memorable."
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Yuki Tanaka" />
                                        <AvatarFallback className="bg-red-100 text-red-600">YT</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Yuki Tanaka</h4>
                                        <p className="text-sm text-gray-500">From Japan</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} fill="#ef4444" className="text-red-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic leading-relaxed">
                                    "Professional, friendly, and deeply passionate about their culture. This organization truly cares
                                    about preserving heritage while sharing it with the world."
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OrganizationProfile
