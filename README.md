# 🔐 Password Generator & Strength Checker

A lightweight, browser-based tool that generates strong random passwords and analyzes the strength of any password in real time — built to explore core password security concepts like entropy, character variety, and common weak-password patterns.

## Live Demo
https://shreyash16-ai.github.io/password-tool/

## Features
- **Real-time strength checker** — scores a password as Weak, Medium, or Strong as you type, based on length and character variety (uppercase, lowercase, numbers, symbols)
- **Customizable password generator** — adjustable length (6–32 characters) and toggleable character sets (uppercase, numbers, symbols)
- **One-click copy** — copies the generated password to your clipboard
- **Zero dependencies** — pure HTML, CSS, and JavaScript, no frameworks or libraries

## Why I Built This
As a Computer Science student specializing in Cybersecurity, I wanted to build something that reflects a core security concept — password strength — while practicing fundamental front-end development skills like DOM manipulation, event handling, and regex-based input validation.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## How Strength Is Scored
The checker awards points based on:
- Password length (8+ and 12+ characters)
- Presence of lowercase letters
- Presence of uppercase letters
- Presence of numbers
- Presence of special characters

More criteria met = higher score = stronger rating.

## Getting Started
1. Clone this repository:
2. Open `index.html` in any web browser. No build steps or installations required.

## Possible Future Improvements
- Add a check against common leaked password lists
- Switch to `crypto.getRandomValues()` for cryptographically secure random generation
- Add a password strength meter (visual bar) instead of just text

## Author
Shreyash Bajpai — 3rd Year BTech CSE (Cybersecurity)
