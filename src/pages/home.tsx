import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Profile } from '../components/Profile'
import { api } from '../services/api'
import debounce from 'lodash.debounce';
interface IssuesProps {
    id: number;
    title: string;
    body: string;
    url: string;
    number: number;
    created_at: string;
}

export function Home() {
    const [query, setQuery] = useState('')
    const [issues, setIssues] = useState<IssuesProps[]>([])

    const debouncedSave = React.useCallback(debounce (query => setQuery(query), 500)
    ,[])
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
       const nextValue = event.target.value
       
        debouncedSave(nextValue)
    }

    useEffect(() => {
        api.get(`search/issues?q=${query}repo:italocc-git/ignite03-github-blog`).then((response) => setIssues(response.data.items))
    },[query])
    return(
        <div className='flex flex-col items-center '>
            
                <div className='absolute top-[208px] w-full max-w-[864px] '>
                        <Profile/>
                    <div className='mt-4 mb-4'>
                        <div className='flex justify-between items-center font-nunito'>
                            <span className='font-bold text-lg text-base-subtitle'>Publicações</span>
                            <span className='text-base-span text-sm '>{issues.length} Publicações</span>
                        </div>
                    <Input placeholder='Buscar conteúdo' onChange={handleChange} />
                </div>


                <div className='flex flex-wrap justify-between  '>
                    {issues.map(issue => (
                        <Card key={issue.id} title={issue.title} body={issue.body} routeNumber={issue.number} createdAt={issue.created_at}/>
                    ))}

                </div>
            </div>

            
        </div>
        
    
    )
}