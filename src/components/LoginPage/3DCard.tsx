"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCard() {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <div className="-mt-48">
        <CardContainer className="inter-var">
          <CardBody className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
            >
                Make your life easier
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-2xl md:text-4xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-16 font-bold tracking-wide pt-4"
            >
              Manage your tasks and projects with ease. Create, update and delete
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/LoginPage/Popup.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="3D Card Image"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}