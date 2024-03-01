import React from 'react'
import Dash from './dash';
import ServiceCard from './ServiceCard';


const servicesData = [
    {
      img: "/services-1.png",
      title: "Professonal Kitchen",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services--2.png",
      title: "Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services-3.png",
      title: "Wine List",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services-4.png",
      title: "Free Wifi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
  ];

const services = () => {
  return (
    <div className="container pt-40">
        
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-orange-500">Service</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>


      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServiceCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default services