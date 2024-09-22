import React from "react";
// Import Next link
import Link from "next/link";
// Import Next Image
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          {
            // todo replace Image with regular img tag
          }
          <Image
            src="/favicon.ico"
            height={1000}
            width={1000}
            alt="Healthcare Management System Logo"
            className="mb-12 h-10 w-fit"
          />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items text-dark-600 xl:text-left">
            &copy; 2024 Vikram Singh.
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.jpg"
        height={1000}
        width={1000}
        alt="patient registration image of doctor smiling"
        className="side-img max-w-[390px]"

      />
    </div>
  );
};

export default Register;
