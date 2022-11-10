import ReactMarkdown from 'react-markdown'
import {useNavigate} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
interface Props {
    title: string;
    body: string;
    routeNumber: number;
    createdAt: string;
}

export function Card({title , body, routeNumber, createdAt} : Props) {
    const navigate = useNavigate()
    function navigateToPost() {
        if(routeNumber)
        navigate(`post/${routeNumber}`)
    }
    const postDate = formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        includeSeconds:false
    })
    return(
        <button onClick={navigateToPost}
        className="w-[416px] h-[260px] border-2 px-8 py-8  border-base-label border-transparent bg-base-post rounded-[10px] hover:border-base-border overflow-hidden mb-8 text-justify">
            <div className="flex flex-col gap-4">
                <div className="flex items-base justify-between gap-x-5 font-nunito ">
                    <span className=" font-bold text-xl text-base-title">
                        {title}
                    </span>
                    <span className="text-sm text-base-span ">
                        {postDate}
                    </span>
                </div>

                <div >
                    <span className="text-base-text text-base font-normal font-nunito">
                        <ReactMarkdown>
                            {body}
                        </ReactMarkdown>
                        
                    </span>
                </div>

            </div>
        </button>
    )
}