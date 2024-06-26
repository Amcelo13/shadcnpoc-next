import React from 'react'

export const UserItem = () => {
    return (
        <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>

            <div className='avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700]
            flex items-center justify-center'>
                <p>CT</p>
            </div>

            <div>
                <p className='text-[16px] font-bold'>Chetan Thakur</p>
                <p className='text-[12px] text-neutral-500'>codewithchetan@gmail.com</p>
            </div>

        </div>
    )
}
