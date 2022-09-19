type Props = React.InputHTMLAttributes<HTMLInputElement> 

export function Input({...props}: Props){
    return(
        <div className="px-4 py-3 bg-base-input rounded-[6px] flex items-center border-1 border-product-blue border-hidden active:border-solid">
            <input {...props}  className="text-base-label font-nunito w-full " placeholder="Buscar conteúdo" />
            
        </div>
    )
}