const hireme = ('./assets/images/hireMe.jpg')
const svg = ('./assets/images/LogoMaker.jpg')
const writerscorner = ('./assets/images/WritersCorner.jpg')
const readme = ('./assets/images/README.jpg')
const portfolio = ('./assets/images/Portfolio.jpg')
const password = ('./assets/images/Password.jpg')

export const ProjectsData = [
    
    {
        title: 'Hire.Me',
        description: 'This is a group project from my time at the University of Utah. It is the building blocks of a job search app that allows users to search for jobs, save jobs, and apply for jobs. We built it so users can sign in/out, search for jobs using an API, and it uses Node.js, Express.js, Heroku, MySQL, and Sequelize.',
        image: hireme,
        link: 'https://lit-plateau-73143.herokuapp.com/',
        github: 'https://github.com/BrockHanni/hire.me--proj2'
    },
    {
        title:'SVG-Generator',
        description:'This app is a simple SVG generator that allows users to create a custom SVG image. It uses HTML, CSS, Javascript, and jQuery.',
        image: svg,
        link:'https://github.com/BrockHanni/Week-10-LogoMaker',
        github:'https://github.com/BrockHanni/Week-10-LogoMaker',
    },
    {
        title:'Writer\'s Corner',
        description:'This is an app that I built to allow me to have a "safe space" to write, with few distrations, the apis are customizable, as well as the background. Built with HTML, CSS, Javascript, with spotify and reddit APIs.',
        image: writerscorner,
        link:'https://brockhanni.github.io/Writers-Corner/',
        github:'https://github.com/BrockHanni/Writers-Corner',
    },
    {
        title:'README Generator',
        description:'This is a super useful app that allows users to create a README.md file for their projects. It uses Node.js, and Inquirer. By running the app, the user is prompted with a series of questions, ie Description, Name, Links, installation insructions, then the answers are used to create a README.md file.',
        image: readme,
        link:'https://github.com/BrockHanni/week-9-readme',
        github:'https://github.com/BrockHanni/week-9-readme',
    },
    {
        title:'Basic Portfolio',
        description:'This was the first portfolio I created. It links to a few of my more basic project. It was made completely with Javascript, HTML, and CSS.',
        image: portfolio,
        link:'https://brockhanni.github.io/Hanni-Portfolio/',
        github:'https://github.com/BrockHanni/Hanni-Portfolio',
    },
    {
        title:'Password Generator',
        description:'This is an awesome app that generates a random password based on user input. It uses HTML, CSS, and Javascript. Users can choose the length of the password, and whether or not to include numbers, special characters, and uppercase/lowercase letters.',
        image:password,
        link:'https://brockhanni.github.io/Week-3-PasswordGenerator/',
        github:'https://github.com/BrockHanni/Week-3-PasswordGenerator',
    },

    
]