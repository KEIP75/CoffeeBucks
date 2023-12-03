import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">CoffeeBucks</h1>
          <p className=" text-sm">
          Bienvenue dans notre paradis du café ! Savourez des saveurs artisanales
           et découvrez la torréfaction parfaite pour rehausser votre rituel quotidien.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Liens</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Nos Cafés
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              A Propos
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Produits
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Avis Clients
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Café</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Latte
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Americano
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contactez-nous</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              CoffeBucks@gmail.com
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              +01 25 45 74 56 45
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Nos Réseaux
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright développé par
            <span className=" text-backgroundColor">
              {" "}
              Yannick & Efekan {" "}
            </span>
            | Tout droit réservés
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
