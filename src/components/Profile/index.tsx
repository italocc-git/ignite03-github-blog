import build from '../../assets/build.svg'
import users from '../../assets/users.svg'
import github from '../../assets/git.svg'
import chrome from '../../assets/chrome.svg'
import { Link } from '../Link'
import arrowUpRight from '../../assets/arrow-up-right-from-square.svg'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

interface GithubProfileProps {
    name: string;
    bio: string;
    login: string;
    avatar_url: string;
    html_url : string;
    company: string;
    blog: string;
    followers: number;
    

}

export function Profile() {

    const [githubProfile, setGithubProfile] = useState<GithubProfileProps>({} as GithubProfileProps)
    
    async function loadProfile() {
        const {data} = await api.get('/users/italocc-git')

        setGithubProfile(data)
    }
    useEffect(() => {
        loadProfile()
    },[])

    const {avatar_url , name, html_url, bio, login, company, followers, blog } = githubProfile
    return(
        <div className='px-[40px] py-8 flex gap-8 bg-base-post rounded-[10px] shadow-2xl '>
            <img src={avatar_url} alt="github-profile-avatar" className='w-[148px] h-[148px] rounded-lg' />
            <div className='flex flex-col gap-2 flex-1'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-nunito font-bold text-2xl text-base-title'>
                        {name}
                    </h1>
                    <div className='flex gap-2'>
                    <Link href={html_url}>
                        GITHUB
                        <img src={arrowUpRight} className='w-[12px] h-[12px] '/>
                    </Link>
                    <Link href={blog}>
                        WebSite
                        <img src={chrome} className='w-[12px] h-[12px] '/>
                    </Link>
                    </div>
                </div>
                <span className='font-nunito text-base-text flex-1'>
                {bio}
                </span>

                <div className='flex gap-4 items-center font-nunito'>
                    <div className='flex gap-2'>
                        <img src={github} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle '>{login}</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={build} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle '>{company}</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={users} className='w-[18px] h-[18px] ' />
                        <span className='text-base-subtitle'>{followers} seguidor(es)</span>
                    </div>

                </div>
            </div>
        </div>
    )
}