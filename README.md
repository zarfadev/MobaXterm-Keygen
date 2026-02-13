# MobaXterm Keygen & Customizer 🚀

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/Version-v2.7-green.svg)
![Compatibility](https://img.shields.io/badge/Compatible-v20.X%20|%20v25.4%20|%20v26.0-orange)

> ⭐ **Please star this repository if you find it helpful!** ⭐

## Overview

A modern, user-friendly web tool for generating activation keys and customizing MobaXterm, the ultimate terminal emulator for Windows with an integrated X11 server, SSH client, and comprehensive network toolset.

## Features

- **✨ Clean, Modern UI** - Responsive design optimized for both desktop and mobile
- **🌓 Dark/Light Mode** - Toggle between themes with a click
- **🔒 Multiple Editions Support** - Generate keys for different MobaXterm editions
- **👥 Custom User Count** - Specify the number of concurrent users
- **💾 One-Click Downloads** - Instantly download your custom activation file
- **🔧 Complete Customizer** - Create personalized settings without the official customizer tool
- **🖼️ Custom Logo Support** - Replace the default MobaXterm logo with your own
- **📑 Bookmarks Manager** - Pre-define SSH, FTP, and other connection profiles
- **🔌 Plugin Integration** - Include plugins in your custom configuration

## Compatibility

- Works with **MobaXterm versions 20.X, 25.4, and 26.0**
- Supports both portable and installer editions

## How to Use

### Key Generator

1. **Visit the Generator**: Go to the [MobaXterm Key Generator](https://moba-xterm-keygen.vercel.app/)
2. **Fill in the Form**:
   - Select the desired MobaXterm edition
   - Enter a username (letters only)
   - Choose your MobaXterm version (20.X or 26.X)
   - Specify the number of users
3. **Download**: Click "Download Key" to get your Custom.mxtpro file
4. **Activate**: Place the generated file in your MobaXterm installation directory:
   ```
   C:\Program Files (x86)\Mobatek\MobaXterm
   ```

### Customizer

1. **Go to the Customizer Tab** in the web interface
2. **Configure Your Settings**:
   - **Banner**: Create a personalized welcome message
   - **Profile**: Configure a custom bash profile (similar to /etc/profile in Linux)
   - **Settings**: Toggle MobaXterm features on/off
   - **Logo**: Upload your custom logo image
   - **Bookmarks**: Create predefined connections for your users
   - **Plugins**: Add optional MobaXterm plugins (.mxt3 files)
3. **Generate Settings**: Click "Generate Configuration File" to download your settings
4. **Apply Settings**: Use either method below to apply your customization

### Settings Merger

1. **Go to the Custom Settings Merger Tab**
2. **Upload Files**:
   - Your license key file (Custom.mxtpro)
   - Your customization file (MobaXterm customization.custom)
3. **Merge**: Create a single file with both your license and custom settings
4. **Deploy**: Copy the merged Custom.mxtpro to your MobaXterm installation directory

## Installation Guide

### Step 1: Download MobaXterm
Download the latest version from the [official MobaXterm website](https://mobaxterm.mobatek.net/download-home-edition.html).

### Step 2: Generate Your Key & Customization
Use our tool to:
1. Create your activation key
2. Customize your settings (optional)
3. Merge your license with your customization (optional)

### Step 3: Activate MobaXterm
1. Locate your MobaXterm installation folder:
   - **Default Path**: `C:\Program Files (x86)\Mobatek\MobaXterm`
   - Or right-click the MobaXterm shortcut and select "Open file location"
2. Copy the `Custom.mxtpro` file to this directory
3. Start MobaXterm - your license and customizations should now be applied!

### Alternative Customization Method

MobaXterm.exe has a customizer mode that you can access by adding the parameter "-customizer":

```
.\MobaXterm.exe -customizer
```

This official tool also allows you to export your settings to a file named "MobaXterm customization.custom". Our web-based customizer provides similar functionality but is accessible directly in your browser.

## Troubleshooting

1. **Activation Not Working?**
   - Verify you're using a compatible version (20.X, 25.4, or 26.0)
   - Make sure the file is in the correct location
   - Check that the file is named exactly `Custom.mxtpro`

2. **Error During Key Generation?**
   - Ensure all form fields are filled correctly
   - Username must contain only letters (no spaces, numbers, or special characters)
   - Try refreshing the page and generating again

3. **Customization Not Applying?**
   - Verify that you've merged the customization with your license file
   - Make sure the merged file is named exactly `Custom.mxtpro`
   - Try restarting MobaXterm after placing the file in the installation directory

## Technical Details

This tool uses client-side processing to generate valid license keys and customization files based on your inputs. Everything is generated directly in your browser - no data is sent to any server, ensuring your privacy and security.

## Disclaimer

This tool is provided for educational purposes only. Please support the developers by purchasing a license for commercial use.

## Development

### Built With
- Vue.js
- Tailwind CSS
- Modern JavaScript

### Version History
- **v2.7** - Added support for version 26,0
- **v2.6** - Added support for version 25.4
- **v2.5** - Added support for version 25.3
- **v2.4** - Added full MobaXterm customizer functionality
- **v2.3** - Added custom settings merger
- **v2.2** - Dark mode and mobile optimization
- **v2.1** - Added support for version 25.2
- **v2.0** - Major UI redesign
- **v1.0** - Initial release

---

Created with ❤️ by Zarfala

---

⭐ [Star this repository on GitHub!](https://github.com/zarfadev/MobaXterm-Keygen) ⭐
