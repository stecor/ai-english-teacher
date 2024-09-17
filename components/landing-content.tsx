"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {testimonials} from '@/constants'
import { Avatar, AvatarImage } from "@/components/ui/avatar";



export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="m-auto gap-x-2">
              <Avatar className="m-auto">
                    <AvatarImage className="p-0" src={item.avatar} sizes="h-8 w-8"/>
                  </Avatar>
                <div className="text-center pt-3">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm ">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 text-center">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}