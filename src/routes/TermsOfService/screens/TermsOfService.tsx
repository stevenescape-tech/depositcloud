import { Navigation } from "../../../components/Navigation";
import { Footer } from "../../../components/Footer";

export const TermsOfService = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-center relative bg-white overflow-hidden">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation variant="legal" />

      <main id="main-content" className="flex-col justify-center gap-2.5 pt-[100px] pb-0 px-4 self-stretch w-full flex items-center">
        <article className="w-full max-w-[1112px] font-body font-[number:var(--body-font-weight)] text-black text-[14px] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          <h1 className="font-bold text-2xl mb-4">SITE TERMS OF USE</h1>

          <p className="mb-4">
            PLEASE READ THESE SITE TERMS OF USE CAREFULLY BEFORE ACCESSING OR USING THIS WEBSITE. DO NOT USE THE WEBSITE IF YOU DO NOT AGREE TO THESE TERMS.
          </p>

          <p className="mb-4">Last Updated: May 5, 2020</p>

          <p className="mb-4">
            The following Site Terms of Use ("Terms of Use") govern your access to and use of websites owned and operated by DepositPal, LLC dba DepositCloud, dba EasyPay by DepositCloud, and their subsidiaries and affiliated companies (collectively, "DepositCloud," "we," "us," and "our"), including any content, functionality, products and services offered on or through such websites (collectively, the "Services"). Please note that if you are an account holder, these Terms of Use are not intended to, and do not, modify or alter the terms of your DepositCloud or EasyPay Unlimited Account Agreement, as applicable, which governs your use of your account, ("Account"). By accessing or using the Services, whether via computer, mobile device or other technology, you represent that you are 18 years of age or older and you have read and agree to be bound by these Terms of Use in their entirety and all applicable laws, rules and regulations governing your use of the Services. These Terms of Use may be amended by posting a new version on our Services which version will be effective upon posting. If you do not agree to the new version of these Terms of Use, do not use the Services.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Privacy</h2>
          <p className="mb-4">
            To access the Services or some of the resources offered, you may be asked to provide certain personal information and non-personal information. It is a condition of your use of the Services that all the information you provide is correct, current and complete. Your use of the Services is governed by our Technology Privacy Statement and if applicable, the Privacy Policy applicable to your Account or other product or service, which explain how we collect, store, share or otherwise use your personal information and non-personal information, and you consent to all actions we take with respect to your information consistent with our Technology Privacy Statement and Privacy Policy.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Enrollment; Accounts</h2>
          <p className="mb-4">
            As a condition of using the Services, you are required to enroll for an account ("Account"). To enroll for an Account, you will: (1) provide true, accurate and complete information about yourself in the registration form; (2) maintain and promptly update such information; and (3) establish a username and password which you will keep secure. You agree not to provide access to your Account together with your username and password to others. You are solely responsible for protecting the security of your Account on your device. DepositCloud shall have no liability associated with or arising from your failure to maintain accurate registration information. You are responsible for all use of your Account and for ensuring that use of or access to your Account complies fully with these Terms of Use.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Proprietary Rights; Use of Content</h2>
          <p className="mb-4">
            The Services are owned and operated by DepositCloud or its affiliates, licensors and/or third party service providers (the "DepositCloud Parties") and unless otherwise indicated, all designs, text, images, videos, graphics, software and other content and materials appearing in the Services (collectively, "Content") are the property of DepositCloud or the DepositCloud Parties, and protected, without limitation, by U.S. and foreign copyright, trademark and other intellectual property laws. All trademarks, service marks, trade names, logos and other indicia of origin (collectively, "Marks") appearing on the Services are the property of DepositCloud or the DepositCloud Parties. You may not make any use of any Content or Marks without the prior written consent of DepositCloud. No Content from the Services may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Your Conduct</h2>
          <p className="mb-4">
            In using or accessing the Services you agree: (1) not to use the Services or any of the Content contained herein, for any unlawful or fraudulent purpose; (2) not to "spam" others or "phish" for others' personal information; (3) not to create or use a false identity; (4) not to disrupt or interfere with the security of, "deep link", attempt to obtain unauthorized access to or otherwise abuse, the Services or affiliated or linked websites; (5) not to disrupt or interfere with any other user's enjoyment of the Services; (6) not to use, frame or utilize framing techniques to enclose any Marks or other proprietary information (including Content); (7) not to use meta tags or any other "hidden text" utilizing a Mark; and (8) not to use the Services in a manner that is defamatory, inaccurate, profane, threatening, invasive of a person's privacy, violates any third party proprietary rights, or is in violation of any law or regulation.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Third Party Websites and Services</h2>
          <p className="mb-4">
            The Services may contain links to third party websites and services, over which DepositCloud has no control. You acknowledge and agree that DepositCloud does not endorse, verify, or make any representations regarding these third-party websites and services and is not responsible for the availability of, and any liability arising from, any such third-party websites and services. DepositCloud is not liable to you or any other party for any loss or damage which may be incurred by you as a result of these third-party websites and services. It is recommended that you carefully review any terms of use and privacy policy of any linked third-party website before providing any information to that website or using its products and services.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Termination; Modification</h2>
          <p className="mb-4">
            DepositCloud reserves the right, without notice and at its sole discretion, to suspend or terminate your ability to access or use the Services, and to block or prevent future access to and use of the Services for any reason. DepositCloud may, in its sole discretion, terminate, change, modify, suspend, make improvements to or discontinue any or all aspects of the Services, temporarily or permanently, at any time with or without notice to you. You agree that DepositCloud shall not be liable to you or to any third-party for any such modification, suspension or discontinuance.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Disclaimer</h2>
          <p className="mb-4">
            THE DEPOSITCLOUD PARTIES AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR CONTRACTORS (COLLECTIVELY, THE "DEPOSITCLOUD PARTNERS") MAKE NO REPRESENTATION OR WARRANTY IN CONNECTION WITH THE SERVICES OR CONTENT, ALL OF WHICH ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE DEPOSITCLOUD PARTNERS HEREBY DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, WITH RESPECT TO THE SERVICES, CONTENT AND ANY THIRD-PARTY WEBSITE OR SERVICE. THE DEPOSITCLOUD PARTNERS DO NOT WARRANT THAT THE SERVICES OR CONTENT WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE SERVICES OR CONTENT WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, THAT TRANSMISSIONS OR DATA WILL BE SECURE, OR THAT THIS CONTENT, SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE DEPOSITCLOUD PARTNERS DO NOT WARRANT OR MAKE ANY REPRESENTATION REGARDING THE USE OR THE RESULTS OF THE USE OF THE SERVICES OR ANY CONTENT IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
          </p>

          <p className="mb-4">
            The DepositCloud Partners will not be responsible for any delay, failure in performance or interruption of service, resulting directly or indirectly from acts of God, acts of civil or military authorities, civil disturbances, terrorism, wars, strikes or other labor disputes, fires, transportation contingencies, interruptions in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophes or any other occurrences which are beyond the DepositCloud Partners' reasonable control.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Limitation of Liability</h2>
          <p className="mb-4">
            IN NO EVENT AND UNDER NO CAUSE OF ACTION, INCLUDING, WITHOUT LIMITATION, NEGLIGENCE, SHALL ANY OF THE DEPOSITCLOUD PARTIES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DAMAGES, CLAIMS OR LOSSES INCURRED (INCLUDING, WITHOUT LIMITATION, COMPENSATORY, INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES), HOWEVER CAUSED, AND UNDER ANY THEORY OF LIABILITY, EVEN IF A DEPOSITCLOUD PARTNER IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, CLAIMS OR LOSSES, ARISING IN CONNECTION WITH:
          </p>
          <p className="mb-4">
            (1) THE SERVICES; (2) YOUR USE OR INABILITY TO USE THE SERVICES OR CONTENT; (3) ANY THIRD PARTY WEBSITE OR SERVICE USED IN CONNECTION WITH OR AVAILABLE THROUGH THE SERVICES; (4) UNAUTHORIZED ACCESS TO OR ALTERATION OR LOSS OF YOUR TRANSMISSIONS OR DATA OR OTHER INFORMATION THAT IS SENT OR RECEIVED IN CONNECTION WITH THE SERVICES; OR (5) ERRORS, SYSTEM DOWN TIME, NETWORK OR SYSTEM OUTAGES, FILE CORRUPTION OR SERVICE INTERRUPTIONS.
          </p>

          <p className="mb-4">
            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE CUMULATIVE LIABILITY OF THE DEPOSITCLOUD PARTNERS TO YOU ARISING FROM ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU FOR ACCESS TO THE SERVICES. IF NO AMOUNTS WERE PAID, YOUR SOLE REMEDY UNDER THESE TERMS OF USE SHALL BE TO DISCONTINUE ANY USE OF THE SERVICES.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend and hold harmless the DepositCloud Partners from and against any actual or alleged claims, demands, causes of action, judgments, damages, losses, liabilities, and all costs and expenses of defense (including, without limitation, reasonable attorneys' and other legal fees and costs) arising out of or relating to: (1) your violation of these Terms of Use or any law, rule or regulation; (2) your use of the Services or any Content; (3) loss of any data or account information; and (4) any material sent by you to DepositCloud. You will cooperate as fully and reasonably as required by DepositCloud in the defense of any claim. DepositCloud reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without the prior written consent of DepositCloud.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Governing Law</h2>
          <p className="mb-4">
            These Terms of Use shall be exclusively governed by and construed in accordance with the laws of the State of New Hampshire excluding conflicts of law rules. Any dispute arising from these Terms of Use or the Services shall be resolved in the state or federal courts residing in New Hampshire and you irrevocably agree to the jurisdiction of such courts. DepositCloud makes no representation that Content contained in the Services is appropriate or available for use in jurisdictions outside the United States, or that the Terms of Use comply with the laws of any other country. If any provision of these Terms of Use are deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any remaining provisions.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Export Control</h2>
          <p className="mb-4">
            The supply of goods, services and software through the Services is subject to United States export control and economic sanctions requirements. By acquiring any such items through the Services, you represent and warrant that your acquisition comports with and your use of the item will comport with those requirements. Without limiting the foregoing, you may not acquire goods, services or software through the Services if: (1) you are in, under the control of, or a national or resident of Cuba, Iran, North Korea, Sudan or Syria or if you are on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Commerce Department's Denied Persons List, Unverified List or Entity List or (2) you intend to supply the acquired goods, services or software to Cuba, Iran, North Korea, Sudan or Syria (or a national or resident of one of these countries) or to a person on the Specially Designated Nationals List, Denied Persons List, Unverified List, or Entity List.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Assignment</h2>
          <p className="mb-4">
            You will not assign (including without limitation by operation of law, change of control or otherwise) your rights or licenses to the Services provided under these Terms of Use, either in whole or in part, without the prior written consent of DepositCloud, and any attempted assignment contrary to the foregoing will be void and have no effect. We may assign all or a portion of our rights under these Terms of Use.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Waiver and Severability</h2>
          <p className="mb-4">
            No waiver by DepositCloud of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of DepositCloud to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.
          </p>
          <p className="mb-8">
            If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.
          </p>

          <h2 className="font-bold text-xl mb-2 mt-6">Contact Us</h2>
          <p className="mb-8">
            DepositCloud Customer Service, P.O. Box 13112, Everett, WA 98206.
          </p>
        </article>
      </main>

      <div className="bg-[#161616] w-full">
        <Footer />
      </div>
    </div>
  );
};
