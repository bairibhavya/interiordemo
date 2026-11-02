import React from 'react';
import {ArrowRight,House,Building2,CookingPot,PanelsTopLeft,Wrench,KeyRound} from 'lucide-react';
import {Link} from 'react-router-dom';
import {services} from '../data/site';
import {ServiceCard} from '../components/Cards';
import {SectionEyebrow,ButtonLink} from '../components/Layout';
export default function Services(){return <><section className="inner-intro services-intro"><div className="container"><SectionEyebrow>SERVICES</SectionEyebrow><h1>Our Interior Design Services</h1><p>Complete interior solutions under one roof — from concept and design to execution and final handover.</p></div></section><section className="container services-list"><div className="services-six">{services.map(s=><ServiceCard service={s} key={s.id}/>)}</div></section><section className="container services-bottom"><div><SectionEyebrow>OUR PROMISE</SectionEyebrow><h2>Every detail, considered.</h2><p>Great interiors balance beauty with purpose. We begin with your requirements, define a realistic scope, then collaborate through design and execution.</p><ButtonLink to="/process">Explore Our Process</ButtonLink></div><img src="/images/process-dining.jpg" alt="Finished dining space"/></section></>}
