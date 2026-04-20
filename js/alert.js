const asciiArt = `
 @@@@@@@@   @@@@@@   @@@@@@@   @@@@@@@@   @@@@@@   @@@        @@@@@@ 
 @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@@@@@@
      @@!  @@!  @@@  @@!  @@@  @@!       @@!  @@@  @@!       @@!  @@@
     !@!   !@!  @!@  !@!  @!@  !@!       !@!  @!@  !@!       !@!  @!@
    @!!    @!@!@!@!  @!@!!@!   @!!!:!    @!@!@!@!  @!!       @!@!@!@!
   !!!     !!!@!!!!  !!@!@!    !!!!!:    !!!@!!!!  !!!       !!!@!!!!
  !!:      !!:  !!!  !!: :!!   !!:       !!:  !!!  !!:       !!:  !!!
 :!:       :!:  !:!  :!:  !:!  :!:       :!:  !:!   :!:      :!:  !:!
  :: ::::  ::   :::  ::   :::   ::       ::   :::   :: ::::  ::   :::
 : :: : :   :   : :   :   : :   :         :   : :  : :: : :   :   : :
`;

const asciiAuraStyle = `
  font-family: "Courier New", monospace;
  font-weight: 900;
  background: linear-gradient(90deg, #60a5fa, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
  display: block;
  white-space: pre;
`;

const warningHeadingStyle = `
  color: #ff0055;
  font-size: 44px;
  font-weight: 900;
  font-family: 'Outfit', sans-serif, system-ui;
  text-shadow: 0px 4px 15px rgba(255, 0, 85, 0.4);
  padding: 10px 0;
`;

const warningBodyStyle = `
  font-size: 16px;
  color: #d1d5db;
  font-weight: 500;
  line-height: 1.6;
  font-family: system-ui, -apple-system, sans-serif;
  padding: 10px 0 20px 0;
`;

const signatureStyle = `
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Outfit', sans-serif;
`;

function renderSecureAura() {
  // Clear any existing logs to present a clean canvas
  console.clear();

  // Print Aura-style ASCII Art
  console.log('%c' + asciiArt, asciiAuraStyle);

  // Print Warning Message
  console.log("%cSTOP! SECURE ZONE", warningHeadingStyle);
  
  console.log(
    "%cThis is a browser feature intended strictly for developers.\nDo not enter or paste any code you do not fully understand.\nDoing so could grant attackers access to hijack your session, steal your licenses, or impersonate you.\n\nProtect your data and stay safe! 🔒", 
    warningBodyStyle
  );

  console.log("%c✨ MobaXterm Keygen System - Shield Active", signatureStyle);
}

// Render the protective aura once
renderSecureAura();
