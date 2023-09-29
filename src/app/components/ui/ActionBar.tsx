interface IProps {
    title:string;
    children:React.ReactNode
}

const ActionBar = ({title,children}:IProps) => {
  return (
    <div>
        <h1>{title}</h1>

        <div style={{display:'flex'}}>
            {children}
        </div>
    </div>
  )
}
export default ActionBar