import Image from "next/image";
import Header from "./components/Header";
import XIcon from "./components/XIcon";
import MailIcon from "./components/MailIcon";
import LinkedInIcon from "./components/LinkedInIcon";
import GitHubIcon from "./components/GitHubIcon";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="space-y-24 px-24">
        <div className="min-h-screen content-center">
          <div className=" flex flex-row justify-between items-center">
            <div className="flex flex-col space-y-6">
              <h2 className="font-semibold text-5xl py-6">Hi, I am Thorben.</h2>
              <p className="">
                I am a computer science and industrial engineering student
                currently studying at Saarland University.
              </p>
              <p className="">
                My fields of interest are{" "}
                <strong>sleek designs, robotics, AI and IoT</strong>.
              </p>
              <p>
                Since you are already here, please have a look at my personal
                projects.
              </p>
              <p>
                In case you have any questions or inquiries, please feel free to
                contact me over my socials.
              </p>
              <div className="flex flex-row space-x-10 py-24">
                <XIcon />
                <MailIcon />
                <LinkedInIcon />
                <GitHubIcon />
              </div>
            </div>

            <div>
              <Image
                src="/IMG_4480.JPG"
                alt="Portrait"
                width="500"
                height="500"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        <div id="portfolio" className="justify-start w-full">
          <div className="">
            <h2 className="text-5xl font-semibold">
              Some of my personal projects include
            </h2>
          </div>

          <div className="py-24 space-y-6 flex flex-row justify-between">
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-semibold">
                playce - Automated access solution platform
              </h3>
              <div className="flex flex-col space-y-8">
                <p className="flex text-lg">
                  Playce is a platform as a system (PaaS) that enables sport
                  clubs to seamlessly automate their facilities.
                  <br />
                  What the platform basically does is, clubs can register and
                  offer their facilities over the platform. <br />
                  Users can add smart devices from several different brands to
                  control access as well as lighting automatically. <br />
                  Payments, statistics, device control will be handled by the
                  platform automatically.
                </p>
                <ul className="flex content-end justify-end list list-disc text-lg space-y-3 ml-8">
                  <p className="font-bold text-xl">
                    To achieve this I utilized:
                  </p>
                  <li>
                    <strong>Seam Co.</strong> - API for smart lock control
                  </li>
                  <li>
                    <strong>Stripe Connect</strong> - payment processing between
                    multiple parties
                  </li>
                  <li>
                    <strong>Java Spring Boot</strong> - backend
                  </li>
                  <li>
                    <strong>Next.JS</strong> - frontend
                  </li>
                  <li>
                    <strong>Supabase</strong> - database
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <Image
                src="/playce_logo.png"
                width="500"
                height="200"
                className=""
                alt="playce logo"
              />
            </div>
          </div>

          <div className="py-24 space-y-6 flex flex-row justify-between">
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-semibold">
                Russello Finanz - Real estate financing
              </h3>
              <div className="flex flex-col space-y-8">
                <p className="flex text-lg">
                  I created a website for a local real estate business that
                  specialises on loans and credits.
                </p>
                <ul>
                  <p className="font-bold text-xl">Tech stack:</p>
                  <li className="">
                    <strong>Bootstrapped with Next.JS</strong>
                  </li>
                  <li className="">
                    <strong>PostgreSQL</strong> - database
                  </li>
                  <li className="">
                    <strong>API in Next.JS App router</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
