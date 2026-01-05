import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export const PrivacyPolicy = (): JSX.Element => {
  const navigate = useNavigate();
  
  const navigationItems = [
    { label: "Platform", action: () => window.location.href = '/#platform' },
    { label: "Features", action: () => window.location.href = '/#features' },
    { label: "Book a demo", action: () => window.location.href = '/#contact' },
  ];

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col min-h-screen items-center relative bg-white overflow-hidden">
      <header className="flex flex-col w-full items-center justify-center gap-[11px] sticky top-0 left-0 z-50 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(https://c.animaapp.com/mjyhvu36aqUy0x/img/header.png)] bg-cover bg-center backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] py-4 border-b-[0.5px] border-[#51b0ff]">
        <nav className="w-full max-w-[1128px] px-4 justify-between flex items-center">
          <img
            className="w-[262px] h-10 cursor-pointer"
            alt="Depositcloud logo"
            src="https://c.animaapp.com/mjyhvu36aqUy0x/img/depositcloud-logo.svg"
            onClick={handleLogoClick}
          />

          <div className="inline-flex items-center justify-center gap-[63px]">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={item.action}
                className="h-auto p-0 [font-family:'Courier_Prime',Helvetica] font-normal text-white text-lg text-center tracking-[-1.26px] leading-[normal] whitespace-nowrap hover:bg-transparent hover:text-white/80 transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative w-full h-px bg-[url(https://c.animaapp.com/mk1kyl1820QxOX/img/divider.svg)] bg-[100%_100%]" />

      <main className="flex-col justify-center gap-2.5 pt-[100px] pb-0 px-4 self-stretch w-full flex items-center">
        <article className="w-full max-w-[1128px] font-body font-[number:var(--body-font-weight)] text-black text-[14px] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          <h1 className="font-bold text-2xl mb-4">TECHNOLOGY PRIVACY STATEMENT</h1>

          <p className="mb-4">
            PLEASE READ THIS TECHNOLOGY PRIVACY STATEMENT CAREFULLY BEFORE ACCESSING OR USING OUR WEBSITES OR SERVICES.
          </p>

          <p className="mb-4">Last Updated: May 5, 2020</p>

          <p className="mb-4">
            Your privacy is important to us. This Technology Privacy Statement ("Privacy Statement") describes the types of information collected, used, and shared by DepositPal, LLC dba DepositCloud, dba EasyPay by DepositCloud, and their subsidiaries and affiliated companies (collectively, "DepositCloud," "we," "us," and "our") when you visit our websites, including our social media pages that we control, or use our mobile applications. If you are a California resident, please see the "Additional Information Regarding California" section below for further information on our collection and use of your personal information.
          </p>

          <p className="mb-4">
            For information on how we collect, store, share, and otherwise use your personal information that is obtained in connection with your application for or use of our financial products or services, please see the Privacy Policy associated with that product or service; however, this Privacy Statement will apply to our collection, storage, sharing, and use of information from and about you, obtained in connection with your access to and use of our websites and mobile applications.
          </p>

          <h2 className="font-bold text-xl mb-2">INFORMATION COLLECTION</h2>

          <h3 className="font-bold text-lg mb-2">Information You Provide</h3>
          <p className="mb-4">
            We collect personal information from you when you choose to share it with us. This may include when you access or use our websites or mobile applications, create an online account with us, request information from us, sign up for our newsletters or our email lists, participate in a promotion, or otherwise contact us. The personal information we collect may include your name, address, email address, social security number, phone number, date of birth, information about your employment or references, information contained on financial account information used for payments, and any other information you choose to provide.
          </p>

          <h3 className="font-bold text-lg mb-2">Information Automatically Collected</h3>
          <p className="mb-4">
            We may use cookies, web beacons, pixel tags, log files, local shared objects (Flash cookies), and other technologies for security and authentication purposes, to collect certain information when you visit and use our websites or mobile applications, to monitor interactions with our emails and text messages, statements, payment reminders, and to allow us to keep track of analytics and certain statistical information that enable us to improve our websites, mobile applications, products, and services.
          </p>

          <p className="mb-4">
            For example, we may automatically collect certain non-personal information from you, including, but not limited to, your browser type and version, device type, Flash version, operating system, Internet Protocol ("IP") address, unique device identifier of your computer(s) or device(s) that are used to access our websites or mobile applications, software version, and the domain name from which you accessed our websites or mobile applications. We may also collect information about your browsing and use behavior, such as the date and time you visit our websites or use our mobile applications, the areas or pages of the websites or mobile applications that you visit, the amount of time you spend viewing or using the websites or mobile applications, the number of times you return to the websites or mobile applications, emails that you open, forward, or click-through to our websites.
          </p>

          <p className="mb-4">
            You can stop sharing location information with us at any time through your device or web browser settings or by deleting cookies. If you stop sharing your location, certain features of our websites and mobile applications may not function properly or at all. If you have specific questions about the privacy settings of your device, we suggest you contact the manufacturer of your device, your mobile service provider, or web browser provider for help.
          </p>

          <h3 className="font-bold text-lg mb-2">Tracking, California Do Not Track Disclosures, and Choices</h3>
          <p className="mb-4">
            Certain parts of our websites require cookies. You are free to set your browser or operating system settings to limit certain tracking or to decline cookies, but by doing so, you may not be able to use certain features of our websites or take full advantage of our services. Please refer to your browser's or operating system's website or "Help" section for more information on how to delete cookies and/or disable your browser or operating system from receiving cookies or controlling your tracking preferences.
          </p>

          <p className="mb-4">
            Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. Our system may not respond to Do Not Track requests or headers from some or all browsers.
          </p>

          <p className="mb-4">
            We use Google Analytics, which uses cookies and similar technologies to collect and analyze information about use of our websites and mobile applications and report on activities and trends. This service may also collect information regarding the use of other websites, mobile apps, and online resources. You can learn about Google's practices by going to www.google.com/policies/privacy/partners/ and exercise the opt-out provided by Google by downloading the Google Analytics opt-out browser add-on, available at https://tools.google.com/dlpage/gaoptout.
          </p>

          <p className="mb-4">
            We and our network advertisers may periodically show you online ads for products and services you might be interested based on your visits to both our websites and other websites (a process known as "behavioral advertising"). In order to do this, we need to place a cookie or other tracking device on your device. If you prefer to not receive online ads in this manner, you can opt out of some network advertising programs that use your information by tracking your browsing habits via cookies or other tracking devices.
          </p>

          <h2 className="font-bold text-xl mb-2">INFORMATION USE</h2>
          <p className="mb-4">
            We may use the information we collect from and about you for any of the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>For security and authentication purposes and to prevent fraud;</li>
            <li>To notify you of incomplete applications or enrollments;</li>
            <li>To respond to your inquiries or otherwise contact and communicate with you;</li>
            <li>To provide you and other users with customized content, targeted offers, and advertising on our websites and mobile applications, on third-party websites and applications, and via email;</li>
            <li>To contact you with account information, newsletters, and promotional materials;</li>
            <li>To contact you when necessary;</li>
            <li>To review the usage and operations of our websites and mobile applications and improve our content, products, and services;</li>
            <li>To address problems with our websites, mobile applications, and our business;</li>
            <li>To manage our networks;</li>
            <li>To protect the security or integrity of our websites, mobile applications, and our business; and</li>
            <li>As described to you at the point of collection.</li>
          </ul>

          <h2 className="font-bold text-xl mb-2">INFORMATION DISCLOSURE</h2>
          <p className="mb-4">
            We may disclose the information we collect from and about you as follows: (1) with DepositCloud subsidiaries and affiliated companies; (2) to our third-party service providers that provide business, professional, or technical support functions for us; (3) as necessary if we believe that there has been a violation of the Site Terms of Use or of our rights or the rights of any third party; (4) to respond to judicial process or provide information to law enforcement or regulatory agencies or in connection with an investigation on matters related to public safety, as permitted by law, or otherwise as required by law; and (5) as described to you at the point of collection.
          </p>

          <p className="mb-4">
            We may share aggregate or anonymous non-personal information with third parties.
          </p>

          <p className="mb-4">
            Also, we may sell or purchase assets during the normal course of our business. If another entity acquires us or any of our assets, information we have collected about you may be transferred to such entity. In addition, if any bankruptcy or reorganization proceeding is brought by or against us, such information may be considered an asset of ours and may be sold or transferred to third parties.
          </p>

          <h2 className="font-bold text-xl mb-2">OPTION TO OPT-OUT OF EMAIL MARKETING</h2>
          <p className="mb-4">
            At all times, you have the option of "opting out" of receiving future email marketing messages from DepositCloud by clicking on the "unsubscribe" link at the bottom of an email marketing message.
          </p>

          <h2 className="font-bold text-xl mb-2">LINKS TO OTHER WEBSITES</h2>
          <p className="mb-4">
            Our websites and mobile applications may have links to third-party websites and applications, which may have privacy policies that differ from our own. The inclusion of such links on our websites and mobile applications does not imply endorsement of the linked websites or applications by us, and we are not responsible for the practices of such websites or applications.
          </p>

          <p className="mb-4">
            In addition, we are not responsible for the information collection, use, disclosure, or security policies or practices of other organizations, such as Facebook, Apple, Google, Microsoft, RIM, or any other app developer, app provider, social media platform provider, operating system provider, wireless service provider, or device manufacturer, including with respect to any personal information you disclose to other organizations through or in connection with our mobile applications or any social media pages.
          </p>

          <h2 className="font-bold text-xl mb-2">CHILDREN'S PRIVACY</h2>
          <p className="mb-4">
            Protecting children's privacy is important to us. We do not direct our websites, mobile applications, products, or services to, nor do we knowingly collect any personal information from, children under the age of thirteen.
          </p>

          <h2 className="font-bold text-xl mb-2">DATA SECURITY</h2>
          <p className="mb-4">
            We have taken certain physical, administrative, and technical steps to safeguard the information we collect from and about our customers. While we make every effort to help ensure the integrity and security of our network and systems, we cannot guarantee our security measures.
          </p>

          <h2 className="font-bold text-xl mb-2">ACCESS TO YOUR PERSONAL INFORMATION</h2>
          <p className="mb-4">
            If our websites, mobile applications, products, or services allow you to create an account, you may sign in to your account to update your personal information stored by us.
          </p>

          <h2 className="font-bold text-xl mb-2">IF YOU HAVE QUESTIONS</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Statement or the practices described herein, you may contact us at DepositCloud Customer Service, P.O. Box 13112 Everett, WA 98206.
          </p>

          <h2 className="font-bold text-xl mb-2">REVISIONS TO THIS STATEMENT</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to change, modify, add, remove, or otherwise revise portions of this Privacy Statement at any time. When we do, we will post the change(s) on our websites and mobile applications.
          </p>

          <h2 className="font-bold text-xl mb-2">ADDITIONAL INFORMATION REGARDING CALIFORNIA</h2>
          <p className="mb-4">
            Pursuant to the California Consumer Privacy Act of 2018 ("CCPA"), we are providing the following additional details regarding the categories of personal information about California residents that we have collected, both online and offline, or disclosed for a business purpose within the preceding 12 months. Please note that this section, "Additional Information Regarding California," is effective as of January 1, 2020.
          </p>

          <p className="mb-4">We collected the following categories of personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identifiers, such as name, address, and IP address;</li>
            <li>Personal information, as defined in the California safeguards law, such as contact information;</li>
            <li>Internet and network activity information, such as browsing history and interactions with our website;</li>
            <li>Geolocation data, such as device location;</li>
            <li>Audio, electronic, visual, and similar information, such as call and video recordings; and</li>
            <li>Inferences drawn from any of the personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics.</li>
          </ul>

          <p className="mb-4">
            We collect this personal information from you. We use this personal information to operate, manage, and maintain our business, to provide our products and services, and to accomplish our business purposes and objectives, as described above in this Privacy Statement ("Information Use").
          </p>

          <p className="mb-4">
            We disclosed the following personal information to third parties, such as our service providers and affiliates, for our operational business purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identifiers, such as name, address and IP address;</li>
            <li>Personal information, as defined in the California safeguards law, such as contact information;</li>
            <li>Internet and network activity information, such as browsing history and interactions with our website;</li>
            <li>Geolocation data, such as device location;</li>
            <li>Audio, electronic, visual, and similar information, such as call and video recordings; and</li>
            <li>Inferences drawn from any of the personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics.</li>
          </ul>

          <p className="mb-4">
            We have not "sold" personal information for purposes of the CCPA. For purposes of this Privacy Statement, "sold" or "sale" means the disclosure of personal information for monetary or other valuable consideration, but does not include, for example, the transfer of personal information as an asset that is part of a merger, bankruptcy, or other disposition of all or any portion of our business.
          </p>

          <p className="mb-4">Beginning January 1, 2020, if you are a California resident, you may request that we:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Disclose to you the following information covering the 12 months preceding your request, pursuant to our obligations under the CCPA:
              <ul className="list-disc pl-6 mt-2">
                <li>The categories of personal information we collected about you and the categories of sources from which we collected such personal information;</li>
                <li>The specific pieces of personal information we collected about you;</li>
                <li>The business or commercial purpose for collecting personal information about you (if applicable); and</li>
                <li>The categories of personal information about you that we otherwise shared or disclosed, and the categories of third parties with whom we shared or to whom we disclosed such personal information (if applicable).</li>
              </ul>
            </li>
            <li>Delete personal information we collected from you, provided that you do not have a current payment obligation and the information request does not prevent or inhibit our ability to collect any balance due.</li>
          </ol>

          <p className="mb-4">
            To make a request for the disclosures or deletion described above, please call us at 855-753-1650, or by email to, CCPA@DepositCloud.com. We will respond to your request consistent with applicable law.
          </p>

          <p className="mb-8">
            You have the right to be free from unlawful discrimination for exercising your rights under the CCPA.
          </p>
        </article>
      </main>

      <footer className="flex flex-col items-center gap-6 bg-[#161616] mt-auto pb-6 w-full">
        <div className="relative w-full h-px bg-[url(https://c.animaapp.com/mk1kyl1820QxOX/img/divider.svg)] bg-[100%_100%]" />

        <div className="flex items-center justify-between w-full max-w-[1128px] mx-auto px-4 py-2">
          <div className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#8C8C8C] text-sm leading-7">
            DepositCloud © 2018 - 2026
          </div>

          <nav className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#8C8C8C] text-sm text-right">
            <span>
              <a
                href="/terms-of-service"
                className="underline leading-7 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <span className="leading-[0.1px]">
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </span>
            <span>
              <a
                href="/privacy-policy"
                className="underline leading-7 text-white transition-colors"
              >
                Privacy policy
              </a>
              <span className="leading-[0.1px]">
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </span>
            <span>
              <a
                href="/legal-notices"
                className="underline leading-7 hover:text-white transition-colors"
              >
                Legal Notices
              </a>
            </span>
          </nav>
        </div>
      </footer>
    </div>
  );
};
