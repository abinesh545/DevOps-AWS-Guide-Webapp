# DevOps & AWS Beginner Guide

A modern, responsive, and beginner-friendly static web application that acts as a comprehensive roadmap and learning hub for absolute beginners wanting to dive into DevOps and AWS Cloud computing.

## Features
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion.
- **Dark/Light Mode**: Smooth theme toggling support.
- **Roadmap**: Step-by-step learning path.
- **Tech Stack Check**: Explanations and use cases of primary tools (Docker, AWS Services).
- **Resources & Projects**: Curated list of free content and portfolio building ideas.

## Tech Stack
- Frontend: React (Vite)
- Styling: Tailwind CSS
- Routing: React Router v6
- Icons & Animations: Lucide-React, Framer Motion

## Local Setup & Development

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd devops-aws-guide
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Docker Deployment

This project includes a multi-stage Dockerfile optimized for production deployment.

### 1. Build the Docker Image
Wait for the initial image generation to complete.
```bash
docker build -t devops-aws-guide .
```

### 2. Run the Container
```bash
docker run -d -p 8080:80 devops-aws-guide
```
Navigate to `http://localhost:8080` in your browser.

## Cloud Deployment Guide

### AWS S3 + CloudFront (Recommended for Static Apps)
1. **Build the app locally**: Run `npm run build`. This generates a `dist` folder.
2. **Setup S3**: Create an AWS S3 Bucket, uncheck "Block all public access", and enable "Static Website Hosting" in the properties tab.
3. **Upload Files**: Upload the contents of the `dist` folder to your S3 bucket.
4. **Setup Permissions**: Add a bucket policy granting `s3:GetObject` to `*`.
5. **(Optional) CloudFront**: Create a CloudFront distribution pointing to the S3 bucket's website endpoint for CDN caching and Free SSL.

### GitHub Pages Alternative
1. Add `base: '/devops-aws-guide/'` to your `vite.config.js` if it's not a custom domain.
2. Run `npm run build`.
3. Use the `gh-pages` branch or configure GitHub Actions to deploy the `dist` folder automatically upon push.

---
*Built with ❤️ for absolute beginners.*
