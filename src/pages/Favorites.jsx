import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";

const Favorites = () => {
  
  const [favorites, setFavorites] = useLocalStorage('pokeFavorites', []);

  return (
    <>
      {favorites.length != 0
        ?
          <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 place-items-center">
            {favorites.map(poke => (
              <Card
                poke={poke.poke}
                key={poke.id}
              />
            ))}
          </main>
        :
        <div className="w-full mx-auto flex flex-col items-center justify-center">
          <p className="text-3xl text-center text-white font-bold">You don't have favorites</p>
          <img className="w-1/2 md:w-1/4" src="/favorites.png" alt="favorites image" />
        </div>
      }
    </>
  )
}

export default Favorites