import Home from './components/Home'
import Historic from './components/Historic'
import Search from './components/Search'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/historic',
        name: 'historic',
        component: Historic
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
]
export default routes