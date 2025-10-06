# APINowFun-Doctor-Patient-Translator

This project was built for the **APINow.fun Challenge (September 2025)** and it **won the top prize!**

<img width="620" height="880" alt="image" src="https://github.com/user-attachments/assets/8d936682-3c89-48ef-b250-c6868f85ad85" />

The **Doctor–Patient Translator** is a real-time multilingual **speech-to-speech medical communication app** built using **Next.js 15**, **TypeScript**, and the **APINow.fun Translate API** (powered by Web3 payments on Base).  

It allows doctors and patients to **instantly communicate across languages** through **voice recognition, live translation, and downloadable transcripts**, all while using **on-chain micropayments** for each translation request.

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 15 (App Router), TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes |
| **Speech Recognition** | Web Speech API (`webkitSpeechRecognition`) |
| **Translation API** | [APINow.fun – Translate Endpoint](https://apinow.fun) |
| **Payments** | Base Network (`TRANSLATE` ERC-20 token via L402) |
| **Hosting** | Vercel |

## How It Works

User speaks or types input text.

The app sends a request to https://apinow.fun/api/endpoints/apinowfun/translate-TRANSLATE.

The SDK performs an L402 on-chain micropayment using the wallet key in .env.local.

Once confirmed, the translation is returned and displayed in the UI.

The session can be downloaded for patient records.

## Payments on Base

**Chain:** Base Mainnet

**Token:** TRANSLATE (0x5CD9166494673c15cBdfe8750dEF8BBab80a5B07)

**Wallet:** your connected Base wallet (APINOW_WALLET_PKEY)

**Protocol:** L402 micropayments (handled automatically by SDK)

Each translation triggers a microtransaction for usage billing.
