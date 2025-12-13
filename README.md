
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Node.JS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#demo">Demo</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#metadata-analysis">Metadata Analysis</a></li>
        <li><a href="#image-tools">Image Tools</a></li>
      </ul>
    </li>
    <li><a href="#design">Design</a></li>
    <li><a href="#accessibility--optimisation">Accessibility / Optimisation</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#future-enhancements">Future Enhancements</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>

# Overview

**ExifPanel** is a web-based photo metadata analyser built to inspect, understand, and learn from images. It allows users to upload photos or select sample images and instantly view detailed EXIF, XMP, IPTC, and raw metadata through a clean, modern interface.

The tool focuses on accuracy, clarity, and education. It is designed to help photographers, designers, and developers understand how images are captured and edited, while also providing practical utilities like preset recreation and metadata removal.

## Built With

**Frontend**

* Next.js (App Router)
* TypeScript
* TailwindCSS

**Backend**

* Node.js (Next.js Route Handlers)
* exifr
* sharp

**Hosting**

* Designed for deployment on Vercel or any Node compatible platform.


## Images

![Home Page](https://imgur.com/KUbFpAw.jpeg)
![Sample Photos Page](https://imgur.com/vsmk3Qi.jpeg)
![FAQs Page](https://imgur.com/euQvxTS.jpeg)

# Getting Started

To run ExifPanel locally, ensure the prerequisites are installed and follow the steps below.

## Prerequisites

To ensure the Node.js API routes and the Next.js environment run correctly, you need a modern version of Node.js.

```bash
# Verify Node.js version (v20+ is recommended)
node -v

# Verify your preferred package manager version (npm, yarn, or pnpm)
npm -v
# or
yarn -v
# or
pnpm -v
```

## Installation

```bash
# 1. Clone the repository
git clone [https://github.com/psyofrelief/exif-panel.git](https://github.com/psyofrelief/exif-panel.git)
cd exif-panel

# 2. Install dependencies (Choose one command)
pnpm install
# or
npm install
# or
yarn install

# 3. Start the development server
pnpm run dev
# or
npm run dev
# or
yarn dev

You can use your preferred package manager (pnpm is recommended, but npm or yarn will also work).
```

# Features

## Metadata Analysis

* Full EXIF extraction including camera, lens, exposure, and GPS data.
* XMP parsing with Lightroom style sliders for tone, presence, HSL, and calibration.
* Raw metadata viewer for complete transparency.
* Detection of missing or non meaningful metadata.

## Image Tools

* Upload local images or analyse images from URLs.
* Built in sample images with known metadata.
* One click metadata stripping and clean image download.
* Preset style analysis for learning editing techniques.

# Design

### Design Philosophy

* Inspired by professional tools like Lightroom and PixelPeeper.
* Sliders and controls visually reflect their function and color space.
* Panels are structured for quick scanning and comparison.

### Technical Approach

* Context driven state for shared metadata and image status.
* Strong separation between parsing, formatting, and presentation.
* Reusable panel and row components for consistency.

# Accessibility / Optimisation

* Keyboard navigable controls.
* Clear empty and error states for unsupported images.
* Graceful handling of invalid files and missing metadata.
* Optimised parsing with size and format validation.

# Contributions

This project is currently maintained and developed by **Faried Idris**. External contributions are not open at this time.

# Future Enhancements

* Metadata comparison between multiple images.
* Advanced curve editors and tone graphs.
* Batch image analysis.

# Credits

Designed and developed by **Faried Idris**.
Portfolio: [https://fariedidris.com](https://fariedidris.com)
GitHub: [https://github.com/psyofrelief](https://github.com/psyofrelief)


