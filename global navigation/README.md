# Expo Global Styles + Navigation Example

Minimal Expo project demonstrating a global stylesheet and a separate navigation file.

Prerequisites
- Node.js (LTS)
- Expo CLI (optional) or use `npx expo` commands
- Expo Go app on your phone for scanning the QR code

Install and run

Windows PowerShell example:

```powershell
npm install
npx expo start
```

Open the project in Expo Go by scanning the QR code shown in the terminal or the Expo DevTools.

Files of interest
- `App.js` - entry point wiring the navigation container
- `navigation/index.js` - root navigator using native stack
- `styles/global.js` - global StyleSheet and shared colors
- `screens/*` - example screens using the global styles
