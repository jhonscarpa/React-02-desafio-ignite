interface IPropsHeader {
  title:string
}


export function Header({title}:IPropsHeader) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  )
}
