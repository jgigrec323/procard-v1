import ContactForm from "@/components/contact-form";
import Billboard from "@/components/ui/billboard";
import { Headphones, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="py-10 px-6 flex flex-col items-center">
      {/* Title */}
      <Billboard title="Nous contacter" />

      {/* Main Content */}
      <div className="mt-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col space-y-6 md:w-1/3">
          {/* Phone Card */}
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg border">
            <Headphones size={40} />
            <a href="tel:+224622461895" className="text-lg font-semibold">
              +224 622 46 18 95
            </a>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg border">
            <Mail size={40} />
            <a href="mailto:info@procard.com" className="text-lg font-semibold">
              info@procard.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
