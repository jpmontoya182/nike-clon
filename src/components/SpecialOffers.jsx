import { offer } from "../assets/images"
import {arrowRight} from '../assets/icons'
import Button from "./Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={offer} 
        alt="offer image"
        width={773}
        height={687}
        className="object-contain w-full" />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that set us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique desires, suparssing the loftiest expectations. Your journey with us is nothing short or exceptional.
        </p>
        <div className='flex flex-wrap gap-4 mt-11'>
          <Button 
            label='Shop Now' 
            iconURL={arrowRight} 
          />
          <Button 
            label='Learn More' 
            backgroundColor="bg-white"
            borderCorlor='border-slate-gray'
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
