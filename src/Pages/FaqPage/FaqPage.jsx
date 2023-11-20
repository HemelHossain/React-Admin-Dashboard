import React, { useState } from 'react';

const FaqPage = () => {
    const faqData = [
        {
            question: 'When will my order arrive??',
            answer: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation',
        },
        {
            question: 'How do I track my order?',
            answer: 'Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.',
        },
        {
            question: 'What’s your return policy??',
            answer: 'We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.',
        },
        {
            question: 'How do I make changes to an existing order?',
            answer: 'Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require.',
        },
        {
            question: 'What shipping options do you have?',
            answer: 'World wide Shipping',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='mx-[4%] md:mx-0 dark:text-white'>
            <div className='md:ml-20 mt-6 mx-auto'>
                <h4 className='text-3xl font-semibold'>FAQ</h4>
                <p className='text-sm'>Freequently Asked Questins Page</p>
            </div>
            <div className='bg-gray-100 dark:bg-gray-800 md:max-w-2xl box-shadow dark:shadow-none md:p-10 p-4 md:ml-20 mx-auto mt-4'>
            {faqData.map((faq, index) => (
                <div
                    key={faq.id}
                    className="mb-4"
                >
                    <div
                        className="cursor-pointer flex justify-between items-center bg-white dark:bg-gray-800 dark:border-gray-500 dark:border p-4"
                        onClick={() => toggleOpen(index)}
                    >
                        <h2 className="text-lg font-semibold">{faq.question}</h2>
                        <span className={`ml-2 ${openIndex === index ? 'transform rotate-180' : ''}`}>
                            &#9660;
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden ${openIndex === index ? 'max-h-screen transition-all duration-700' : 'max-h-0 transition-all duration-300'
                            }`}
                    >
                        <p className="p-4">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default FaqPage;