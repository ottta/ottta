"use client";

import Type from "typewriter-effect";

export default function Typewriter() {
    return (
        <Type
            component="span"
            options={{
                loop: false,
                autoStart: true,
                deleteSpeed: 5,
                delay: 30
            }}
            onInit={(write) => {
                write
                    .typeString("I am <strong class='italic'>Taufik Oktama</strong>")
                    .pauseFor(1000)
                    .deleteChars(16)
                    .typeString("can type with <strong class='italic'>10 fingers</strong>")
                    .pauseFor(500)
                    .changeDeleteSpeed(1)
                    .deleteChars(24)
                    .typeString("make <strong class='italic'>Website</strong>")
                    .pauseFor(500)
                    .deleteChars(7)
                    .typeString("<strong class='italic'>Typeface</strong>")
                    .pauseFor(500)
                    .deleteChars(14)
                    .typeString("do <strong class='italic'>Font Production</strong>")
                    .pauseFor(500)
                    .deleteChars(15)
                    .typeString("<strong class='italic'>Font Quality Assurance</strong>")
                    .pauseFor(500)
                    .deleteChars(23)
                    .typeString("<strong class='italic'>Opentype Programming</strong>")
                    .pauseFor(500)
                    .deleteChars(23)
                    .typeString("run <strong class='italic'>Unforma Club</strong>")
                    .pauseFor(1000)
                    .deleteChars(12)
                    .changeDeleteSpeed(5)
                    .typeString("<strong class='italic'>Truetype Supply</strong>")
                    .pauseFor(1000)
                    .deleteChars(20)
                    .typeString("am <strong class='italic'>Taufik Oktama</strong>")
                    .start();
            }}
        />
    );
}
