import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { WatingList } from "@/components/watinglist";
import { Button } from "@heroui/button";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center gap-4 py-4 h-[calc(100vh-4.6rem)] max-w-7xl px-10 mx-auto">
        <div className="flex-1 text-start justify-center col mb-40">
          <span className={title({ size: "md", class: "leading-[1.25]" })}>
            Where&nbsp;
          </span>
          <span
            className={title({
              size: "md",
              color: "primary",
              class: "leading-[1.25]",
            })}
          >
            Local&nbsp;
          </span>
          <br />
          <span className={title({ size: "md", class: "leading-[1.25]" })}>
            Businesses{" "}
          </span>
          <br />
          <span className={title({ size: "md", class: "leading-[1.25]" })}>
            and&nbsp;
          </span>
          <span
            className={title({
              size: "md",
              color: "secondary",
              class: "leading-[1.25]",
            })}
          >
            Culture&nbsp;
          </span>
          <span className={title({ size: "md", class: "leading-[1.25]" })}>
            Meet
          </span>
          <div className={subtitle({ class: "mt-6 leading-[1.25]" })}>
            Locamart connects local businesses with their communities, <br />
            helping you discover trusted services, authentic experiences, <br />
            and exclusive deals—all in one place.{" "}
          </div>
          <div className={"text-[1.5rem] font-bold mt-8"}>
            Be the First to Experience Locamart!{" "}
          </div>
          <WatingList width="w-4/5" />
        </div>
        <div className="flex-1 text-center justify-center mb-40">
          <Image alt="hero Image" src="assets/images/hero.png" />
        </div>
      </section>
      {/* How It Works */}
      <section className="bg-[#F9FAFB] text-center pt-[74px] pb-[60px] px-6 w-screen">
        <div
          style={{ "--bullet-item-color": "#5370E1" } as React.CSSProperties}
          className="bullet-item font-bold text-[1.5rem] text-center inline"
        >
          How It Works
        </div>
        <div className="font-bold text-[2rem] pt-[22px]">
          Discover. Connect. Support. See how Locamart works!
        </div>
        <div className="grid md:grid-cols-3 gap-16 mt-2 mx-auto  max-w-6xl">
          <div className="p-6">
            <div className="flex justify-center">
              <Image
                alt="Explore Local Businesses"
                width={40}
                src="assets/images/hiw1.png"
              />
            </div>
            <div className=" text-xl font-semibold">
              Explore Local Businesses
            </div>
            <div className="text-base">
              Browse trusted businesses based on location and category.
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-center">
              <Image
                alt="Read & Share Reviews"
                width={40}
                src="assets/images/hiw2.png"
              />
            </div>
            <div className="text-xl font-semibold">Read & Share Reviews</div>
            <div className="text-base">
              Get real recommendations from locals, and share your experiences.
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-center">
              <Image
                alt="Get Exclusive Deals"
                width={40}
                src="assets/images/hiw3.png"
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
      <section className="text-center pt-[74px] pb-[60px] px-6 w-scree">
        <div
          style={{ "--bullet-item-color": "#E1C453" } as React.CSSProperties}
          className="bullet-item font-bold text-[1.5rem] text-center inline"
        >
          Why Locamart?
        </div>
        <div className="font-bold text-[2rem] pt-[18px]">
          <span className="text-[#E1C453]">Locamart</span> is more than just a
          platform
        </div>
        <div className={subtitle({ class: "mt-2 leading-[1.25]" })}>
          It’s a community-driven solution designed to empower businesses and
          delight <br /> users. Here’s why you should choose Locamart over other
          platforms:
        </div>
        <div className="flex flex-wrap mt-5 mx-auto  max-w-[75rem] justify-center">
          <div className=" basis-1/3 p-3">
            <div className="p-6 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] h-[140px]">
              <div className="text-xl font-semibold">Transparent Reviews</div>
              <div className="text-base mt-3">
                Honest feedback you can trust, with no paid promotions or hidden
                agendas.
              </div>
            </div>
          </div>
          <div className=" basis-1/3 p-3">
            <div className="p-6 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] h-[140px]">
              <div className="text-xl font-semibold">Support Local</div>
              <div className="text-base mt-3">
                Helping small businesses compete and thrive in their communities
              </div>
            </div>
          </div>
          <div className=" basis-1/3 p-3">
            <div className="p-6 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] h-[140px]">
              <div className="text-xl font-semibold">Direct Updates</div>
              <div className="text-base mt-3">
                Businesses can share promotions, events, and news directly with
                customers.
              </div>
            </div>
          </div>
          <div className=" basis-1/3 p-3">
            <div className="p-6 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] h-[140px]">
              <div className="text-xl font-semibold">User-Friendly</div>
              <div className="text-base mt-3">
                Easy-to-use platform with personalized recommendations.
              </div>
            </div>
          </div>
          <div className=" basis-1/3 p-3">
            <div className="p-6 rounded-2xl border-[#E1C453] border bg-[#FDF5E0] h-[140px]">
              <div className="text-xl font-semibold">Fair Pricing</div>
              <div className="text-base mt-3">
                No hidden fees or unfair costs for businesses.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Benefits */}
      <section className="bg-[#F9FAFB] text-center pt-[74px] pb-[60px] px-6 w-screen">
        <div
          style={{ "--bullet-item-color": "#5370E1" } as React.CSSProperties}
          className="bullet-item font-bold text-[1.5rem] text-center inline"
        >
          For Businesses
        </div>
        <div className="font-bold text-[2rem] pt-[18px] pb-3">
          How <span className="text-[#5370E1]">Locamart</span> Will Help Boost
          Your Business
        </div>
        <div className="flex flex-wrap mt-5 mx-auto  max-w-[76rem] justify-center">
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] h-[262px]">
              <Image alt="Expand Your Reach" src="assets/images/fb1.png" />
              <div className="text-2xl font-semibold mt-3">
                Expand Your Reach
              </div>
              <div className="text-base mt-3">
                Gain visibility and connect with customers who are actively
                looking for culturally-aligned products and services.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] h-[262px]">
              <Image
                alt="Attract Loyal Customers"
                src="assets/images/fb2.png"
              />
              <div className="text-2xl font-semibold mt-3">
                Attract Loyal Customers
              </div>
              <div className="text-base mt-3">
                Build trust and earn customer loyalty through transparent
                reviews, ratings, and promotions.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] h-[262px]">
              <Image
                alt="Stand Out in a Competitive Market"
                src="assets/images/fb3.png"
              />
              <div className="text-2xl font-semibold mt-3">Grow Your Sales</div>
              <div className="text-base mt-3">
                Boost your sales by offering your products and services to a
                wider, more engaged audience.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] h-[292px] mt-3">
              <Image
                alt="Drive More Traffic with Location-Based Discovery"
                src="assets/images/fb4.png"
              />
              <div className="text-2xl font-semibold mt-3">
                Stand Out in a Competitive Market
              </div>
              <div className="text-base mt-3">
                Differentiate your business with a strong presence on a platform
                dedicated to local, immigrant-owned businesses.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] h-[292px] mt-3">
              <Image
                alt="Engage with a Supportive Community"
                src="assets/images/fb5.png"
              />
              <div className="text-2xl font-semibold mt-3">
                Drive More Traffic with Location-Based Discovery
              </div>
              <div className="text-base mt-3">
                Make it easier for local customers to find you with
                location-based matching, bringing in foot traffic and online
                visits.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#B6C5FF] border bg-[#E9EBFB] h-[292px] mt-3">
              <Image alt="User-Friendly" src="assets/images/fb6.png" />
              <div className="text-2xl font-semibold mt-3">
                Engage with a Supportive Community
              </div>
              <div className="text-base mt-3">
                Connect with a community of businesses and customers who share
                your values and help your business grow.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* User Benefits */}
      <section className="bg-[#F9FAFB] text-center pt-[4px] pb-[60px] px-6 w-screen">
        <div
          style={{ "--bullet-item-color": "#53E17D" } as React.CSSProperties}
          className="bullet-item font-bold text-[1.5rem] text-center inline"
        >
          For Users
        </div>
        <div className="font-bold text-[2rem] pt-[18px] pb-3">
          How <span className="text-[#53E17D]">Locamart</span> Helps You Find
          What You Need
        </div>
        <div
          className="flex flex-wrap mt-5 mx-auto  max-w-[76rem] justify-center"
          style={{ "--box-pane-color": "#53E17D" } as React.CSSProperties}
        >
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] h-[243px]">
              <Image
                alt="Discover Local Services"
                src="assets/images/fu1.png"
              />
              <div className="text-2xl font-semibold mt-3">
                Discover Local Services
              </div>
              <div className="text-base mt-3">
                Quickly find businesses and services tailored to your needs.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] h-[243px]">
              <Image alt="Read and Write Reviews" src="assets/images/fu2.png" />
              <div className="text-2xl font-semibold mt-3">
                Read and Write Reviews
              </div>
              <div className="text-base mt-3">
                Share your experiences and explore trusted recommendations.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] h-[243px]">
              <Image alt="Save Your Favorites" src="assets/images/fu3.png" />
              <div className="text-2xl font-semibold mt-3">
                Save Your Favorites
              </div>
              <div className="text-base mt-3">
                Keep track of the businesses you love for easy access later.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] h-[243px] mt-3">
              <Image
                alt="Personalized Suggestions"
                src="assets/images/fu4.png"
              />
              <div className="text-2xl font-semibold mt-3">
                Personalized Suggestions
              </div>
              <div className="text-base mt-3">
                Get recommendations based on your preferences and location.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] h-[243px] mt-3">
              <Image alt="Exclusive Deals" src="assets/images/fu5.png" />
              <div className="text-2xl font-semibold mt-3">Exclusive Deals</div>
              <div className="text-base mt-3">
                Enjoy special offers and discounts from local businesses.{" "}
              </div>
            </div>
          </div>
          <div className=" basis-1/3 px-3 pb-4">
            <div className="box-pane p-8 rounded-2xl text-left border-[#53E17D] border bg-[#DEFFE5] h-[243px] mt-3">
              <Image
                alt="Simple and Smart Search"
                src="assets/images/fu6.png"
              />
              <div className="text-2xl font-semibold mt-3">
                Simple and Smart Search
              </div>
              <div className="text-base mt-3">
                Use advanced filters to find exactly what you're looking for.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className=" text-center pt-[80px] pb-[10px] px-6 w-screen ">
        <div
          style={{ "--bullet-item-color": "#E153B7" } as React.CSSProperties}
          className="bullet-item font-bold text-[1.5rem] text-center inline"
        >
          About
        </div>
        <div className="font-bold text-[2rem] pt-[18px] pb-3">
          The Story Behind <span className="text-[#E153B7]">Locamart</span>
        </div>

        <div className="flex justify-center mx-auto">
          <div className="flex-1 text-start justify-center col mx-16 mt-16 max-w-[413px] ">
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
          <div className="flex-1 text-center justify-center mt-10 max-w-[383px]">
            <Image
              alt="The Story Behind Locamart"
              src="assets/images/story.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className=" text-center pt-[55px] pb-[10px] px-6 w-screen">
        <div
          style={{ "--bullet-item-color": "#E153B7" } as React.CSSProperties}
          className="bullet-item font-bold text-[1.5rem] text-center inline"
        >
          Contact
        </div>
        <div className="font-bold text-[2rem] pt-[18px] pb-3">Get in Touch</div>{" "}
        <div className={"text-[1.5rem] font-bold mt-12"}>
          Be the First to Experience Locamart!{" "}
        </div>
        <div className="w-[463px] mx-auto mt-6">
          <WatingList width="w-full" />
        </div>
        <div className="w-[447px] py-8 bg-[#F9FAFB] mt-12 rounded-lg mx-auto text-center flex flex-col items-center">
          <span className="font-semibold text-2xl">
            Interested in Partnering with Us?
          </span>
          <Link
            isExternal
            aria-label="Calendly"
            href={siteConfig.links.calcom}
            className="mt-8"
          >
            <Button color="primary" radius="sm" size="lg" className="px-7">
              Book Appoinment
            </Button>
          </Link>
          <span className="mt-6 font-semibold text-xl">or</span>
          <span className="font-semibold text-xl">
            Email Us: <FaRegEnvelope className="inline text-primary mx-1" />{" "}
            info [at] locamart.co
          </span>
        </div>
      </section>
    </>
  );
}
