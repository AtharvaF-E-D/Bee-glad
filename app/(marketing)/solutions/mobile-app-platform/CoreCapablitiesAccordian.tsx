/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const items = [
  {
    value: "item-1",
    trigger: "Cross-Platform Development",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    ImageContent: [
      {
        image:
          "https://img.freepik.com/free-photo/engineers-brainstorming-ways-use-ai_482257-84889.jpg",
        title: "API-driven",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/double-exposure-image-skyscrapers-with-digital-hologram-security-concept-blueprintstyle-background_670147-110502.jpg",
        title: "secure architectures",
      },
      {
        image:
          "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg",
        title: "Dedicated Developer",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/app-development-with-coding-web-design-data-technology-website-mobile-app-icon-programming-language-script-design-concept_1132312-3248.jpg",
        title: "Mobile App Development",
      },
    ],
  },
  {
    value: "item-2",
    trigger: "Native Performance",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    ImageContent: [
      {
        image:
          "https://img.freepik.com/free-photo/engineers-brainstorming-ways-use-ai_482257-84889.jpg",
        title: "API-driven",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/double-exposure-image-skyscrapers-with-digital-hologram-security-concept-blueprintstyle-background_670147-110502.jpg",
        title: "secure architectures",
      },
      {
        image:
          "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg",
        title: "Dedicated Developer",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/app-development-with-coding-web-design-data-technology-website-mobile-app-icon-programming-language-script-design-concept_1132312-3248.jpg",
        title: "Mobile App Development",
      },
    ],
  },
  {
    value: "item-3",
    trigger: "API & Backend Integration",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    ImageContent: [
      {
        image:
          "https://img.freepik.com/free-photo/engineers-brainstorming-ways-use-ai_482257-84889.jpg",
        title: "API-driven",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/double-exposure-image-skyscrapers-with-digital-hologram-security-concept-blueprintstyle-background_670147-110502.jpg",
        title: "secure architectures",
      },
      {
        image:
          "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg",
        title: "Dedicated Developer",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/app-development-with-coding-web-design-data-technology-website-mobile-app-icon-programming-language-script-design-concept_1132312-3248.jpg",
        title: "Mobile App Development",
      },
    ],
  },
  {
    value: "item-4",
    trigger: "App Store Ready Builds",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    ImageContent: [
      {
        image:
          "https://img.freepik.com/free-photo/engineers-brainstorming-ways-use-ai_482257-84889.jpg",
        title: "API-driven",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/double-exposure-image-skyscrapers-with-digital-hologram-security-concept-blueprintstyle-background_670147-110502.jpg",
        title: "secure architectures",
      },
      {
        image:
          "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg",
        title: "Dedicated Developer",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/app-development-with-coding-web-design-data-technology-website-mobile-app-icon-programming-language-script-design-concept_1132312-3248.jpg",
        title: "Mobile App Development",
      },
    ],
  },
];

const solutions = [
  {
    title: "Consumer mobile apps",
    image:
      "https://img.freepik.com/premium-photo/businessman-touching-digital-screen-with-saas-concept-cloud-computing-data-integration_124865-84686.jpg",
  },
  {
    title: "Enterprise mobility solutions",
    image:
      "https://img.freepik.com/free-vector/template-dashboard-user-panel_23-2148368851.jpg",
  },
  {
    title: "On-demand platforms",
    image:
      "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149379179.jpg",
  },
  {
    title: "Fintech & utility apps",
    image:
      "https://img.freepik.com/premium-photo/fintech-financial-technology-digital-money-concept-businessman-use-mobile-smart-phone-with-digital-finance-icons-digital-banking-internet-payment-online-shopping-financial-technology_562687-6141.jpg",
  },
];

const CoreCapablitiesAccordian = () => {
  return (
    <div>
      <div className="py-15">
        <h2 className="text-center text-[#9C9C9C] font-light text-lg pb-8">
          Our Services
        </h2>
        <h1 className="text-center text-5xl font-light">Core Capabilities</h1>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-7xl mx-auto py-20"
        >
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-gray-700"
            >
              <AccordionTrigger className=" flex items-center justify-between py-7 px-4 text-white hover:no-underline [&>svg]:hidden">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-8">
                  <span className="text-[28px] font-light tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[28px] font-[350] tracking-wide bg-[linear-gradient(96.45deg,#FFFFFF_10.29%,rgba(255,255,255,0)_145.86%)] bg-clip-text text-transparent ">
                    <span>{item.trigger}</span>
                  </span>
                </div>

                {/* RIGHT SIDE ARROW */}
                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
                  <ArrowRight strokeWidth={0.5} width={30} />
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-6 text-gray-400">
                <span>{item.content}</span>
                <span className="flex justify-between ">
                  {item.ImageContent?.map((img, i) => (
                    <span key={i} className="mt-8 relative">
                      <img
                        src={img.image}
                        alt="tech"
                        className="w-75 h-50 object-cover"
                      />
                      <span className="bg-black/40 absolute top-0 w-full h-full flex justify-center items-center">
                        <span className="text-white text-xl font-[350]">
                          {img.title}
                        </span>
                      </span>
                    </span>
                  ))}
                </span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="py-20">
        <h1 className="font-light text-5xl text-center py-20">
          Built once. Scaled everywhere.
        </h1>
        <div className="flex items-center justify-center py-10">
          {solutions.map((item, index) => (
            <div key={index} className="flex items-center">
              {/* CARD */}
              <div className="flex flex-col items-center">
                <div className="w-60 h-45 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <p className="text-gray-300 mt-3 text-[16px] text-center font-medium">
                  {item.title}
                </p>
              </div>

              {/* ARROW */}
              {index !== solutions.length - 1 && (
                <span className="text-gray-400 text-2xl mx-2">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreCapablitiesAccordian;
