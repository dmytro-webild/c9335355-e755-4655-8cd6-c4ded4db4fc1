"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Location",
          id: "contact",
        },
      ]}
      brandName="Doner Kebap Urfa"
      button={{
        text: "Order Now",
        href: "#menu",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Doner Kebap Urfa"
      description="Authentic Urfa Doner. Fast. Fresh. Irresistible. €1–10 meals. Crafted with fire, tradition & flavor."
      buttons={[
        {
          text: "Order Now",
          href: "#menu",
        },
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-bbq-beefsteak-slices-with-tomato-french-fries-prickld-cucumber_140725-10540.jpg",
          imageAlt: "Premium Doner Kebab",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-bbq-beefsteak-slices-with-tomato-french-fries-prickld-cucumber_140725-10540.jpg",
          imageAlt: "Kebab Grill",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-bbq-beefsteak-slices-with-tomato-french-fries-prickld-cucumber_140725-10540.jpg",
          imageAlt: "Urfa Meat Dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-bbq-beefsteak-slices-with-tomato-french-fries-prickld-cucumber_140725-10540.jpg",
          imageAlt: "Fresh Durum",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-bbq-beefsteak-slices-with-tomato-french-fries-prickld-cucumber_140725-10540.jpg",
          imageAlt: "Traditional Turkish Food",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-bbq-beefsteak-slices-with-tomato-french-fries-prickld-cucumber_140725-10540.jpg",
          imageAlt: "Flame Grilled Kebab",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Story"
      description="Doner Kebap Urfa brings the bold flavors of Turkish street grills to your city. Slow-cooked meat, fresh bread, and authentic spices — served fast, hot, and always satisfying."
      metrics={[
        {
          value: "€1-10",
          title: "Affordable",
        },
        {
          value: "100%",
          title: "Fresh",
        },
        {
          value: "Fast",
          title: "Speed",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-islamic-man-by-fire_23-2151064124.jpg"
      imageAlt="Our Story"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "€1–10 Meals",
          description: "High value and satisfying portions.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-azerbaijani-grape-leaves-dolma-served-with-yogurt-vegetables-pickles_140725-5197.jpg",
          imageAlt: "Affordable",
        },
        {
          title: "Fresh Daily",
          description: "Fresh ingredients sourced daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/doner-wrapped-lavash-with-side-fries-ketchup_141793-665.jpg",
          imageAlt: "Fresh",
        },
        {
          title: "Fast Service",
          description: "No waiting, just kebabs.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-meat-bones-with-fried-vegetables-sauce-table-food-meal-dinner-restaurant_140725-28153.jpg",
          imageAlt: "Fast",
        },
      ]}
      title="Why Choose Us?"
      description="Premium fast casual with personality and appetite appeal."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Doner",
          price: "€6.50",
          variant: "Authentic",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-azerbaijani-grape-leaves-dolma-served-with-yogurt-vegetables-pickles_140725-5197.jpg",
          imageAlt: "Doner",
        },
        {
          id: "p2",
          name: "Chicken Durum",
          price: "€5.50",
          variant: "Wrap",
          imageSrc: "http://img.b2bpic.net/free-photo/doner-wrapped-lavash-with-side-fries-ketchup_141793-665.jpg",
          imageAlt: "Wrap",
        },
        {
          id: "p3",
          name: "Urfa Spice Plate",
          price: "€8.00",
          variant: "Signature",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-meat-bones-with-fried-vegetables-sauce-table-food-meal-dinner-restaurant_140725-28153.jpg",
          imageAlt: "Plate",
        },
      ]}
      title="Our Menu"
      description="Taste the tradition."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "John D.",
          handle: "@foodie",
          testimonial: "Very tasty and fresh!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-friends-enjoying-burgers-together-restaurant_23-2148666557.jpg",
        },
        {
          id: "2",
          name: "Sarah K.",
          handle: "@local",
          testimonial: "Great value for money.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-eating-pizza_23-2149525553.jpg",
        },
        {
          id: "3",
          name: "Mike R.",
          handle: "@travel",
          testimonial: "Fresh and satisfying.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/picture-happy-man-eating-vegan-burger-vegan-restaurant-cafe-smiling-man-sitting-table-looking-camera_549566-844.jpg",
        },
        {
          id: "4",
          name: "Lisa G.",
          handle: "@user",
          testimonial: "Fast service, great kebab.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-woman-enjoying-tasty-snack-cafe_7502-9271.jpg",
        },
        {
          id: "5",
          name: "Ahmed K.",
          handle: "@urfalover",
          testimonial: "The most authentic taste in the city!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-friends-enjoying-burgers-together-restaurant_23-2148666557.jpg",
        },
      ]}
      showRating={true}
      title="What They Say"
      description="Loved by locals and visitors alike."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Ready to eat?"
      title="Hungry right now?"
      description="Fresh kebabs prepared in minutes."
      buttons={[
        {
          text: "Order Pickup",
          href: "#",
        },
        {
          text: "Find Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Doner Kebap Urfa"
      copyrightText="© 2025 Doner Kebap Urfa"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
