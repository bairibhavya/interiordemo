import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ArrowUpRight, Armchair, Building2, CookingPot, House, KeyRound, Paintbrush, Wrench, PanelsTopLeft} from 'lucide-react';
import {projects,services} from '../data/site';
const MotionLink=motion(Link);
const svcIcon={home:House,building:Building2,lamp:CookingPot,cabinet:PanelsTopLeft,tools:Wrench,key:KeyRound};
export function ServiceCard({service,compact=false}){const Icon=svcIcon[service.icon]||Paintbrush; return <MotionLink initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:0.4}} className={'service-card '+(compact?'service-card-compact':'')} to={'/services/'+service.id}><span className="service-icon"><Icon size={29} strokeWidth={1.45}/></span><strong>{service.title}</strong><p>{service.short}</p><span className="service-arrow"><ArrowUpRight size={16}/></span></MotionLink>}
export function ProjectCard({project,variant=''}){return <MotionLink initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:0.42}} to={'/projects/'+project.id} className={'project-card '+variant}><div className="project-image"><img src={project.cover} alt={project.title} loading="lazy"/><span className="project-category">{project.category}</span></div><div className="project-card-text"><div><h3>{project.title}</h3><p>{project.location} · {project.type}</p></div><span className="circle-arrow"><ArrowUpRight size={17}/></span></div></MotionLink>}
export function ExpertiseCard({title,desc,img,to='/services'}){return <Link to={to} className="expertise-card"><img src={img} alt={title} loading="lazy"/><div><h3>{title}</h3><span>{desc}</span><ArrowUpRight size={15}/></div></Link>}
