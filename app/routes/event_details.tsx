import { Calendar, Clock, MapPin, Tag, Ticket } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

const EventDetails = () => {
  const registrationFee = 250000;

  return (
    <div className="mx-auto min-h-screen max-w-4xl bg-white p-4 md:p-6">
      {/* Event Header */}
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
          Batik Workshop & Cultural Tour
        </h1>
      </div>

      {/* Event Image */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Event Info */}
      <Card className="mb-6 border-gray-200 bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-red-500" />
              <span className="font-medium">March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-red-500" />
              <span className="font-medium">10:00 AM - 2:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-red-500" />
              <span className="font-medium">Taman Sari, Yogyakarta</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">About the Event</h2>
              <p className="leading-relaxed text-gray-700">
                Immerse yourself in the rich cultural heritage of Yogyakarta by joining our exclusive Batik Workshop & Cultural Tour. This unique experience offers a hands-on opportunity to learn the ancient art of batik making from skilled local artisans. You will discover the history and symbolism behind the intricate patterns and create your own batik masterpiece to take home as a cherished souvenir.
                <br />
                <br />
                After the workshop, we will guide you on a cultural tour of the surrounding area, visiting historical landmarks and hidden gems that are often missed by tourists. This is more than just a tour; it's a chance to connect with the local community and support the preservation of traditional crafts.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Registration and Fees */}
        <div className="md:col-span-1">
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Registration</h2>
              <div className="mb-4 flex items-center gap-2">
                <Ticket size={20} className="text-red-500" />
                <span className="text-xl font-bold text-gray-900">
                  {registrationFee > 0 ? `Rp ${registrationFee.toLocaleString()}` : "Free"}
                </span>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Includes all materials for the workshop, a guided tour, and a traditional lunch.
              </p>
              <Button className="w-full bg-red-500 text-white hover:bg-red-600">
                Register Now
              </Button>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <Tag size={14} />
                <span>Tags: Art, Culture, Workshop, Tour</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
