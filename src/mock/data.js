import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
	title: '', // e.g: 'Name | Developer'
	lang: '', // e.g: en, es, fr, jp
	description: '' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
	title: '',
	name: '',
	subtitle: '',
	cta: ''
};

// ABOUT DATA
export const aboutData = {
	img: 'profilePic.jpg',
	paragraphOne:
		'Hello! My name is Soujanya and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I moved to Sweden to study MSc in Software Enginnering — turns out working in university projects together with personal interest taught me a lot about HTML & CSS!',
	paragraphTwo:
		'Fast-forward to today, I have had the privilege of working at an Fin-tech company, a gaming company and in huge coporations. My main focus these days is building accessible, responsive and user-friendly UI components',
	paragraphThree: 'To get more insight of my experiences and skill set, check this out!',
	resume: 'https:/github.com/soujanya-nekkanti/react-portfolio/master/Resume.pdf' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: 'project.jpg',
		title: 'Contacts App - React Native',
		info:
			'This is a simple contacts app (run on ios simulator) using React Native. For now it renders a list of json data being fetched from an API call. The Libraries and tools used to develop this are: create-react-native-app cli, native-base, react-navigation, json-server',
		info2: '',
		url: '',
		repo: 'https://github.com/soujanya-nekkenti/contacts-app' // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: 'project.jpg',
		title: 'Players App',
		info:
			'A simple player management tool generated in Angular CLI. The user is be presented with a list of players received from the server, and have the option to add new players and update/delete existing ones.',
		info2: '',
		url: '',
		repo: 'https://github.com/soujanya-nekkenti/Players-App' // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: 'project.jpg',
		title: 'TV Shows',
		info:
			'A simple web application that fetches the episodes of a TV-show from an API using Javascript(Angular JS framework), HTML and CSS',
		info2: '',
		url: '',
		repo: 'https://github.com/soujanya-nekkenti/TV-shows' // if no repo, the button will not show up
	}
];

// CONTACT DATA
export const contactData = {
	cta:
		'Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!',
	btn: 'Say Hello',
	email: 'soujanya.nekkenti@gmail.com'
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: 'twitter',
			url: 'https://twitter.com/Soujanya1604'
		},
		{
			id: nanoid(),
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/lakshmisowjanyanekkanti1604/'
		},
		{
			id: nanoid(),
			name: 'github',
			url: 'https://github.com/soujanya-nekkenti'
		}
	]
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: false // set to false to disable the GitHub stars/fork buttons
};
