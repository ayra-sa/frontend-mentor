import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const Destination = (props) => {
  const destinationData = props.destination;
  const [current, setCurrent] = useState(0);

  const currentDestination = (index) => {
    setCurrent(index);
  };

  const menu = ["moon", "mars", "europa", "titan"];

  // const destinationMenu = []

  // for (let i = 0; i < destinationData.length; i++) {
  //   destinationMenu.push(
  //     <button
  //       className={`uppercase pb-2 tracking-widest text-sm border-b-2 transition-all ${
  //         index === current
  //           ? "text-white border-b-white font-bold"
  //           : "text-blue border-b-[transparent]"
  //       }`}
  //       key={index}
  //       onClick={(event) => currentDestination(index)}>
  //       {m}
  //     </button>)
  // }

  return (
    <>
      <Head>
        <title>Destination</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <section className="min-h-screen bg-[url('/images/bg-destination-mobile.jpg')] sm:bg-[url('/images/bg-destination-tablet.jpg')] lg:bg-[url('/images/bg-destination.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="container md:mx-auto lg:px-6 pt-[5.5rem] sm:pt-[8.5rem] lg:pt-[13.25rem] text-center text-blue lg:text-left">
          <h5 className="subtitle px-9 lg:mb-16">
            <span className="opacity-25">01</span>
            pick your destination
          </h5>

          {destinationData.map((data, index) => (
            <div key={index} className={`pb-10 ${index === current ? "flex flex-col gap-y-5 lg:flex-row lg:gap-x-10 lg:items-center" : "hidden"}`}>

              <div className="mx-auto h-[10.625rem] sm:h-[18.75rem] lg:h-[27.85rem] lg:w-[27.85rem] sm:mb-12">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="px-6 sm:px-24 lg:pl-0 lg:pr-24 lg:w-1/2">
                <div className="flex gap-x-7 justify-center lg:justify-start mb-5">
                  {menu.map((m, index) => (
                    <button
                      className={`uppercase pb-2 tracking-widest text-sm border-b-2 transition-all hover:border-b-white hover:border-opacity-50 ${
                        index === current
                          ? "text-white border-b-white font-bold hover:border-opacity-100"
                          : "text-blue border-b-[transparent]"
                      }`}
                      key={index}
                      onClick={(event) => currentDestination(index)}>
                      {m}
                    </button>
                  ))}
                </div>
                
                <div className="h-[40vh] sm:h-auto lg:h-[35vh]">
                  <h2 className="heading2 uppercase">{data.title}</h2>
                  <p className="body-text">{data.description}</p>
                </div>

                <div className="mb-8 h-px bg-[#383B4B] sm:mt-8" />

                <div className="flex flex-col sm:flex-row gap-8 sm:justify-evenly lg:justify-start lg:gap-x-20">
                  <div className="flex flex-col justify-center gap-y-3">
                    <p className="subheading2">ADV. DISTANCE</p>
                    <p className="subheading1">
                      {data.distance} KM
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-y-3">
                    <p className="subheading2">TRAVEL TIME</p>
                    <p className="subheading1 uppercase">
                      {data.travel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Destination;

// Fetching data from JSON file
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "json/destinationdata.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
