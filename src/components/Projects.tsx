import { RenderIcon, type RenderIconProps } from "./Icons";
import {Project, type ProjectProps} from "./Project";
import {
  csharpIconProps,
  javaIconProps, mpIconProps, pythonIconProps,
  rustIconProps, spigotIconProps,
  tailwindIconProps,
  typescriptIconProps
} from "../icons/defaults";

export default function Projects() {
  return (
    <div className="h-full pt-16 pb-16">
      <div className="text-2xl lg:text-4xl text-center text-white">Public Projects</div>
      <div className="items-center flex">
        <div className="items-center grid xl:grid-cols-2 grid-cols-1">
          <Project {...HubblyProps} />
          <Project {...JACRProps} />
          <Project {...UnnamedProps} />
          <Project {...GammaEditorProps} />
          <Project {...HermesProps} />
          <Project {...RaspiClientProps} />
          <Project {...GeneratorProps} />
        </div>
      </div>
    </div>
  );
}

const HubblyProps: ProjectProps = {
  name: "Hubbly",
  link: "https://github.com/calrl/Hubbly",
  iconProps: [
      javaIconProps,
      spigotIconProps
  ],
  description: "All in one minecraft hub software. Extremely customizable, easy to use, and feature rich.",
  imageUrl: "/images/hubbly.png",
  imageAlt: "Hubbly icon",
  coverOrContain: "object-cover"
}

const JACRProps: ProjectProps = {
  name: "JustAnotherChatRoom",
  link: "https://github.com/calrl/JustAnotherChatRoom",
  iconProps: [
    javaIconProps
  ],
  description: "A university assignment, working with networks, IO, and GUIs",
  imageUrl: "/images/github.jpg",
  imageAlt: "GitHub logo",
  coverOrContain: "object-contain"
}

const UnnamedProps: ProjectProps = {
  name: "UnnamedCareProject",
  link: "https://github.com/calrl/vumo-py",
  iconProps: [
      pythonIconProps,
      mpIconProps
  ],
  description: "System to allow elderly patients to control a light using their hands or voice",
  imageUrl: "/images/hospital.webp",
  imageAlt: "Health icon",
  coverOrContain: "object-cover"
}

const GammaEditorProps: ProjectProps = {
  name: "GammaEditor",
  link: "https://github.com/calrl/gammaeditor",
  iconProps: [
      rustIconProps,
      tailwindIconProps,
      typescriptIconProps,
  ],
  description: "(WIP) An editor tool to Gamma Emerald save files. Also allows exporting to PKHeX format. ",
  imageUrl: "/images/gamma_emerald.png",
  imageAlt: "Gamma Emerald Homescreen",
  coverOrContain: "object-contain"
}

const GeneratorProps: ProjectProps = {
  name: "Generator",
  link: "https://github.com/calrl/generator",
  iconProps: [
      csharpIconProps,
  ],
  description: "A CLI tool to generate PKHeX files.",
  imageUrl: "",
  imageAlt: "",
  coverOrContain: "object-cover"
}

const HermesProps: ProjectProps = {
  name: "Hermes",
  link: "https://github.com/calrl/hermes",
  iconProps: [
      rustIconProps
  ],
  description: "A lightweight TCP relay server that routes JSON messages between clients, enabling devices to receive and respond to remote commands.",
  imageUrl: "/images/Fleet_Footwork_rune.webp",
  imageAlt: "Hermes Icon",
  coverOrContain: "object-contain"
}

const RaspiClientProps: ProjectProps = {
  name: "RaspiClient",
  link: "https://github.com/calrl/raspi_client",
  iconProps: [
      rustIconProps
  ],
  description: "Raspberry Pi Client for my dissertation. Receives and handles commands from Hermes.",
  imageUrl: "/images/raspi.jpg",
  imageAlt: "Raspberry PI 3D Model",
  coverOrContain: "object-contain"
}