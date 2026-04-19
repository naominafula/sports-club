# Fitness Effort



A responsive static website for a sports club and gym brand, built with plain HTML and CSS.



## Overview



This project is a small landing site for FITNESS EFFORT with the following sections:



- *Home* (index.html): Hero section with navigation and a call-to-action.

- *Services* (service.html): Gym offerings including cardio, weight training, and yoga.

- *Membership* (membership.html): Pricing plans with basic and pro membership options.

- *Login* (login.html): Simple member login form.



## Project Structure


├── index.html           # Main homepage
├── service.html         # Services & facilities page
├── membership.html      # Pricing and plans page
├── login.html           # Member login interface
├── style.css            # Global stylesheet
├── package.json         # Scripts and test dependencies
├── test/
│   └── index.test.js    # Basic validation tests
└── .github/
    └── workflows/
        └── main.yml     # GitHub Actions workflow


## Features



- Clean navigation across pages

- Responsive layout supported by CSS

- Visual service cards and pricing plans

- Static site with no JavaScript dependencies



## Setup



No build tools are required to view this project.



### View locally



1. Open the HTML files directly in your browser.

2. Or run a simple HTTP server from the project root:



bash

python3 -m http.server 8000





Then visit http://localhost:8000.



## Testing



The project includes a Jest test suite to verify repository setup.



bash

npm install

npm test





## Notes



- This is a static frontend project and does not include authentication backend logic.

- The login button is currently a placeholder form action.

## Author

Naomi Nafula

- GitHub: https://github.com/naominafula



## License

This project is available under the MIT License
