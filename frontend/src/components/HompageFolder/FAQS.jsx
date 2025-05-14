import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

// FAQ data
const faqData = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for business accounts."
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this number on our website's 'Order Tracking' page to see real-time updates."
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Please visit our Returns page to initiate the process."
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see specific details during checkout."
  }
];



const FAQ = ({ question, answer }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="w-[90%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-4 rounded ${isHovered ? 'bg-indigo-50/20' : 'bg-gradient-to-r from-white/20 '}`}>
        <div className="flex justify-between items-center w-full">
          <h3 className={`font-medium text-base ${isHovered ? 'text-indigo-300' : 'text-white'}`}>
            {question}
          </h3>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'text-indigo-500 rotate-180' : 'text-gray-400'}`}
          />
        </div>
        
        {/* Answer container with proper transition */}
        <div
          className={`
            overflow-hidden transition-all duration-400 ease-in-out
            ${isHovered ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}
          `}
        >
          <div className="text-gray-600 p-3 rounded-lg border border-indigo-100 shadow-sm bg-white">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};





// Main FAQ Component
const FAQS = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen min-w-screen  py-8 justify-center flex  items-center">
      <div className="w-[90%]">
        {/* Header */}
        <div className="    px-6 py-8 md:py-10">
          <h2 className="text-5xl  font-bold text-white text-center tracking-widest">FAQS</h2>
          <p className="mt-2 text-indigo-100 text-center max-w-xl mx-auto">
            Find answers to the most common questions about our products and services
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-indigo-300" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 rounded-lg border-1 placeholder-indigo-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-60"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="px-4 py-6 md:px-8 bg-gradient-to-b flex justify-center items-center flex-col">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-2">
              {filteredFAQs.map((faq) => (
                <FAQ
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No FAQs match your search. Try different keywords.</p>
            </div>
          )}

          {/* FAQ Count */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Showing {filteredFAQs.length} of {faqData.length} questions
          </div>

          {/* Clear Search Button */}
          {searchTerm && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 "
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
