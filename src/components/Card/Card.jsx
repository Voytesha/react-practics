import data from '../../data.json'
import {Head} from '../Head/Head'
import css from './Card.module.css'


export const Card = ({isOnline}) => { 
    return data.map((photo) => {
      return (
        <div key={photo.id} id='test' 
        className={isOnline
        ? `${css.main} ${css.red}` 
        :`${css.main} ${css.blue}`}
        >
          <img src={photo.url} 
          
          alt={photo.title} className={css.photo}/>
          <div>
            <h5 >Card title: {photo.title}</h5>
            
            <Head id = 'id-123' clas = 'card-title'>
              jgv
              <div>hhfkhrk</div>
              <p>vvh</p>
              </Head>
            <a href='http'>
              Go somewhere
            </a>
          </div>
        </div>
      )
    })}

    // === bootstrap
    // export const Card = () => { 
    //   return data.map((photo) => {
    //     return (
    //       <div 
    //       key={photo.id}
    //       className='card mx-auto my-2' 
    //       style={{ width: "18rem" }}>
    //         <img src={photo.url} className='card-img-top' alt={photo.title} />
    //         <div className='card-body'>
    //           <h5 className='card-title'>Card title: {photo.title}</h5>
    //           {/*Head({id: 'id-123', clas: 'card-title'})*/} 
    //           <Head id = 'id-123' clas = 'card-title'>
    //             jgv
    //             <div>hhfkhrk</div>
    //             <p>vvh</p>
    //             </Head>
    //           <a href='http' className='btn btn-primary'>
    //             Go somewhere
    //           </a>
    //         </div>
    //       </div>
    //     )
    //   })}