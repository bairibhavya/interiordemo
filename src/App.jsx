import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Header,Footer,ScrollTop} from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Process from './pages/Process';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
export default function App(){return <><ScrollTop/><Header/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/process" element={<Process/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
