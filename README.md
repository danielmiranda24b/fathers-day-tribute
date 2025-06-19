# Forever Together - A Father's Day Tribute

A beautiful, heartfelt Father's Day tribute website built with Flask. This personal website showcases a loving relationship between father and child through an interactive timeline, photo gallery, and meaningful messages.

## Features

- **Hero Section**: Animated title with floating hearts background
- **Personal Introduction**: Heartfelt message to "Dada" with custom styling
- **Interactive Timeline**: Journey through different life stages with photo upload capability
- **Reasons Section**: Cards explaining why he's loved and admired
- **Photo Gallery**: Uploadable photo sections for special memories
- **Responsive Design**: Works beautifully on desktop and mobile
- **Smooth Animations**: Fade-in effects and interactive elements

## Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with Google Fonts (Lobster, Poppins)
- **Icons**: Font Awesome
- **Server**: Gunicorn for production

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/forever-together.git
cd forever-together
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set environment variables:
```bash
export SESSION_SECRET="your-secret-key-here"
```

4. Run the application:
```bash
python main.py
```

The website will be available at `http://localhost:5000`

## Photo Upload Feature

The website includes functionality to upload photos to:
- Timeline memories (2005, 2010, 2015, 2020, Now)
- Photo gallery sections
- Hover over photo placeholders to see "Add Photo" buttons
- Photos are stored locally in the browser

## Customization

You can easily customize:
- Personal messages in `templates/index.html`
- Timeline events and years
- Color scheme in `static/css/style.css`
- Animation effects in `static/js/script.js`

## Deployment

This website is ready for deployment on platforms like:
- Replit
- Heroku
- Vercel
- GitHub Pages (static version)

## License

This is a personal project created with love. Feel free to use it as inspiration for your own family tributes.

---

*"This isn't just a collection of memories. This is history."*
