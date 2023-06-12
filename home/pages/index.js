/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-0 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-bold text-4xl text-slate-600">Welcome to</h1>
              <h1 className="font-bold text-6xl text-slate-600">PerkVenue</h1>
              <h2 className="font-semibold text-2xl mt-2 text-slate-600">
                A Blockchain-Based Reward Point Exchange System
              </h2>

              <p className="mt-16 text-xl leading-relaxed text-slate-500">
                PerkVenue is a cutting-edge digital platform that leverages the
                power of blockchain technology to revolutionize reward point
                exchange. With our seamless APIs, businesses can effortlessly
                utilize NFTs and tokens as reward points to engage customers,
                without requiring any knowledge of coding or blockchain
                intricacies.{" "}
              </p>
              {/* <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank" rel="noreferrer"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank" rel="noreferrer"
                >
                  Github Star
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-slate-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-slate-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div> */}

            <div className="relative">
              <div className="flex flex-wrap items-center">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                    <img
                      alt="..."
                      src="/img/homepage/instantaccess.png"
                      // src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-slate-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl text-center font-bold text-white">
                        
Instant Access
                      </h4>
                      <p className="text-md text-center font-light mt-2 text-white">
                        Instantly access world renowned brands, thousands of rewards and millions of new members
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                    <img
                      alt="..."
                      src="/img/homepage/fast.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-slate-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl text-center font-bold text-white">
                         1 Simple and Fast Integration
                      </h4>
                      <p className="text-md text-center font-light mt-2 text-white">
