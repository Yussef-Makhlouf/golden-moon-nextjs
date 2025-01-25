import React from 'react';
import Image from 'next/image';

const SocialMediaCards = () => {
  const cards = [
    {
      id: 1,
      image: "/img25.jpg",
    },
    {
      id: 2,
      image: "/img24.jpg",
    },
    {
      id: 3,
      image: "/img26.jpg",
    },
    {
      id: 4,
      image: "/img15.jpg",
    },
    {
      id: 5,
      image: "/img27.jpg",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">خدماتنا في التسويق الرقمي</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          نقدم مجموعة متكاملة من خدمات التسويق الرقمي المتميزة لمساعدة عملائنا في تحقيق أهدافهم وتنمية أعمالهم في العالم الرقمي
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="transform hover:scale-105 transition-transform duration-300 max-w-xl mx-auto w-full"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={card.image}
                alt="خدمات التسويق الرقمي"
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCards; 