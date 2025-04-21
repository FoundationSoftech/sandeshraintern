import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-7 ">
      <div>
        <h3 className="text-xl font-medium text-shoe-dark mb-4">Visit Our Store</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>
              <p className="font-normal">Shoe Store Flagship</p>
              <p className="text-gray-600 font-normal">123 Shoe Avenue</p>
              <p className="text-gray-600 font-normal">Footwear City, FC 12345</p>
            </span>
          </div>
          
          <div className="flex items-center">
            <Phone className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0" />
            <span className="text-gray-600 font-normal">(123) 456-7890</span>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0" />
            <a href="mailto:info@shoestore.com" className=" font-normal text-shoe-primary hover:underline">
              info@SoleVague.com
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium text-shoe-dark mb-4">Store Hours</h3>
        <div className="flex items-start">
          <Clock className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600 font-medium">Monday - Friday:</p>
              <p className="font-normal">10:00 AM - 8:00 PM</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600 font-medium">Saturday:</p>
              <p className="font-normal">10:00 AM - 6:00 PM</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600 font-medium">Sunday:</p>
              <p className="font-normal">12:00 PM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-meoium text-shoe-dark mb-4">Customer Service</h3>
        <p className="text-gray-600 mb-4 font-normal">
          Have questions or need assistance with your order? Our customer service team is ready to help!
        </p>
        <p className="text-gray-600 mb-2 font-normal">
          Call us at <span className="font-normal">(123) 456-7890</span> or email us at{" "}
          <a href="mailto:support@shoestore.com" className="text-shoe-primary hover:underline font-normal">
            support@SoleVague.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;