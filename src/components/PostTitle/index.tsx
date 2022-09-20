import { Link } from "../Link";
import calendar from '../../assets/calendar.svg'
import comment from '../../assets/comment.svg'
import github from '../../assets/git.svg'
import chevronLeft from '../../assets/chevron-left.svg'
import arrowUpRight from '../../assets/arrow-up-right-from-square.svg'
export function PostTitle() {
    return(
        <div className='px-[40px] py-8 gap-8 bg-base-post rounded-[10px] shadow-2xl '>
            <div className="flex justify-between items-center mb-5">
                <Link href='/'>
                    <img src={chevronLeft} alt='arrow-left' className='w-[12px] h-[12px] ' />
                    Voltar 
                </Link>
                <Link >
                    Ver no github
                    <img src={arrowUpRight} className='w-[12px] h-[12px] '/>
                </Link>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
                <div>
                    <h1 className='font-nunito font-bold text-2xl text-base-title'>
                        JavaScript data types and data structures
                    </h1>
                    
                </div>
               

                <div className='flex gap-4 items-center font-nunito'>
                    <div className='flex gap-2'>
                        <img src={github} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle '>cameronwll</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={calendar} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle '>Há 1 dia</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={comment} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle'>32 seguidores</span>
                    </div>

                </div>
            </div>
        </div>
    )
}