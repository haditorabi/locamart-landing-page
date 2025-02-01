import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Image } from "@heroui/image";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { WatingList } from "@/components/watinglist";

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
          <WatingList />
        </div>
        <div className="flex-1 text-center justify-center mb-40">
          <Image alt="hero Image" src="assets/images/hero.png" />
        </div>
        <div className="flex gap-3"></div>
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
      <section className="text-center pt-[74px] pb-[60px] px-6 w-screen border-black border">
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
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold">For Businesses</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg">
            Expand Your Reach
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            Attract Loyal Customers
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            Grow Your Sales
          </div>
        </div>
      </section>

      {/* User Benefits */}
      <section className="bg-green-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold">For Users</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg">
            Discover Local Services
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            Read and Write Reviews
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            Save Your Favorites
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold">The Story Behind Locamart</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          <span className="text-[#E1C453]">Locamart</span> was created to
          connect businesses with their communities, making it easier for people
          to support local enterprises.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200 text-center py-16 px-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Your email address"
            className="p-3 border rounded-md w-64"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md ml-2">
            Join Waiting List
          </button>
        </div>
        <p className="mt-4">
          Email us at <span className="text-blue-600">info@locamart.co</span>
        </p>
      </section>
    </>
  );
}
