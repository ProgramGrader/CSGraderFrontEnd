import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React from 'react';

// import styles from '../styles/Login.module.css';
// import Head from 'next/head';
// import { useState } from 'react';
//
// function githubOnClick()
// {
//     alert("Hello World");
// };
//
// function loginOnClick(text : String)
// {
//     alert(text);
// };
//
// function loginTextCheck(text : String, target : HTMLInputElement)
// {
//     if(text.length <= 0)
//     {
//         target.style.backgroundColor = "rgb(255, 128, 128, 0.5)";
//     }else
//     {
//         target.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
//     }
// };
//
 const Login : NextPage = () => {

     return(
         <React.Fragment>
             <div className={styles.container}>
                 <Head>
                     <title>Create Next App</title>
                     <meta name="description" content="Generated by create next app" />
                     <link rel="icon" href="/favicon.ico" />
                 </Head>

                 <main className={styles.main}>
                     <h1 className={styles.title}>
                         Welcome to <a href="https://nextjs.org">Next.js login page!</a>
                     </h1>
                 </main>
             </div>
         </React.Fragment>
     );
 };
// {
//     const [value, setValue] = useState("");
//
//     return(
//
//         <div>
//             <Head>
//                 <title>Login</title>
//                 <meta name="description" content="Generated by create next app" />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//
//             <style jsx global>{`
//                 body {
//                     background: url('LoginBackground.jpg') no-repeat center center fixed;
//                     -webkit-background-size: cover;
//                     -moz-background-size: cover;
//                     -o-background-size: cover;
//                     background-size: cover;
//                 }
//             `}</style>
//
//             <div className={styles.loginContainer}>
//
//                 <div className={styles.loginGrid}>
//                     <div>
//                         <div>
//                             <label className={styles.loginTitle}>Login</label>
//                         </div>
//                         <div>
//                             <input type="text" value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}
//                                                             onKeyUp={(e)=>{loginTextCheck(e.currentTarget.value ,e.currentTarget)}}
//                                                             onBlur={(e)=>{e.currentTarget.style.backgroundColor="rgb(255, 255, 255, 0.5)"}}
//                                                             maxLength={30}
//                                                             className={styles.textInputUser }></input>
//                         </div>
//                     </div>
//                     <div></div>
//                     <div style={{paddingTop:"44px"}}>
//                         <div>
//                             <a href="#" className={styles.passwordlessButton} onClick={()=>{loginOnClick(value)}}>
//                                 {'\u00A0'}{'\u00A0'}Login
//                             </a>
//                         </div>
//                         <div style={{paddingTop:"5px"}}>
//                             <a href="#" className={styles.githubButton} onClick={()=>{githubOnClick()}}>
//                                 <svg height="18" viewBox="0 0 16 16" width="40px" style={{fill:"white"}}>
//                                 <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
//                                 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
//                                 1.08.58 1.23.82.72 1.21 1.87.87
//                                 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
//                                 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
//                                 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0
//                                 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
//                                 </svg>
//                                 Sign in with GitHub
//                             </a>
//                         </div>
//                     </div>
//
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
export default Login;