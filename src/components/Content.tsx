import { ReactNode } from 'react'
import {  MovieProps } from '../App'
import { MovieCard } from './MovieCard'

interface IPropsContent {
  movies: MovieProps[]
  children: ReactNode
}

export function Content({ movies, children }: IPropsContent) {


  return (
    <div className="container">
      {children}
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
