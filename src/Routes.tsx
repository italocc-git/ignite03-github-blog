import {Routes as RoutesList , Route} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { Post } from './pages/Post'

export function Routes() {
    return(
        <RoutesList>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/post/:id' element={<Post/>} />
            </Route>
        </RoutesList>
    )
}