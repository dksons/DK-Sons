import ContactFormSection from "@/components/common/ContactFormSection";
import InfoSection from "@/components/common/InfoSection";
import React from "react";

const ContactUs = () => {
  return (

    <div className="mt-28 text-white">
      <section className="mx-auto mt-20 mb-10 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row ">
        <InfoSection />
        <ContactFormSection />
      </section>
    </div>
  );
};

export default ContactUs;
