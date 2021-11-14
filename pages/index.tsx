import type { NextPage } from 'next';
import Head from 'next/head';
import DoraContainer from '../components/DoraContainer';
import DoraOverRating from '../components/DoraOverRating';
import DoraRecomand from '../components/DoraRecomand';
import GradusProjects from '../components/GradusProjects';
import styles from '../styles/Home.module.css';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Comments from '../components/Comments';
import BuyCard from '../components/BuyCard';


const Home: NextPage = () => {
  if (typeof window !== 'undefined') {
  const DoraWrapRef = document.querySelector('#DoraWrapper') as HTMLElement;      
  const gradsScRef = document.querySelector('#GradusProjects') as HTMLElement;
  const buyCrdRef = document.querySelector('#BuyCard') as HTMLElement;
  const dropMenuEl = document.querySelector('.MuiMenu-list') as HTMLElement;
  // const trgParent = document.querySelector('.MuiMenu-list').parentElement as HTMLElement;
    window.addEventListener('scroll', ()=>{
      // console.log( gradsScRef );  
      if( gradsScRef instanceof HTMLElement  && buyCrdRef instanceof HTMLElement){
        // console.log( window.pageYOffset, gradsScRef.offsetTop);
        if( window.pageYOffset <  (DoraWrapRef.offsetTop + (DoraWrapRef.offsetHeight * 0.85)) ){
          buyCrdRef.style.position = 'fixed';
          buyCrdRef.style.top = '1rem';
          buyCrdRef.style.left = '0.1rem';
          buyCrdRef.style.transformOrigin = '176%';
          buyCrdRef.style.transform = 'scale3d(0.85, 0.73, 1)';
        }
        
        if( window.pageYOffset >=  (DoraWrapRef.offsetTop + (DoraWrapRef.offsetHeight * 0.85)) ){
          buyCrdRef.style.position = 'absolute';
          buyCrdRef.style.top = 'auto';
          buyCrdRef.style.bottom = '6.6rem';
          buyCrdRef.style.left = '-1.5rem';
          buyCrdRef.style.transformOrigin = 'center';
          buyCrdRef.style.transform = 'scale3d(1.0, 0.7, 1)';
        }
      }    
    });
    // if(typeof window !== 'undefined' && typeof document !== 'undefined'){
    // if( typeof dropMenuEl !== null && typeof dropMenuEl !== 'undefined' ){
    // if( typeof document !== 'undefined'){
    //   // const dropMenuEl = document.querySelector('.MuiMenu-list');
    //   const trgParent = dropMenuEl.parentElement;
    //   // const trgParent = document.querySelector('.MuiMenu-list').parentElement;
    //   if(window.outerWidth >= 560){      
    //     trgParent.style.left = 'auto'; 
    //     trgParent.style.right = '8rem';
    //   }else{
    //     trgParent.style.right = '0rem!important';
    //     trgParent.style.top = '17rem!important';
    //     trgParent.style.width = '100%!important';
    //     trgParent.style.minWidth = '100%!important';
    //   }
    // }  
  
  }

  return (
    <div className={styles.container} id='coursePage'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap" rel="stylesheet" />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='DoraWrapper'>        
        <DoraContainer />
        <BuyCard />
      </div>
      <GradusProjects />
      <DoraOverRating />
      <DoraRecomand /> 
      <section id='contact'>
        <div>
            <span>tadarab</span>
            <span>business</span>
        </div>
        <p> دورات عالية الجودة في جميع المجالات لأفراد شركتك </p>
        <span> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز </span>
        <a href=""> تواصل معنا <KeyboardBackspaceRoundedIcon/> </a>
      </section>
      <Comments />
    </div>
  )
}

export default Home
