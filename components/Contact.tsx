import React, { useState } from "react";
import { SocialIcons } from "./icons/SocialIcons";
import { UiIcons } from "./icons/UiIcons";

type FormState = "idle" | "sending" | "success" | "error";

const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-500 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
        {title}
      </h4>
      <div className="text-text-secondary dark:text-dark-text-secondary">
        {children}
      </div>
    </div>
  </div>
);

const FormInput: React.FC<{
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, placeholder, name, value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    className="w-full px-5 py-3 rounded-full bg-light-gray dark:bg-dark-background border border-border-color dark:border-dark-border-color focus:outline-none focus:ring-2 focus:ring-primary dark:text-dark-text-primary"
  />
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Simulate a random success/error outcome
    if (Math.random() > 0.2) {
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setFormState("error");
    }
    setTimeout(() => setFormState("idle"), 5000); // Reset after 5s
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="flex flex-col gap-8">
        <ContactInfoItem icon={<UiIcons.Location />} title="Location">
          <p>Sirajganj, Bangladesh</p>
        </ContactInfoItem>
        <ContactInfoItem icon={<UiIcons.Phone />} title="Call Us">
          <p className="text-yellow-500 font-bold">+880 1812 719970</p>
        </ContactInfoItem>
        <ContactInfoItem icon={<UiIcons.Email />} title="Email">
          <p>talentdev285@gmail.com</p>
        </ContactInfoItem>
        <div>
          <h4 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
            Follow
          </h4>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-4">
            Science is social. Follow us for company news, original art, & great
            science writing.
          </p>
          <div className="flex gap-4 text-text-primary dark:text-dark-text-primary">
            <a href="#" className="hover:text-primary transition-colors">
              <SocialIcons.Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/murshida2023/"
              className="hover:text-primary transition-colors"
            >
              <SocialIcons.LinkedIn />
            </a>
            <a
              href="https://github.com/talentdev285"
              className="hover:text-primary transition-colors"
            >
              <SocialIcons.Github />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-border-color dark:border-dark-border-color">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <FormInput
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-2xl bg-light-gray dark:bg-dark-background border border-border-color dark:border-dark-border-color focus:outline-none focus:ring-2 focus:ring-primary dark:text-dark-text-primary"
          />
          <button
            type="submit"
            disabled={formState === "sending"}
            className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-focus transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:bg-purple-400 disabled:cursor-not-allowed"
          >
            {formState === "sending" ? "Sending..." : "Send Message"}{" "}
            <UiIcons.Send />
          </button>
          {formState === "success" && (
            <p className="text-green-600 dark:text-green-400 text-center">
              Message sent successfully! Thank you.
            </p>
          )}
          {formState === "error" && (
            <p className="text-red-600 dark:text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
