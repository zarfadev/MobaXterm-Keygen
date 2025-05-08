# MobaXterm Keygen 🚀

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/Version-v2.2-green.svg)
![Compatibility](https://img.shields.io/badge/Compatible-v20.X%20|%20v25.1%20|%20v25.2-orange)

> ⭐ **Please star this repository if you find it helpful!** ⭐

## Overview

A modern, user-friendly web tool for generating activation keys for MobaXterm, the ultimate terminal emulator for Windows with an integrated X11 server, SSH client, and comprehensive network toolset.

![MobaXterm Key Generator Screenshot](https://d2bgqtsoaxm8w0.cloudfront.net/uploads/files/769MX.png)

## Features

- **✨ Clean, Modern UI** - Responsive design optimized for both desktop and mobile
- **🌓 Dark/Light Mode** - Toggle between themes with a click
- **🔒 Multiple Editions Support** - Generate keys for different MobaXterm editions
- **👥 Custom User Count** - Specify the number of concurrent users
- **💾 One-Click Downloads** - Instantly download your custom activation file

## Compatibility

- Works with **MobaXterm versions 20.X, 25.1, and 25.2**
- Supports both portable and installer editions

## How to Use

1. **Visit the Generator**: Go to the [MobaXterm Key Generator](https://moba-xterm-keygen.vercel.app/)
2. **Fill in the Form**:
   - Select the desired MobaXterm edition
   - Enter a username (letters only)
   - Choose your MobaXterm version (20.X or 25.X)
   - Specify the number of users
3. **Download**: Click "Download Key" to get your Custom.mxtpro file
4. **Activate**: Place the generated file in your MobaXterm installation directory:
   ```
   C:\Program Files (x86)\Mobatek\MobaXterm
   ```

## Installation Guide

### Step 1: Download MobaXterm
Download the latest version from the [official MobaXterm website](https://mobaxterm.mobatek.net/download-home-edition.html).

### Step 2: Generate Your Key
Use our [online generator](https://moba-xterm-keygen.vercel.app/) to create your activation file.

### Step 3: Activate MobaXterm
1. Locate your MobaXterm installation folder:
   - **Default Path**: `C:\Program Files (x86)\Mobatek\MobaXterm`
   - Or right-click the MobaXterm shortcut and select "Open file location"
2. Copy the `Custom.mxtpro` file to this directory
3. Start MobaXterm - your license should now be activated!

### Step 4: Postscript (Optional)

The file generated, Custom.mxtpro, is actually a zip file and contains a text file, Pro.key, where there is a key string.

MobaXterm.exe has another mode. You can see it by adding a parameter "-customizer".

$ .\MobaXterm.exe -customizer

You should export custom settings to a file named MobaXterm customization.custom which is also a zip file. Then merge two zip file: Custom.mxtpro and MobaXterm customization.custom to Custom.mxtpro. Finally copy newly-generated Custom.mxtpro to MobaXterm's installation path.

## Troubleshooting

1. **Activation Not Working?**
   - Verify you're using a compatible version (20.X, 25.1, or 25.2)
   - Make sure the file is in the correct location
   - Check that the file is named exactly `Custom.mxtpro`

2. **Error During Key Generation?**
   - Ensure all form fields are filled correctly
   - Username must contain only letters (no spaces, numbers, or special characters)
   - Try refreshing the page and generating again

## Technical Details

This tool uses client-side processing to generate valid license keys based on your inputs. The activation file is generated directly in your browser - no data is sent to any server.

## Disclaimer

This tool is provided for educational purposes only. Please support the developers by purchasing a license for commercial use.

## Development

### Built With
- Vue.js
- Tailwind CSS
- Modern JavaScript

### Version History
- **v2.2** - Current release with dark mode and mobile optimization
- **v2.1** - Added support for version 25.2
- **v2.0** - Major UI redesign
- **v1.0** - Initial release

---

Created with ❤️ by Zarfala

---

⭐ [Star this repository on GitHub!](https://github.com/zarfadev/MobaXterm-Keygen) ⭐
