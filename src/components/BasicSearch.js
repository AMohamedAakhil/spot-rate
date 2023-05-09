import React from 'react';
import { useState } from 'react';
const ipcRenderer = window.ipcRenderer;

const BasicSearch = () => {

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search);
    setSearch("");

    ipcRenderer.logMessage.message(search);

  }
  return (
    
    <div className="flex justify-center h-90v" >
    <div className="w-full lg:w-1/2  sm:w-11/12 md:w-32 mx-auto m-auto ">
      <h2 className="text-4xl font-bold dark:text-white mb-5">Spot Rate Retriever v1.0.0</h2>
      <div className="form-control w-full">
        <form onSubmit={handleSubmit}>
        <label className="label">
        <span className="label-text">Enter Command</span>
        </label>
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="[LINE] / [POD] / [POL]" className="input input-bordered w-full mb-4" />
        <label className="label">
        </label>
        <button type="submit" className="btn w-full">Get Rates</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BasicSearch;