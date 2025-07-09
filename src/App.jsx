import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Pages/HeroSection";
import IconStats from "./Components/Pages/IconStats";
import RootSection from "./Components/Pages/RootSection";
import SmileTransformations from "./Components/Pages/SmileTransformations";
import WhyChooseClove from "./Components/Pages/WhyChooseClove";
import TestimonialPage from "./Components/Pages/TestimonialPage";
import AppointmentForm from "./Components/Pages/AppointmentForm";
import FeatureSection from "./Components/Pages/FeatureSection";
import GoogleReviews from "./Components/Pages/GoogleReviews";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IconStats />
      <RootSection />
      <SmileTransformations />
      <WhyChooseClove />
      <TestimonialPage />
      <AppointmentForm />
      <FeatureSection />
      <GoogleReviews />
    </div>
  );
}

export default App;
