import { PostTitle } from "../components/PostTitle";
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import { api } from "../services/api";
import ReactMarkdown from 'react-markdown'
interface IssueProps {
    title: string;
    body: string;
    html_url: string;
    comments: number;
    created_at: string;
    user?: {
        login: string;
    },
}
export function Post() {

    const {id} = useParams()
    const [issue, setIssue] = useState<IssueProps>({} as IssueProps)
    
    useEffect(() => {

        async function loadIssueById() {
            if(id){
                const response = await api.get(`repos/italocc-git/ignite03-github-blog/issues/${id}`)
                setIssue(response.data)
            }
        }

        loadIssueById()

    },[id])
    return(
        <div className='flex flex-col items-center '>
            
            <div className='absolute top-[208px] w-full max-w-[864px] '>
                    <PostTitle title={issue.title} url={issue.html_url} user={issue.user?.login}
                    comments={issue.comments} createdAt={issue.created_at}/>

                    <div className='w-full max-w-[864px] px-[40px] py-8 font-nunito text-justify'>
                       
                        <ReactMarkdown skipHtml>
                            {issue.body}
                        </ReactMarkdown>
                            
                     
                    </div>
            </div>

           

           
        </div>
        
    
    )
}