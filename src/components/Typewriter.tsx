"use client";

import { cn } from "@/libs/utils";
import Type from "typewriter-effect";

export default function Typewriter() {
    return (
        <Type
            component="span"
            options={{
                loop: true,
                autoStart: true,
                deleteSpeed: 5,
                delay: 30
            }}
            onInit={(write) => {
                write
                    .typeString("I am <strong>Taufik Oktama</strong>")
                    .pauseFor(1000)
                    .deleteChars(16)
                    .typeString("can type with <strong>10 fingers</strong>")
                    .pauseFor(500)
                    .changeDeleteSpeed(1)
                    .deleteChars(24)
                    .typeString("make <strong>Website</strong>")
                    .pauseFor(500)
                    .deleteChars(7)
                    .typeString("<strong>Typeface</strong>")
                    .pauseFor(500)
                    .deleteChars(14)
                    .typeString("do <strong>Font Production</strong>")
                    .pauseFor(500)
                    .deleteChars(15)
                    .typeString("<strong>Font Quality Assurance</strong>")
                    .pauseFor(500)
                    .deleteChars(23)
                    .typeString("<strong>Opentype Programming</strong>")
                    .pauseFor(500)
                    .deleteChars(23)
                    .typeString("run <strong>Unforma Club</strong>")
                    .pauseFor(1000)
                    .deleteChars(12)
                    .changeDeleteSpeed(5)
                    .typeString("<strong>Truetype Supply</strong>")
                    .pauseFor(1000)
                    .deleteAll(2)
                    .pauseFor(1000)
                    .start();
            }}
            // options={{
            //     strings: [
            //         "am <strong>Taufik Oktama</strong>",
            //         "do <strong class='text-red-500'>UI/UX Design</strong>",
            //         "do <strong>Web Development</strong>",
            //         "do <strong>Typing with 10 Fingers</strong>",
            //         "make digital product",
            //         "do something based on design & technology",
            //         "run <strong>Unforma Club</strong>",
            //         "run <strong>Truetype Supply</strong>"
            //     ],
            //     autoStart: true,
            //     loop: true,
            //     deleteSpeed: 5,
            //     delay: 50
            // }}
        />
    );
}