Save time and money through 1 integration and 1 invoicing partner for all the brands you connect with                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                    <img
                      alt="..."
                      src="/img/homepage/bcinfra.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-slate-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl text-center font-bold text-white">
                        Blockchain Infrastructure
                      </h4>
                      <p className="text-md text-center font-light mt-2 text-white">
                        Blockchain technology protects your rewards currency, while providing full transparency and efficiency
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-10/12 md:w-6/12 lg:w-4/12 px-4 mb-6">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for your awesome project
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Putting together a page has never been easier than
                      matching together pre-made components. From landing pages
                      presentation to login areas, you can easily customise and
                      build your pages.
                    </p>
                  </blockquote>
                </div>
              </div>


              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-4 mb-6">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for your awesome project
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Putting together a page has never been easier than
                      matching together pre-made components. From landing pages
                      presentation to login areas, you can easily customise and
                      build your pages.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-4 mb-6">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-slate-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-slate-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for your awesome project
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Putting together a page has never been easier than
                      matching together pre-made components. From landing pages
                      presentation to login areas, you can easily customise and
                      build your pages.
                    </p>
                  </blockquote>
                </div>
              </div> */}

            {/* <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 mb-1 flex-auto">
                      <div className="text-slate-500  p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">

                        <i class="fa-solid fa-right-left text-4xl"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      Seamless Reward Point Exchange
                      </h6>
                      <p className="mb-4 text-lg text-slate-500">
                      Exchange and redeem reward points effortlessly using blockchain technology.

                      </p><br/>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">

                        
                        <i class="fa-solid fa-certificate text-4xl"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      NFTs as Exclusive Rewards
                      </h6>
                      <p className="mb-4 text-lg text-slate-500">
                      Quickmint NFTs to create unique and exclusive rewards for your customers.                       </p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500  p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
        
                        <i class="fa-solid fa-circle-plus text-4xl"></i>
                        
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      Continuous Token Minting
                      </h6>
                      <p className="mb-4 text-lg text-slate-500">
                      Mint additional tokens as rewards to engage and incentivize your customer base.
                      </p><br/>
                    </div>
                  </div>

                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
              
                        <i class="fa-solid fa-puzzle-piece text-4xl"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">Simplified Integration</h6>
                      <p className="mb-4 text-lg text-slate-500">
                      Easy integration with your existing systems, no coding or blockchain knowledge required. 
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5  flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                
                        <i class="fa-solid fa-medal text-4xl"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      Branded Tokens
                      </h6>
                      <p className="mb-4 text-lg text-slate-500">
                      Create your own branded tokens as loyalty points or rewards within your ecosystem. 

                      </p><br/>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
      
                        <i class="fa-solid fa-fire text-4xl"></i>
                      </div>
                      <h6 className="text-3xl mb-1 font-semibold">
                      Controlled Token Burning
                      </h6>
                      <p className="mb-4 text-lg text-slate-500">
                      Retire or remove tokens from circulation when needed for effective token management.                       </p>
                    </div>
                  </div>

                  
                  
                </div>
              </div>
            </div> */}
            <div className="max-w-[1248px] mx-auto flex flex-wrap justify-between">
              <div className="w-full md:w-5/12 lg:w-5/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 mb-1 flex-auto">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fa-solid fa-right-left text-4xl"></i>
                    </div>
                    <h6 className="text-3xl mb-1 font-semibold">
                      Seamless Exchange
                    </h6>
                    <p className="mb-4 text-lg text-slate-500">
                      Exchange and redeem reward points effortlessly using
                      blockchain technology.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fa-solid fa-certificate text-4xl"></i>
                    </div>
                    <h6 className="text-3xl mb-1 font-semibold">
                      NFTs as Exclusive Rewards
                    </h6>
                    <p className="mb-4 text-lg text-slate-500">
                      Quickmint NFTs to create unique and exclusive rewards for
                      your customers.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fa-solid fa-gears text-4xl"></i>
                    </div>
                    <h6 className="text-3xl mb-1 font-semibold">
                      Flexibility and Control
                    </h6>
                    <p className="mb-4 text-lg text-slate-500">
                      Customize your rewards program and manage tokens according
                      to your business needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  {/* <div className="px-4 py-5 flex-auto text-right">  */}
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fa-solid fa-puzzle-piece text-4xl"></i>
                    </div>
                    <h6 className="text-3xl mb-1 font-semibold">
                      Simplified Integration
                    </h6>
                    <p className="mb-4 text-lg text-slate-500">
                      Easy integration with your existing systems, no coding or
                      blockchain knowledge required.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fa-solid fa-medal text-4xl"></i>
                    </div>
                    <h6 className="text-3xl mb-1 font-semibold">
                      Branded Tokens
                    </h6>
                    <p className="mb-4 text-lg text-slate-500">
                      Create your own branded tokens as loyalty points or
                      rewards within your ecosystem.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fa-solid fa-handshake text-4xl"></i>
                    </div>
                    <h6 className="text-3xl mb-1 font-semibold">
                      Partnerships and Collaboration
                    </h6>
                    <p className="mb-4 text-lg text-slate-500">
                      Form alliances to expand opportunities and increase the
                      program's value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="uppercase text-xl tracking-widest">
                <p className="uppercase text-xl tracking-widest">
                  <span style={{ color: "red" }}>POINTS ACCURAL</span>
                </p>
              </div>

              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Earn & Burn
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Encourage repeat purchase and improve customer loyalty by
                introducing points-based loyalty program that rewards customers
                for specific behaviors.
              </p>

              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Rewards points based on custom triggers:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Give out points based on any custom event, behaviours,
                transaction or time. From referring a new customer, subscribing
                to content, making repeat purchase the possibilities are
                endless.
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
                Diverse reward redemption capabilities:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Delight your members by allowing them to redeem their points in
                many ways - from your own ecosystem (accrued points as money),
                on a rewards catalog buy digital vouchers of brands, pay with
                points
              </p>

              <div className="block pb-6">
                <div className=" font-medium">
                  Best fit for:
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Service
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Hospitality
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Electronics
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Retail
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Beauty
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Fashion & Lifestyle
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  // src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/63357d001f08ef26093ede43_ezgif-3-45137881d4-p-800.webp"
                  src="/img/homepage/earn.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(17deg) rotateX(2deg) rotate(2deg)",
                  }}
                  // src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/629a19007b79402bff3a39ed_Tiered%20Loyalty-p-800.webp"
                  src="/img/homepage/temp1.gif"
                />
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-0">
              <div className="">
                <p className="uppercase text-xl tracking-widest text-[#da3737]">
                  <span style={{ color: "red" }}> TIERS AND LEVELS</span>
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Tiered Loyalty
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Encourage customers to spend more by enticing them with
                incremental benefits as they move up the tier.
              </p>

              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Out-of-the-box loyalty campaigns:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Offer unique experience and flexible reward options based on
                tiers and keep your customers engaged over a long period of
                time. Higher customer retention = Improved CLV
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
                Integrated experience:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Stay competitive without feeding into the discount culture that
                devaluates your products. Give your affluent buyers an exclusive
                experience and VIP treatment.
              </p>
              <div className="block pb-6">
                <div className=" font-medium">
                  Best fit for:
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    LMS
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Gaming Apps
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Retail
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Fashion & Lifestyle
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="uppercase text-xl tracking-widest text-[#da3737]">
                <p className="uppercase text-xl tracking-widest text-[#da3737]">
                  <span style={{ color: "red" }}>JOIN, PLAY & UNLOCK</span>
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Gamified Loyalty
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Encourage customers to interact with your brand regularly by
                keeping them hooked with challenges and increase customer
                retention.
              </p>

              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Take your branding to new level with badges:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Encourage recurring behaviour by associating challenges with
                benefit. Keep it interesting with rule-based rewards that
                delights.
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
                Set up event-based challenges to prompt actions:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Go beyond transactions. Incentive customers to engage on social
                media, create content, answer polls, daily streaks, and signup
                anniversary.
              </p>

              <div className="block pb-6">
                <div className=" font-medium">
                  Best fit for:
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Luxury brands
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Services
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Wellness
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Home Decor
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Fashion & Lifestyle
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  // src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/629eea1297a044778d2e07d5_Play%20%26%20Win.png"
                      src="/img/homepage/gamified.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(17deg) rotateX(2deg) rotate(2deg)",
                  }}
                  // src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/63357d4c418e44607675d695_ezgif-3-9f50ed30f3-p-800.webp"
                      src="/img/homepage/benefit.svg"
                />
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-0">
              <div className="">
                <p className="uppercase text-xl tracking-widest text-[#da3737]">
                  <span style={{ color: "red" }}>DEALS & OFFERS</span>
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Benefit Loyalty
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Generate an emotional attachment and a sense of belongingness to
                the brand with exclusive benefits which leads to recurring
                purchase.
              </p>

              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Support brand building:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Pre-negotiated deals and offer allow you to give your loyalty
                members a series of benefits on a regular basis. Which in turn
                makes the shopping experience great for its members and drives
                customer acquisition
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
                High value for actual cost:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                Pre negotiated deals such as exclusive services and
                transaction-related privileges gives your brand a higher
                perceived value, though they come at a relatively lower cost for
                companies.
              </p>
              <div className="block pb-6">
                <div className=" font-medium">
                  Best fit for:
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Fast fashion
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Beauty
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Luxury brands
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div> */}

        {/* <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-lg text-slate-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div> */}
      </section>

      {/* <section className="block relative z-1 bg-slate-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link legacyBehavior href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link legacyBehavior href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link legacyBehavior href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* 
      <section className="py-20 bg-slate-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-slate-300"
                  target="_blank" rel="noreferrer"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank" rel="noreferrer"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-slate-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-0 bg-slate-200 relative pt-0">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        {/* <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank" rel="noreferrer"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank" rel="noreferrer"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
}
