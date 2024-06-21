# k011 Blog

A blog covering topics like cryptography, tech, and backend programming, built with Gatsby.

## Overview

The "k011" blog features posts on a variety of technical topics, including cryptography, technology trends, and backend programming. It is created using the Gatsby framework for fast, scalable, and modern web development.

## Live Site

Check out the live blog at [psga.github.io/k011](https://psga.github.io/k011/).

## Built With

- **[Gatsby](https://www.gatsbyjs.com/)**: A React-based framework for creating fast and dynamic web pages.
- **Markdown**: Content is written in Markdown for easy formatting and readability.
- **CSS**: Styling is handled with CSS for a clean and consistent look.
- **GraphQL**: Used for efficient data querying within Gatsby.

## Setup and Installation

To run the blog locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/psga/k011.git
   cd k011
   ```

2. **Install dependencies**:

   Ensure you have Node.js and npm installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run develop
   ```

4. **Access the blog**:

   Open your browser and navigate to `http://localhost:8000`.

## How It Was Made

1. **Initialize Gatsby**:

   The project was bootstrapped using the Gatsby CLI:

   ```bash
   gatsby new k011 https://github.com/gatsbyjs/gatsby-starter-blog
   ```

2. **Customize Content**:

   - Posts are written in Markdown files stored in the `/content` directory.
   - Custom configurations and plugins are added to the `gatsby-config.js` file.

3. **Style the Blog**:

   - Global styles and layout are defined in the `/src` directory.
   - CSS modules and styled-components are used for modular and reusable styles.

4. **Deploy**:

   The site is deployed to GitHub Pages using GitHub Actions for continuous integration:

   ```bash
   npm run build
   npm run deploy
   ```

## Contributing

Contributions are welcome! Fork the repo, make changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

© 2024 psga
