import React, {setState} from 'react';
import Menu from './Menu';



class App extends React.Component {
 
  render() {
    return (
      <div className="card">
        <h1>Video Player</h1>
        <Menu  choose={this.chooseVideo}/>
      </div>
    );
  }
}

export default App;





// Version 2 with functions
// import React, {setState} from 'react';
// import Video from './Video';
// import Menu from './Menu';


// const VIDEOS = {
//   fast: 'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Equestrian_04_Videvo_preview.webm',
//   slow: 'https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm',
//   cute: 'https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/gatos__preview.webm',
//   eek: 'https://cdn.videvo.net/videvo_files/video/free/2014-04/small_watermarked/Albino_Snake_CCBY_NatureClip_preview.webm'
// };

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {src: ''}
//   }
//   chooseVideo=(source)=>{
//   this.setState({
//     src: VIDEOS[source]
//   })
//   }


//   render() {
//     return (
//       <div className="card">
//         <h1>Video Player</h1>
//         <Menu  choose={this.chooseVideo}/>
//         <Video video={this.state.src}/>
//       </div>
//     );
//   }
// }

// export default App;