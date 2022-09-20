import avatar from '../../assets/avatar.png'
import build from '../../assets/build.svg'
import users from '../../assets/users.svg'
import github from '../../assets/git.svg'
import { Link } from '../Link'
import arrowUpRight from '../../assets/arrow-up-right-from-square.svg'
export function Profile() {
    return(
        <div className='px-[40px] py-8 flex gap-8 bg-base-post rounded-[10px] shadow-2xl '>
            <img src={avatar} alt="github-profile-avatar" className='w-[148px] h-[148px]' />
            <div className='flex flex-col gap-2 flex-1'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-nunito font-bold text-2xl text-base-title'>
                        Cameron Williamson
                    </h1>
                    <Link >
                        GITHUB
                        <img src={arrowUpRight} className='w-[12px] h-[12px] '/>
                    </Link>
                </div>
                <span className='font-nunito text-base-text flex-1'>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </span>

                <div className='flex gap-4 items-center font-nunito'>
                    <div className='flex gap-2'>
                        <img src={github} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle '>cameronwll</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={build} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle '>Rocketseat</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={users} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle'>32 seguidores</span>
                    </div>

                </div>
            </div>
        </div>
    )
}