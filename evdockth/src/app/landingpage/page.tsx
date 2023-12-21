/* eslint-disable @next/next/no-img-element */
import React from "react";
import { metadata } from "../layout";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function landingpage({}: Props) {
  return (
    <body>
      <div className='local'>
        <div className='container mx-auto '>
          https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
          <Link href='../'>
            <img
              src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Img not available'
            />
          </Link>
        </div>
      </div>
    </body>
  );
}
