import { Navigation } from "../../../components/Navigation";
import { Footer } from "../../../components/Footer";

export const LegalNotices = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-center relative bg-white overflow-hidden">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation variant="legal" />

      <main id="main-content" className="flex-col justify-center gap-2.5 pt-[100px] pb-0 px-4 self-stretch w-full flex items-center">
        <article className="w-full max-w-[1128px] font-body font-[number:var(--body-font-weight)] text-black text-[14px] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          <h1 className="font-bold text-2xl mb-4">LEGAL NOTICES</h1>

          <p className="mb-4">
            PLEASE READ THESE LEGAL NOTICES BEFORE ACCESSING OR USING THIS WEBSITE. DO NOT USE THE WEBSITE IF YOU DO NOT AGREE TO THESE TERMS.
          </p>

          <p className="mb-4">Last Updated: May 5, 2020</p>

          <p className="mb-4">
            The following Legal Notices (&quot;Legal Notices&quot;) govern your access to and use of websites owned and operated by DepositPal, LLC dba DepositCloud, dba EasyPay by DepositCloud, and their subsidiaries and affiliated companies (collectively, &quot;DepositCloud,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;)), including any content, functionality, products and services offered on or through such websites (collectively, the &quot;Services&quot;). Please note that if you are a account holder, these Terms of Use are not intended to, and do not, modify or alter the terms of your DepositCloud or EasyPay Unlimited Account Agreement, as applicable, which governs your use of your account, (&quot;Account&quot;).
          </p>

          <h2 className="font-bold text-xl mb-2">Specific Use of Consumer Information</h2>
          <p className="mb-4">
            There are supplemental guaranties that you are able to meet your obligations to the landlord or property owner of your leased unit and therefore have elements of a credit product based on your financial profile. For these reasons, additional information about your income, employment history, personal assets, and citizenship/visa status may be collected. The information we are collecting is necessary to verify information about you, and determine your eligibility. No information related to race, color, religion, national origin, actual or perceived gender (including gender identity), marital status, sexual orientation, disability, age, lawful occupation, presence of children, lawful source of income (including public assistance), or any other aspect of a protected Federal, state or locally protected class is used to determine enrollment acceptance.
          </p>

          <h2 className="font-bold text-xl mb-2">Consumer Protection</h2>
          
          <h3 className="font-bold text-lg mb-2">Fair Housing Act</h3>
          <p className="mb-4">
            The Fair Housing Act prohibits discrimination in the sale, rental, and financing of dwellings, and in other housing-related transactions, based on race, color, national origin, religion, sex, familial status, and disability.
          </p>

          <h3 className="font-bold text-lg mb-2">State and Local Laws</h3>
          <p className="mb-4">
            State and local laws often provide broader coverage and prohibit discrimination based on additional classes not covered by Federal law. See State Law Notices Below for more information.
          </p>

          <h3 className="font-bold text-lg mb-2">Americans with Disabilities Act</h3>
          <p className="mb-4">
            The Americans with Disabilities Act prohibits discrimination and ensures equal opportunity for persons with disabilities in employment, state and local government services, public accommodations, commercial facilities, and transportation.
          </p>

          <h3 className="font-bold text-lg mb-2">Equal Credit Opportunity Act</h3>
          <p className="mb-4">
            The Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age, because an applicant receives income from a public assistance program, or because an applicant has in good faith exercised any right under the Consumer Credit Protection Act.
          </p>

          <h2 className="font-bold text-xl mb-2">Consent to Electronic Communications and e-Signatures</h2>
          <p className="mb-4">
            Under the terms of The Electronic Signatures in Global and National Commerce Act of 2000, you are providing consent to electronic transactions, including providing you with documents electronically by submission of an enrollment and payment of any enrollment costs. You will receive all of your confirmation documents, post move-out statements, and account statements from us electronically, as permitted by law. Credit line agreement documents in electronic format will have the same contractual force and effect as documents in paper format. To access your online account, go to www.depositcloud.com and log in to your account with the e-mail address and password you provided when you created or updated your account. You may withdraw your consent to electronic transactions and communications at any time and begin receiving notices and documents in paper format.
          </p>

          <p className="mb-4">
            To withdraw your consent, please contact us call us at 1-855-339-4725 or by email at support@depositcloud.com with the following subject line: ELECTRONIC CONSENT WITHDRAWL. The body of your e-mail must contain your name, account number, apartment community name, and the effective date of your withdrawal and whether you want (1) all communications to be in paper form and (2.) your statement of deposit account (move out statement) sent to you in paper form. And must include a correct, legal, mailing address. DepositCloud reserves the right charge you a fee, except where prohibited by law, of $15.00 for paper transmission of your final statement of deposit accounting.
          </p>

          <h2 className="font-bold text-xl mb-2">State Law Notices:</h2>

          <h3 className="font-bold text-lg mb-2">California Residents Only:</h3>
          <p className="mb-4">
            A married applicant may apply for a separate account. If DepositCloud takes any adverse action as defined by § 1785.3 of the California Civil Code and the adverse action is based, in whole or in part, on any information contained in a consumer credit report, Account Holder has the right to obtain within 60 days a free copy of Account Holder&#39;s consumer credit report from the consumer reporting agency who furnished the consumer credit report and from any other consumer credit reporting agency that complies and maintains files on consumers on a nationwide basis.
          </p>

          <h3 className="font-bold text-lg mb-2">California and Utah Residents:</h3>
          <p className="mb-4">
            As required by California and Utah law, Account Holder is hereby notified that a negative credit report reflecting on Account Holder&#39;s credit record may be submitted to a credit reporting agency if Account Holder fails to fulfill the terms of Account Holder&#39;s credit obligations.
          </p>

          <h3 className="font-bold text-lg mb-2">Kansas:</h3>
          <p className="mb-4">
            Notice to Consumer: 1. Do not sign this Agreement before you read it. 2. You are entitled to a copy of this Agreement. 3. You may prepay the unpaid balance at any time without penalty.
          </p>

          <h3 className="font-bold text-lg mb-2">Maryland Residents Only:</h3>
          <p className="mb-4">
            DepositCloud elects to make this Account pursuant to Subtitle 10 (Credit Grantor Closed End Credit provisions) of Title 12 of the Maryland Commercial Law Article only to the extent that such provisions are not inconsistent with DepositPal, LLC, dba DepositCloud&#39;s authority under federal law (12 U.S.C. § 85, § 1463(g), or § 1831d, as appropriate) and related regulations and interpretations, which authority DepositCloud expressly reserves.
          </p>

          <h3 className="font-bold text-lg mb-2">Massachusetts Residents Only:</h3>
          <p className="mb-4">
            Massachusetts law prohibits discrimination based upon marital status or sexual orientation.
          </p>

          <h3 className="font-bold text-lg mb-2">Missouri and Nebraska Residents:</h3>
          <p className="mb-4">
            ORAL ACCOUNT AGREEMENTS OR COMMITMENTS TO ACCOUNT MONEY, EXTEND CREDIT OR TO FORBEAR FROM ENFORCING REPAYMENT OF SUCH DEBT, INCLUDING PROMISES TO EXTEND OR RENEW SUCH DEBT, ARE NOT ENFORCEABLE. TO PROTECT ACCOUNT HOLDER(S) AND THE DEPOSITPAL, LLCC, DBA DEPOSITCLOUD AND ANY HOLDER OF THIS AGREEMENT FROM MISUNDERSTANDING OR DISAPPOINTMENT, ANY AGREEMENTS WE REACH COVERING SUCH MATTERS ARE CONTAINED IN THIS WRITING, WHICH IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US, EXCEPT AS WE MAY LATER AGREE IN WRITING TO MODIFY IT.
          </p>

          <h3 className="font-bold text-lg mb-2">New Jersey Residents:</h3>
          <p className="mb-4">
            The section headings of the Agreement are a table of contents and not contract terms. Portions of this Agreement with references to actions taken to the extent of applicable law apply to acts or practices that New Jersey law permits or requires. In this Agreement, actions or practices (i) by which DepositCloud is or may be permitted by &quot;applicable law&quot; are permitted by New Jersey law, and (ii) that may be or will be taken by DepositCloud unless prohibited by &quot;applicable law&quot; are permitted by New Jersey law.
          </p>

          <h3 className="font-bold text-lg mb-2">New York, Rhode Island, and Vermont Residents:</h3>
          <p className="mb-4">
            Account Holder understands and agrees that DepositCloud may obtain a consumer credit report in connection with this application and in connection with any update, renewals for extension of any credit as a result of this application. If Account Holder asks, Account Holder will be informed whether or not such a report was obtained, and if so, the name and address of the agency that furnished the report. Account Holder also understands and agrees that DepositCloud may obtain a consumer credit report in connection with the review or collection of any Account made to Account Holder as a result of this application or for other legitimate purposes related to such Accounts.
          </p>

          <h3 className="font-bold text-lg mb-2">Ohio Residents Only:</h3>
          <p className="mb-4">
            The Ohio laws against discrimination require that all creditors make credit equally available to all credit-worthy customers, and that credit reporting agencies maintain separate credit histories on each individual upon request. The Ohio Civil Rights Commission administers compliance with the law.
          </p>

          <h3 className="font-bold text-lg mb-2">Washington Residents Only:</h3>
          <p className="mb-4">
            Oral agreements or oral commitments to Account money, extend credit, or to forbear from enforcing repayment of a debt are not enforceable under Washington law.
          </p>

          <h3 className="font-bold text-lg mb-2">Wisconsin Residents Only:</h3>
          <p className="mb-4">
            For married Wisconsin residents, Account Holder&#39;s signature confirms that this Account obligation is being incurred in the interest of Account Holder&#39;s marriage or family. No provision of any marital property agreement (pre-marital agreement), unilateral statement under § 766.59 of the Wisconsin statutes or court decree under § 766.70 adversely affects DepositPal, LLC, dba DepositCloud&#39;s interest unless, prior to the time that the Account is approved, DepositCloud is furnished with a copy of the marital property agreement, statement, or decree or have actual knowledge of the adverse provision. If this Account for which Account Holder is applying is granted, Account Holder will notify DepositCloud if Account Holder has a spouse who needs to receive notification that credit has been extended to Account Holder.
          </p>

          <h3 className="font-bold text-lg mb-2">West Virginia Residents Only:</h3>
          <p className="mb-8">
            For Account Holders located in West Virginia, DepositCloud is operating as a Credit Services Organization (&quot;CSO&quot;) in connection with your Account. DepositCloud may be reached at DepositPal, LLC, dba DepositCloud, PO Box 13112, Everett, WA 98206. DepositPal, LLC, dba DepositCloud&#39;s agent for service of process is CSC — 10 Ferry Street, Suite 313, Concord, NH 03301
          </p>
        </article>
      </main>

      <div className="bg-[#161616] w-full">
        <Footer />
      </div>
    </div>
  );
};
