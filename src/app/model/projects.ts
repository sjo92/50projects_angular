import { Project } from "./project";

export const PROJECT_DATA: Project[] = [
  {position: 2, name: "Theme Clock", description: "This theme clock shows the actual time both in Digital and Analog. The needles work in pure CSS with Vanilla JavaScript. It also supports dark mode.", 
  focus: "JavaScript", image: 'assets/images/Theme Clock.png', router: "../projects/drink-water/index.html" },
  {position: 4, name: "Drink Water", description: "To keep you healthy by tracking how much water you drink a day. You can choose how much water you want to drink. Everytime you finish drinking a glass of water, the remaining amount of water will be shown.", 
  focus: "JavaScript", image: 'assets/images/Drink Water.png', router: "../projects/drink-water/index.html" },
  
  {position: 3, name: "Split Landing Page", description: "Play Station or XBox? Moving your mouse cursor towards your favourite and check out the effects!", 
  focus: "CSS", image: 'assets/images/Day 7 Split Landing Page.png', router: "movie_app" },
 {position: 1, name: "Movie App", description: "A simple movie app shows most popular movies this week by using TMDB API. By Toggling you can read an overview of the selected movie. You can also search any movie you want to watch with the search bar on top.", 
  focus: "JavaScript", image: 'assets/images/Movie App.png', router: "movie_app" },
  
  ];
  