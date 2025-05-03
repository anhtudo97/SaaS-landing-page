"use client";

import React, { useEffect, useRef } from 'react';
import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type Feature = {
    title: string;
    description: string;
};

const Feature = ({ description, title }: Feature) => {
    const border = useRef<HTMLDivElement>(null); // Add this lin
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (border.current) {
                const rect = border.current.getBoundingClientRect();
                offsetX.set(e.x - rect.left);
                offsetY.set(e.y - rect.top);
            }
        };
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    });

    return (
        <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
            <motion.div
                className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                style={
                    {
                        WebkitMask: maskImage,
                        maskImage
                    }
                }
                ref={border}
            >

            </motion.div>
            <div className="inline-flex size-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    );
};

export default Feature;