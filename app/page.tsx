import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { FaRegEnvelope } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { WatingList } from "@/components/watinglist";

const SectionTitle = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => (
  <div
    className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
    style={{ "--bullet-item-color": color } as React.CSSProperties}
  >
    {children}
  </div>
);

const SectionHeader = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => (
  <div className="font-bold text-2xl md:text-[2rem] pt-[18px] pb-3">
    <span className={`text-[${color}  as React.CSSProperties]`}>
      {children}
    </span>
  </div>
);

const FeatureCard = ({
  imageSrc,
  title,
  description,
  bgColor,
  borderColor,
}: {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
}) => (
  <div
    className={`box-pane p-6 md:p-8 rounded-2xl text-left border-[${borderColor}] border bg-[${bgColor}]`}
  >
    <Image alt={title} className="w-[64px] lg:w-unset" src={imageSrc} />
    <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
      {title}
    </div>
    <div className="mt-3 text-base leading-[1.2] md:leading-normal">
      {description}
    </div>
  </div>
);
const WhyCard = ({ item }: { item: any }) => (
  <div className="basis-full md:basis-1/3 py-3 sm:p-1 md:p-3 max-w-[300px] md:max-w-[326px]">
    <div className="flex flex-col justify-center px-8 md:px-6 py-8 md:py-0 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] md:h-[140px]">
      <div className="text-xl font-semibold">{item.title}</div>
      <div className="mt-3 text-base leading-tight">{item.description}</div>
    </div>
  </div>
);
const HowItWorksCard = ({ item }: { item: any }) => (
  <div className="my-3 md:p-6">
    <div className="flex justify-center">
      <Image alt={item.title} src={item.imageSrc} width={40} />
    </div>
    <div className="text-xl font-semibold">{item.title}</div>
    <div className="text-base">{item.description}</div>
  </div>
);

