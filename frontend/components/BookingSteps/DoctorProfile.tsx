import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { MapPin, Star, Stethoscope, Calendar } from "lucide-react";

interface DoctorProfileProps {
  doctor: any;
}

const DoctorProfile = ({ doctor }: DoctorProfileProps) => {
  if (!doctor) {
    return null;
  }

  return (
    <Card className="shadow-lg border-0 sticky top-24">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Avatar className="w-24 h-24 mx-auto mb-3">
            <AvatarImage src={doctor.profileImage} alt={doctor.name} className="object-cover" />
            <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 text-2xl font-bold">
              {doctor.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <h3 className="text-xl font-bold text-blue-700 mb-1">{doctor.name}</h3>
          <p className="text-gray-600 text-sm mb-1">{doctor.specialization}</p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
            <Stethoscope className="w-4 h-4" />
            <span>{doctor.experience} years experience</span>
          </div>

          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
            ))}
            <span className="font-bold text-sm ml-1">5.0</span>
          </div>
        </div>

        <div className="space-y-3 mb-4 pb-4 border-b">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600">Location</p>
              <p className="text-sm font-semibold text-gray-900">
                {doctor.hospitalInfo?.hospital}, {doctor.hospitalInfo?.city}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600">Consultation Fee</p>
              <p className="text-sm font-semibold text-green-600">₹{doctor.fees}</p>
            </div>
          </div>
        </div>

        {doctor.category && doctor.category.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2">Specializations</p>
            <div className="flex flex-wrap gap-2">
              {doctor.category.slice(0, 3).map((category: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-xs text-blue-900">
            <span className="font-semibold">Note:</span> Consultation fee may vary based on the type of consultation selected.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorProfile;