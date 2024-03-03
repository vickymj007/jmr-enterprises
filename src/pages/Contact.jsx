import { AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div className="flex text-sm justify-center items-center max-w-[1200px] w-full mt-8 p-8">
      <AnimatePresence>
        <ContactForm />
      </AnimatePresence>
    </div>
  );
};

export default Contact;