const Home = () => {
  return (
    <>
      <section className="md:flex items-center justify-center py-10 px-6 md:gap-4 md:py-4 md:h-[calc(100vh-4.6rem)] md:max-w-7xl md:px-10 mx-auto">
        <div className="justify-center flex-1 tracking-wide break-normal col text-start sm:text-center md:text-start md:mb-40">
          <div className={title({ size: "md", class: "leading-[1.25]" })}>
            Where&nbsp;
          </div>
          <div
            className={title({
              size: "md",
              color: "primary",
              class: "leading-[1.25]",
            })}
          >
            Local&nbsp;
          </div>
          <br className="sm:hidden md:block" />
          <div className={title({ size: "md", class: "leading-[1.25]" })}>
            Businesses{" "}
          </div>
          <br className="" />
          <div className={title({ size: "md", class: "leading-[1.25]" })}>
            and&nbsp;
            <span
              className={title({
                size: "md",
                color: "secondary",
                class: "leading-[1.25]",
              })}
            >
              Culture&nbsp;
            </span>
            <br className="sm:hidden" />
            Meet
          </div>
          <div
            className={subtitle({
              class: "mt-8 md:mt-6 leading-[1] md:leading-[1.2]",
            })}
          >
            Locamart connects local businesses with their communities,{" "}
            <br className="hidden md:block" />
            helping you discover trusted services, authentic experiences,{" "}
            <br className="hidden md:block" />
            and exclusive deals—all in one place.
          </div>
          <div className="text-[1.5rem] font-bold mt-8 sm:text-center md:text-left">
            Be the First to Experience Locamart!
          </div>
          <WatingList width="md:w-4/5" />
        </div>
        <div className="flex justify-center flex-1 mt-16 text-center md:mt-0">
          <Image
            alt="hero Image"
            className="mx-auto"
            src="assets/images/hero.png"
          />
        </div>
      </section>

      {/* How It Works */}
      <section
        className="bg-[#F9FAFB] text-center pt-[115px] md:pt-[74px] pb-[60px] px-6 w-full"
        id="how-it-works"
      >
        <SectionTitle color="#5370E1">How It Works</SectionTitle>
        <div className="font-bold text-2xl md:text-[2rem] pt-[22px]">
          Discover. Connect. Support. See how Locamart works!
        </div>
        <div className="grid max-w-6xl gap-1 pt-4 mx-auto mt-2 md:gap-16 md:grid-cols-3">
          {[
            {
              imageSrc: "assets/images/hiw1.png",
              title: "Explore Local Businesses",
              description:
                "Browse trusted businesses based on location and category.",
            },
            {
              imageSrc: "assets/images/hiw2.png",
              title: "Read & Share Reviews",
              description:
                "Get real recommendations from locals, and share your experiences.",
            },
            {
              imageSrc: "assets/images/hiw3.png",
              title: "Get Exclusive Deals",
              description:
                "Access special promotions, discounts, and local events.",
            },
          ].map((item, index) => (
            <HowItWorksCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Why Locamart */}
      <section
        className="pt-[80px] md:pt-[74px] pb-[60px] px-4 md:px-6 w-full text-center"
        id="why-locamart"
      >
        <SectionTitle color="#E1C453">Why Locamart?</SectionTitle>
        <SectionHeader color="#E1C453">
          Locamart is more than just a platform
        </SectionHeader>
        <div
          className={subtitle({
            class: "mt-4 leading-tight md:mt-2 md:leading-[1.25]",
          })}
        >
          It’s a community-driven solution designed to empower businesses and
          delight <br className="hidden md:block" /> users. Here’s why you
          should choose Locamart over other platforms:
        </div>
        <div className="flex flex-wrap mt-5 mx-auto md:max-w-[75rem] justify-center">
          {[
            {
              title: "Transparent Reviews",
              description:
                "Honest feedback you can trust, with no paid promotions or hidden agendas.",
            },
            {
              title: "Support Local",
              description:
                "Helping small businesses compete and thrive in their communities",
            },
            {
              title: "Direct Updates",
              description:
                "Businesses can share promotions, events, and news directly with customers.",
            },
            {
              title: "User Friendly",
              description:
                "Easy-to-use platform with personalized recommendations.",
            },
            {
              title: "Fair Pricing",
              description: "No hidden fees or unfair costs for businesses.",
            },
          ].map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Business Benefits */}
      <section
        className="bg-[#F9FAFB] text-center pt-[80px] md:pt-[74px] pb-[10px] px-4 md:px-6 w-full"
        id="for-businesses"
      >
        <SectionTitle color="#5370E1">For Businesses</SectionTitle>
        <SectionHeader color="#5370E1">
          How Locamart Will Help Boost Your Business
        </SectionHeader>
        <div className="flex flex-wrap mt-5 mx-auto max-w-[76rem] justify-center">
          {[
            {
              imageSrc: "assets/images/fb1.png",
              title: "Expand Your Reach",
              description:
                "Gain visibility and connect with customers who are actively looking for culturally-aligned products and services.",
              bgColor: "#E9EBFB",
              borderColor: "#B6C5FF",
            },
            {
              imageSrc: "assets/images/fb2.png",
              title: "Attract Loyal Customers",
              description:
                "Build trust and earn customer loyalty through transparent reviews, ratings, and promotions.",
              bgColor: "#E9EBFB",
              borderColor: "#B6C5FF",
            },
            {
              imageSrc: "assets/images/fb3.png",
              title: "Grow Your Sales",
              description:
                "Boost your sales by offering your products and services to a wider, more engaged audience.",
              bgColor: "#E9EBFB",
              borderColor: "#B6C5FF",
            },
            {
              imageSrc: "assets/images/fb4.png",
              title: "Stand Out in a Competitive Market",
              description:
                "Differentiate your business with a strong presence on a platform dedicated to local, immigrant-owned businesses.",
              bgColor: "#E9EBFB",
              borderColor: "#B6C5FF",
            },
            {
              imageSrc: "assets/images/fb5.png",
              title: "Drive More Traffic with Location-Based Discovery",
              description:
                "Make it easier for local customers to find you with location-based matching, bringing in foot traffic and online visits.",
              bgColor: "#E9EBFB",
              borderColor: "#B6C5FF",
            },
            {
              imageSrc: "assets/images/fb6.png",
              title: "Engage with a Supportive Community",
              description:
                "Connect with a community of businesses and customers who share your values and help your business grow.",
              bgColor: "#E9EBFB",
              borderColor: "#B6C5FF",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full px-3 pb-4 md:w-unset md:basis-1/3"
            >
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* User Benefits */}
      <section
        className="bg-[#F9FAFB] text-center pt-[74px] pb-[60px] px-4 md:px-6 w-full"
        id="for-users"
      >
        <SectionTitle color="#53E17D">For Users</SectionTitle>
        <SectionHeader color="#53E17D">
          How Locamart Helps You Find What You Need
        </SectionHeader>
        <div
          className="flex flex-wrap mt-5 mx-auto max-w-[76rem] justify-center"
          style={{ "--box-pane-color": "#53E17D" } as React.CSSProperties}
        >
          {[
            {
              imageSrc: "assets/images/fu1.png",
              title: "Discover Local Services",
              description:
                "Quickly find businesses and services tailored to your needs.",
              bgColor: "#DEFFE5",
              borderColor: "#53E17D",
            },
            {
              imageSrc: "assets/images/fu2.png",
              title: "Read and Write Reviews",
              description:
                "Share your experiences and explore trusted recommendations.",
              bgColor: "#DEFFE5",
              borderColor: "#53E17D",
            },
            {
              imageSrc: "assets/images/fu3.png",
              title: "Save Your Favorites",
              description:
                "Keep track of the businesses you love for easy access later.",
              bgColor: "#DEFFE5",
              borderColor: "#53E17D",
            },
            {
              imageSrc: "assets/images/fu4.png",
              title: "Personalized Suggestions",
              description:
                "Get recommendations based on your preferences and location.",
              bgColor: "#DEFFE5",
              borderColor: "#53E17D",
            },
            {
              imageSrc: "assets/images/fu5.png",
              title: "Exclusive Deals",
              description:
                "Enjoy special offers and discounts from local businesses.",
              bgColor: "#DEFFE5",
              borderColor: "#53E17D",
            },
            {
              imageSrc: "assets/images/fu6.png",
              title: "Simple and Smart Search",
              description:
                "Use advanced filters to find exactly what you are looking for.",
              bgColor: "#DEFFE5",
              borderColor: "#53E17D",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full px-3 pb-4 md:w-unset md:basis-1/3"
            >
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        className="text-center pt-[80px] pb-[10px] px-6 w-full"
        id="about"
      >
        <SectionTitle color="#E153B7">About</SectionTitle>
        <SectionHeader color="#E153B7">The Story Behind Locamart</SectionHeader>
        <div className="justify-center mx-auto md:flex">
          <div className="flex-1 text-start justify-center col md:mx-16 md:mt-16 md:max-w-[413px]">
            <div className={subtitle({ class: "mt-6 leading-[1.25]" })}>
              Working closely with businesses and startups, we realized how
              challenging it is for small businesses to compete with larger
              brands.
              <br />
              <br />
              This inspired us to create Locamart—a platform designed to help
              businesses connect with their communities and grow.
              <br />
              <br />
              Our team currently consists of product designers and web
              developers committed to building a fair and supportive
              marketplace.
            </div>
          </div>
          <div className="flex-1 text-center flex justify-center mt-16 md:mt-10 md:max-w-[383px]">
            <Image
              alt="The Story Behind Locamart"
              src="assets/images/story.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="text-center mt-20 md:pt-[55px] pb-[10px] px-6 w-full"
        id="contact"
      >
        <SectionTitle color="#5370E1">Contact</SectionTitle>
        <SectionHeader color="#5370E1">Get in Touch</SectionHeader>
        <div className="text-xl md:text-[1.5rem] font-bold mt-6 md:mt-12 sm:text-center">
          Be the First to Experience Locamart!
        </div>
        <div className="md:w-[463px] mx-auto mt-4 md:mt-6">
          <WatingList width="md:w-full" />
        </div>
        <div className="w-[256px] md:w-[447px] py-5 md:py-8 bg-[#F9FAFB] mt-12 rounded-lg mx-auto text-center flex flex-col items-center">
          <span className="text-xl font-semibold md:text-2xl">
            Interested in <br className="md:hidden" /> Partnering with Us?
          </span>
          <Button
            className="px-7 mt-3 md:mt-8"
            color="primary"
            radius="sm"
            size="lg"
          >
            <Link
              isExternal
              aria-label="Calendly"
              className="text-white"
              href={siteConfig.links.calcom}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book Appointment
            </Link>
          </Button>
          <span className="mt-2 text-lg font-semibold md:text-xl md:mt-6">
            or
          </span>
          <span className="text-lg font-semibold md:text-xl">
            Email Us: <br className="md:hidden" />{" "}
            <FaRegEnvelope className="inline mx-1 text-primary" /> info [at]
            locamart.co
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
