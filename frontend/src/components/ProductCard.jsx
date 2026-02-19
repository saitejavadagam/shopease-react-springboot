import React from 'react'

const ProductCard = ({ product, addItem, removeItem, quantity = 0 }) => {
    return (
        <div
            className='flex gap-6 p-6 bg-white border rounded-md hover:shadow-sm transition'
        >

            <div className='w-64 shrink-0'>
                <img src={product.image} alt={product.title}
                    className='w-full h-60 object-contain'
                />
            </div>

            <div className='flex flex-col flex-1'>
                {product.sponsored && <p className='text-sm text-gray-500 mb-1'>sponsored</p>}
                <h2 className='text-lg font-medium hover:text-blue-700 cursor-pointer leading-snug'>{product.title}</h2>

                <div className='flex items-center gap-2 mt-1'>
                    <span className='text-sm text-orange-500'>
                        ⭐ {product.rating}
                    </span>
                    <span>
                        ({product.reviews ?? 10})
                    </span>
                </div>

                <p className='text-sm text-gray-600 mt-1'>
                    {product.bought ?? 0}+ bought in past month
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                    <div className="flex items-start font-semibold leading-none">
                        <span className="text-sm relative top-0.5">₹</span>
                        <span className="text-3xl">{product.price}</span>
                    </div>
                </div>

                <div className="mt-3">
                    {quantity === 0 ? (
                        <button
                            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full text-sm font-medium"
                            onClick={() => addItem(product.id)}
                        >
                            Add to cart
                        </button>
                    ) : (
                        <div className='flex items-center gap-3 border-2 border-yellow-300 rounded-full w-fit px-3 py-1'>
                            <button
                                className='text-lg font-bold px-2'
                                onClick={() => removeItem(product.id)}
                            >
                                -
                            </button>

                            <span className='min-w-5 font-bold text-center'>
                                {quantity}
                            </span>

                            <button
                                className='text-lg font-bold px-2'
                                onClick={() => addItem(product.id)}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ProductCard