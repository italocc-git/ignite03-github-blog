import logo from '../../assets/logo.svg'
export function Header() {
    return(
        <div className="h-[296px] w-full flex items-start justify-center bg-base-profile ">
            <img src={logo} alt="" className='mt-10' />
        </div>
    )
}