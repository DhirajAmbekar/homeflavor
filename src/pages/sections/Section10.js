import React, { useEffect, useRef, useState } from "react";

const faqs_list = [
  {
    ques: "How fast is your food delivery?",
    ans: "We deliver within 30 minutes on average, depending on your location and order size.",
  },
  {
    ques: "Do you offer contactless delivery?",
    ans: "Yes! Choose the 'Contactless Delivery' option at checkout, and our rider will leave your order at your doorstep.",
  },
  {
    ques: "What payment methods do you accept?",
    ans: "We accept credit/debit cards, digital wallets, and cash on delivery (COD).",
  },
  {
    ques: "Can I track my order in real-time?",
    ans: "Absolutely! Use our app or website to track your delivery in real-time from kitchen to doorstep.",
  },
  {
    ques: "Do you have a refund or cancellation policy?",
    ans: "Yes! You can cancel within 5 minutes of placing your order. Refunds are processed based on the issue—reach out to our support team for assistance.",
  },
];

export const Section10 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const section10Ref = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section10Ref.current) {
        const rect = section10Ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`section10_container ${isVisible ? "fade-in" : "hidden"}`}
      ref={section10Ref}
    >
      <div className="section10_title">Frequently Asked Questions</div>
      <div className="section10_desc">
        Got questions? We've got answers! Whether you're curious about delivery
        speed, payment options, or our refund policy, we’ve compiled everything
        you need to know in one place. Explore our FAQs to make your ordering
        experience seamless and stress-free!
      </div>
      <div className="accordian">
        {faqs_list.map((faq, index) => (
          <div
            key={index}
            className={`accordian_item ${openIndex === index ? "active" : ""}`}
          >
            <button
              className="accordian_button"
              onClick={() => toggleAccordion(index)}
            >
              {faq.ques}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="accordian_content">{faq.ans}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
