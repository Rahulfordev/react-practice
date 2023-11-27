import FAQ from "./FAQ";
import { FAQSData } from "./data";
import "./faqs.css";

const FAQS = () => {
  return (
    <div className="container">
      <section className="faqs">
        <h1>FAQs </h1>
        {FAQSData.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQS;
