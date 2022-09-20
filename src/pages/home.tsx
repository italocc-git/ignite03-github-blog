import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Profile } from '../components/Profile'

export function Home() {
    return(
        <div className='flex flex-col items-center '>
            
            <div className='absolute top-[208px] w-full max-w-[864px] '>
                    <Profile/>
            </div>

            <div className='absolute top-[calc(50%)] w-full max-w-[864px]'>
                <div className='flex justify-between items-center font-nunito'>
                    <span className='font-bold text-lg text-base-subtitle'>Publicações</span>
                    <span className='text-base-span text-sm '>6 Publicações</span>
                </div>
                <Input placeholder='Buscar conteúdo' onKeyUp={(event) => event.code === 'Enter' && console.log('deucerto')}/>
            </div>


            <div className='flex flex-wrap justify-between absolute top-[calc(70%)] w-full max-w-[864px] '>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </div>
        </div>
        
    
    )
}