import React from 'react'
import "./Card.css"

export default function Landing() {
  return (
    <div className='flex justify-around main custom-background'>
        <div className='w-2/4 ml-5'>
            <p className='custom-text justify-center'>
                <span className='text-3xl  text-primary'>BlockChain Based KYC solution for the banking KYC System.</span>

            </p>
            <button className='border border-primary p-3  my-5 bg-primary text-white hover:-translate-y-2 rounded text-1xl transition-all'>Connect with us</button>
        </div>
        <div className='w-2/4  p-3 height '>
            <div className='card'>
                    <div className="card_front card_part flex flex-col justify-center ">
                        <p className="card_numer  text-center text-2xl ">**** **** **** 6258</p>
                        <div className='flex justify-between mt-8 p-3'>
                            <div className="card__space-75">
                                <span className="card__label p-4 ">KYC HOLDER </span>
                                <p className='px-4 .uppercase'>XYZ</p>
                            </div>
                            <div className="card__space-25">
                                <span className="card__label">Expires</span>
                                <p className="card__info">xx/xx</p>
                            </div>
                        </div>
                        
                    </div>
            </div>
            
        </div>
    </div>
  )
}
