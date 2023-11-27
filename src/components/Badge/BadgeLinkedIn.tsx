import profile from "../../../public/images/profile/IMG_9472.png";

import NextImage from "next/image";
import NextLink from "next/link";

import { cn } from "@/libs/utils";

function LinkedInLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 21"
      preserveAspectRatio="xMinYMin meet"
      version="1.1"
      focusable="false"
      height="100%"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
          transform="translate(63.000000, 0.000000)"
        />
        <path
          d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
          fill="currentColor"
        />
      </g>
      <g>
        <path
          d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
          fill="currentColor"
        />
        <path
          d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
          fill="currentColor"
        />
        <polygon
          fill="currentColor"
          points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"
        />
        <path
          d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
          fill="currentColor"
        />
        <path
          d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
          fill="currentColor"
        />
        <polygon fill="currentColor" points="3 3 0 3 0 18 9 18 9 15 3 15" />
      </g>
    </svg>
  );
}

export default function BadgeLinkedIn() {
  return (
    <div className={cn("w-full", "min-w-[20rem]")}>
      <div
        className={cn(
          "border",
          "rounded-lg",
          "overflow-hidden",
          // "w-80",
          "bg-neutral-50",
          "dark:bg-neutral-950"
        )}
      >
        <div
          className={cn(
            "bg-neutral-200 dark:bg-neutral-900",
            "p-4 py-3",
            "h-12",
            "relative",
            "border-b"
          )}
        >
          <LinkedInLogo />
        </div>

        <div className={cn("p-4", "flex", "flex-col", "gap-y-4")}>
          <div
            className={cn(
              "w-20",
              "aspect-square",
              "rounded-full",
              "border",
              "bg-red-400",
              "relative",
              "overflow-hidden"
            )}
          >
            <NextImage
              alt="Profile"
              src={profile}
              priority
              width={96}
              height={96}
            />
          </div>

          <div className={cn("text-2xl", "font-bold")}>Taufik Oktama</div>

          <div>
            <NextLink
              href="https://linkedin.com/in/taufik-oktama"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "border",
                "rounded-full",
                "whitespace-nowrap",
                "px-3 py-1"
              )}
            >
              View Profile
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
