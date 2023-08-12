import useLocalStorage from "../hooks/useLocalStorage";

const Card = ({poke}) => {
    
    const [favorites, setFavorites] = useLocalStorage('pokeFavorites', []);
    
    const isFavorite = favorites.some((favorite) => favorite.id === poke.id);
    
    const handleToggleFavorite = () => {
        if (isFavorite) {
        const updatedFavorites = favorites.filter((favorite) => favorite.id !== poke.id);
        setFavorites(updatedFavorites);
        } else {
        setFavorites([...favorites, { id: poke.id, name: poke.name, poke }]);
        }
        window.location.reload();
    };


  return (
    <div className="w-[280px] h-[500px] my-10 cursor-pointer card-cnt" key={poke.id}>

        <div className="w-full h-full border-1 border-black bg-gradient-to-b from-red-600 from-45% via-black via-50% to-white to-55% relative shadow-md shadow-black rounded-xl card-parent">

            <div
            className="w-full h-full rounded-xl card card-front"
            style={{backgroundImage: `url('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${poke.id < 10 ? "00" + poke.id : poke.id < 100 ? "0" + poke.id : poke.id}.png')`, backgroundRepeat: "no-repeat"}}
            ></div>

            <div className="w-full h-full rounded-xl text-xl text-center bg-slate-800 card card-back">

            <div className={`flex justify-center w-full h-[200px] rounded-xl ${poke.types[0].type.name}`}>
                <img src={poke.sprites.front_default} alt="" />
                <p className="absolute font-bold text-2xl left-4">#{poke.id}</p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-8 h-8 filled ${isFavorite ? 'fill-red-600' : ''}`} onClick={handleToggleFavorite}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>


            <h3 className="m-5 text-white capitalize text-3xl">{poke.name}</h3>

            <div className="flex justify-evenly gap-2 items-center uppercase w-[90%] mx-auto">
                <div className={`flex flex-col items-center p-2 w-[100px] rounded-full ${poke.types[0].type.name}`}>
                <img className="w-5" src={"/icons/"+poke.types[0].type.name+".svg"} alt="" />
                <p className="text-sm font-bold">{poke.types[0].type.name}</p>
                </div>
                {poke.types[1]? (
                <div className={`flex flex-col items-center p-2 w-[100px] rounded-full ${poke.types[1].type.name}`}>
                    <img className="w-5" src={"/icons/"+poke.types[1].type.name +".svg"} alt="" />
                    <p className="text-sm font-bold">{poke.types[1].type.name}</p>
                </div>
                )
                : ''}
            </div>
            
            <div className="text-white flex w-[90%] mx-auto my-4">
                <div className="w-full flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFF" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
                <p className="font-light text-sm">{poke.weight / 10} KG</p>
                </div>
                <div className="text-white w-full flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-line-height" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 8l3 -3l3 3" />
                    <path d="M3 16l3 3l3 -3" />
                    <path d="M6 5l0 14" />
                    <path d="M13 6l7 0" />
                    <path d="M13 12l7 0" />
                    <path d="M13 18l7 0" />
                </svg>
                <p className="font-light text-sm">{poke.height / 10} M</p>
                </div>
            </div>

            <div>
                <h3 className="mb-2 text-white text-xl text-left w-[80%] mx-auto">Abilities</h3>
                <div className="text-white flex justify-evenly w-[80%] mx-auto">
                <div>
                    <p className="text-center text-sm capitalize bg-lime-600 p-1 rounded-md">{poke.abilities[0].ability.name}</p>
                </div>
                <div>
                {poke.abilities[1]? (
                    <p className="text-center text-sm capitalize bg-sky-600 p-1 rounded-md">{poke.abilities[1].ability.name}</p>
                    )
                : ''}
                </div>
                </div>
            </div>

            </div>

        </div>

    </div>
  )
}

export default Card