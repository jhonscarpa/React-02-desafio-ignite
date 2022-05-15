import { IGenreResponseProps } from '../App'
import { Button } from './Button'

interface IPropsSideBar {
  genres: IGenreResponseProps[]
  setSelectedGenreId: Function
  selectedGenreId: number
}

export function SideBar({
  genres,
  setSelectedGenreId,
  selectedGenreId,
}: IPropsSideBar) {


  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
