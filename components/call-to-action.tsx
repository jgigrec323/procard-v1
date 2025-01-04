import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold ">
        Devenez le héros des affaires !
      </h2>
      <Link href="/produits">
        <button className="bg-neutral-100 font-bold rounded-full mt-7 px-8 md:px-10 py-3 md:py-4 text-xl">
          Commandez maintenant
        </button>
      </Link>
    </div>
  );
}
