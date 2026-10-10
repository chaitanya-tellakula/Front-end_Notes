import data from "./data.json"
import MenuList from "./MenuList.jsx"

export default function App()
{
    return(
        <div>
            <MenuList data={data}/>
        </div>
        
    )
}