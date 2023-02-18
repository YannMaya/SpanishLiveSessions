import {BsFillCartCheckFill} from 'react-icons/bs'

export const CartWidget = () => {
    return (
        <div className='container-cart'>
                        <BsFillCartCheckFill size={30} color={"white"} className="me-4" style={{marginRight: "35px", marginLeft:"45px", opacity: 0.5}}/>
                    </div>
    )
}