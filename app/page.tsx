import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { FaRegEnvelope } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { WatingList } from "@/components/watinglist";

export default function Home() {
  return (
    <>
      <section className="md:flex items-center justify-center py-10 px-6  md:gap-4 md:py-4 md:h-[calc(100vh-4.6rem)] md:max-w-7xl md:px-10 mx-auto">
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
            and exclusive deals—all in one place.{" "}
          </div>
          <div
            className={
              "text-[1.5rem] font-bold mt-8 sm:text-center md:text-left"
            }
          >
            Be the First to Experience Locamart!{" "}
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
        <div
          className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
          style={{ "--bullet-item-color": "#5370E1" } as React.CSSProperties}
        >
          How It Works
        </div>
        <div className="font-bold text-2xl md:text-[2rem] pt-[22px]">
          Discover. Connect. Support. See how Locamart works!
        </div>
        <div className="grid max-w-6xl gap-1 pt-4 mx-auto mt-2 md:gap-16 md:grid-cols-3">
          <div className="my-3 md:p-6">
            <div className="flex justify-center">
              <Image
                alt="Explore Local Businesses"
                src="assets/images/hiw1.png"
                width={40}
              />
            </div>
            <div className="text-xl font-semibold">
              Explore Local Businesses
            </div>
            <div className="text-base">
              Browse trusted businesses based on location and category.
            </div>
          </div>
          <div className="my-3 md:p-6">
            <div className="flex justify-center">
              <Image
                alt="Read & Share Reviews"
                src="assets/images/hiw2.png"
                width={40}
              />
            </div>
            <div className="text-xl font-semibold">Read & Share Reviews</div>
            <div className="text-base">
              Get real recommendations from locals, and share your experiences.
            </div>
          </div>
          <div className="my-3 md:p-6">
            <div className="flex justify-center">
              <Image
                alt="Get Exclusive Deals"
                src="assets/images/hiw3.png"
                width={40}
              />
            </div>
            <div className="text-xl font-semibold">Get Exclusive Deals</div>
            <div className="text-base">
              Access special promotions, discounts, and local events.
            </div>
          </div>
        </div>
      </section>
      {/* Why Locamart */}
      <section
        className=" pt-[80px] md:pt-[74px] pb-[60px] px-4 md:px-6 w-full text-center"
        id="why-locamart"
      >
        <div
          className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
          style={{ "--bullet-item-color": "#E1C453" } as React.CSSProperties}
        >
          Why Locamart?
        </div>
        <div className="font-bold text-2xl md:text-[2rem] pt-[18px]">
          <span className="text-[#E1C453]">Locamart</span> is more than just a
          platform
        </div>
        <div
          className={subtitle({
            class: "mt-4 leading-tight md:mt-2 md:leading-[1.25]",
          })}
        >
          It’s a community-driven solution designed to empower businesses and
          delight <br className="hidden md:block" /> users. Here’s why you
          should choose Locamart over other platforms:
        </div>
        <div className="flex flex-wrap mt-5 mx-auto  md:max-w-[75rem] justify-center">
          <div className=" basis-full md:basis-1/3 py-3 sm:p-1 md:p-3 max-w-[300px] md:max-w-[288px] md:max-w-[326px]">
            <div className="flex flex-col justify-center px-8 md:px-6 py-8 md:py-0 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] md:h-[140px]">
              <div className="text-xl font-semibold">Transparent Reviews</div>
              <div className="mt-3 text-base leading-tight">
                Honest feedback you can trust, with no paid promotions or hidden
                agendas.
              </div>
            </div>
          </div>
          <div className=" basis-full md:basis-1/3 py-3 sm:p-1 md:p-3 max-w-[300px] md:max-w-[288px] md:max-w-[326px]">
            <div className="flex flex-col justify-center px-8 md:px-6 py-8 md:py-0 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] md:h-[140px]">
              <div className="text-xl font-semibold">Support Local</div>
              <div className="mt-3 text-base leading-tight">
                Helping small businesses compete and thrive in their communities
              </div>
            </div>
          </div>
          <div className=" basis-full md:basis-1/3 py-3 sm:p-1 md:p-3 max-w-[300px] md:max-w-[288px] md:max-w-[326px]">
            <div className="flex flex-col justify-center px-8 md:px-6 py-8 md:py-0 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] md:h-[140px]">
              <div className="text-xl font-semibold">Direct Updates</div>
              <div className="mt-3 text-base leading-tight">
                Businesses can share promotions, events, and news directly with
                customers.
              </div>
            </div>
          </div>
          <div className=" basis-full md:basis-1/3 py-3 sm:p-1 md:p-3 max-w-[300px] md:max-w-[288px] md:max-w-[326px]">
            <div className="flex flex-col justify-center px-8 md:px-6 py-8 md:py-0 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] md:h-[140px]">
              <div className="text-xl font-semibold">User-Friendly</div>
              <div className="mt-3 text-base leading-tight">
                Easy-to-use platform with personalized recommendations.
              </div>
            </div>
          </div>
          <div className=" basis-full md:basis-1/3 py-3 sm:p-1 md:p-3 max-w-[300px] md:max-w-[288px] md:max-w-[326px]">
            <div className="flex flex-col justify-center px-8 md:px-6 py-8 md:py-0 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] md:h-[140px]">
              <div className="text-xl font-semibold">Fair Pricing</div>
              <div className="mt-3 text-base leading-tight">
                No hidden fees or unfair costs for businesses.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Benefits */}
      <section
        className="bg-[#F9FAFB] text-center pt-[80px] md:pt-[74px] pb-[60px] px-4 md:px-6 w-full"
        id="for-businesses"
      >
        <div
          className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
          style={{ "--bullet-item-color": "#5370E1" } as React.CSSProperties}
        >
          For Businesses
        </div>
        <div className="font-bold text-2xl md:text-[2rem] pt-[18px] pb-3">
          How <span className="text-[#5370E1]">Locamart</span> Will Help Boost
          Your Business
        </div>
        <div className="flex flex-wrap mt-5 mx-auto  max-w-[76rem] justify-center">
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] md:h-[290px] lg:h-[262px]">
              <Image
                alt="Expand Your Reach"
                className="w-[64px] lg:w-unset"
                src="assets/images/fb1.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Expand Your Reach
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Gain visibility and connect with customers who are actively
                looking for culturally-aligned products and services.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] md:h-[290px] lg:h-[262px]">
              <Image
                alt="Attract Loyal Customers"
                className="w-[64px] lg:w-unset"
                src="assets/images/fb2.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Attract Loyal Customers
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Build trust and earn customer loyalty through transparent
                reviews, ratings, and promotions.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] md:h-[290px] lg:h-[262px]">
              <Image
                alt="Stand Out in a Competitive Market"
                className="w-[64px] lg:w-unset"
                src="assets/images/fb3.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Grow Your Sales
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Boost your sales by offering your products and services to a
                wider, more engaged audience.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] md:h-[350px] lg:h-[292px] mt-3">
              <Image
                alt="Drive More Traffic with Location-Based Discovery"
                className="w-[64px] lg:w-unset"
                src="assets/images/fb4.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Stand Out in a Competitive Market
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Differentiate your business with a strong presence on a platform
                dedicated to local, immigrant-owned businesses.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] md:h-[350px] lg:h-[292px] mt-3">
              <Image
                alt="Engage with a Supportive Community"
                className="w-[64px] lg:w-unset"
                src="assets/images/fb5.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Drive More Traffic with Location-Based Discovery
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Make it easier for local customers to find you with
                location-based matching, bringing in foot traffic and online
                visits.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] md:h-[350px] lg:h-[292px] mt-3">
              <Image
                alt="User-Friendly"
                className="w-[64px] lg:w-unset"
                src="assets/images/fb6.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Engage with a Supportive Community
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Connect with a community of businesses and customers who share
                your values and help your business grow.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* User Benefits */}
      <section
        className="bg-[#F9FAFB] text-center pt-[4px] pb-[60px] px-4 md:px-6 w-full"
        id="for-users"
      >
        <div
          className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
          style={{ "--bullet-item-color": "#53E17D" } as React.CSSProperties}
        >
          For Users
        </div>
        <div className="font-bold text-2xl md:text-[2rem] pt-[18px] pb-3">
          How <span className="text-[#53E17D]">Locamart</span> Helps You Find
          What You Need
        </div>
        <div
          className="flex flex-wrap mt-5 mx-auto  max-w-[76rem] justify-center"
          style={{ "--box-pane-color": "#53E17D" } as React.CSSProperties}
        >
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] md:h-[270px] lg:h-[243px]">
              <Image
                alt="Discover Local Services"
                className="w-[64px] lg:w-unset"
                src="assets/images/fu1.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Discover Local Services
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Quickly find businesses and services tailored to your needs.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] md:h-[270px] lg:h-[243px]">
              <Image
                alt="Read and Write Reviews"
                className="w-[64px] lg:w-unset"
                src="assets/images/fu2.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Read and Write Reviews
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Share your experiences and explore trusted recommendations.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] md:h-[270px] lg:h-[243px]">
              <Image
                alt="Save Your Favorites"
                className="w-[64px] lg:w-unset"
                src="assets/images/fu3.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Save Your Favorites
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Keep track of the businesses you love for easy access later.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] md:h-[270px] lg:h-[243px] mt-3">
              <Image
                alt="Personalized Suggestions"
                className="w-[64px] lg:w-unset"
                src="assets/images/fu4.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Personalized Suggestions
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Get recommendations based on your preferences and location.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] md:h-[270px] lg:h-[243px] mt-3">
              <Image
                alt="Exclusive Deals"
                className="w-[64px] lg:w-unset"
                src="assets/images/fu5.png"
              />
              <div className="mt-3 text-xl font-semibold md:mt-3 md:text-2xl">
                Exclusive Deals
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Enjoy special offers and discounts from local businesses.{" "}
              </div>
            </div>
          </div>
          <div className="w-full px-3 pb-4 md:w-unset md:basis-1/3">
            <div className="box-pane p-6 md:p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] md:h-[270px] lg:h-[243px] mt-3">
              <Image
                alt="Simple and Smart Search"
                className="w-[64px] lg:w-unset"
                src="assets/images/fu6.png"
              />
              <div className="mt-3 text-xl font-semibold lg:mt-3 lg:text-2xl">
                Simple and Smart Search
              </div>
              <div className="mt-3 text-base leading-[1.2] md:leading-normal">
                Use advanced filters to find exactly what you are looking for.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className=" text-center pt-[80px] pb-[10px] px-6 w-full "
        id="about"
      >
        <div
          className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
          style={{ "--bullet-item-color": "#E153B7" } as React.CSSProperties}
        >
          About
        </div>
        <div className="font-bold text-2xl md:text-[2rem] pt-[18px] pb-3">
          The Story Behind <span className="text-[#E153B7]">Locamart</span>
        </div>

        <div className="justify-center mx-auto md:flex">
          <div className="flex-1 text-start justify-center col md:mx-16 md:mt-16 md:max-w-[413px] ">
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
              marketplace.{" "}
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
        className=" text-center mt-20 md:pt-[55px] pb-[10px] px-6 w-full"
        id="contact"
      >
        <div
          className="bullet-item font-bold text-xl md:text-[1.5rem] text-center inline"
          style={{ "--bullet-item-color": "#5370E1" } as React.CSSProperties}
        >
          Contact
        </div>
        <div className="font-bold text-2xl md:text-[2rem] pt-[18px] pb-3">
          Get in Touch
        </div>{" "}
        <div
          className={
            "text-xl md:text-[1.5rem] font-bold mt-6 md:mt-12 sm:text-center"
          }
        >
          Be the First to Experience Locamart!{" "}
        </div>
        <div className="md:w-[463px] mx-auto mt-4 md:mt-6">
          <WatingList width="md:w-full" />
        </div>
        <div className="w-[256px] md:w-[447px] py-5 md:py-8 bg-[#F9FAFB] mt-12 rounded-lg mx-auto text-center flex flex-col items-center">
          <span className="text-xl font-semibold md:text-2xl">
            Interested in <br className="md:hidden" /> Partnering with Us?
          </span>
          <Link
            isExternal
            aria-label="Calendly"
            className="mt-3 md:mt-8"
            href={siteConfig.links.calcom}
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <Button className="px-7" color="primary" radius="sm" size="lg">
              Book Appoinment
            </Button>
          </Link>
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
}
