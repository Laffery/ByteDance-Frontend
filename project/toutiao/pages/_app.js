// // styles
import '../styles/globals.css';
// import '../styles/header.css';
// import '../styles/left.css';
// import '../styles/center.css';
// import '../styles/right.css';

// // components
// import Header from '../components/header';
// import LeftNav from '../components/left-nav';
// import News from '../components/news';
// import RightNav from '../components/right-nav';

// function MyApp({ Component, pageProps }) {
// 	return (
//     	<div>
//       		{/* <Header></Header> */}
//       		<div id="main">
//         		{/* <LeftNav></LeftNav>
// 				<News></News>
//         		<RightNav></RightNav> */}
// 				<Home></Home>
//       		</div>
//    		</div>
//   	)
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>
}

export default MyApp
