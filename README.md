<div align="center">
  <img src="https://i.imgur.com/FtcF9ZP.png" alt="MobaXterm Keygen Logo" width="120" />
  <h1>MobaXterm Keygen & Customizer 🚀</h1>
  <p><strong>Fast, and secure license generator and customizer.</strong></p>
  
  <p>
    <a href="#"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Version-v3.0-green.svg?style=for-the-badge" alt="Version" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Compatible-v20.X%20|%20v26.2%20|%20v26.3-orange?style=for-the-badge" alt="Compatibility" /></a>
  </p>
  
  <p><em>⭐ Please star this repository if you find it helpful! ⭐</em></p>
</div>

---

## 🔥 Overview

A modern, user-friendly, and beautifully designed web tool for generating activation keys and customizing **MobaXterm**—the ultimate terminal emulator for Windows with an integrated X11 server, SSH client, and comprehensive network toolset.

All processes run **100% locally** in your browser, ensuring maximum privacy and security.

## ✨ Key Features

- **💎 Premium Glassmorphism UI** - Enjoy a sleek, modern, and completely responsive experience.
- **🌓 Adaptive Theme** - Seamless dark and light mode toggle.
- **🔒 Multi-Edition Support** - Generate licenses for various MobaXterm editions effortlessly.
- **👥 Flexible User Allocation** - Define your own custom concurrent user limit.
- **💾 One-Click Downloads** - Get your `.mxtpro` files instantly in a neat package.
- **🔧 Built-in Customizer Integration** - No need for the official cli tool; apply advanced setups visually.
- **🖼️ Brand Personalization** - Easily switch the default MobaXterm logo with your company's own.
- **🔌 Plugins & Bookmarks** - Embed `.mxt3` plugins and predefined SSH/FTP profiles instantly.

## 🚀 Compatibility

- Official support tested extensively with MobaXterm versions **20.X, 26.2, and 26.3**.
- Compatible with both **Portable** and **Installer (Desktop)** editions.

## 📖 How to Use

### 1️⃣ The Key Generator

1. **Access the Generator**: Open the [MobaXterm Key Generator](https://moba-xterm-keygen.vercel.app/) web application.
2. **Setup your License**:
   - Choose your preferred MobaXterm Edition from the dropdown.
   - Enter your username (alphabetical characters only).
   - Input your current target version (e.g., `26.3`).
   - Define your desired number of users.
3. **Generate**: Click the big **"Generate License"** button to start downloading your `Custom.mxtpro` key.
4. **Deploy**: Drop this file inside your MobaXterm installation folder:
   ```text
   C:\Program Files (x86)\Mobatek\MobaXterm
   ```

### 2️⃣ Advanced: Settings Merger

If you have personalized MobaXterm preferences (Customizer tweaks, logos, bash profiles):

1. Switch to the **Settings Merger** tab inside our web app.
2. **Export your settings**: Run `.\MobaXterm.exe -customizer` and select the option to export to `MobaXterm customization.custom`.
3. **Upload both files**:
   - The license key file (`Custom.mxtpro`).
   - The exported configuration file (`MobaXterm customization.custom`).
4. Click **Merge Files** to inject everything into a single, unified `Custom.mxtpro` file to deploy normally.

## 🛠 Troubleshooting

<details>
<summary><strong>Activation isn't being recognized?</strong></summary>
Ensure you are running a supported version range (v20.X, 26.2, or 26.3). Also, make sure the file is strictly named `Custom.mxtpro` without any duplicates like `Custom (1).mxtpro`.
</details>

<details>
<summary><strong>File generation fails?</strong></summary>
Double check that your provided username only encompasses letters. Spaces and unique symbols are currently not supported by the underlying cryptography validation checks.
</details>

## 🔐 Technical & Security Details

This tool operates completely **Client-Side** leveraging `Vue.js` and pure DOM manipulations. **Not a single byte of your data or generated licenses travels to any backend server.**

> **Disclaimer:** This project is provided exclusively for educational concepts and reverse-engineering study cases. For commercial environments, please consider supporting the official developers by purchasing an enterprise license.

## 📈 Version History

- **v3.0** - Refined UI using a completely reconstructed Glassmorphism aesthetic and modern UX updates. Updated support for up to `26.3`.
- **v2.7** - Added support for version 26.0
- **v2.6** - Added support for version 25.4
- **v2.5** - Added support for version 25.3
- **v2.4** - Brought full MobaXterm customizer functionality
- **v2.0** - Major UI redesign

---

<div align="center">
  <strong>Crafted with ❤️ by Zarfala</strong><br>
  <a href="https://github.com/zarfadev/MobaXterm-Keygen">⭐ Star us on GitHub</a>
</div>
