import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto lg:px-16 px-6">
      <div className="xl:flex-row flex-col xl:items-center items-start xl:justify-center gap-x-12 lg:mt-32 mt-20 mb-16">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
