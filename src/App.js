import React, { Component } from 'react';
import './App.css';

class App extends Component {  


  render() {

    const projects = [
    {
      title: 'Lead iOS Developer, Min Volvo iOS App', 
      description: 'Volvo is always striving to create the best customer experience. That´s why we developed an app that would handle everything regarding your car. From insurance to maintenance to controlling it. I was the lead developer in a team of six people.', 
      image: 'min_volvo_image.png',
      logo: 'min_volvo_logo.png',
      link: 'https://itunes.apple.com/se/app/min-volvo/id1340848952?mt=8'
    },{
      title: 'Lead iOS Developer, Goda Grannar iOS App', 
      description: 'One of the top insurance companies, Länsförsäkringar, in Sweden wanted to increase the safety in neighbourhoods. The app handles communication across the residents in their neighbourhood. I was the lead developer for the iOS app.', 
      image: 'goda_grannar_image.png',
      logo: 'goda_grannar_logo.png',
    },{
      title: 'Unity Developer,\nLego Star Wars Force Builder Mobile Game', 
      description: 'In conjunction with the new Star Wars movie, Lego wanted to realese a new game containing the new characters and ships from the movie. I was part of a four-man dev team.', 
      image: 'force_builder_image.png',
      logo: 'force_builder_logo.png',
      link: 'https://www.lego.com/en-us/themes/star-wars/articles/star-wars-force-builder-app-post-762cf80c2ff140b2b7e87b96f2b64551'
    },{
      title: 'Lead Developer, Electrolux', 
      description: 'To join the era of IoT, we created a library to handle the connection between appliances and the mobile phone. I was co-lead on the five-man iOS team.', 
      image: 'electrolux_image.png',
      logo: 'electrolux_logo.png',
      link: null
    },{
      title: 'Founder and Project Leader, Monpie Game', 
      description: 'Together with five other people, I created a game for iOS that reached first place on App Store with more than 100,000 downloads in 24 hours. I was the founder as well as project leader and lead developer.', 
      image: 'monpie_image.png',
      logo: 'monpie_logo.png',
      link: "https://itunes.apple.com/us/app/monpie-a-monster-pie-adventure/id705804178?mt=8"
    },{
      title: 'Lead Unity Developer, Bamseklubben Mobile Game', 
      description: 'A Swedish travel agency partnered up with a famous Character called Bamse, to make a better experience for the children. I was the lead developer.', 
      image: 'bamse_image.png',
      logo: 'bamse_logo.png',
      link: 'https://itunes.apple.com/se/app/bamseklubben-tui-barnspel/id1235584567?mt=8'
    },{
      title: 'iOS Developer, Dplay iOS App', 
      description: 'To make their content available to more people, Discovery created an online streaming service called Dplay available on both mobile and web. I was one of five iOS developers.', 
      image: 'dplay_image.png',
      logo: 'dplay_logo.png',
      link: 'https://itunes.apple.com/se/app/dplay/id395972146?mt=8'
    }];

    const rows = [];
    let left = true
    projects.forEach((project, i) => {
      left = !left
      rows.push(<ProjectRow key={i} project={project} isLeft={left}/>);
    });

    return (
      <div className="container">
        <ProfileHeader/>
        {rows}
      </div>
    );
  }
}

export default App;

class ProfileHeader extends React.Component {
  render() {
    return (
      <div id="profile-header">
        <img id="profile-image" src="david.png" alt="profile"/>
        <div id="profile-info">
          <h2 id="profile-title">Hej, I'm David, an iOS developer</h2>
          <p id="profile-description">Growing up in a small cold town in the northern woods of Sweden, called Luleå, I learned how to shovel snow, handle an axe, drive a snowmobile and fix my car. During the winter we had three hours of sunlight, in a month, if lucky. Maybe that's why I developed my interest in computers, well, gaming. I only gained my coding skills later during five years of Computer Science and a master in Machine Learning at the <a href="https://www.kth.se/en" rel="noopener noreferrer" target="_blank" id="kth-link"> Royal Institute of technology</a>. These days I'm building more games than I play, along with specializing in swift for iOS development, and I love it.</p>
          <a href="https://github.com/djangdal" rel="noopener noreferrer" target="_blank" class="profile-link">GitHub</a>
          <a href="https://www.linkedin.com/in/david-jangdal-43359551/" rel="noopener noreferrer" target="_blank" class="profile-link">LinkedIn</a>
          <a href="mailto:djangdal@gmail.com" class="profile-link">david@jangdal.se</a>
          <a href="tel:+46 73 848 35 25" class="profile-link">+46 73 848 35 25</a>
        </div>
      </div>
    );    
  }
}

class ProjectRow extends React.Component {
  render() {
    const project = this.props.project;
    const isLeft = this.props.isLeft;
    if(isLeft) {
      return (
        <div className="project-row">
          <ProjectImage project={project} isLeft={isLeft}/>
          <ProjectInformation project={project} isLeft={!isLeft}/>
        </div>
      );
    } else {
      return (
        <div className="project-row">
          <ProjectInformation project={project} isLeft={!isLeft}/>
          <ProjectImage project={project} isLeft={isLeft}/>
        </div>
      );
    }
  }
}

class ProjectImage extends React.Component {
  render() {
    const project = this.props.project;
    const isLeft = this.props.isLeft;
    if(isLeft) {
      return(
        <img src={project.image} alt={project.image} className="project-image-left"/>
      );
    } else {
      return(
        <img src={project.image} alt={project.image} className="project-image-right"/>
      );
    }
  }
}

class ProjectInformation extends React.Component {
  render() {
    const project = this.props.project;
    const isLeft = this.props.isLeft;
    if(isLeft) {
      return(
        <div className="project-info-left">
        <p className="project-info-title">{project.title}</p>
        <p className="project-info-description">{project.description}</p>
        {project.link != null && <a href={project.link} rel="noopener noreferrer" target="_blank" class="project-info-link">visit page</a>}
        <br/>
        {project.logo != null &&<img src={project.logo} alt={project.logo} className="project-info-logo"/>}
        </div>
      );
    } else {
      return(
        <div className="project-info-right">
        <p className="project-info-title">{project.title}</p>
        <p className="project-info-description">{project.description}</p>
        {project.link != null && <a href={project.link} rel="noopener noreferrer" target="_blank" class="project-info-link">visit page</a>}
        <br/>
        {project.logo != null &&<img src={project.logo} alt={project.logo} className="project-info-logo"/>}
        </div>
      );
    }
  }
}
