type Props = React.InputHTMLAttributes<HTMLInputElement> 

export function Input({...props}: Props){
    return(
        <div className="mt-2">
            <input {...props}  className="px-4 py-3 bg-base-input rounded-[6px] flex items-center  text-base-label placeholder:text-base-label font-nunito w-full bg-transparent border-[1px] border-solid border-base-border focus:outline-none  focus:ring-1  focus:border-product-blue " placeholder="Buscar conteúdo" />
            
        </div>
    )
}