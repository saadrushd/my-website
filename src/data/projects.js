import React from 'react'
import { FaFigma, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'

// Screenshot should be 1500×1000 in pixels

const projects = [
  {
    type: "software",
    name: "Matrixcli",
    description: "Sophisticated command line matrix chat client for linux that supports multiple accounts configuration and systemd units",
    repo: "matrixcli",
    techonlogies : [
      {
        preJSX: <FaPython />,
        name: "Python"
      },
    ],
    showCount: true,
  },
  {
    type: "software",
    name: "Evolve",
    description: "This is a simple simulation of the evolution theory done on data structures representing the biological dna. The results of this script shows the shift of this data structures towards speciation.",
    repo: "evolve",
    techonlogies : [
      {
        preJSX: <FaPython />,
        name: "Python"
      },
    ],
    showCount: false,
  },
  {
    type: "software",
    name: "npq layout",
    description: "The firmware of the npq keyboard layout designed for the atreus keyboard",
    repo: "npq-layout",
    techonlogies : [
      {
        name: "C"
      },
      {
        name: "QMK"
      },
    ],
    showCount: false,
  },
  {
    type: "web",
    name: "npq hugo",
    description: "npq hugo is a customizable and responsive dark blog template with integrated contact form and code syntax highlighting",
    // Screenshot should be 1500×1000 in pixels
    screenshot: "/assets/images/screenshot-npq-hugo.png",
    repo: "npq-hugo",
    demo: "https://themes.gohugo.io/theme/npq-hugo/",
    techonlogies : [
      {
        preJSX: <FaHtml5 />,
        name: "HTML"
      },
      {
        preJSX: <FaCss3Alt />,
        name: "CSS"
      },
      {
        preJSX: <FaJs />,
        name: "JS"
      },
    ],
    showCount: true,
  },
  {
    type: "web",
    name: "this.site",
    description: "This react app",
    // Screenshot should be 1500×1000 in pixels
    screenshot: "/assets/images/screenshot-this-site.png",
    repo: "ahmedsaad.xyz",
    techonlogies : [
      {
        preJSX: <FaReact />,
        name: "React"
      },
      {
        preJSX: <FaFigma />,
        name: "Figma"
      },
    ],
    showCount: false,
  },
  {
    type: "misc",
    name: "Compliant Franco",
    description: "The documented Franco writing system.",
    repo: "compliant-franco",
    techonlogies : [
      {
        name: "None"
      },
    ],
    showCount: false,
  },
]


export default projects
