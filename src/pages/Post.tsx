import { PostTitle } from "../components/PostTitle";

export function Post() {
    return(
        <div className='flex flex-col items-center '>
            
            <div className='absolute top-[208px] w-full max-w-[864px] '>
                    <PostTitle/>

                    <div className='w-full max-w-[864px] px-[40px] py-8 font-nunito'>
                        <span className="text-justify text-base-text leading-[160%]">
                            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                            Dynamic typing
                            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                    
                        </span>
                    </div>
            </div>

           

           
        </div>
        
    
    )
}