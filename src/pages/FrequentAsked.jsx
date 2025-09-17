import React from 'react'
import Nav from './Navbar/Nav'
import frequentlyaaskq from '@/assets/Images/frequentlyaaskq.jpg'
import Footer from './Footer'

const FrequentAsked = () => {
  const sections = [
    {
      title: "Appointments & ",
      highlight: "Scheduling",
      faqs: [
        {
          question: "How can I book an appointment with a doctor?",
          answer:
            "You can book an appointment directly through our website or mobile app by selecting your preferred doctor, time slot, and reason for visit.",
        },
        {
          question: "Can I cancel or reschedule my appointment?",
          answer:
            "Yes, appointments can be canceled or rescheduled via your dashboard up to 24 hours in advance.",
        },
        {
          question: "Will I get a reminder before my appointment?",
          answer:
            "Absolutely! MediTrack sends automatic SMS and email reminders before your appointment.",
        },
      ],
    },
    {
      title: "Medical Records & ",
      highlight: "Reports",
      faqs: [
        {
          question: "How do I access my medical reports?",
          answer:
            "All your lab results and prescription details are securely stored in your account and accessible anytime.",
        },
        {
          question: "Can I download or share my medical records?",
          answer:
            "Yes, patients can download their reports or share them with other doctors securely through the platform.",
        },
        {
          question: "Is my health information safe?",
          answer:
            "Yes, MediTrack uses end-to-end encryption and complies with healthcare data privacy laws to protect your information.",
        },
      ],
    },
    {
      title: "Billing & ",
      highlight: "Insurance",
      faqs: [
        {
          question: "Can I pay online for my consultation or tests?",
          answer:
            "Yes, we support secure online payments through debit/credit cards and mobile wallets.",
        },
        {
          question: "Do you accept insurance?",
          answer:
            "MediTrack works with most major insurance providers. You can verify your coverage during booking.",
        },
      ],
    },
  ]

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <img
          src={frequentlyaaskq}
          alt="Specialities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Frequently Asked Question
          </h1>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {sections.map((section, idx) => (
          <div key={idx}>
            {/* Section Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {section.title}
              <span className="text-green-600">{section.highlight}</span>
            </h1>

            {/* FAQ Items */}
            <div className="space-y-6">
              {section.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
                >
                  <p className="font-semibold text-lg text-gray-800">
                    Q: {faq.question}
                  </p>
                  <p className="text-gray-600 mt-2">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
      <Footer />

      </div>

    </div>
  )
}

export default FrequentAsked
