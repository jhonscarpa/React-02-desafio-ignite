import { useEffect, useState } from 'react'

import { api } from './services/api'

//styles
import './styles/global.scss'
import './styles/sidebar.scss'
import './styles/content.scss'

//componentes
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import { Header } from './components/Header'

export interface IGenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const [genres, setGenres] = useState<IGenreResponseProps[]>([])

  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>(
    {} as IGenreResponseProps,
  )

  useEffect(() => {
    api.get<IGenreResponseProps[]>('genres').then(response => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then(response => {
        setMovies(response.data)
      })

    api.get<IGenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data)
    })
  }, [selectedGenreId])

  // function handleClickButton(id: number) {
  //   setSelectedGenreId(id);
  // }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        setSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />
      <Content movies={movies}>
        <Header title={selectedGenre.title} />
      </Content>
    </div>
  )
}
