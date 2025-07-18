import React from 'react'
import{RiDeleteBin6Line } from 'react-icons/ri'


function CartContents() {
  
    const cartProducts = [
        {
            productId: 1,
            name: "Phone skin",
            model: "Iphone 14",
            price: 109,
            quantity: 2,
            image:"https://picsum.photos/200/?random=100",
        },
        {
            productId: 2,
            name: "Laptop skin",
            model: "Asus ROG Zephyrus G15",
            price: 149,
            quantity: 1,
            image:"https://picsum.photos/200/?random=51",
        },
        {
            productId: 3,
            name: "Phone Cover",
            model: "Iphone 14",
            price: 189,
            quantity: 2,
            image:"https://picsum.photos/200/?random=8789",
        },
        {
            productId: 4,
            name: "Phone skin",
            model: "Iphone 15",
            price: 209,
            quantity: 2,
            image:"https://picsum.photos/200/?random=4894",
        },
    ];
    
    return (
    <div>{cartProducts.map((product,index) => (
        <div key={index} className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
                <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4' />
                <div>
                    <h3>{product.name}</h3>
                    <p className='text-xs text-gray-500'>Model: {product.model}</p>
                <div className="flex items-center mt-2">
                    <button className=' border rounded px-2 py-1 font-medium hover:bg-vibrantOrange hover:text-white'>
                        -
                    </button>
                    <span className='mx-4'>{product.quantity}</span>
                    <button className=' border rounded px-2 py-1 text-base font-medium hover:bg-vibrantOrange  hover:text-white'>
                        +
                    </button>
                </div>

                </div>
            </div>
            <div>
                <p>&#8377; {product.price.toLocaleString('en-IN')}</p>
                <button>
                    <RiDeleteBin6Line className='h-6 w-6 mt-7 ml-4 text-red-600'/>
                </button>
            </div>
        </div>
    )
)
    }
    </div>
  )
}

export default CartContents