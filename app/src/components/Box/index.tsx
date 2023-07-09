
interface IBox {
  className?: string
  children: any
}

export const Box = ({ children, className }: IBox) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}