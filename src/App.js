import React, { Component } from 'react';
import './App.css';

class App extends Component {  


  render() {

    const projects = [
    {
      title: 'Lead iOS Developer, Min Volvo iOS App', 
      description: 'Lorem ipsum dolor amet mlkshk direct trade wayfarers lumbersexual banh mi sustainable distillery godard. ', 
      image: 'min_volvo_image.png',
      logo: 'min_volvo_logo.png',
      link: 'https://itunes.apple.com/se/app/min-volvo/id1340848952?mt=8'
    },{
      title: 'Lead iOS Developer,\nLego Star Wars Force Builder iOS App', 
      description: 'Lorem ipsum dolor amet mlkshk direct trade wayfarers lumbersexual banh mi sustainable distillery godard. ', 
      image: 'force_builder_image.png',
      logo: 'force_builder_logo.png',
      link: 'https://www.lego.com/en-us/themes/star-wars/articles/star-wars-force-builder-app-post-762cf80c2ff140b2b7e87b96f2b64551'
    },{
      title: 'iOS Developer, Dplay iOS App', 
      description: 'Lorem ipsum dolor amet mlkshk direct trade wayfarers lumbersexual banh mi sustainable distillery godard. ', 
      image: 'dplay_image.png',
      logo: 'dplay_logo.png',
      link: 'https://itunes.apple.com/se/app/dplay/id395972146?mt=8'
    },
    {
      title: 'Developer, Electrolux', 
      description: 'Lorem ipsum dolor amet mlkshk direct trade wayfarers lumbersexual banh mi sustainable distillery godard. ', 
      image: 'electrolux_image.png',
      logo: 'electrolux_logo.png',
      link: null
    },
    {
      title: 'Lead iOS Developer, Bamseklubben iOS App', 
      description: 'Lorem ipsum dolor amet mlkshk direct trade wayfarers lumbersexual banh mi sustainable distillery godard. ', 
      image: 'bamse_image.png',
      logo: 'bamse_logo.png',
      link: 'https://itunes.apple.com/se/app/bamseklubben-tui-barnspel/id1235584567?mt=8'
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
          <p id="profile-description">Lorem ipsum dolor amet mlkshk direct trade wayfarers lumbersexual banh mi sustainable distillery godard. Keffiyeh try-hard plaid vinyl asymmetrical shaman pinterest, af normcore kickstarter truffaut fashion axe hexagon trust fund.</p>
          <a href="https://github.com/djangdal" rel="noopener noreferrer" target="_blank">GitHub</a>
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
        {project.link != null && <a href={project.link} rel="noopener noreferrer" target="_blank">visit page</a>}
        <br/>
        <img src={project.logo} alt={project.logo} className="project-info-logo"/>
        </div>
      );
    } else {
      return(
        <div className="project-info-right">
        <p className="project-info-title">{project.title}</p>
        <p className="project-info-description">{project.description}</p>
        {project.link != null && <a href={project.link} rel="noopener noreferrer" target="_blank">visit page</a>}
        <br/>
        <img src={project.logo} alt={project.logo} className="project-info-logo"/>
        </div>
      );
    }
  }
}
