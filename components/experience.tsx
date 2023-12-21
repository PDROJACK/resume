import Experience01 from "@/public/images/experience01.png";
import Experience02 from "@/public/images/experience02.png";
import Experience03 from "@/public/images/experience03.png";

import Image from "next/image";

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Work Experience
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                src={Experience01}
                width={50}
                height={30}
                alt="Publicis Sapient"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2021{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Publicis Sapient
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Developed back-end of a Thai mobile application for Hotel and
                Travel bookings having more than 1 million users. Imple- mented
                payments, bookings, and authentication features using Core Java,
                Spring Boot, and MongoDB.
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Created a GraphQL-ExpressJS based frontend layer to stitch API
                calls of multiple java microservices.
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Implemented performance testing simulations for Java and
                NodeJs micro-services using Gatling, and improved the architec-
                ture by finding bottlenecks to achieve 300 Transactions per sec.
                Optimized the Threadpool and multiprocessing aspects of
                microservices. Developed a light mocking service to handle large
                requests.
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Architected and provisioned tax and billing services in a
                serverless architecture on Azure for Britain’s leading retail
                chain using Terraform.
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Created a cloud-accelerator platform for AWS, GCP, and Azure
                using Terraform and Terragrunt to easily provision the entire
                cloud infrastructure, including core services
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                src={Experience02}
                width={50}
                height={30}
                alt="Stepswatch"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Mar 2020{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Oct 2020
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineering Intern
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Stepswatch
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Developed the RestAPI backend using ExpressJs MongoDB, for
                React Native-based mobile application.
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Created a 1-1 and group chat feature using socket.io and
                Redis.
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Deployed an NGINX Real-Time Video streaming server to stream
                CCTV feeds via mobile app using MPEG-DASH.
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                • Used face recognition ML models to show only streams where the
                face is recognized.
              </div>
            </div>
          </div>
        </li>

        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={Experience03} width={50} height={30} alt="Airtel" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Jun 2019{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Aug 2019
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineering Intern
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Airtel
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                In my role as a Software Engineer Intern for Airtel, I developed strategies to discover fraudulent transactions done on mobile based on the historical data of users. 
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
