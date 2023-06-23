import './style.scss'
// import { useNavigate,} from 'react-router-dom';


const HomePage = () => {

    const renderProduct = (product) => (
        <div className='HomePage_container' key={product.sku }>
            <div className='HomePage_container_img'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='HomePage_container_des'>
                <h2>name</h2>
                <p>description</p>
                <p> <span>price</span> </p>
                <button >Add To Card</button>
                <button>Buy</button>
             </div>
    
         </div>
    );
    
    return (
        <div className='HomePage'>
            {renderProduct({ sku: '123', image: 'https://picsum.photos/200/300', name: 'testing'})}
        </div>
    )
}

export default HomePage      