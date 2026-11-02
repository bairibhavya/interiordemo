// Vercel Node.js Function. Requires SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
// and SITE_URL on Vercel. Do not put any of these secrets in VITE_ variables.
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed'});}
  try{
    const allowed=process.env.SITE_URL;
    if(!allowed||!process.env.SUPABASE_URL||!process.env.SUPABASE_SERVICE_ROLE_KEY){return res.status(503).json({error:'Live enquiries are not configured yet'});}
    const origin=req.headers.origin;
    if(origin!==new URL(allowed).origin){return res.status(403).json({error:'Invalid origin'});}
    const type=String(req.headers['content-type']||'');
    if(!type.includes('application/json'))return res.status(415).json({error:'Expected JSON'});
    if(Number(req.headers['content-length']||0)>14000)return res.status(413).json({error:'Request too large'});
    const b=typeof req.body==='object'&&req.body!==null?req.body:{};
    const trim=(x,max)=>typeof x==='string'?x.trim().slice(0,max):'';
    if(trim(b.website,200))return res.status(200).json({ok:true});
    const row={name:trim(b.name,100),phone:trim(b.phone,18),email:trim(b.email,160),service:trim(b.service,100),city:trim(b.city,100),budget:trim(b.budget,100),message:trim(b.message,2000)};
    if(row.name.length<2||!/^[+]?[-() 0-9]{8,18}$/.test(row.phone)||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)||!row.service||row.message.length<10)return res.status(400).json({error:'Please complete the required fields'});
    const url=process.env.SUPABASE_URL.replace(/\/$/,'')+'/rest/v1/artspace_enquiries';
    const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','apikey':process.env.SUPABASE_SERVICE_ROLE_KEY,'Authorization':'Bearer '+process.env.SUPABASE_SERVICE_ROLE_KEY,'Prefer':'return=minimal'},body:JSON.stringify(row)});
    if(!response.ok){return res.status(503).json({error:'The enquiry could not be delivered. Please try later.'});}
    return res.status(200).json({ok:true});
  }catch{return res.status(500).json({error:'Something went wrong. Please try again.'});}
}
