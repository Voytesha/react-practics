
export const Head = ({clas, id, data, children}) =>{
  
    return (
      <>
      {children}
      <p className={clas} id={id}>
      I am Head
    </p>
      </>
    )
  }