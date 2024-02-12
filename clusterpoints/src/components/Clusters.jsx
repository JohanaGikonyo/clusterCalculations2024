import  { useState } from 'react'
import Steps from './Steps'
function Clusters() {
    const [start, setStart]=useState(false)
    const [view, setView]=useState(false)
const [agp, setAgp]=useState(0)
const [option, setOption]=useState('')
const [cluster, setCluster]=useState()
const [math, setMath]=useState(0)
const[eng, setEng]=useState(0)
const[kis, setKis]=useState(0)
const[bio, setBio]=useState(0)
const[phy, setPhy]=useState(0)
const[chem, setChem]=useState(0)
const[bst, setBst]=useState(0)
const[cre, setCRE]=useState(0)
const[geo, setGeo]=useState(0)
const[hist, setHist]=useState(0)
const[comp, setComp]=useState(0)
const[agr, setAgric]=useState(0)
const[hsc, setHsc]=useState(0)
const[msc, setMsc]=useState(0)
const[frc, setFrc]=useState(0)
const[arb, setArb]=useState(0)
const[bld, setBld]=useState(0)
const[pw, setPw]=useState(0)
const[art, setArt]=useState(0)
const[el, setEl]=useState(0)
const[mw, setMw]=useState(0)
const[ww, setWw]=useState(0)
const[hn, setHn]=useState(0)
//  const [focus, setFocus]=useState(false)
//  const [val, setVal]=useState()
const calcAgp=()=>{
    let sciencesubject=''
    bio>phy?sciencesubject=bio:sciencesubject=phy
    let humanities=[hist, geo,cre, hn]
    const largesthumanity=Math.max(...humanities)
    let technical=[ww,mw,el,art,bst,comp,pw,bld,arb,frc, msc,hsc,agr]
    const largesttechnical=Math.max(...technical)
    const total = parseInt(math) + parseInt(eng) + parseInt(kis) + parseInt(chem) + parseInt(sciencesubject) + parseInt(largesthumanity) + parseInt(largesttechnical);
    setAgp(total)  
let r=parseInt(math)+parseInt(sciencesubject)+parseInt(chem)+parseInt(largesthumanity)
const clusterpts=Math.sqrt(((r/48)*(agp/84)))*48
setCluster(clusterpts)
}





  return (
    <div className='container text-center'>
     {/* {
        focus?
        <div>
          <div className='focus'>
  <input type="radio" id="grade_A" name="grade" value="12" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label>A</label><br/>

  <input type="radio" id="grade_A_minus" name="grade" value="11" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >A-</label><br/>

  <input type="radio" id="grade_B_plus" name="grade" value="10" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label>B+</label><br/>

  <input type="radio" id="grade_B" name="grade" value="9" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >B</label><br/>

  <input type="radio" id="grade_B_minus" name="grade" value="8" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >B-</label><br/>

  <input type="radio" id="grade_C_plus" name="grade" value="7" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >C+</label><br/>

  <input type="radio" id="grade_C" name="grade" value="6" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >C</label><br/>

  <input type="radio" id="grade_C_minus" name="grade" value="5" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >C-</label><br/>

  <input type="radio" id="grade_D_plus" name="grade" value="4" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >D+</label><br/>

  <input type="radio" id="grade_D" name="grade" value="3" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >D</label><br/>

  <input type="radio" id="grade_D_minus" name="grade" value="2" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label >D-</label><br/>

  <input type="radio" id="grade_E" name="grade" value="1" onChange={(e)=>{setVal(e.target.value), setFocus(false)}}/>
  <label>E</label><br/>
</div>

        </div>
        :""
      } */}
        <h4 className='title'>Calculate your Cluster And Agp points Here</h4>
        <Steps/>
       {!start?<div className='start' onClick={()=>setStart((prev)=>!prev)}>{start?"":"Start"}</div>:""} 
       {start? <div className='row align-items-start'>
        <div className='col-md-6'>
<select onChange={(e)=>{setOption(e.target.value)}}>
    <option >Select Subject Category</option>
    <option value="core">Core Subject</option>
    <option value="sciences">Science Subjects</option>
    <option value="technicals">Technicals Subjects</option>
    <option value="humanities">Humanity Subjects</option>
</select>

        
            
      {option=="core"?  <div className="col">
          <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label" >Mathematics</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="staticEmail" placeholder="@enterpoints" onChange={(e)=>setMath(e.target.value)} />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">English</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>setEng(e.target.value)} />
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Kiswahili</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>setKis(e.target.value)}/>
    </div>
  </div>
<button className='btn btn-success' onClick={()=>setOption("sciences")}>Next</button>
  </div>
:""}
{option=="sciences"?
  <div className="col">
    <h6 className='categ'>Sciences</h6>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Biology</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setBio(e.target.value)} } />
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Chemistry</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>setChem(e.target.value)}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Physics</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setPhy(e.target.value)}} />
    </div>
  </div>
  <button className='btn btn-success' onClick={()=>setOption("technicals")}>Next</button>
  </div>
:""}
{option=="technicals"?
  <div className="col">
     <h6 className='categ'>Technicals</h6>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label" >Computer</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setComp(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Business Studies</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setBst(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label" >Home Science</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setHsc(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Agriculture</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setAgric(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Music</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setMsc(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label" >French</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setFrc(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Arabic</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setArb(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Building and Construction</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setBld(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Power Mechanics</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setPw(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Art and Design</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setArt(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Electricity</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setEl(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Metal Work</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setMw(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Wood Work</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setWw(e.target.value)}}/>
    </div>
  </div>
  <button className='btn btn-success' onClick={()=>setOption("humanities")}>Next</button>
  </div>
:""}
{option=="humanities"?
  <div className="col">
    <h6 className='categ'>Humanities</h6>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">History</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setHist(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">CRE</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setCRE(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Geography</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setGeo(e.target.value)}}/>
    </div>
  </div>

  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Hindu  Rel. Ed</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword" onChange={(e)=>{setHn(e.target.value)}}/>
    </div>
  </div>
  <button className='btn btn-primary' onClick={calcAgp}>AGP</button>
   {
    agp==0?<p>You must input all relevant fields first</p>:<div>
        <p>Your agp is: {agp}</p>
<button onClick={()=>{calcAgp(), setView((prev)=>!prev)}} className='btn btn-secondary'>Cluster</button>
        {view?<p>Your Cluster Points are {cluster}</p>:""}
        <button onClick={()=>{setOption(""), setStart(false), setCluster(0), setAgp(0)}} className='btn btn-danger'>Done</button>
        </div>
   }
  </div>

:""}
  </div>
 
  <div className='col-md-6 table'>

<table>
    <thead>
        <th>Grades</th>
        <td>A</td>
        <td>A-</td>
        <td>B+</td>
        <td>B</td>
        <td>B-</td>
        <td>C+</td>
        <td>C</td>
        <td>C-</td>
        <td>D+</td>
        <td>D</td>
        <td>D-</td>
        <td>E</td>
    </thead>
    <tbody>
        <tr>
        <th>Points</th>
            <td>12</td>
            <td>11</td>
            <td>10</td>
            <td>9</td>
            <td>8</td>
            <td>7</td>
            <td>6</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
           
        </tr>
        

    </tbody>
</table>

</div>

  </div>
  
  :""}</div>
  )
}

export default Clusters