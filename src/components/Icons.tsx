/*
 * This file is just wayy too good to delete,
 * i think i'll make an npm package out of this someday
 */

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiSpigotmc,
  SiRust,
  SiMediapipe,
} from "react-icons/si";

import { FaJava, FaPython, FaNodeJs, FaReact } from "react-icons/fa6";

import React, {type JSX} from "react";

// Define the possible icon names as a TypeScript type
type IconName =
  | "typescript"
  | "tailwind"
  | "nextjs"
  | "react"
  | "chakra"
  | "nodejs"
  | "java"
  | "csharp"
  | "azure"
  | "spigot"
  | "papermc"
  | "velocity"
  | "python"
  | "rust"
  | "C"
  | "mediapipe";
// Main Icons function that logs a message
export default function Icons(): void {
  console.log("You're not meant to be using this function...");
}

// Generic function to return the correct icon
export function getIcon(name: IconName, size: number): JSX.Element | null {
  const icons: { [key in IconName]: JSX.Element } = {
    typescript: <SiTypescript size={size} />,
    tailwind: <SiTailwindcss size={size} />,
    nextjs: <SiNextdotjs size={size} />,
    react: <FaReact size={size} />,
    chakra: <SiChakraui size={size} />,
    nodejs: <FaNodeJs size={size} />,
    java: <FaJava size={size} />,
    csharp: <IconCsharp size={size} />,
    spigot: <SiSpigotmc size={size} />,
    python: <FaPython size={size} />,
    papermc: <IconPaperMC size={size} />,
    velocity: <IconVelocity size={size} />,
    rust: <SiRust size={size} />,
    C: <IconC size={size} />,
    azure: <IconAzure size={size} />,
    mediapipe: <SiMediapipe size={size} />,
  };

  return icons[name] || null;
}

// Define the mapping of icons to URLs for their respective technologies
const hrefMap: { [key in IconName]: string } = {
  typescript: "https://www.typescriptlang.org/",
  tailwind: "https://tailwindcss.com/",
  nextjs: "https://nextjs.org/",
  react: "https://react.dev/",
  chakra: "https://v2.chakra-ui.com/",
  nodejs: "https://nodejs.org/en",
  java: "https://www.java.com/",
  csharp: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  azure: "https://azure.microsoft.com/en-us/",
  spigot: "https://www.spigotmc.org/",
  python: "https://www.python.org/",
  papermc: "https://papermc.io/",
  velocity: "https://www.velocitypowered.com/",
  rust: "https://www.rust-lang.org/",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  mediapipe: "https://github.com/google-ai-edge/mediapipe",
};

// Type definition for the props expected in the RenderIcon component
export interface RenderIconProps {
  name: IconName;
  size: number;
  link?: boolean;
}

// Usage example for rendering an icon with a URL
export function RenderIcon({
  name,
  size = 24,
  link = false,
}: RenderIconProps): JSX.Element | null {
  const icon = getIcon(name, size);

  if (!icon) return null;
  if (link == false) {
    return icon;
  }

  return (
    <a
      href={hrefMap[name]}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transform duration-[250ms]"
    >
      {icon}
    </a>
  );
}

export function IconVelocity({ size }: { size: number }): JSX.Element | null {
  return (
    <div className="text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 34 34"
        width={size}
        height={size}
      >
        <g fill="#fff" clipPath="url(#velocity_svg__a)">
          <path d="m15.949 15.137-4.22-5.758a.925.925 0 0 0-.93-.36l-6.731 1.36a.927.927 0 0 0-.625.458L.116 16.852a.924.924 0 0 0 .063.994l4.23 5.775a.926.926 0 0 0 .93.36l6.711-1.355a.925.925 0 0 0 .624-.46l3.339-6.032a.926.926 0 0 0-.064-.997m-4.64 5.791a.746.746 0 0 1-1.044-.16l-2.42-3.297a1.248 1.248 0 0 0-1.248-.484l-4.103.83a.748.748 0 0 1-.3-1.466l4.449-.9a1.249 1.249 0 0 0 .844-.617l2.232-4.032a.748.748 0 0 1 1.37.154.747.747 0 0 1-.063.568L8.97 15.25a1.249 1.249 0 0 0 .085 1.34l2.42 3.295a.748.748 0 0 1-.164 1.043M30.01 16.182a.767.767 0 1 0 0-1.534.767.767 0 0 0 0 1.534"></path>
          <path d="M33.276 17.716H19.403a.767.767 0 0 1 0-1.534h8.29a.768.768 0 0 0 0-1.535h-5.479a.767.767 0 1 1 0-1.534h8.3a.768.768 0 0 0 0-1.535H13.34l2.608 3.56a.925.925 0 0 1 .064.994l-3.339 6.032a.919.919 0 0 1-.109.156H29.13a.767.767 0 1 0 0-1.534h-4.177a.768.768 0 1 1 0-1.535h8.323a.769.769 0 1 0 0-1.535"></path>
        </g>
        <defs>
          <clipPath id="velocity_svg__a">
            <path fill="#fff" d="M0 0h34v34H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function IconPaperMC({ size }: { size: number }): JSX.Element | null {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <path
          fill="#fff"
          d="M23.987 1.004 20.56 21.576a.858.858 0 0 1-.844.71.921.921 0 0 1-.322-.068l-6.067-2.477-3.24 3.95a.83.83 0 0 1-.657.309.763.763 0 0 1-.295-.054.854.854 0 0 1-.562-.803V18.47L20.143 4.286 5.827 16.674l-5.29-2.17A.848.848 0 0 1 0 13.768a.865.865 0 0 1 .429-.79L22.715.12a.83.83 0 0 1 .428-.12.853.853 0 0 1 .844 1.004"
        ></path>
      </svg>
    </div>
  );
}

export function IconCsharp({ size }: { size: number }): JSX.Element | null {
  return (
    <div>
      <svg
        stroke="white"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size}
        height={size}
        viewBox="0 0 50 50"
      >
        <path d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z"></path>
      </svg>
    </div>
  );
}

export function IconAzure({ size }: { size: number }): JSX.Element | null {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684"></path>
    </svg>
  );
}

function IconC({ size }: { size: number }): JSX.Element | null {
  return (
    <svg
      viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z"
        fill="#004482"
      />
      <path
        d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z"
        fill="#00599c"
      />
      <path
        d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z"
        fill="#659ad2"
      />
      <path
        d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z"
        fill="#fff"
      />
    </svg>
  );
}
