# AudioMax 🎵

AudioMax is a modern, feature-rich audio content platform that enables users to generate, manage, and transform audio content using advanced AI technologies.

![AudioMax Banner](./public/banner.png)

## 🌟 Features

### Core Features
- **AI-Powered Audio Generation** 
  - Text-to-speech with natural inflections
  - Multiple voice options including custom voice cloning
  - Smart content generation with Mistral 7B
  
- **Advanced Audio Processing**
  - High-quality audio processing
  - Professional-grade mixing tools
  - Real-time waveform visualization

- **User Management**
  - Secure authentication with Clerk
  - User profiles and preferences
  - Role-based access control

### Additional Features
- **Smart Content Management**
  - Organized audio library
  - Custom playlists
  - Tags and categories

- **Analytics & Insights**
  - Usage statistics
  - Performance metrics
  - Engagement tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/audiomax.git
cd audiomax
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Update the `.env` file with your credentials:
```env
VITE_PLAYHT_API_KEY=your_api_key_here
VITE_PLAYHT_USER_ID=your_user_id_here
VITE_API_URL=your_api_url
```

Note: If you don't provide Play.ht credentials, the system will use demo credentials with limited functionality.

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Styled Components** - Styling
- **React Router** - Routing
- **Zustand** - State management
- **React Query** - Server state management
- **Clerk** - Authentication
- **WaveSurfer.js** - Audio visualization

### Voice Services
- **Play.ht API** - Text-to-speech generation
- **Custom Voice Cache** - Optimized voice loading
- **Retry Logic** - Robust error handling

### Development Tools
- **ESLint** - Linting
- **Prettier** - Code formatting
- **Vitest** - Testing
- **Husky** - Git hooks

## 📁 Project Structure

```
src/
├── components/         # Reusable components
│   ├── common/        # Generic UI components
│   ├── Layout/        # Layout components
│   └── AudioPlayer/   # Audio-related components
├── pages/             # Page components
├── services/          # API services
│   ├── api.ts         # Base API client
│   └── voice/         # Voice generation services
├── hooks/             # Custom React hooks
├── store/             # Global state management
├── styles/            # Global styles and themes
├── utils/             # Utility functions
└── types/             # TypeScript types
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test:watch
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## 🔒 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| VITE_PLAYHT_API_KEY | Play.ht API Key | No | Demo Key |
| VITE_PLAYHT_USER_ID | Play.ht User ID | No | Demo ID |
| VITE_API_URL | Backend API URL | Yes | http://localhost:3000 |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Clerk](https://clerk.dev/) for authentication
- [Play.ht](https://play.ht/) for text-to-speech
- [Mistral AI](https://mistral.ai/) for content generation
- [WaveSurfer.js](https://wavesurfer-js.org/) for audio visualization

## 📞 Support

For support, email support@audiomax.com or join our Discord community.

---

Built with ❤️ by [Your Team Name]