import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 lg:px-16 px-6 dark:bg-black">
      <div className=" max-w-4xl mx-auto xl:flex-row flex-col xl:items-center items-start xl:justify-center gap-x-12">
        <h1 className="text-2xl dark:text-white font-bold mb-6">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
