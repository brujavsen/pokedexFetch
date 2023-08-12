import useFetch from '../hooks/useFetch';
import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import { useState } from "react";
import '../styles/styles.css'
import Card from "../components/Card";

const Home = () => {
    // const optionsType = [
    //     {value: 'normal'},
    //     {value: 'fire'},
    //     {value: 'water'},
    //     {value: 'electric'},
    //     {value: 'grass'},
    //     {value: 'ice'},
    //     {value: 'fighting'},
    //     {value: 'poison'},
    //     {value: 'ground'},
    //     {value: 'flying'},
    //     {value: 'psychic'},
    //     {value: 'bug'},
    //     {value: 'rock'},
    //     {value: 'ghost'},
    //     {value: 'dragon'},
    //     {value: 'dark'},
    //     {value: 'fairy'}
    // ];
  
    const optionsLenPoke = [
      {value: 30},
      {value: 60},
      {value: 90},
      {value: 120},
      {value: 150},
      {value: 200},
    ];
  
    const [lenPoke, setLenPoke] = useState(30);
    // const [selected, setSelected] = useState('');
    const [pokeName, setPokeName] = useState('');
    const [toggleFilter, setToggleFilter] = useState('Close');
  
    const filterPokeLen = (e) => {
      setLenPoke(parseInt(e.target.value));
    }
    
    const filterPokeName = (e) => {
      setPokeName(e.target.value);
    }

    // const filterPokeType = (e) => {
    //   const selectedOption = e.target.value;
  
    //   let resultFilter = data.filter(types => types.types[0].type.name === selectedOption);
    //   setSelected(resultFilter);
  
    //   document.querySelector('.inputText').setAttribute('disabled', '');
    // }
  
    const handleToggleFilter = () => {
      const filterCnt = document.querySelector('#filter');
      if(!filterCnt.classList.contains('hidden')) {
        filterCnt.classList.add('hidden');
        setToggleFilter('Open');
      }else {
        filterCnt.classList.remove('hidden');
        setToggleFilter('Close');
      }
    }
  
    const url = "https://pokeapi.co/api/v2/pokemon";
    const { data, loading } = useFetch(url, lenPoke);
  
    const filteredData = data.filter((poke) =>
      poke.name.toLowerCase().includes(pokeName.toLowerCase())
    );
  
    if (loading) {
      return (
        <PropagateLoader
          className="text-center my-10"
          color="hsla(319, 67%, 53%, 1)"
        />
      );
    }
  return (
    <>
        <section className="container mx-auto flex flex-col justify-center items-center my-10 w-fit bg-slate-300 pb-2 rounded-sm">

            <button className="w-full text-xl p-1 font-bold cursor-pointer uppercase text-slate-300 bg-indigo-900 rounded-sm relative" onClick={handleToggleFilter}>{toggleFilter}</button>

            <div id="filter" className="flex flex-col justify-center items-center transition-all">

              {/* Filter by type poke
              <label htmlFor="filter" className="text-xl font-bold my-3 text-slate-700 self-start">Filter by type:</label>

              <div className="flex items-center">
                  <select defaultValue={selected} onChange={filterPokeType} className="bg-indigo-900 text-md rounded-md outline-none text-white cursor-pointer p-1 capitalize">
                      {optionsType.map(option => (
                      <option key={option.value} value={option.value}>
                          {option.text || option.value}
                      </option>
                      ))}
                  </select>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#4338ca" onClick={()=> {setSelected(''), document.querySelector('.inputText').removeAttribute('disabled', '');}} className="w-7 h-7 mx-2 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                  </svg>

              </div> */}


              {/* Filter by length poke */}
              <label className="text-xl font-bold my-3 px-2 text-slate-700 self-start">How many do you want to see?:</label>

              <div className="flex items-center">
                  <select defaultValue={lenPoke} onChange={filterPokeLen} className="bg-indigo-900 text-md rounded-md outline-none text-white cursor-pointer p-1">
                      {optionsLenPoke.map(option => (
                      <option key={option.value} value={option.value}>
                          {option.value}
                      </option>
                      ))}
                  </select>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#4338ca" onClick={()=> {setLenPoke(optionsLenPoke[0].value), setSelected('')}} className="w-7 h-7 mx-2 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                  </svg>
              </div>

              {/* Filter by name poke */}
              <label htmlFor="filterName" className="text-xl font-bold my-3 px-2 text-slate-700 self-start">Filter by name:</label>

              <input id='filterName' type="text" placeholder="Type poke name" className="inputText bg-indigo-900 px-2 py-1 rounded-md text-white outline-none" onInput={filterPokeName} value={pokeName}/>
            </div>

        </section>
        <main className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 place-items-center">
            <>
              {
                <>
                  {!pokeName 
                    ? data.map(poke => (
                      <Card
                        poke={poke}
                        key={poke.id}
                      />
                    ))
                    :
                    filteredData.map(poke => (
                      <Card
                        poke={poke}
                        key={poke.id}
                      />
                    ))
                  }
                </>
              }
            </>
            </div>
        </main>
    </>
  )
}

export default Home