"use client"
import React, { useRef, useState } from 'react'

const page = () => {
  const task=useRef(null);
  const dead=useRef(null);
  const[allTask,setallTask]=useState([]);
  const handesubmit=(e)=>{
    e.preventDefault();
  }
  const handleAdd=()=>{
    if(task.current.value!=''&& dead.current.value!=''){
      const t=task.current.value;
    const d=dead.current.value;
    const temp={task:t,deadline:d};
    const prevtask=[temp,...allTask];
    setallTask(prevtask)
    console.log(prevtask);
    task.current.value='';
    dead.current.value='';
    }
    else{
    alert("enter task and deadline");

    }
    
  }
  const handleDelete=(i)=>{
    const cp=[...allTask];
    cp.splice(i,1);
    setallTask(cp);

  }
  const tasks=allTask.map((data,i)=>{
    
      return(
        <div className='flex justify-between' key={i}>
          <h5>{data.task}</h5>
          <h5>{data.deadline}</h5>
          <button className='bg-cyan-200 rounded-md' onClick={()=>handleDelete(i)}>Done</button>
        </div>
      )
  })
  return (
    <div>
      <>
      <h1 className='text-4xl bg-fuchsia-200 p-4  text-center'>
        2nd Todo
      </h1>
      <div>
        <form className='items-center' onSubmit={handesubmit}>
          <input className='ml-7 md:ml-10 border border-red-500 sm:p-1 md:p-2 m-2 w-1/3 ' ref={task} type='text' placeholder='Enter task'/>
          <input className='border border-red-500 sm:p-1 md:p-2 m-2 w-1/3 ' type='text' ref={dead} placeholder='Enter Deadline'/>
          <button type='submit' className='bg-blue-400 p-1 rounded-md m-2  md:p-2 md:rounded-lg' onClick={handleAdd}>Add</button>
        </form>
      </div>
      <hr></hr>
      <div className='bg-slate-400 w-4/5 ml-auto mr-auto '>
        {allTask.length>0?<ul>{tasks}</ul>:<h5>no task here</h5>}
        
        
      </div>
      </>
    </div>
  )
}

export default page