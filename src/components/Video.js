const VIDEOS = {
    fast: 'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Equestrian_04_Videvo_preview.webm',
    slow: 'https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm',
    cute: 'https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/gatos__preview.webm',
    eek: 'https://cdn.videvo.net/videvo_files/video/free/2014-04/small_watermarked/Albino_Snake_CCBY_NatureClip_preview.webm'
  };
  

const Video = (props) => {
    
   return ( 
        <video src= {VIDEOS[props.match.params.name]} width="320" height="240" controls/>
     );
}
 
export default Video;

// version 2 with functions
// const Video = (props) => {
//     return ( 
//         <video src= {props.video} width="320" height="240" controls/>
//       );
// }
 
// export default Video;